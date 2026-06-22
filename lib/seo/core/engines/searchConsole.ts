/**
 * Search Console Engine — 검색 콘솔 지표 → 개선 우선순위 추천 (★구조만, 데이터 미연결).
 *
 * 지금은 SEO 렌더링·sitemap·JSON-LD에 일절 영향을 주지 않는다.
 * 향후 노출/클릭/CTR/평균순위/검색어를 입력받아 아래 규칙으로 개선안을 추천한다.
 *
 *  콘솔 신호                         → 추천 타깃
 *  노출 높음 + CTR 낮음              → title / description
 *  평균순위 11~20 + 노출 있음        → h1 / h2 (1페이지 진입 후보)
 *  유입 검색어가 FAQ 미커버          → faq
 *  노출 많은데 클릭 0(의도 불일치)    → 본문/의도 재정렬
 *  강한 페이지 존재                  → internalLink 재배치
 */
import type { SearchConsoleMetric, SeoImprovementSuggestion } from '../types'

/**
 * (향후) 콘솔 지표 배열을 받아 개선 우선순위를 산정.
 * 지금은 빈 배열을 반환한다 — 데이터가 없으므로 추천도 없음(부작용 없음).
 */
export function recommendImprovements(_metrics: SearchConsoleMetric[]): SeoImprovementSuggestion[] {
  return []
}
