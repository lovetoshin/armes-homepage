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
  const [state, setState] = useState<{ loggedIn: boolean; email: string | null; isAdmin: boolean } | null>(null)
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [loginErr, setLoginErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [name, setName] = useState('')

  useEffect(() => {
    fetch(`${SELLERAI}/api/auth/status`, { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setState({ loggedIn: !!d.loggedIn, email: d.email ?? null, isAdmin: !!d.isAdmin }))
      .catch(() => setState({ loggedIn: false, email: null, isAdmin: false }))
  }, [])

  const loginUrl = `${SELLERAI}/login?next=${encodeURIComponent(HUB)}`
  const logoutUrl = `${SELLERAI}/api/auth/logout?next=${encodeURIComponent(HUB)}`
  const myUrl = `${SELLERAI}/my`
  const adminUrl = `${SELLERAI}/admin`
  // 구글 로그인도 허브에서 바로 시작(다른 페이지로 안 보냄). 구글 OAuth 자체는 구글 사이트로 이동 후 허브로 복귀.
  const googleUrl = `${SELLERAI}/api/auth/google?next=${encodeURIComponent(HUB)}`

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

  // 허브에서 바로 회원가입 — 셀러AI signup 으로 계정 생성 후, login 으로 세션 쿠키를 심고 새로고침.
  async function handleSignup(e: FormEvent) {
    e.preventDefault()
    setLoginErr(null); setLoading(true)
    try {
      const s = await fetch(`${SELLERAI}/api/auth/signup`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password: pw, displayName: name }),
      }).then((x) => x.json())
      if (!s.success) { setLoginErr(s.error ?? '회원가입에 실패했습니다.'); return }
      const l = await fetch(`${SELLERAI}/api/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password: pw }),
      }).then((x) => x.json())
      if (l.success) { window.location.reload() }
      else setLoginErr('가입은 됐지만 로그인에 실패했습니다. 로그인해 주세요.')
    } catch {
      setLoginErr('회원가입 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'hero') {
    return (
      <div className="dsauth-hero">
        {/* 로그인 상태 확인(fetch)이 끝나기 전에도 폼을 바로 그린다 — 예전엔 확인될 때까지 빈
            자리(.ph)만 있어 로그인 영역이 카드보다 한참 늦게 떴다. 대부분 방문자는 미로그인이라
            폼을 먼저 보이고, 로그인된 것으로 확인되면 아래 로그인됨 UI 로 교체한다(2026-09-06). */}
        {state?.loggedIn ? (
          <div className="hi-wrap">
            <p className="hi">✓ <b>{state.email}</b> 님으로 로그인되어 있습니다.</p>
            <a className="mylic" href={myUrl}>내 이용권</a>
            {state.isAdmin && <a className="mylic" href={adminUrl}>어드민</a>}
            <a className="logout" href={logoutUrl}>로그아웃</a>
          </div>
        ) : (
          <div className="authcard">
            <a className="gbtn" href={googleUrl}>
              <svg viewBox="0 0 48 48" width="17" height="17" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              구글로 로그인
            </a>
            <div className="oline"><span>또는 이메일로 {mode === 'login' ? '로그인' : '회원가입'}</span></div>
            <form className="loginform" onSubmit={mode === 'login' ? handleLogin : handleSignup}>
              <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              <input type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required />
              {mode === 'signup' && (
                <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              )}
              <button type="submit" disabled={loading}>{loading ? '처리 중…' : mode === 'login' ? '로그인' : '회원가입'}</button>
            </form>
            {loginErr && <p className="lerr">{loginErr}</p>}
            <button type="button" className="switch" onClick={() => { setLoginErr(null); setMode(mode === 'login' ? 'signup' : 'login') }}>
              {mode === 'login' ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
            </button>
          </div>
        )}
        <style>{`
          .dsauth-hero{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:48px}
          .dsauth-hero .ph{height:44px}
          .dsauth-hero .authcard{display:flex;flex-direction:column;gap:9px;width:100%;max-width:440px;margin:0 auto}
          .dsauth-hero .gbtn{display:flex;align-items:center;justify-content:center;gap:8px;padding:11px;border:1px solid #d2d2d7;border-radius:10px;background:#fff;color:#1d1d1f;font-size:14px;font-weight:600;text-decoration:none;transition:background .2s}
          .dsauth-hero .gbtn:hover{background:#f5f5f7}
          .dsauth-hero .oline{display:flex;align-items:center;gap:10px;color:#86868b;font-size:12px}
          .dsauth-hero .oline::before,.dsauth-hero .oline::after{content:'';flex:1;height:1px;background:#e5e5ea}
          .dsauth-hero .loginform{display:flex;gap:8px;flex-wrap:wrap}
          .dsauth-hero .loginform input{flex:1;min-width:130px;padding:11px 14px;border:1px solid #d2d2d7;border-radius:10px;font-size:14px;background:#fff;color:#1d1d1f}
          .dsauth-hero .loginform input:focus{outline:none;border-color:#0066cc}
          .dsauth-hero .loginform button{padding:11px 26px;border:0;border-radius:10px;background:#0066cc;color:#fff;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;transition:background .2s}
          .dsauth-hero .loginform button:hover{background:#0077ed}
          .dsauth-hero .loginform button:disabled{opacity:.6;cursor:default}
          .dsauth-hero .lerr{margin:0;font-size:13px;color:#c0332b;text-align:center}
          .dsauth-hero .switch{background:none;border:0;color:#0066cc;font-size:13px;font-weight:600;cursor:pointer;padding:2px}
          .dsauth-hero .switch:hover{text-decoration:underline}
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
      {state?.loggedIn ? (
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
