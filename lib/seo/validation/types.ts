/**
 * 품질 검사 공통 타입 — Validation / Dependency Graph / Linter 가 함께 쓴다.
 *
 * level:
 *   - 'error'  : 데이터가 깨졌다. 이게 있으면 빌드를 막아야 한다(검색 사고 방지).
 *   - 'warning': 깨지진 않았지만 검색 품질이 깎인다. 빌드는 막지 않고 알려만 준다.
 */
export type IssueLevel = 'error' | 'warning'

export interface SeoIssue {
  level: IssueLevel
  /** 검사 출처: validation | dependency | linter */
  source: 'validation' | 'dependency' | 'linter'
  /** 서비스 key (예: 'sellerai') */
  service: string
  /** 기능 key (페이지 단위 문제일 때만) */
  feature?: string
  /** 문제가 난 필드명 (예: 'title') */
  field?: string
  /** 사람이 읽는 한국어 설명 */
  message: string
}

export interface SeoReport {
  issues: SeoIssue[]
  errors: SeoIssue[]
  warnings: SeoIssue[]
  /** error가 0개면 true (= 배포 가능) */
  ok: boolean
}

/** issue 배열을 받아 error/warning을 분류한 리포트로 만든다. */
export function buildReport(issues: SeoIssue[]): SeoReport {
  const errors = issues.filter((i) => i.level === 'error')
  const warnings = issues.filter((i) => i.level === 'warning')
  return { issues, errors, warnings, ok: errors.length === 0 }
}
