/**
 * 품질 검사기 자동 테스트 — Validation / Dependency(Broken Link) / Linter.
 * 실제 registry가 통과하는지 + 일부러 깨뜨린 데이터를 잡아내는지 둘 다 검사한다.
 */
import { describe, it, expect } from 'vitest'
import { serviceList } from '@/registry'
import { validateRegistry } from '@/lib/seo/validation/validate'
import { checkRegistryDependencies } from '@/lib/seo/validation/dependency-graph'
import { lintRegistry } from '@/lib/seo/validation/linter'
import type { ServiceSeoConfig } from '@/lib/seo/core/types'

describe('Validation Test — 현재 registry는 필수항목을 모두 채웠다', () => {
  it('error가 0개다 (배포 가능)', () => {
    const report = validateRegistry(serviceList)
    if (!report.ok) console.error(report.errors)
    expect(report.ok).toBe(true)
  })
})

describe('Validation Test — 깨진 데이터는 반드시 잡는다', () => {
  it('title·description·slug가 빈 페이지를 error로 잡는다', () => {
    const broken: ServiceSeoConfig = {
      key: 'broken', brandName: 'X', siteBase: 'https://x.test', locale: 'ko_KR',
      order: ['p'],
      features: {
        p: { key: 'p', slug: '', breadcrumb: '', title: '', description: '', keywords: [], h1: '' },
      },
    }
    const report = validateRegistry([broken])
    expect(report.ok).toBe(false)
    const fields = report.errors.map((e) => e.field)
    expect(fields).toContain('slug')
    expect(fields).toContain('title')
    expect(fields).toContain('description')
  })

  it('siteBase가 http로 시작 안 하면 error', () => {
    const bad: ServiceSeoConfig = {
      key: 'b', brandName: 'B', siteBase: 'armes.co.kr', locale: 'ko_KR', order: [], features: {},
    }
    const report = validateRegistry([bad])
    expect(report.errors.some((e) => e.field === 'siteBase')).toBe(true)
  })
})

describe('Broken Link Test — 내부링크(related)가 끊기지 않았다', () => {
  it('현재 registry의 의존성 error가 0개다', () => {
    const report = checkRegistryDependencies(serviceList)
    if (!report.ok) console.error(report.errors)
    expect(report.ok).toBe(true)
  })

  it('존재하지 않는 페이지를 가리키는 related를 error로 잡는다', () => {
    const broken: ServiceSeoConfig = {
      key: 'b', brandName: 'B', siteBase: 'https://b.test', locale: 'ko_KR',
      order: ['a'],
      features: {
        a: { key: 'a', slug: '/a', breadcrumb: 'A', title: 'A', description: 'd', keywords: [], h1: 'A', related: ['ghost'] },
      },
    }
    const report = checkRegistryDependencies([broken])
    expect(report.errors.some((e) => e.field === 'related')).toBe(true)
  })
})

describe('Linter Test — 품질 경고는 warning일 뿐 빌드를 막지 않는다', () => {
  it('Linter 결과는 항상 ok=true다(에러로 격상되지 않음)', () => {
    const report = lintRegistry(serviceList)
    expect(report.errors.length).toBe(0)
    expect(report.ok).toBe(true)
  })

  it('너무 긴 제목을 warning으로 잡는다', () => {
    const longTitle = 'a'.repeat(80)
    const svc: ServiceSeoConfig = {
      key: 'b', brandName: 'B', siteBase: 'https://b.test', locale: 'ko_KR',
      order: ['a'],
      features: {
        a: { key: 'a', slug: '/a', breadcrumb: 'A', title: longTitle, description: 'd'.repeat(50), keywords: [], h1: 'A' },
      },
    }
    const report = lintRegistry([svc])
    expect(report.warnings.some((w) => w.field === 'title')).toBe(true)
  })
})
