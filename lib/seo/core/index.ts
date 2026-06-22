/**
 * ARMES SEO Core — 공개 진입점(배럴).
 * 다른 서비스로 복사 동기화(B안)할 때 이 core/ 폴더가 단위가 된다.
 */
export * from './types'
export { createSeoEngine } from './createEngine'
export type { SeoEngine } from './createEngine'
export { buildMetadata } from './engines/metadata'
export { buildJsonLd } from './engines/jsonld'
export { buildSitemap } from './engines/sitemap'
export { resolveRelated } from './engines/internalLink'
export type { InternalLink } from './engines/internalLink'
export { keywordTerms, primaryKeyword, keywordsByRole, groupByIntent } from './engines/keyword'
export { getFaq, faqCount, hasDuplicateQuestions } from './engines/faq'
export { getCompetitors, analyzeCompetition } from './engines/competition'
export { recommendImprovements } from './engines/searchConsole'
