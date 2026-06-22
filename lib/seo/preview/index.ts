/**
 * Preview Engine — "구글에 어떻게 보일지 미리보기".
 *
 * 기존 metadata·jsonld 엔진(core/)을 그대로 재활용해, 한 페이지가
 * 검색결과(SERP)·공유 카드(OG)·구조화 데이터(JSON-LD)·경로(Breadcrumb)로
 * 어떻게 출력될지 사람이 읽기 좋은 텍스트로 보여 준다. (배포 전 눈으로 확인용)
 */
import type { ServiceSeoConfig, SeoFeature } from '@/lib/seo/core/types'
import { buildMetadata } from '@/lib/seo/core/engines/metadata'
import { buildJsonLd } from '@/lib/seo/core/engines/jsonld'

/** 절대 URL 조립 (siteBase + slug) */
function absUrl(siteBase: string, slug: string): string {
  return `${siteBase}${slug}`
}

/** 페이지 1개의 미리보기 텍스트를 만든다. */
export function generatePreview(svc: ServiceSeoConfig, featureKey: string): string {
  const f: SeoFeature | undefined = svc.features?.[featureKey]
  if (!f) return `[미리보기 실패] '${svc.key}' 서비스에 '${featureKey}' 페이지가 없습니다.`

  const meta = buildMetadata(f, svc.brandName, { canonical: f.slug })
  const variant = f.key === 'home' ? 'full' : 'tool'
  const ld = buildJsonLd(f, svc.siteBase, svc.brandName, { variant })
  const url = absUrl(svc.siteBase, f.slug)

  // 검색결과에 실제 노출되는 제목(브랜드 접미사는 layout 템플릿이 자동으로 붙임 — 근사 표현)
  const serpTitle = f.key === 'home' ? `${f.title} | ${svc.brandName}` : `${f.title} | ${svc.brandName}`
  const ldTypes = ld.map((x) => x['@type']).join(', ')

  const lines: string[] = []
  lines.push(`══════════════════════════════════════════════════`)
  lines.push(`📄 [${svc.brandName}] ${featureKey}  ${f.noindex ? '(검색 제외/noindex)' : ''}`)
  lines.push(`══════════════════════════════════════════════════`)
  lines.push(``)
  lines.push(`🔍 구글 검색결과 미리보기`)
  lines.push(`  ${serpTitle}`)
  lines.push(`  ${url}`)
  lines.push(`  ${f.description ?? '(설명 없음)'}`)
  lines.push(``)
  lines.push(`📤 공유 카드(OG) 미리보기`)
  lines.push(`  제목: ${meta.openGraph?.title ?? f.title}`)
  lines.push(`  설명: ${meta.openGraph?.description ?? f.description ?? '(없음)'}`)
  lines.push(`  이미지: ${f.ogImage ?? '(기본 이미지)'}`)
  lines.push(``)
  lines.push(`🏷️  키워드(${f.keywords?.length ?? 0}개)`)
  lines.push(`  ${(f.keywords ?? []).map((k) => k.term).join(', ') || '(없음)'}`)
  lines.push(``)
  lines.push(`🧭 경로(Breadcrumb)`)
  lines.push(`  ${svc.brandName}${f.key === 'home' ? '' : ` › ${f.breadcrumb}`}`)
  lines.push(``)
  lines.push(`🧩 구조화 데이터(JSON-LD) 종류`)
  lines.push(`  ${ldTypes || '(없음)'}`)
  lines.push(`  FAQ: ${f.faq?.length ?? 0}개`)
  lines.push(`  robots: ${f.noindex ? 'noindex,nofollow' : 'index,follow'}`)
  lines.push(``)
  return lines.join('\n')
}

/** 서비스 전체 페이지 미리보기. */
export function generateServicePreview(svc: ServiceSeoConfig): string {
  return Object.keys(svc.features ?? {})
    .map((key) => generatePreview(svc, key))
    .join('\n')
}
