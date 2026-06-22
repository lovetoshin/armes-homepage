/**
 * SEO 미리보기 CLI — 페이지가 검색/공유에 어떻게 보일지 텍스트로 출력.
 *
 * 실행: npx tsx scripts/seo-preview.ts [서비스key] [페이지key]
 *   예) npx tsx scripts/seo-preview.ts sellerai translate
 *   인자 없으면 sellerai의 home을 보여준다.
 */
import { getService, serviceList } from '@/registry'
import { generatePreview } from '@/lib/seo/preview'

const [, , svcKey = 'sellerai', featureKey = 'home'] = process.argv
const svc = getService(svcKey) ?? serviceList[0]
console.log(generatePreview(svc, featureKey))
