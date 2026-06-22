/**
 * Internal Link Engine — feature.related(key 목록)을 실제 링크 데이터로 해석.
 * 검색 의도 흐름이 자연스럽게 이어지도록 related 순서를 그대로 보존한다.
 */
import type { SeoFeature, ServiceSeoConfig } from '../types'

export interface InternalLink {
  key: string
  slug: string
  label: string      // breadcrumb
  description: string
}

export function resolveRelated(keys: string[], features: ServiceSeoConfig['features']): InternalLink[] {
  return keys
    .map((k) => features[k])
    .filter((f): f is SeoFeature => !!f)
    .map((f) => ({ key: f.key, slug: f.slug, label: f.breadcrumb, description: f.description }))
}
