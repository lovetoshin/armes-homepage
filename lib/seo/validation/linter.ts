/**
 * Registry Linter — "맞춤법·길이 검사기" (전부 warning).
 *
 * 데이터가 깨진 건 아니지만 검색 품질을 떨어뜨리는 항목을 짚어 준다.
 * 빌드를 막지는 않는다(= 모두 warning). 막는 건 Validation / Dependency 의 몫.
 *
 * ── 길이 기준은 '한글' 기준이다 ──
 * 영문 SEO 통념(제목 30~60자)은 글자 폭이 좁은 영어 기준이다. 한글은 글자 폭이 넓어
 * 구글 검색결과에서 제목은 30자 안팎, 설명은 80자 안팎에서 잘린다.
 * 또한 제목 뒤에 브랜드 접미사가 자동으로 붙으므로 데이터 자체는 짧게 두는 편이 좋다.
 * 수치를 바꾸려면 아래 LIMITS 상수만 고치면 된다.
 */
import type { ServiceSeoConfig, SeoFeature } from '@/lib/seo/core/types'
import type { SeoIssue } from './types'
import { buildReport, type SeoReport } from './types'

const SRC = 'linter' as const

/** 한글 기준 길이 권장 범위 (글자 수). 조정은 여기서만. */
export const LIMITS = {
  titleMin: 10,
  titleMax: 35,
  descMin: 40,
  descMax: 120,
  /** 일반 검색 페이지에 권장하는 최소 FAQ 개수 */
  faqMin: 3,
} as const

/** slug 형식: 소문자·숫자·하이픈·슬래시만 허용 */
const SLUG_OK = /^\/[a-z0-9/-]*$/

export function lintService(svc: ServiceSeoConfig): SeoIssue[] {
  const issues: SeoIssue[] = []
  const features = svc.features ?? {}
  const warn = (message: string, feature?: string, field?: string) =>
    issues.push({ level: 'warning', source: SRC, service: svc.key, feature, field, message })

  // 페이지 간 중복 추적
  const titles = new Map<string, string>()        // title → 처음 본 feature key
  const descriptions = new Map<string, string>()  // description → feature key
  const primaryTerms = new Map<string, string>()  // primary 키워드 term → feature key

  for (const [key, f] of Object.entries(features)) {
    if (f.noindex) continue // 검색 제외 페이지는 품질 검사 면제

    // 1) 제목 길이
    const tLen = (f.title ?? '').length
    if (tLen > 0 && tLen < LIMITS.titleMin)
      warn(`제목이 너무 짧습니다(${tLen}자, 권장 ${LIMITS.titleMin}자 이상).`, key, 'title')
    if (tLen > LIMITS.titleMax)
      warn(`제목이 너무 깁니다(${tLen}자, 권장 ${LIMITS.titleMax}자 이하 — 검색결과에서 잘릴 수 있음).`, key, 'title')

    // 2) 설명 길이
    const dLen = (f.description ?? '').length
    if (dLen > 0 && dLen < LIMITS.descMin)
      warn(`설명이 너무 짧습니다(${dLen}자, 권장 ${LIMITS.descMin}자 이상).`, key, 'description')
    if (dLen > LIMITS.descMax)
      warn(`설명이 너무 깁니다(${dLen}자, 권장 ${LIMITS.descMax}자 이하 — 검색결과에서 잘릴 수 있음).`, key, 'description')

    // 3) slug 형식
    if (f.slug && !SLUG_OK.test(f.slug))
      warn(`slug에 권장하지 않는 문자가 있습니다(소문자·숫자·하이픈만 권장): ${f.slug}`, key, 'slug')

    // 4) 같은 페이지 안 키워드 term 중복
    const seenTerms = new Set<string>()
    for (const kw of f.keywords ?? []) {
      if (seenTerms.has(kw.term))
        warn(`같은 페이지 안에서 키워드 '${kw.term}'가 중복됩니다.`, key, 'keywords')
      seenTerms.add(kw.term)
    }

    // 5) primary 키워드 카니발라이제이션 (서로 다른 페이지가 같은 대표 키워드를 노림)
    for (const kw of f.keywords ?? []) {
      if (kw.role !== 'primary') continue
      const prev = primaryTerms.get(kw.term)
      if (prev && prev !== key)
        warn(`대표 키워드 '${kw.term}'를 '${prev}'와 '${key}'가 함께 노립니다(검색 순위 자기잠식 우려).`, key, 'keywords')
      else primaryTerms.set(kw.term, key)
    }

    // 6) 제목/설명 페이지 간 중복
    if (f.title) {
      const prev = titles.get(f.title)
      if (prev) warn(`제목이 '${prev}' 페이지와 똑같습니다.`, key, 'title')
      else titles.set(f.title, key)
    }
    if (f.description) {
      const prev = descriptions.get(f.description)
      if (prev) warn(`설명이 '${prev}' 페이지와 똑같습니다.`, key, 'description')
      else descriptions.set(f.description, key)
    }

    // 7) FAQ 부족
    const faqLen = f.faq?.length ?? 0
    if (faqLen > 0 && faqLen < LIMITS.faqMin)
      warn(`FAQ가 ${faqLen}개로 적습니다(권장 ${LIMITS.faqMin}개 이상 — FAQ는 검색 노출에 유리).`, key, 'faq')
  }
  return issues
}

/** registry 전체 린트 → 리포트. */
export function lintRegistry(services: ServiceSeoConfig[]): SeoReport {
  const issues: SeoIssue[] = []
  for (const svc of services) issues.push(...lintService(svc))
  return buildReport(issues)
}
