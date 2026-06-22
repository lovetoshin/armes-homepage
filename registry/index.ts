/**
 * ARMES Registry — 전사 SEO 데이터 단일 진실원천.
 *
 * 여기에 등록된 서비스만 SEO 자산(metadata·JSON-LD·sitemap)이 자동 생성된다.
 * 지금은 셀러AI 1개만 등록해 엔진 동작을 검증한다(MVP).
 * 다른 서비스는 registry/services/<service>.ts 를 추가하고 아래 SERVICES에 한 줄만 더하면 된다.
 */
import type { ServiceSeoConfig } from '@/lib/seo/core/types'
import { sellerai } from './services/sellerai'

/** 서비스 카탈로그 (key → 설정). 검색 자산 생성의 출발점. */
export const SERVICES: Record<string, ServiceSeoConfig> = {
  sellerai,
}

/** 서비스 목록(배열). 검사·sitemap 순회용. */
export const serviceList: ServiceSeoConfig[] = Object.values(SERVICES)

/** key로 서비스 1개 조회. 없으면 undefined. */
export function getService(key: string): ServiceSeoConfig | undefined {
  return SERVICES[key]
}
