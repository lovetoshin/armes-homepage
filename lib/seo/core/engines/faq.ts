/**
 * FAQ Engine — FAQ 데이터의 검증·조회.
 * (FAQPage JSON-LD 조립은 jsonld 엔진의 faqPageLd가 담당. 여기선 데이터 차원 유틸)
 */
import type { SeoFeature, FaqItem } from '../types'

export function getFaq(f: SeoFeature): FaqItem[] {
  return f.faq ?? []
}

export function faqCount(f: SeoFeature): number {
  return f.faq?.length ?? 0
}

/** 동일 질문 중복 여부(개발 중 검증용) */
export function hasDuplicateQuestions(f: SeoFeature): boolean {
  const qs = (f.faq ?? []).map((x) => x.q.trim())
  return new Set(qs).size !== qs.length
}
