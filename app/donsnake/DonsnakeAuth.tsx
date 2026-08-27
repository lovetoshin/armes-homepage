'use client'

import { useEffect, useState } from 'react'

// 돈스네이크 허브 통합 로그인 위젯.
//  · 셀러AI(같은 도메인 /sellerai)에 로그인 상태를 물어본다.
//  · 로그인 안 됐으면 「로그인」 버튼(셀러AI 로그인 → 허브 복귀).
//  · 로그인했으면 이메일 표시 → 이후 블부·인별·쇼츠 결제까지 세션 유지.
const SELLERAI = 'https://www.armes.co.kr/sellerai'
const HUB = 'https://www.armes.co.kr/donsnake'

export default function DonsnakeAuth() {
  const [state, setState] = useState<{ loggedIn: boolean; email: string | null } | null>(null)

  useEffect(() => {
    fetch(`${SELLERAI}/api/auth/status`, { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setState({ loggedIn: !!d.loggedIn, email: d.email ?? null }))
      .catch(() => setState({ loggedIn: false, email: null }))
  }, [])

  const loginUrl = `${SELLERAI}/login?next=${encodeURIComponent(HUB)}`

  return (
    <div className="dsauth">
      {state === null ? null : state.loggedIn ? (
        <span className="me" title={state.email ?? ''}>{state.email}</span>
      ) : (
        <a className="login" href={loginUrl}>로그인</a>
      )}
      <style>{`
        .dsauth{position:absolute;top:24px;right:24px;z-index:5}
        .dsauth .login{display:inline-flex;align-items:center;padding:9px 20px;border-radius:980px;background:#0066cc;color:#fff;font-size:14px;font-weight:600;text-decoration:none}
        .dsauth .login:hover{background:#0077ed}
        .dsauth .me{font-size:14px;font-weight:600;color:#1d1d1f;background:#f5f5f7;padding:9px 16px;border-radius:980px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}
        @media (max-width:600px){ .dsauth{top:16px;right:16px} }
      `}</style>
    </div>
  )
}
