/**
 * JSON-LD Engine — SeoFeature 1개로 구조화 데이터 조립.
 * SoftwareApplication / FAQPage / BreadcrumbList / Organization / WebSite.
 *
 * variant로 역할을 분리한다(기능 페이지 ↔ Guide 페이지 중복 SEO 방지):
 *  - 'full' : (home 등) Org/WebSite + SoftwareApp + Breadcrumb + FAQPage  ← 기본
 *  - 'tool' : SoftwareApp + Breadcrumb        (기능 페이지 — FAQ는 Guide가 가짐)
 *  - 'guide': FAQPage + Breadcrumb            (Guide 페이지 — SoftwareApp은 기능 페이지가 가짐)
 *
 * siteBase·brandName 주입 → 서비스 무관. slug로 Breadcrumb/SoftwareApp의 URL을 지정(기본 f.slug).
 */
import type { SeoFeature } from '../types'

type Ld = Record<string, unknown>
export type JsonLdVariant = 'full' | 'tool' | 'guide'
export interface JsonLdOptions {
  variant?: JsonLdVariant
  slug?: string            // Breadcrumb/SoftwareApp URL 경로(기본 f.slug). Guide면 guide 경로를 넘긴다.
  orgDescription?: string
}

export function organizationLd(siteBase: string, brandName: string, description: string): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brandName,
    url: `${siteBase}/studio`,
    description,
  }
}

export function websiteLd(siteBase: string, brandName: string): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: brandName,
    url: `${siteBase}/studio`,
    inLanguage: 'ko-KR',
  }
}

export function softwareApplicationLd(f: SeoFeature, siteBase: string, brandName: string, slug: string): Ld {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${brandName} — ${f.breadcrumb}`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    description: f.description,
    url: `${siteBase}${slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  }
}

export function breadcrumbLd(f: SeoFeature, siteBase: string, brandName: string, slug: string): Ld {
  const items = [
    { name: brandName, slug: '/studio' },
    ...(f.key === 'home' ? [] : [{ name: f.breadcrumb, slug }]),
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${siteBase}${it.slug}`,
    })),
  }
}

export function faqPageLd(f: SeoFeature): Ld | null {
  if (!f.faq?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: f.faq.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  }
}

export function buildJsonLd(
  f: SeoFeature,
  siteBase: string,
  brandName: string,
  opts: JsonLdOptions = {},
): Ld[] {
  const variant = opts.variant ?? 'full'
  const slug = opts.slug ?? f.slug
  const orgDescription = opts.orgDescription ?? '쇼핑몰 셀러를 위한 AI 상품 이미지 자동화 플랫폼'
  const list: Ld[] = []

  if (variant === 'full' && f.key === 'home') {
    list.push(organizationLd(siteBase, brandName, orgDescription), websiteLd(siteBase, brandName))
  }
  // SoftwareApplication: full·tool 에만(도구). guide에는 넣지 않음.
  if (variant === 'full' || variant === 'tool') {
    list.push(softwareApplicationLd(f, siteBase, brandName, slug))
  }
  // Breadcrumb: 모든 변형
  list.push(breadcrumbLd(f, siteBase, brandName, slug))
  // FAQPage: full·guide 에만. tool(기능 페이지)에는 넣지 않음(Guide가 가짐).
  if (variant === 'full' || variant === 'guide') {
    const faq = faqPageLd(f)
    if (faq) list.push(faq)
  }
  return list
}
