/**
 * ★ ARMES SEO Core — 공통 타입 (단일 진실원천)
 *
 * 이 파일의 타입은 '서비스 무관'이다. SellerAI·RewardTalk·TravelMoa 등
 * 모든 ARMES 서비스가 동일한 타입으로 SEO 데이터를 기술한다.
 *
 * 공유 방식(B안 = 복사 동기화): 이 core/ 폴더를 통째로 다른 서비스 레포에 복사하고,
 * services/<service>.ts 어댑터만 새로 만들면 같은 엔진을 그대로 쓴다.
 * (지금은 SellerAI 안에서만 사용. 다른 서비스 실제 파일은 만들지 않는다 — 확장 가능 구조만)
 */

// ─────────────────────────────────────────────────────────────
// 검색 의도 분류 (검색량 상/중/하 추정 → 폐기, 의도 기반으로 대체)
// ─────────────────────────────────────────────────────────────
export type SearchIntent =
  | 'informational' // 정보형      예) "누끼 따는 방법"
  | 'comparison'    // 비교형      예) "AI 상품사진 vs 직접촬영"
  | 'transactional' // 구매형      예) "상세페이지 제작 비용"
  | 'tool'          // 즉시사용형   예) "누끼 따기", "1688 번역" (바로 쓰러 옴)
  | 'brand'         // 브랜드형     예) "셀러AI"

export type KeywordRole = 'primary' | 'secondary' | 'longtail'

export interface Keyword {
  term: string
  intent: SearchIntent
  role: KeywordRole
}

// ─────────────────────────────────────────────────────────────
// 콘텐츠 조각
// ─────────────────────────────────────────────────────────────
export interface SeoImage {
  src: string     // public 기준 경로(앞에 BASE가 붙어 렌더됨)
  alt: string     // 검색·접근성용 대체 텍스트
  title: string   // 마우스오버 설명
  caption: string // <figcaption> 캡션(검색엔진이 읽음)
}
export interface BeforeAfterItem {
  label: string
  before: SeoImage
  after: SeoImage
  description: string
}
export interface FaqItem { q: string; a: string }
export interface StepItem { h3: string; desc: string }

// ─────────────────────────────────────────────────────────────
// Competition Engine — 구조만(이번엔 데이터 미연결). 내부 개선 참고용, 렌더링 안 함.
// ─────────────────────────────────────────────────────────────
export interface CompetitorSnapshot {
  competitor: string
  url: string
  title?: string
  description?: string
  h1?: string
  h2?: string[]
  faq?: { q: string; a?: string }[]
  capturedAt?: string
}

// ─────────────────────────────────────────────────────────────
// Search Console Engine — 구조만(이번엔 데이터 미연결).
// ─────────────────────────────────────────────────────────────
export interface SearchConsoleMetric {
  page: string        // feature.slug
  query: string
  impressions: number
  clicks: number
  ctr: number
  position: number    // 평균순위
  period: string      // 'YYYY-MM'
}
export type ImprovementTarget =
  | 'title' | 'description' | 'h1' | 'h2' | 'faq' | 'internalLink'
export interface SeoImprovementSuggestion {
  page: string
  target: ImprovementTarget
  reason: string
  priority: number
}

// ─────────────────────────────────────────────────────────────
// 기능(페이지) 1개 = SeoFeature
// ─────────────────────────────────────────────────────────────
export interface SeoFeature {
  key: string
  slug: string                 // 기능(도구) 라우트 경로 (예: '/studio/translate')
  guideSlug?: string           // SEO Guide 슬러그 (예: '1688-translation' → /studio/guide/1688-translation)
  breadcrumb: string
  title: string                // SEO Title (브랜드 접미사는 루트 layout 템플릿이 자동 부여)
  description: string
  keywords: Keyword[]          // ★ string[] → Keyword[] (term/intent/role)
  h1: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  noindex?: boolean
  priority?: number
  // ── 콘텐츠(있는 페이지만 SEO 섹션 렌더) ──
  intro?: { question: string; problem: string; solution: string }
  steps?: StepItem[]
  beforeAfter?: BeforeAfterItem[]
  useCases?: string[]
  faq?: FaqItem[]
  related?: string[]           // 다른 feature key (내부링크)
  // ── 향후 확장(이번엔 미사용) ──
  competitors?: CompetitorSnapshot[]
}

// ─────────────────────────────────────────────────────────────
// 서비스 설정 — 서비스마다 1개. 엔진은 이 config를 주입받아 동작한다.
// ─────────────────────────────────────────────────────────────
export interface ServiceSeoConfig {
  key: string                  // 'sellerai'
  brandName: string            // '셀러AI'
  siteBase: string             // 'https://www.armes.co.kr/sellerai'
  locale: string               // 'ko_KR'
  order: string[]              // sitemap·내부링크 순서
  features: Record<string, SeoFeature>
}
