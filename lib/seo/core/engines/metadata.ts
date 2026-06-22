/**
 * Metadata Engine — SeoFeature 1개로 Next.js Metadata 생성.
 * title/description/keywords/canonical/OpenGraph/Twitter/robots.
 *
 * canonical은 slug(상대경로)만 넣는다. 루트 layout의 metadataBase
 * (https://www.armes.co.kr/sellerai) 기준으로 절대 URL이 자동 완성된다.
 * → 서비스 무관. siteBase를 직접 박지 않으므로 어느 서비스든 동일하게 동작.
 */
import type { Metadata } from 'next'
import type { SeoFeature } from '../types'
import { keywordTerms } from './keyword'

export interface MetadataOptions {
  canonical?: string     // Guide 페이지면 guide 경로로 덮어쓴다(기본 f.slug)
  title?: string
  description?: string
}

export function buildMetadata(f: SeoFeature, brandName = '셀러AI', opts: MetadataOptions = {}): Metadata {
  const title = opts.title ?? f.title
  const description = opts.description ?? f.description
  const canonical = opts.canonical ?? f.slug
  const ogTitle = f.ogTitle ?? title
  const ogDescription = f.ogDescription ?? description
  return {
    title,
    description,
    keywords: keywordTerms(f.keywords),
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: brandName,
      locale: 'ko_KR',
      url: canonical,
      title: ogTitle,
      description: ogDescription,
      ...(f.ogImage ? { images: [{ url: f.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      ...(f.ogImage ? { images: [f.ogImage] } : {}),
    },
    robots: f.noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
  }
}
