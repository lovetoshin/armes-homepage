import type { Metadata } from "next";
import Link from "next/link";
import DonsnakeAuth from "./DonsnakeAuth";

// 돈스네이크 허브 — 애플 스타일(라이트). 2x2 넓은 가로 카드(이모지 왼쪽·글 오른쪽·가격/버튼 한 줄).
export const metadata: Metadata = {
  title: "돈스네이크 — 사람이 하던 판매 일을, 프로그램이 대신합니다",
  description:
    "셀러AI·블로그부스터·인별부스터·쇼츠릴스부스터. 상품 사진, 블로그 글, 인스타 게시물, 짧은 영상까지 판매에 필요한 일을 프로그램이 대신합니다.",
  alternates: { canonical: "/donsnake" },
};

const SELLERAI = "https://www.armes.co.kr/sellerai/studio/pricing";
const PAY = (s: string) => `https://www.armes.co.kr/sellerai/booster/${s}`;

type Card = { tag: string; name: string; lead: string; copy: string[]; price: string; emoji: string; href: string; cta: string; primary?: boolean; soon?: boolean };

const CARDS: Card[] = [
  { tag: "운영중", name: "셀러AI", lead: "상품 이미지·상세페이지 자동화", emoji: "🛍️",
    copy: [
      "사진 한 장이면 충분합니다. 모델 착장컷도, 배경을 지운 누끼컷도, 상세페이지까지 자동으로 완성됩니다.",
      "촬영장도 디자이너도 없이, 상품 등록에 쓰던 반나절을 되찾으세요.",
    ],
    price: "무료 시작 · 월 29,000원~", href: SELLERAI, cta: "구매하기", primary: true },
  { tag: "판매중", name: "블로그부스터", lead: "검색 잡는 블로그 글, 자동 발행", emoji: "✍️",
    copy: [
      "잘 키운 블로그 하나가 매달 수익이 됩니다.",
      "검색 상위에 오른 글은 애드포스트 광고 수익이 되고, 쿠팡파트너스·제휴마케팅으로 이어집니다. 내 가게 홍보는 덤입니다.",
    ],
    price: "월 30,000원 · 연 300,000원", href: PAY("blogbooster"), cta: "구매하기" },
  { tag: "판매중", name: "인별부스터", lead: "인스타 게시물, 자동 제작·예약", emoji: "📷",
    copy: [
      "인스타는 지금 가장 빠른 홍보 창구입니다.",
      "내 상품과 가게를 매일 노출하고, 팔로워가 쌓이면 협찬과 광고 제안이 먼저 찾아옵니다.",
    ],
    price: "월 30,000원 · 연 300,000원", href: PAY("instabooster"), cta: "구매하기" },
  { tag: "판매중", name: "쇼츠릴스부스터", lead: "세로 영상, 대본부터 자막까지", emoji: "🎬",
    copy: [
      "짧은 영상 하나가 밤사이 퍼집니다.",
      "내 상품·가게를 영상으로 알리고, 조회수가 오르면 광고·협찬 수익으로 돌아옵니다.",
    ],
    price: "월 30,000원 · 연 300,000원", href: PAY("shortsbooster"), cta: "구매하기" },
  { tag: "판매중", name: "그로스박스", lead: "쿠팡 로켓그로스 재고·발주 자동관리", emoji: "📦",
    copy: [
      "얼마 팔렸나를 넘어, 앞으로 60일간 얼마를 사야 하는지 발주량을 자동으로 계산합니다.",
      "품절로 놓치는 매출도, 과잉재고로 묶이는 돈도 막아 드립니다.",
    ],
    price: "30일 무료체험 · 월 30,000원 · 연 300,000원", href: "https://www.armes.co.kr/sellerai/api/sso/issue", cta: "시작하기", primary: true },
  { tag: "준비중", name: "쿠팡1688풀자동화", lead: "1688 상품 → 쿠팡 자동등록", emoji: "🤖",
    copy: [
      "중국 1688 상품을 받아 상세페이지를 AI로 만들고, 쿠팡에 자동으로 등록합니다.",
      "주문·발주·배송·입고까지 한 흐름으로 처리하는 상용 자동화입니다.",
    ],
    price: "곧 오픈합니다", href: "#", cta: "준비중", soon: true },
];

export default function DonsnakePage() {
  return (
    <main className="ds">
      <DonsnakeAuth />
      <section className="hero">
        <h1>돈스네이크</h1>
        <p className="tagline">사람이 하던 판매 일을, 프로그램이 대신합니다.</p>
        <p className="lede">상품 사진부터 블로그·인스타·짧은 영상까지. 필요한 것만 골라 쓰세요.</p>
        <DonsnakeAuth variant="hero" />
      </section>

      <section className="shelf">
        {CARDS.map((c) => {
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
            ? <a key={c.name} className="card" href={c.href} target="_blank" rel="noopener">{inner}</a>
            : <Link key={c.name} className="card" href={c.href}>{inner}</Link>;
        })}
      </section>

      <style>{`
        body{background:#fff}
        .ds{
          --bg:#fff; --gray:#f5f5f7; --t1:#1d1d1f; --t2:#6e6e73; --t3:#86868b; --blue:#0066cc; --blue2:#0077ed;
          --shadow:0 2px 8px rgba(0,0,0,.04),0 10px 30px rgba(0,0,0,.07);
          --shadow-h:0 8px 20px rgba(0,0,0,.08),0 20px 48px rgba(0,0,0,.14);
          --font:"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
          background:var(--bg);color:var(--t1);font-family:var(--font);word-break:keep-all;-webkit-font-smoothing:antialiased;
          width:100%;padding:112px 0 64px;position:relative;
        }
        .ds .hero{text-align:center;max-width:1080px;margin:0 auto 48px;padding:0 24px;width:100%;box-sizing:border-box}
        .ds .hero h1{font-size:46px;font-weight:800;letter-spacing:-.04em;line-height:1;margin:0 0 10px}
        .ds .tagline{font-size:20px;font-weight:700;letter-spacing:-.02em;color:var(--t1);margin:0 0 6px;line-height:1.2}
        .ds .lede{font-size:15px;color:var(--t2);margin:0;line-height:1.4}
        .ds .shelf{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch;max-width:1080px;margin:0 auto;width:100%;padding:0 24px;box-sizing:border-box}
        .ds .card{display:flex;gap:18px;background:var(--bg);border-radius:18px;padding:18px 22px;
          box-shadow:var(--shadow);transition:box-shadow .3s,transform .3s;text-align:left;align-items:flex-start}
        .ds .card:hover{box-shadow:var(--shadow-h);transform:translateY(-4px)}
        .ds .emoji{flex:0 0 auto;font-size:40px;line-height:1;margin-top:2px}
        .ds .body{flex:1;display:flex;flex-direction:column;min-width:0}
        .ds .tag{align-self:flex-start;font-size:11px;font-weight:600;color:var(--t2);background:var(--gray);padding:3px 10px;border-radius:980px;margin-bottom:7px}
        .ds .tag.soon{background:#f0f0f2;color:#86868b}
        .ds .card.soon{cursor:default;opacity:.72}
        .ds .card.soon:hover{transform:none;box-shadow:var(--shadow)}
        .ds .cta.off{background:#e8e8ed;color:#a1a1a6}
        .ds .card.soon:hover .cta.off{background:#e8e8ed;color:#a1a1a6}
        .ds .card h3{font-size:21px;font-weight:800;letter-spacing:-.02em;margin:0 0 4px}
        .ds .lead{font-size:15px;font-weight:700;color:var(--blue);margin:0 0 8px;line-height:1.35}
        .ds .copy{margin:0 0 12px}
        .ds .copy p{font-size:13px;line-height:1.5;color:var(--t1);margin:0 0 4px}
        .ds .copy p:last-child{margin-bottom:0}
        .ds .foot{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:auto}
        .ds .price{font-size:12.5px;font-weight:600;color:var(--t3)}
        .ds .cta{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;
          padding:9px 24px;border-radius:980px;font-size:14px;font-weight:700;transition:all .2s;white-space:nowrap;
          background:var(--blue);color:#fff}
        .ds .card:hover .cta{background:var(--blue2)}
        @media (max-width:820px){
          .ds{padding-top:88px}
          .ds .hero h1{font-size:40px}
          .ds .shelf{grid-template-columns:1fr}
          .ds .card{padding:18px 20px;gap:16px}
          .ds .emoji{font-size:38px}
        }
        @media (max-width:480px){
          .ds .card{flex-direction:column}
          .ds .foot{flex-direction:column;align-items:stretch}
          .ds .cta{width:100%}
        }
      `}</style>
    </main>
  );
}
