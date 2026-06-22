/**
 * Competition Engine — 경쟁사 스냅샷 보관/조회 (★구조만, 데이터 미연결).
 *
 * 지금은 SEO 렌더링·sitemap·JSON-LD에 일절 영향을 주지 않는다.
 * 향후 각 기능의 경쟁 Title/Description/H1/H2/FAQ를 수집해 registry 개선의
 * '참고 자료'로만 사용한다(페이지에 노출하지 않음).
 */
import type { SeoFeature, CompetitorSnapshot } from '../types'

/** feature에 부착된 경쟁사 스냅샷 조회(없으면 빈 배열) */
export function getCompetitors(f: SeoFeature): CompetitorSnapshot[] {
  return f.competitors ?? []
}

/**
 * (향후) 경쟁사 스냅샷과 현재 feature를 비교해 개선 후보를 도출.
 * 지금은 빈 결과를 반환한다 — 호출돼도 부작용 없음.
 */
export function analyzeCompetition(_f: SeoFeature): { gaps: string[] } {
  return { gaps: [] }
}
