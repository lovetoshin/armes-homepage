/**
 * Snapshot Test — "어제 사진 vs 오늘 사진 비교".
 * SEO 출력(metadata·JSON-LD·preview)을 사진처럼 저장해 두고,
 * 누군가 코드를 건드려 출력이 바뀌면 자동으로 차이를 잡아낸다(의도치 않은 SEO 변경 방지).
 *
 * 출력을 일부러 바꿨다면: `npx vitest -u` 로 스냅샷을 갱신한다.
 */
import { describe, it, expect } from 'vitest'
import { serviceList } from '@/registry'
import { buildMetadata } from '@/lib/seo/core/engines/metadata'
import { buildJsonLd } from '@/lib/seo/core/engines/jsonld'
import { generatePreview } from '@/lib/seo/preview'

const svc = serviceList[0]

describe('Snapshot — 대표 페이지(translate)의 SEO 출력 고정', () => {
  it('metadata 스냅샷', () => {
    const f = svc.features.translate
    expect(buildMetadata(f, svc.brandName, { canonical: f.slug })).toMatchSnapshot()
  })

  it('JSON-LD 스냅샷', () => {
    const f = svc.features.translate
    expect(buildJsonLd(f, svc.siteBase, svc.brandName, { variant: 'tool' })).toMatchSnapshot()
  })

  it('home JSON-LD 스냅샷(Organization/WebSite 포함)', () => {
    const f = svc.features.home
    expect(buildJsonLd(f, svc.siteBase, svc.brandName, { variant: 'full' })).toMatchSnapshot()
  })

  it('preview 텍스트 스냅샷', () => {
    expect(generatePreview(svc, 'translate')).toMatchSnapshot()
  })
})
