/**
 * SEO 품질 게이트 — 배포 전 마지막 검문소.
 *
 * 실행: npx tsx scripts/seo-gate.ts
 * prebuild 단계에서 자동 실행되어, error가 1개라도 있으면 빌드를 멈춘다(exit 1).
 * warning(품질 권고)은 보여만 주고 빌드를 막지 않는다.
 */
import { serviceList } from '@/registry'
import { validateRegistry } from '@/lib/seo/validation/validate'
import { checkRegistryDependencies } from '@/lib/seo/validation/dependency-graph'
import { lintRegistry } from '@/lib/seo/validation/linter'
import type { SeoIssue } from '@/lib/seo/validation/types'

function fmt(i: SeoIssue): string {
  const where = [i.service, i.feature, i.field].filter(Boolean).join('/')
  return `  - [${where}] ${i.message}`
}

function main() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🔎 ARMES SEO 품질 게이트')
  console.log(`   대상 서비스: ${serviceList.map((s) => s.key).join(', ') || '(없음)'}`)
  const pageCount = serviceList.reduce((n, s) => n + Object.keys(s.features).length, 0)
  console.log(`   검사 페이지: ${pageCount}개`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  const validation = validateRegistry(serviceList)
  const dependency = checkRegistryDependencies(serviceList)
  const lint = lintRegistry(serviceList)

  const errors = [...validation.errors, ...dependency.errors]
  const warnings = [...validation.warnings, ...dependency.warnings, ...lint.warnings]

  // 경고 출력 (막지 않음)
  if (warnings.length) {
    console.log(`\n⚠️  품질 경고 ${warnings.length}건 (빌드는 진행됩니다):`)
    warnings.forEach((w) => console.log(fmt(w)))
  } else {
    console.log('\n✅ 품질 경고 없음')
  }

  // 에러 출력 (빌드 차단)
  if (errors.length) {
    console.error(`\n❌ 치명적 오류 ${errors.length}건 — 배포를 중단합니다:`)
    errors.forEach((e) => console.error(fmt(e)))
    console.error('\n위 오류를 고친 뒤 다시 빌드하세요.\n')
    process.exit(1)
  }

  console.log('\n✅ 게이트 통과 — 배포 가능합니다.\n')
}

main()
