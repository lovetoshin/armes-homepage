/**
 * Dependency Graph — "부품 연결 점검 (레고 설명서 검사)".
 *
 * 페이지끼리 서로 가리키는 연결(related 내부링크)이 끊겼는지,
 * 어디에서도 연결되지 않아 외톨이가 된 페이지(orphan)가 있는지 검사한다.
 *
 *  - related 가 존재하지 않는 페이지를 가리킴   → error (클릭하면 빈 화면 = 깨진 링크)
 *  - related 가 검색 제외(noindex) 페이지를 가리킴 → warning (검색 안 되는 곳으로 링크)
 *  - related 가 자기 자신을 가리킴               → warning
 *  - order/related 어디에서도 참조되지 않는 페이지 → warning (외톨이 = 검색 유입 사각지대)
 */
import type { ServiceSeoConfig } from '@/lib/seo/core/types'
import type { SeoIssue } from './types'
import { buildReport, type SeoReport } from './types'

const SRC = 'dependency' as const

export function checkDependencies(svc: ServiceSeoConfig): SeoIssue[] {
  const issues: SeoIssue[] = []
  const features = svc.features ?? {}
  const keys = new Set(Object.keys(features))
  const orderSet = new Set(svc.order ?? [])

  // 참조된 적이 있는 페이지를 기록 (orphan 판정용)
  const referenced = new Set<string>(orderSet)

  for (const [key, f] of Object.entries(features)) {
    for (const ref of f.related ?? []) {
      if (ref === key) {
        issues.push({
          level: 'warning', source: SRC, service: svc.key, feature: key, field: 'related',
          message: `'${key}'의 related가 자기 자신을 가리킵니다.`,
        })
        continue
      }
      if (!keys.has(ref)) {
        issues.push({
          level: 'error', source: SRC, service: svc.key, feature: key, field: 'related',
          message: `'${key}'의 related가 존재하지 않는 페이지 '${ref}'를 가리킵니다(깨진 내부링크).`,
        })
        continue
      }
      referenced.add(ref)
      if (features[ref]?.noindex) {
        issues.push({
          level: 'warning', source: SRC, service: svc.key, feature: key, field: 'related',
          message: `'${key}'의 related가 검색 제외(noindex) 페이지 '${ref}'를 가리킵니다.`,
        })
      }
    }
  }

  // orphan 검사: 검색 노출 페이지인데 order에도 없고 어떤 related로도 참조되지 않음
  for (const [key, f] of Object.entries(features)) {
    if (f.noindex) continue
    if (!referenced.has(key)) {
      issues.push({
        level: 'warning', source: SRC, service: svc.key, feature: key,
        message: `'${key}'는 order에도 없고 어떤 페이지에서도 링크되지 않는 외톨이(orphan) 페이지입니다.`,
      })
    }
  }
  return issues
}

/** registry 전체 의존성 검사 → 리포트. */
export function checkRegistryDependencies(services: ServiceSeoConfig[]): SeoReport {
  const issues: SeoIssue[] = []
  for (const svc of services) issues.push(...checkDependencies(svc))
  return buildReport(issues)
}
