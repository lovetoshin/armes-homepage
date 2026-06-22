/**
 * createSeoEngine — 서비스 설정(ServiceSeoConfig)을 주입하면
 * 그 서비스 전용 SEO 엔진 인스턴스를 돌려준다.
 *
 * 앱은 이 인스턴스의 메서드(metadata/jsonLd/sitemap/internalLinks/guide...)만 호출한다.
 */
import type { Metadata } from 'next'
import type { MetadataRoute } from 'next'
import type { ServiceSeoConfig, SeoFeature } from './types'
import { buildMetadata, type MetadataOptions } from './engines/metadata'
import { buildJsonLd, type JsonLdOptions } from './engines/jsonld'
import { buildSitemap, GUIDE_BASE } from './engines/sitemap'
import { resolveRelated, type InternalLink } from './engines/internalLink'
import { keywordTerms, groupByIntent } from './engines/keyword'

export interface SeoEngine {
  config: ServiceSeoConfig
  getFeature(key: string): SeoFeature | undefined
  metadata(key: string, opts?: MetadataOptions): Metadata
  jsonLd(key: string, opts?: JsonLdOptions): Record<string, unknown>[]
  sitemap(): MetadataRoute.Sitemap
  internalLinks(keys: string[]): InternalLink[]
  keywordTerms(key: string): string[]
  intentGroups(key: string): ReturnType<typeof groupByIntent>
  // ── Guide ──
  guidePath(f: SeoFeature): string
  guideFeatures(): SeoFeature[]
  featureByGuideSlug(slug: string): SeoFeature | undefined
}

export function createSeoEngine(config: ServiceSeoConfig): SeoEngine {
  const get = (key: string) => config.features[key]
  const must = (key: string): SeoFeature => {
    const f = get(key)
    if (!f) throw new Error(`[SEO] 알 수 없는 기능 key: ${key}`)
    return f
  }
  return {
    config,
    getFeature: get,
    metadata: (key, opts) => buildMetadata(must(key), config.brandName, opts),
    jsonLd: (key, opts) => buildJsonLd(must(key), config.siteBase, config.brandName, opts),
    sitemap: () => buildSitemap(config),
    internalLinks: (keys) => resolveRelated(keys, config.features),
    keywordTerms: (key) => keywordTerms(must(key).keywords),
    intentGroups: (key) => groupByIntent(must(key).keywords),
    guidePath: (f) => `${GUIDE_BASE}/${f.guideSlug}`,
    guideFeatures: () =>
      config.order.map((k) => config.features[k]).filter((f): f is SeoFeature => !!f && !!f.guideSlug),
    featureByGuideSlug: (slug) =>
      Object.values(config.features).find((f) => f.guideSlug === slug),
  }
}
