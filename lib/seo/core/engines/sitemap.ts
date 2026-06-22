/**
 * Sitemap Engine — config.order를 순회해 sitemap 엔트리 생성.
 * - 기능(도구) 페이지: f.slug
 * - Guide 페이지: f.guideSlug 가 있으면 /studio/guide/<guideSlug> 도 함께 등록
 * noindex(개인 콘텐츠)는 자동 제외.
 */
import type { MetadataRoute } from 'next'
import type { ServiceSeoConfig } from '../types'

export const GUIDE_BASE = '/studio/guide'

export function buildSitemap(config: ServiceSeoConfig): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const k of config.order) {
    const f = config.features[k]
    if (!f || f.noindex) continue
    // 기능(도구) 페이지
    entries.push({
      url: `${config.siteBase}${f.slug}`,
      changeFrequency: 'weekly',
      priority: f.priority ?? 0.7,
    })
    // Guide 페이지(있으면)
    if (f.guideSlug) {
      entries.push({
        url: `${config.siteBase}${GUIDE_BASE}/${f.guideSlug}`,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  }
  return entries
}
