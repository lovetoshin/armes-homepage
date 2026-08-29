'use client'

import { useEffect, useState, type FormEvent } from 'react'

// 돈스네이크 허브 통합 로그인 위젯.
//  · 셀러AI(같은 도메인 /sellerai)에 로그인 상태를 물어본다.
//  · 로그인 안 됐으면 「로그인」 버튼(셀러AI 로그인 → 허브 복귀).
//  · 로그인했으면 이메일 + 로그아웃 버튼 표시.
//  · variant='corner'(기본)=우상단 작은 버튼 / variant='hero'=히어로 안내+큰 버튼.
const SELLERAI = 'https://www.armes.co.kr/sellerai'
const HUB = 'https://www.armes.co.kr/donsnake'

export default function DonsnakeAuth({ variant = 'corner' }: { variant?: 'corner' | 'hero' }) {
  const [state, setState] = useState<{ loggedIn: boolean; email: string | null } | null>(null)
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [loginErr, setLoginErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`${SELLERAI}/api/auth/status`, { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setState({ loggedIn: !!d.loggedIn, email: d.email ?? null }))
      .catch(() => setState({ loggedIn: false, email: null }))
  }, [])

  const loginUrl = `${SELLERAI}/login?next=${encodeURIComponent(HUB)}`
  const logoutUrl = `${SELLERAI}/api/auth/logout?next=${encodeURIComponent(HUB)}`
  const myUrl = `${SELLERAI}/my`

  // 허브에서 페이지 이동 없이 바로 로그인 — 셀러AI 로그인 API 호출(같은 도메인이라 세션 쿠키 공유).
  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    setLoginErr(null); setLoading(true)
    try {
      const r = await fetch(`${SELLERAI}/api/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password: pw }),
      }).then((x) => x.json())
      if (r.success) { window.location.reload() }
      else setLoginErr(r.error ?? '로그인에 실패했습니다.')
    } catch {
      setLoginErr('로그인 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'hero') {
    return (
      <div className="dsauth-hero">
        {state === null ? (
          <div className="ph" />
        ) : state.loggedIn ? (
          <div className="hi-wrap">
            <p className="hi">✓ <b>{state.email}</b> 님으로 로그인되어 있습니다.</p>
            <a className="mylic" href={myUrl}>내 이용권</a>
            <a className="logout" href={logoutUrl}>로그아웃</a>
          </div>
        ) : (
          <>
            <p className="guide">로그인하면 각 서비스를 결제·이용할 수 있습니다.</p>
            <form className="loginform" onSubmit={handleLogin}>
              <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              <input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" required />
              <button type="submit" disabled={loading}>{loading ? '로그인 중…' : '로그인'}</button>
            </form>
            {loginErr && <p className="lerr">{loginErr}</p>}
            <p className="lalt"><a href={loginUrl}>구글 로그인 · 회원가입 →</a></p>
          </>
        )}
        <style>{`
          .dsauth-hero{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:6px}
          .dsauth-hero .ph{height:44px}
          .dsauth-hero .guide{margin:0;font-size:15px;color:#6e6e73}
          .dsauth-hero .loginform{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;width:100%;max-width:440px}
          .dsauth-hero .loginform input{flex:1;min-width:150px;padding:11px 14px;border:1px solid #d2d2d7;border-radius:10px;font-size:14px;background:#fff;color:#1d1d1f}
          .dsauth-hero .loginform input:focus{outline:none;border-color:#0066cc}
          .dsauth-hero .loginform button{padding:11px 24px;border:0;border-radius:10px;background:#0066cc;color:#fff;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;transition:background .2s}
          .dsauth-hero .loginform button:hover{background:#0077ed}
          .dsauth-hero .loginform button:disabled{opacity:.6;cursor:default}
          .dsauth-hero .lerr{margin:0;font-size:13px;color:#c0332b}
          .dsauth-hero .lalt{margin:0}
          .dsauth-hero .lalt a{font-size:13px;color:#6e6e73;text-decoration:none}
          .dsauth-hero .lalt a:hover{color:#1d1d1f}
          .dsauth-hero .hi-wrap{display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center}
          .dsauth-hero .hi{margin:0;font-size:15px;color:#1d1d1f;background:#f5f5f7;padding:10px 20px;border-radius:980px}
          .dsauth-hero .hi b{font-weight:700}
          .dsauth-hero .mylic{font-size:14px;font-weight:700;color:#1d1d1f;text-decoration:none;padding:8px 18px;border-radius:980px;border:1px solid #1d1d1f;transition:all .2s}
          .dsauth-hero .mylic:hover{background:#1d1d1f;color:#fff}
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
          <a className="mylic" href={myUrl}>내 이용권</a>
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
        .dsauth .mylic{font-size:13px;font-weight:700;color:#1d1d1f;text-decoration:none;padding:8px 16px;border-radius:980px;border:1px solid #1d1d1f;white-space:nowrap;transition:all .2s}
        .dsauth .mylic:hover{background:#1d1d1f;color:#fff}
        .dsauth .logout{font-size:13px;font-weight:600;color:#6e6e73;text-decoration:none;padding:8px 14px;border-radius:980px;border:1px solid #d2d2d7;white-space:nowrap;transition:all .2s}
        .dsauth .logout:hover{background:#f5f5f7;color:#1d1d1f}
        @media (max-width:600px){ .dsauth{top:16px;right:16px} }
      `}</style>
    </div>
  )
}
