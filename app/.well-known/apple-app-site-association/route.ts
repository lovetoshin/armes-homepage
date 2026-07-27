// 여행모아 iOS 앱 Universal Links 검증 파일 — https://www.armes.co.kr/.well-known/apple-app-site-association
//
// "이 도메인의 /travelmoa/deal/* 링크는 여행모아 앱이 열어도 된다"는 애플 검증용 증명서.
// appID = {애플 팀ID}.{번들ID}. 팀ID F4VT92G8ZR 은 코코핑·리워드톡과 공용(주식회사 아르메스).
// iOS는 SHA256 불필요(코드 서명 자체로 검증) → 이 파일은 지금 그대로 완성.
//
// ⚠️ 애플은 이 파일을 확장자 없이 application/json 으로 받아야 인식하므로 route handler로 서빙한다.

import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: 'F4VT92G8ZR.com.travelmoa.app',
          paths: ['/travelmoa/deal/*'],
        },
      ],
    },
  })
}
