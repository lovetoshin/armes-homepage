// 여행모아 안드로이드 앱 App Links 검증 파일 — https://www.armes.co.kr/.well-known/assetlinks.json
//
// "이 도메인의 링크는 여행모아 앱(com.travelmoa.app)이 열어도 된다"는 구글 검증용 증명서.
// sha256_cert_fingerprints 에는 ⚠️Play "앱 서명 키"의 SHA256을 넣는다(업로드 키 아님).
//   확인: Play Console > 여행모아 > 앱 무결성(App integrity) > 앱 서명 > "앱 서명 키 인증서"의 SHA-256.
//   콜론 포함 대문자 HEX 그대로(예: AB:CD:...). 여러 개면 배열에 추가.
//
// 이 값을 armes-homepage 환경변수 TRAVELMOA_APP_SHA256 에 넣으면 자동 반영된다(코드 수정 불필요).
//   - 로컬: f:\APP\armes\.env
//   - 실서버: Vercel(armes-homepage) 환경변수
// SHA256이 비어 있으면(미입력) 빈 배열로 나가 App Links 검증이 통과되지 않는다 → 반드시 입력 필요.

import { NextResponse } from 'next/server'

const SHA256 = (process.env.TRAVELMOA_APP_SHA256 ?? '').trim()

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.json([
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: 'com.travelmoa.app',
        sha256_cert_fingerprints: SHA256 ? [SHA256] : [],
      },
    },
  ])
}
