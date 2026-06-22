import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

// SEO 검사 로직은 순수 함수라 node 환경에서 가볍게 돈다(브라우저 불필요).
export default defineConfig({
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts'],
  },
  resolve: {
    // tsconfig의 "@/*" → 프로젝트 루트 별칭을 vitest에도 동일 적용
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
})
