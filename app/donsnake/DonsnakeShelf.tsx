"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// 돈스네이크 허브 서비스 카드 목록 + 로그인 가드.
//  · 로그인하지 않은 채 「구매하기」를 누르면 셀러AI 로그인 페이지로 넘기지 않고,
//    이 허브에서 「로그인 후 이용하세요」 안내만 띄우고 상단 로그인 폼으로 올려보낸다.
//  · 로그인돼 있으면 각 서비스 결제 페이지로 정상 이동한다.
const SELLERAI = "https://www.armes.co.kr/sellerai";

export type Card = {
  tag: string; name: string; lead: string; copy: string[]; price: string;
  emoji: string; href: string; cta: string; primary?: boolean; soon?: boolean;
};

export default function DonsnakeShelf({ cards }: { cards: Card[] }) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    fetch(`${SELLERAI}/api/auth/status`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setLoggedIn(!!d.loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  // 미로그인 상태에서 유료 카드 「구매하기」를 누르면 셀러AI 로 보내지 않고 이 허브에서 로그인 유도.
  function guard(e: React.MouseEvent, c: Card) {
    if (c.soon) return;
    if (loggedIn === false) {
      e.preventDefault();
      setNotice(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setNotice(false), 4500);
    }
  }

  return (
    <>
      {notice && (
        <div className="ds-notice">로그인 후 이용하실 수 있습니다. 위에서 먼저 로그인해 주세요.</div>
      )}
      <section className="shelf">
        {cards.map((c) => {
          const inner = (
            <>
              <div className="emoji">{c.emoji}</div>
              <div className="body">
                <span className={`tag ${c.soon ? "soon" : ""}`}>{c.tag}</span>
                <h3>{c.name}</h3>
                <p className="lead">{c.lead}</p>
                <div className="copy">{c.copy.map((t, i) => <p key={i}>{t}</p>)}</div>
                <div className="foot">
                  <span className="price">{c.price}</span>
                  <span className={`cta ${c.soon ? "off" : ""}`}>{c.cta}</span>
                </div>
              </div>
            </>
          );
          if (c.soon) return <div key={c.name} className="card soon">{inner}</div>;
          const ext = c.href.startsWith("http");
          return ext
            ? <a key={c.name} className="card" href={c.href} target="_blank" rel="noopener" onClick={(e) => guard(e, c)}>{inner}</a>
            : <Link key={c.name} className="card" href={c.href} onClick={(e) => guard(e, c)}>{inner}</Link>;
        })}
      </section>
      <style>{`
        .ds-notice{position:fixed;top:78px;left:50%;transform:translateX(-50%);z-index:60;
          background:#1d1d1f;color:#fff;font-size:14px;font-weight:600;padding:12px 22px;border-radius:980px;
          box-shadow:0 6px 20px rgba(0,0,0,.25);white-space:nowrap}
        @media (max-width:480px){ .ds-notice{font-size:12.5px;padding:11px 16px;white-space:normal;max-width:90%;text-align:center} }
      `}</style>
    </>
  );
}
