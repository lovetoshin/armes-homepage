import type { Metadata } from "next";
import Link from "next/link";

// 돈스네이크 허브 — 애플 스타일(라이트) 진열대. 결제는 셀러AI가 처리.
export const metadata: Metadata = {
  title: "돈스네이크 — 사람이 하던 판매 일을, 프로그램이 대신합니다",
  description:
    "셀러AI·블로그부스터·인별부스터·쇼츠릴스부스터. 상품 사진, 블로그 글, 인스타 게시물, 짧은 영상까지 판매에 필요한 일을 프로그램이 대신합니다.",
  alternates: { canonical: "/donsnake" },
};

const SELLERAI = "https://www.armes.co.kr/sellerai/studio";

type Card = {
  tag: string; name: string; what: string; how: string; price: string;
  emoji: string; href: string; cta: string; primary?: boolean;
};

const CARDS: Card[] = [
  { tag: "운영중", name: "셀러AI", what: "상품 사진을 대신 만들어 줍니다.",
    how: "사진 한 장만 올리면 모델 착장컷, 배경 지운 컷, 색만 바꾼 컷, 상세페이지까지 나옵니다. 촬영도 편집자도 필요 없습니다.",
    price: "무료 시작 · 월 29,000원부터", emoji: "🛍️", href: SELLERAI, cta: "시작하기", primary: true },
  { tag: "판매중", name: "블로그부스터", what: "블로그 글을 대신 써서 올려 줍니다.",
    how: "사람들이 뭘 검색하는지 찾아내고, 그 검색어로 글을 씁니다. 사진까지 붙여 정해둔 시간에 알아서 발행합니다.",
    price: "월 30,000원 · 연 300,000원", emoji: "✍️", href: "/donsnake/blogbooster", cta: "자세히 보기" },
  { tag: "판매중", name: "인별부스터", what: "인스타 게시물을 대신 만들어 올려 줍니다.",
    how: "상품만 넣으면 카드뉴스와 밑에 들어갈 글, 해시태그까지 만듭니다. 한 달치를 미리 쌓아 예약해두면 손댈 일이 없습니다.",
    price: "월 30,000원 · 연 300,000원", emoji: "📷", href: "https://www.armes.co.kr/sellerai/booster/instabooster", cta: "구매하기" },
  { tag: "판매중", name: "쇼츠릴스부스터", what: "짧은 영상을 대신 만들어 줍니다.",
    how: "주제만 정하면 대본을 짜고 장면을 만들어 붙입니다. 목소리와 자막까지 넣은 세로 영상이 나옵니다. 확인하고 올리면 끝입니다.",
    price: "월 30,000원 · 연 300,000원", emoji: "🎬", href: "https://www.armes.co.kr/sellerai/booster/shortsbooster", cta: "구매하기" },
];

export default function DonsnakePage() {
  return (
    <main className="ds">
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">돈스네이크</span>
          <h1>사람이 하던 판매 일을,<br />프로그램이 대신합니다.</h1>
          <p className="lede">네 가지 도구가 상품 사진부터 블로그·인스타·짧은 영상까지 만들어 냅니다.<br />필요한 것만 골라 쓰세요.</p>
        </div>
      </section>

      <section className="shelf-sec">
        <div className="wrap">
          <div className="shelf">
            {CARDS.map((c) => {
              const ext = c.href.startsWith("http");
              const inner = (
                <>
                  <span className={`tag ${c.tag === "운영중" ? "on" : "sale"}`}>{c.tag}</span>
                  <div className="emoji">{c.emoji}</div>
                  <h3>{c.name}</h3>
                  <p className="what">{c.what}</p>
                  <p className="how">{c.how}</p>
                  <div className="price">{c.price}</div>
                  <span className={`cta ${c.primary ? "primary" : "secondary"}`}>{c.cta}</span>
                </>
              );
              return ext
                ? <a key={c.name} className="card" href={c.href} target="_blank" rel="noopener">{inner}</a>
                : <Link key={c.name} className="card" href={c.href}>{inner}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="flow">
        <div className="wrap">
          <h2>넷을 이어 붙이면<br />판매 한 바퀴가 자동으로 돕니다.</h2>
          <p className="sub">따로 써도 되고, 이어 써도 됩니다.</p>
          <div className="steps">
            <div className="step"><span className="n">1</span><b>만들고</b><em>셀러AI로 상품컷과 상세페이지</em></div>
            <div className="step"><span className="n">2</span><b>검색 잡고</b><em>블로그로 찾아 들어오는 길</em></div>
            <div className="step"><span className="n">3</span><b>보여주고</b><em>인스타로 눈에 익게</em></div>
            <div className="step"><span className="n">4</span><b>퍼뜨립니다</b><em>짧은 영상으로 넓게</em></div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          주식회사 아르메스 · 대표 신지한 · 사업자등록번호 798-86-02943<br />
          경기도 남양주시 경복대학교 창업보육센터 · support.armes@gmail.com
        </div>
      </footer>

      <style>{`
        .ds{
          --bg:#fff; --gray:#f5f5f7; --dark:#1d1d1f; --t1:#1d1d1f; --t2:#6e6e73; --t3:#86868b;
          --blue:#0066cc; --blue2:#0077ed; --rcard:20px; --rpill:980px;
          --shadow:0 2px 8px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.08);
          --shadow-h:0 4px 12px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.12);
          --font:"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
          background:var(--bg);color:var(--t1);font-family:var(--font);word-break:keep-all;
          -webkit-font-smoothing:antialiased;
        }
        .ds .wrap{max-width:1080px;margin:0 auto;padding:0 24px}
        .ds .hero{background:var(--bg);text-align:center;padding:96px 0 56px}
        .ds .eyebrow{display:inline-block;font-size:15px;font-weight:600;color:var(--blue);margin-bottom:16px;letter-spacing:-.01em}
        .ds .hero h1{font-size:64px;font-weight:700;line-height:1.06;letter-spacing:-.025em;margin:0 0 20px}
        .ds .lede{font-size:22px;line-height:1.45;color:var(--t2);margin:0;font-weight:400}
        .ds .shelf-sec{background:var(--bg);padding:16px 0 88px}
        .ds .shelf{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
        .ds .card{
          display:flex;flex-direction:column;background:var(--bg);border-radius:var(--rcard);
          padding:40px;box-shadow:var(--shadow);transition:box-shadow .3s ease,transform .3s ease;
          text-align:left;
        }
        .ds .card:hover{box-shadow:var(--shadow-h);transform:translateY(-4px)}
        .ds .tag{align-self:flex-start;font-size:12px;font-weight:600;letter-spacing:.02em;padding:5px 12px;border-radius:var(--rpill);margin-bottom:20px}
        .ds .tag.on{background:#e8f5ea;color:#2d8c3c}
        .ds .tag.sale{background:#eaf3ff;color:var(--blue)}
        .ds .emoji{font-size:52px;line-height:1;margin-bottom:18px}
        .ds .card h3{font-size:28px;font-weight:700;letter-spacing:-.02em;margin:0 0 10px}
        .ds .what{font-size:19px;font-weight:600;line-height:1.4;color:var(--t1);margin:0 0 12px}
        .ds .how{font-size:15px;line-height:1.55;color:var(--t2);margin:0 0 20px;flex-grow:1}
        .ds .price{font-size:14px;font-weight:500;color:var(--t3);margin-bottom:24px}
        .ds .cta{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;
          padding:12px 26px;border-radius:var(--rpill);font-size:15px;font-weight:600;transition:all .2s ease}
        .ds .cta.primary{background:var(--blue);color:#fff}
        .ds .card:hover .cta.primary{background:var(--blue2)}
        .ds .cta.secondary{background:transparent;color:var(--blue);border:1px solid rgba(0,102,204,.4)}
        .ds .card:hover .cta.secondary{background:var(--blue);color:#fff;border-color:var(--blue)}
        .ds .flow{background:var(--gray);text-align:center;padding:88px 0}
        .ds .flow h2{font-size:40px;font-weight:700;letter-spacing:-.02em;line-height:1.15;margin:0 0 12px}
        .ds .flow .sub{font-size:19px;color:var(--t2);margin:0 0 44px}
        .ds .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .ds .step{background:var(--bg);border-radius:18px;padding:28px 22px;text-align:center;box-shadow:var(--shadow)}
        .ds .step .n{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;font-size:15px;margin-bottom:14px}
        .ds .step b{display:block;font-size:17px;font-weight:600;margin-bottom:6px}
        .ds .step em{font-size:14px;color:var(--t2);font-style:normal;line-height:1.5}
        .ds .foot{background:var(--gray);text-align:center;padding:40px 0 60px;font-size:12px;color:var(--t3);line-height:1.85}
        @media (max-width:860px){
          .ds .hero{padding:64px 0 40px}
          .ds .hero h1{font-size:40px}
          .ds .lede{font-size:18px}
          .ds .shelf{grid-template-columns:1fr}
          .ds .card{padding:32px}
          .ds .flow h2{font-size:28px}
          .ds .steps{grid-template-columns:1fr 1fr}
        }
      `}</style>
    </main>
  );
}
