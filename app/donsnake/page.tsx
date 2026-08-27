import type { Metadata } from "next";
import Link from "next/link";

// 돈스네이크 허브 — 아르메스의 판매 자동화 도구 진열대(ko 전용)
//  · 결제(포트원)는 셀러AI가 처리한다. 여기(본체)는 진열대 + 소개만.
//  · 부스터 「구매하기」는 셀러AI 소개→결제로 이어진다.
export const metadata: Metadata = {
  title: "돈스네이크 — 사람이 하던 판매 일을, 프로그램이 대신합니다",
  description:
    "셀러AI·블로그부스터·인별부스터·쇼츠릴스부스터. 상품 사진, 블로그 글, 인스타 게시물, 짧은 영상까지 판매에 필요한 일을 프로그램이 대신합니다.",
  alternates: { canonical: "/donsnake" },
};

const SELLERAI = "https://www.armes.co.kr/sellerai/studio";

type Card = {
  tag: string;
  name: string;
  what: string;
  how: string;
  price: string;
  emoji: string;
  href: string;
  cta: string;
  cls: string;
};

const CARDS: Card[] = [
  {
    tag: "운영중", name: "셀러AI",
    what: "상품 사진을\n대신 만들어 줍니다.",
    how: "사진 한 장만 올리면 모델이 입은 컷, 배경 지운 컷, 색깔만 바꾼 컷, 상세페이지까지 나옵니다. 촬영도 편집자도 필요 없습니다.",
    price: "무료 시작 · 월 29,000원부터", emoji: "🛍️",
    href: SELLERAI, cta: "시작하기", cls: "c-sell",
  },
  {
    tag: "판매중", name: "블로그부스터",
    what: "블로그 글을\n대신 써서 올려 줍니다.",
    how: "사람들이 뭘 검색하는지 찾아내고, 그 검색어로 글을 씁니다. 사진까지 붙여 정해둔 시간에 알아서 발행합니다.",
    price: "월 30,000원 · 연 300,000원 (VAT 별도)", emoji: "✍️",
    href: "/donsnake/blogbooster", cta: "자세히 보기", cls: "c-blog",
  },
  {
    tag: "판매중", name: "인별부스터",
    what: "인스타 게시물을\n대신 만들어 올려 줍니다.",
    how: "상품만 넣으면 카드뉴스와 밑에 들어갈 글, 해시태그까지 만듭니다. 한 달치를 미리 쌓아 예약해두면 손댈 일이 없습니다.",
    price: "월 30,000원 · 연 300,000원 (VAT 별도)", emoji: "📷",
    href: "https://www.armes.co.kr/sellerai/booster/instabooster", cta: "구매하기", cls: "c-insta",
  },
  {
    tag: "판매중", name: "쇼츠릴스부스터",
    what: "짧은 영상을\n대신 만들어 줍니다.",
    how: "주제만 정하면 대본을 짜고 장면을 만들어 붙입니다. 목소리와 자막까지 넣은 세로 영상이 나옵니다. 확인하고 올리기만 하면 됩니다.",
    price: "월 30,000원 · 연 300,000원 (VAT 별도)", emoji: "🎬",
    href: "https://www.armes.co.kr/sellerai/booster/shortsbooster", cta: "구매하기", cls: "c-shorts",
  },
];

export default function DonsnakePage() {
  return (
    <main className="ds">
      <section className="head">
        <div className="wrap">
          <h1>돈스네이크</h1>
          <p className="sub">사람이 하던 판매 일을, 프로그램이 대신합니다.</p>
        </div>
      </section>

      <section id="shelf">
        <div className="wrap">
          <h2 className="sec">네 가지 도구. <span>필요한 것만 골라 쓰세요.</span></h2>
          <div className="shelf">
            {CARDS.map((c) => {
              const ext = c.href.startsWith("http");
              const Inner = (
                <>
                  <div className={`tag ${c.tag === "운영중" ? "tag-live" : "tag-sale"}`}>{c.tag}</div>
                  <h3>{c.name}</h3>
                  <p className="what">{c.what.split("\n").map((t, i) => <span key={i}>{t}<br /></span>)}</p>
                  <p className="how">{c.how}</p>
                  <div className="price">{c.price}</div>
                  <div className="visual">{c.emoji}</div>
                  <span className="go">{c.cta}</span>
                </>
              );
              return ext ? (
                <a key={c.name} className={`card ${c.cls}`} href={c.href} target="_blank" rel="noopener">{Inner}</a>
              ) : (
                <Link key={c.name} className={`card ${c.cls}`} href={c.href}>{Inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="strip" id="flow">
        <div className="wrap">
          <h2>넷을 이어 붙이면<br />판매 한 바퀴가 자동으로 돕니다.</h2>
          <p>따로 써도 되고, 이어 써도 됩니다.</p>
          <div className="steps">
            <div className="step"><b>① 만들고</b><span>셀러AI로 상품컷과 상세페이지</span></div>
            <div className="step"><b>② 검색 잡고</b><span>블로그로 찾아 들어오는 길</span></div>
            <div className="step"><b>③ 보여주고</b><span>인스타로 눈에 익게</span></div>
            <div className="step"><b>④ 퍼뜨립니다</b><span>짧은 영상으로 넓게</span></div>
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
        .ds{color:#f5f5f7;word-break:keep-all}
        .ds .wrap{max-width:1240px;margin:0 auto;padding:0 24px}
        .ds .head{padding:56px 0 30px}
        .ds .head h1{font-size:56px;line-height:1.05;font-weight:800;letter-spacing:-.035em;margin:0}
        .ds .head .sub{font-size:19px;color:#a1a1a6;margin:14px 0 0;letter-spacing:-.015em}
        .ds .sec{font-size:30px;font-weight:800;letter-spacing:-.028em;margin:0 0 24px;line-height:1.25}
        .ds .sec span{color:#86868b}
        .ds .shelf{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding-bottom:44px}
        .ds .card{border-radius:20px;padding:28px 24px 92px;min-height:440px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);transition:transform .15s,border-color .15s}
        .ds .card:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.22)}
        .ds .c-sell{background:linear-gradient(165deg,#1c1c20,#111114)}
        .ds .c-blog{background:linear-gradient(165deg,#14202e,#0f1620)}
        .ds .c-insta{background:linear-gradient(165deg,#241826,#160f18)}
        .ds .c-shorts{background:linear-gradient(165deg,#2a1c14,#1a110c)}
        .ds .tag{font-size:11.5px;font-weight:800;letter-spacing:.02em;margin-bottom:10px}
        .ds .tag-live{color:#4ade80}
        .ds .tag-sale{color:#4ade80}
        .ds .card h3{font-size:24px;font-weight:800;letter-spacing:-.03em;margin:0 0 12px;line-height:1.2}
        .ds .what{font-size:16.5px;font-weight:700;line-height:1.45;letter-spacing:-.02em;margin:0 0 10px}
        .ds .how{font-size:13.5px;line-height:1.55;color:#a1a1a6;margin:0 0 14px}
        .ds .price{font-size:12.5px;font-weight:600;color:#c7c7cc}
        .ds .visual{margin-top:auto;display:grid;place-items:center;font-size:74px;line-height:1;padding:14px 0 0;filter:drop-shadow(0 10px 22px rgba(0,0,0,.4))}
        .ds .go{position:absolute;left:24px;right:24px;bottom:24px;text-align:center;font-size:14.5px;font-weight:800;padding:13px;border-radius:12px;white-space:nowrap;background:#0071e3;color:#fff}
        .ds .card:hover .go{background:#0060c8}
        .ds .strip{margin-top:20px;background:#121214;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07)}
        .ds .strip .wrap{padding:56px 24px;text-align:center}
        .ds .strip h2{font-size:32px;font-weight:800;letter-spacing:-.03em;margin:0 0 12px;line-height:1.28}
        .ds .strip p{font-size:16px;color:#a1a1a6;margin:0 0 28px}
        .ds .steps{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .ds .step{background:#1c1c20;border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:22px 18px;min-width:196px;flex:1;max-width:252px}
        .ds .step b{display:block;font-size:15.5px;font-weight:800;margin-bottom:6px}
        .ds .step span{font-size:13px;color:#86868b;line-height:1.5}
        .ds .foot{padding:34px 0 60px;font-size:12px;color:#86868b;line-height:1.85}
        @media (max-width:1100px){ .ds .shelf{grid-template-columns:repeat(2,1fr)} }
        @media (max-width:860px){ .ds .head h1{font-size:38px} .ds .head .sub{font-size:16px} .ds .sec{font-size:24px} .ds .strip h2{font-size:25px} .ds .card{min-height:390px} }
        @media (max-width:560px){ .ds .shelf{grid-template-columns:1fr} }
      `}</style>
    </main>
  );
}
