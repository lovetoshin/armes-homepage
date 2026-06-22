/**
 * Keyword Engine — 검색의도(SearchIntent) 기반 키워드 처리.
 *
 * 검색량 상/중/하 추정은 쓰지 않는다. 대신 정보형/비교형/구매형/즉시사용형/브랜드형
 * 의도로 분류해, 메타 keywords 문자열 추출과 의도별 그룹핑을 제공한다.
 */
import type { Keyword, SearchIntent } from '../types'

/** Next metadata.keywords(string[])용 — 중복 제거하며 순서 유지 */
export function keywordTerms(keywords: Keyword[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const k of keywords) {
    if (!seen.has(k.term)) { seen.add(k.term); out.push(k.term) }
  }
  return out
}

/** 역할별 추출 */
export function primaryKeyword(keywords: Keyword[]): Keyword | undefined {
  return keywords.find((k) => k.role === 'primary')
}
export function keywordsByRole(keywords: Keyword[], role: Keyword['role']): Keyword[] {
  return keywords.filter((k) => k.role === role)
}

/** 의도별 그룹(향후 콘텐츠 자동 배치·Competition 비교에 사용) */
export function groupByIntent(keywords: Keyword[]): Record<SearchIntent, Keyword[]> {
  const base: Record<SearchIntent, Keyword[]> = {
    informational: [], comparison: [], transactional: [], tool: [], brand: [],
  }
  for (const k of keywords) base[k.intent].push(k)
  return base
}
