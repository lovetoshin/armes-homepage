/**
 * Validation Engine — "데이터 빈칸·필수항목 검사기".
 *
 * registry에 등록한 서비스/기능에 SEO에 반드시 필요한 값이 비었는지 검사한다.
 * 여기서 error가 나면 그 페이지는 검색에서 사라지거나 깨진 채 배포되므로 빌드를 막아야 한다.
 *
 * 품질(길이·중복 등)은 검사하지 않는다 — 그건 Linter의 일이다.
 */
import type { ServiceSeoConfig, SeoFeature } from '@/lib/seo/core/types'
import type { SeoIssue } from './types'
import { buildReport, type SeoReport } from './types'

const SRC = 'validation' as const

/** 서비스 1개의 필수 설정값을 검사한다. */
function validateService(svc: ServiceSeoConfig): SeoIssue[] {
  const issues: SeoIssue[] = []
  const push = (field: string, message: string) =>
    issues.push({ level: 'error', source: SRC, service: svc.key, field, message })

  if (!svc.key) push('key', '서비스 key가 비어 있습니다.')
  if (!svc.brandName) push('brandName', '브랜드명(brandName)이 비어 있습니다.')
  if (!svc.siteBase) push('siteBase', '사이트 주소(siteBase)가 비어 있습니다.')
  else if (!/^https?:\/\//.test(svc.siteBase))
    push('siteBase', `사이트 주소가 http(s)로 시작하지 않습니다: ${svc.siteBase}`)
  if (!svc.locale) push('locale', '언어(locale)가 비어 있습니다.')
  if (!svc.order?.length) push('order', '페이지 순서(order)가 비어 있습니다.')
  if (!svc.features || Object.keys(svc.features).length === 0)
    push('features', '등록된 기능(features)이 하나도 없습니다.')

  // order에 적힌 key가 실제 features에 존재하는지 (기본 무결성)
  for (const k of svc.order ?? []) {
    if (!svc.features?.[k])
      push('order', `order에 적힌 '${k}'에 해당하는 기능 데이터가 없습니다.`)
  }
  return issues
}

/** 기능(페이지) 1개의 필수 SEO 항목을 검사한다. */
function validateFeature(svc: ServiceSeoConfig, key: string, f: SeoFeature): SeoIssue[] {
  const issues: SeoIssue[] = []
  const push = (field: string, message: string) =>
    issues.push({ level: 'error', source: SRC, service: svc.key, feature: key, field, message })

  // key 정합성
  if (f.key !== key)
    push('key', `features의 키('${key}')와 내부 key('${f.key}')가 다릅니다.`)

  // 모든 페이지 공통 필수
  if (!f.slug) push('slug', 'slug(주소)가 비어 있습니다.')
  else if (!f.slug.startsWith('/')) push('slug', `slug는 '/'로 시작해야 합니다: ${f.slug}`)
  if (!f.title) push('title', '검색 제목(title)이 비어 있습니다.')
  if (!f.h1) push('h1', '본문 대표 제목(h1)이 비어 있습니다.')

  // 검색 노출 페이지(noindex 아님)만 추가 필수
  if (!f.noindex) {
    if (!f.description) push('description', '검색 설명(description)이 비어 있습니다.')
    if (!f.keywords?.length) push('keywords', '키워드가 하나도 없습니다.')
    if (!f.breadcrumb) push('breadcrumb', '경로 이름(breadcrumb)이 비어 있습니다.')
  }
  return issues
}

/** 서비스 1개 전체 검사 (서비스 설정 + 모든 기능). */
export function validateService_full(svc: ServiceSeoConfig): SeoIssue[] {
  const issues = validateService(svc)
  for (const [key, f] of Object.entries(svc.features ?? {})) {
    issues.push(...validateFeature(svc, key, f))
  }
  return issues
}

/** registry 전체(여러 서비스) 검사 → 리포트. */
export function validateRegistry(services: ServiceSeoConfig[]): SeoReport {
  const issues: SeoIssue[] = []
  for (const svc of services) issues.push(...validateService_full(svc))
  return buildReport(issues)
}
