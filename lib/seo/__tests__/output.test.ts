/**
 * SEO 출력 자동 테스트 — 엔진이 실제로 뱉는 결과물을 검사한다.
 * 형님 요청 7종 중 6종: Metadata / JSON-LD / Sitemap / Canonical / Breadcrumb / Robots.
 * (7번째 Broken Link 는 validation.test.ts 에서 검사)
 */
import { describe, it, expect } from 'vitest'
import { serviceList } from '@/registry'
import { buildMetadata } from '@/lib/seo/core/engines/metadata'
import { buildJsonLd, breadcrumbLd } from '@/lib/seo/core/engines/jsonld'
import { buildSitemap } from '@/lib/seo/core/engines/sitemap'

// 검색 노출 페이지(noindex 아님)만 모은다
function indexedFeatures(svc = serviceList[0]) {
  return Object.entries(svc.features).filter(([, f]) => !f.noindex)
}

describe('Metadata Test — 모든 검색 페이지에 제목·설명·canonical이 있다', () => {
  for (const svc of serviceList) {
    for (const [key, f] of Object.entries(svc.features)) {
      it(`${svc.key}/${key}`, () => {
        const meta = buildMetadata(f, svc.brandName, { canonical: f.slug })
        expect(meta.title, '제목 없음').toBeTruthy()
        if (!f.noindex) {
          expect(meta.description, '설명 없음').toBeTruthy()
        }
        expect(meta.alternates?.canonical, 'canonical 없음').toBeTruthy()
      })
    }
  }
})

describe('JSON-LD Test — 구조화 데이터가 schema.org 형식을 지킨다', () => {
  const svc = serviceList[0]
  it('모든 LD 객체에 @context·@type이 있다', () => {
    for (const [key, f] of Object.entries(svc.features)) {
      const list = buildJsonLd(f, svc.siteBase, svc.brandName, {
        variant: f.key === 'home' ? 'full' : 'tool',
      })
      for (const ld of list) {
        expect(ld['@context'], `${key}: @context 없음`).toBe('https://schema.org')
        expect(ld['@type'], `${key}: @type 없음`).toBeTruthy()
      }
    }
  })

  it('home에는 Organization·WebSite·SoftwareApplication이 포함된다', () => {
    const home = svc.features.home
    const types = buildJsonLd(home, svc.siteBase, svc.brandName, { variant: 'full' }).map((x) => x['@type'])
    expect(types).toContain('Organization')
    expect(types).toContain('WebSite')
    expect(types).toContain('SoftwareApplication')
  })

  it('FAQ가 있는 페이지의 FAQPage는 Question/Answer 구조를 가진다', () => {
    const home = svc.features.home
    const faqLd = buildJsonLd(home, svc.siteBase, svc.brandName, { variant: 'full' }).find(
      (x) => x['@type'] === 'FAQPage',
    ) as { mainEntity?: Array<Record<string, unknown>> } | undefined
    expect(faqLd?.mainEntity?.length).toBeGreaterThan(0)
    for (const qa of faqLd!.mainEntity!) {
      expect(qa['@type']).toBe('Question')
      expect(qa.name).toBeTruthy()
      const ans = qa.acceptedAnswer as Record<string, unknown>
      expect(ans?.text).toBeTruthy()
    }
  })
})

describe('Sitemap Test — sitemap이 검색 페이지를 빠짐없이, noindex는 빼고 담는다', () => {
  const svc = serviceList[0]
  const entries = buildSitemap(svc)

  it('모든 URL이 http(s)로 시작한다', () => {
    for (const e of entries) expect(e.url).toMatch(/^https?:\/\//)
  })

  it('noindex 페이지(gallery)는 sitemap에서 제외된다', () => {
    expect(entries.some((e) => e.url.includes('/gallery'))).toBe(false)
  })

  it('order의 검색 페이지가 모두 sitemap에 들어간다', () => {
    for (const key of svc.order) {
      const f = svc.features[key]
      if (!f || f.noindex) continue
      expect(entries.some((e) => e.url.endsWith(f.slug)), `${key} 누락`).toBe(true)
    }
  })

  it('sitemap에 중복 URL이 없다', () => {
    const urls = entries.map((e) => e.url)
    expect(new Set(urls).size).toBe(urls.length)
  })
})

describe('Canonical Test — 대표 주소가 페이지마다 유일하다', () => {
  const svc = serviceList[0]
  it('canonical은 /로 시작하고 페이지 간 중복이 없다', () => {
    const seen = new Set<string>()
    for (const [key, f] of indexedFeatures(svc)) {
      const meta = buildMetadata(f, svc.brandName, { canonical: f.slug })
      const c = String(meta.alternates?.canonical)
      expect(c.startsWith('/'), `${key}: canonical이 /로 시작 안 함`).toBe(true)
      expect(seen.has(c), `${key}: canonical 중복(${c})`).toBe(false)
      seen.add(c)
    }
  })
})

describe('Breadcrumb Test — 경로가 순서대로 매겨진다', () => {
  const svc = serviceList[0]
  it('position이 1부터 1씩 증가한다', () => {
    for (const [, f] of Object.entries(svc.features)) {
      const bc = breadcrumbLd(f, svc.siteBase, svc.brandName, f.slug) as {
        itemListElement: Array<{ position: number; name: string; item: string }>
      }
      bc.itemListElement.forEach((it, i) => expect(it.position).toBe(i + 1))
    }
  })

  it('home은 1단계(브랜드명), 그 외는 2단계(브랜드 > 페이지)', () => {
    const home = breadcrumbLd(svc.features.home, svc.siteBase, svc.brandName, svc.features.home.slug) as {
      itemListElement: unknown[]
    }
    expect(home.itemListElement.length).toBe(1)
    const tr = breadcrumbLd(svc.features.translate, svc.siteBase, svc.brandName, svc.features.translate.slug) as {
      itemListElement: unknown[]
    }
    expect(tr.itemListElement.length).toBe(2)
  })
})

describe('Robots Test — 공개/비공개가 의도대로 표시된다', () => {
  const svc = serviceList[0]
  it('noindex 페이지는 index:false, 일반 페이지는 index:true', () => {
    for (const [key, f] of Object.entries(svc.features)) {
      const meta = buildMetadata(f, svc.brandName, { canonical: f.slug })
      const robots = meta.robots as { index?: boolean }
      expect(robots.index, `${key}`).toBe(!f.noindex)
    }
  })
})
