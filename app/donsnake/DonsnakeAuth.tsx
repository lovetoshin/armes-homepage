'use client'

import { useEffect, useState } from 'react'

// 돈스네이크 허브 통합 로그인 위젯.
//  · 셀러AI(같은 도메인 /sellerai)에 로그인 상태를 물어본다.
//  · 로그인 안 됐으면 「로그인」 버튼(셀러AI 로그인 → 허브 복귀).
//  · 로그인했으면 이메일 + 로그아웃 버튼 표시.
//  · variant='corner'(기본)=우상단 작은 버튼 / variant='hero'=히어로 안내+큰 버튼.
const SELLERAI = 'https://www.armes.co.kr/sellerai'
const HUB = 'https://www.armes.co.kr/donsnake'

export default function DonsnakeAuth({ variant = 'corner' }: { variant?: 'corner' | 'hero' }) {
  const [state, setState] = useState<{ loggedIn: boolean; email: string | null } | null>(null)

  useEffect(() => {
    fetch(`${SELLERAI}/api/auth/status`, { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setState({ loggedIn: !!d.loggedIn, email: d.email ?? null }))
      .catch(() => setState({ loggedIn: false, email: null }))
  }, [])

  const loginUrl = `${SELLERAI}/login?next=${encodeURIComponent(HUB)}`
  const logoutUrl = `${SELLERAI}/api/auth/logout?next=${encodeURIComponent(HUB)}`

  if (variant === 'hero') {
    return (
      <div className="dsauth-hero">
        {state === null ? (
          <div className="ph" />
        ) : state.loggedIn ? (
          <div className="hi-wrap">
            <p className="hi">✓ <b>{state.email}</b> 님으로 로그인되어 있습니다.</p>
            <a className="logout" href={logoutUrl}>로그아웃</a>
          </div>
        ) : (
          <>
            <p className="guide">각 서비스를 결제·이용하려면 먼저 로그인하세요.</p>
            <a className="hbtn" href={loginUrl}>로그인 / 회원가입</a>
          </>
        )}
        <style>{`
          .dsauth-hero{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:6px}
          .dsauth-hero .ph{height:44px}
          .dsauth-hero .guide{margin:0;font-size:15px;color:#6e6e73}
          .dsauth-hero .hbtn{display:inline-flex;align-items:center;justify-content:center;padding:12px 30px;border-radius:980px;background:#0066cc;color:#fff;font-size:15px;font-weight:700;text-decoration:none;transition:background .2s}
          .dsauth-hero .hbtn:hover{background:#0077ed}
          .dsauth-hero .hi-wrap{display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center}
          .dsauth-hero .hi{margin:0;font-size:15px;color:#1d1d1f;background:#f5f5f7;padding:10px 20px;border-radius:980px}
          .dsauth-hero .hi b{font-weight:700}
          .dsauth-hero .logout{font-size:14px;font-weight:600;color:#6e6e73;text-decoration:none;padding:8px 16px;border-radius:980px;border:1px solid #d2d2d7;transition:all .2s}
          .dsauth-hero .logout:hover{background:#f5f5f7;color:#1d1d1f}
        `}</style>
      </div>
    )
  }

  return (
    <div className="dsauth">
      {state === null ? null : state.loggedIn ? (
        <>
          <span className="me" title={state.email ?? ''}>{state.email}</span>
          <a className="logout" href={logoutUrl}>로그아웃</a>
        </>
      ) : (
        <a className="login" href={loginUrl}>로그인</a>
      )}
      <style>{`
        .dsauth{position:absolute;top:24px;right:24px;z-index:5;display:flex;align-items:center;gap:8px}
        .dsauth .login{display:inline-flex;align-items:center;padding:9px 20px;border-radius:980px;background:#0066cc;color:#fff;font-size:14px;font-weight:600;text-decoration:none}
        .dsauth .login:hover{background:#0077ed}
        .dsauth .me{font-size:14px;font-weight:600;color:#1d1d1f;background:#f5f5f7;padding:9px 16px;border-radius:980px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}
        .dsauth .logout{font-size:13px;font-weight:600;color:#6e6e73;text-decoration:none;padding:8px 14px;border-radius:980px;border:1px solid #d2d2d7;white-space:nowrap;transition:all .2s}
        .dsauth .logout:hover{background:#f5f5f7;color:#1d1d1f}
        @media (max-width:600px){ .dsauth{top:16px;right:16px} }
      `}</style>
    </div>
  )
}
