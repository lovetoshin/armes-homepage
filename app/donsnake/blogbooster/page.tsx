import type { Metadata } from "next";

// 블로그부스터 소개 — 애플 스타일(라이트). 구매는 셀러AI 결제로.
export const metadata: Metadata = {
  title: "블로그부스터 — AI로 썼는데 사람이 쓴 것처럼",
  description:
    "네이버 블로그 자동 발행 프로그램. 주제만 고르면 글·사진·발행까지 알아서. 기계 티가 안 나게 흐트러뜨려 저품질 위험을 줄입니다. 월 30,000원.",
  alternates: { canonical: "/donsnake/blogbooster" },
};

const BUY = "https://www.armes.co.kr/sellerai/booster/blogbooster";

const GUARDS = [
  { no: "01", t: "카테고리 20가지, 골라서 일관되게", p: "IT · 생활용품 · 드라마 · 맛집 등 20가지 중 원하는 것만 골라 쓰거나, 하나를 정해 계속 밀고 갈 수 있습니다. 블로그는 주제가 한 곳으로 모여야 힘이 붙습니다.", x: "주제가 섞이면 힘이 안 붙음", o: "고른 카테고리로 쭉" },
  { no: "02", t: "글 길이를 들쭉날쭉하게", p: "사람은 어떤 날은 길게, 어떤 날은 짧게 씁니다. 짧게·보통·길게를 섞고, 인사말과 마무리 문장도 여러 벌 중에서 매번 다른 것을 고릅니다.", x: "마무리 문구가 늘 동일", o: "길이도 문장도 매번 다름" },
  { no: "03", t: "한 번에 30편, 하루 3편까지만", p: "한 번 돌리면 최대 30편까지 만듭니다. 다만 하루에 올라가는 건 최대 3편입니다. 한꺼번에 쏟아부으면 블로그가 위험해집니다.", x: "만든 만큼 몰아서 발행", o: "하루 3편까지만 발행" },
  { no: "04", t: "올리는 시간도 흐트러뜨립니다", p: "하루 한 편, 두 편, 세 편을 들쭉날쭉 나누고 올리는 시각도 매번 다르게 잡습니다. 사람이 올리는 것처럼 보여야 합니다.", x: "매일 3편 · 같은 시각", o: "1~3편 · 시각 랜덤" },
];

const STEPS = [
  { n: "1", t: "카테고리를 고릅니다", p: "20가지 중에서 고르십니다. 여러 개를 골라 쓰셔도 되고, 하나만 정해 쭉 밀고 가셔도 됩니다." },
  { n: "2", t: "몇 편 쓸지 정합니다", p: "한 번에 최대 30편까지 만듭니다. 그 시점에 검색을 돌려 지금 사람들이 찾는 소재로 씁니다." },
  { n: "3", t: "사진까지 그려 넣습니다", p: "남의 사진을 퍼오지 않습니다. 문단마다 어울리는 그림을 새로 만들어 넣어 어색하지 않습니다." },
  { n: "4", t: "예약을 걸어두면 끝납니다", p: "편마다 다른 날짜·시간으로 예약이 걸립니다. 프로그램을 꺼둬도 정해진 때에 네이버 블로그에 올라갑니다." },
];

const FAQ = [
  { q: "글 쓰는 비용이 따로 드나요?", a: "네. 글과 사진을 만드는 데 OpenAI(GPT) 사용료가 듭니다. 저희가 받는 돈이 아니라 고객님이 OpenAI에 직접 내시는 비용이고, 쓴 만큼만 나갑니다. 글 10편에 사진 45장 정도면 대략 5,000원 안팎입니다." },
  { q: "저품질에 정말 안 걸리나요?", a: "'절대 안 걸린다'고 장담드리지는 않습니다. 다만 기계로 찍은 티가 나는 부분(같은 마무리 문구·같은 길이·같은 시각 발행)을 사람처럼 흐트러뜨려 걸릴 위험을 크게 줄입니다." },
  { q: "결제되는 걸 깜빡하면요?", a: "자동 결제되기 전에 이메일로 미리 알려드립니다. 월 구독은 결제 3일 전, 연 구독은 7일 전입니다. 원하지 않으시면 그 안에 해지하시면 됩니다." },
  { q: "어떻게 쓰는 프로그램인가요?", a: "윈도우 컴퓨터에 설치하는 프로그램입니다. 결제하시면 정품키가 발급되고, 그 키로 설치 파일을 받아 정품키를 입력하면 바로 쓰실 수 있습니다." },
];

export default function BlogboosterIntro() {
  return (
    <main className="bi">
      <nav className="topbar">
        <div className="wrap">
          <a className="brand" href="/donsnake">돈스네이크</a>
          <a className="buy-top" href={BUY}>구매하기</a>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">블로그부스터 · 네이버 블로그 자동 발행</span>
          <h1>AI로 썼는데<br /><span className="grad">사람이 쓴 것처럼</span> 나옵니다.</h1>
          <p className="lede">그래서 저품질에 걸릴 위험을 크게 줄입니다. 주제만 고르시면 글도, 사진도, 발행까지 알아서 합니다.</p>
          <div className="cta">
            <a className="btn primary" href={BUY}>월 30,000원으로 시작하기</a>
            <a className="btn ghost" href="#why">저품질 대책 보기 ›</a>
          </div>
          <div className="fine">부가세 별도 · 연 구독 300,000원 (2개월치 절약)</div>
        </div>
      </section>

      <section className="warn">
        <div className="wrap">
          <span className="eyebrow blue">이런 일이 실제로 벌어집니다</span>
          <h2>AI로 글 쓰다가<br />블로그가 죽는 경우</h2>
          <p className="sub">글이 좋아도 소용없습니다. 네이버가 "이 블로그 기계다"라고 판단하는 순간 검색에서 사라집니다.</p>
          <div className="chat">
            <div className="bub">
              <div className="who">보통 AI로 뽑아 올린 글들</div>
              <p>소제목이 전부 「~일까요?」로 끝나고, 마무리 문장은 어느 글이나 똑같고, 글 길이도 전부 비슷하고, 매일 정확히 같은 개수·같은 시간에 올라감</p>
            </div>
            <div className="verdict">
              <b>네이버 판정</b>
              <span>사람이 쓴 글이 아니라 기계가 찍어낸 글로 봅니다. 이렇게 찍히면 그동안 쌓아온 블로그 전체가 검색에서 밀려납니다.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="why">
        <div className="wrap">
          <span className="eyebrow">블로그부스터가 다른 이유</span>
          <h2>주제는 일관되게,<br />글은 기계 티 안 나게.</h2>
          <p className="sub">네이버는 "주제가 한 곳으로 모인 블로그"를 좋게 봅니다. 반대로 "규칙적으로 찍어낸 글"은 기계로 봅니다.</p>
          <div className="guards">
            {GUARDS.map((g) => (
              <div className="guard" key={g.no}>
                <div className="gn">{g.no}</div>
                <b>{g.t}</b>
                <p>{g.p}</p>
                <div className="cmp">
                  <div className="x"><em>보통 AI</em>{g.x}</div>
                  <div className="o"><em>블로그부스터</em>{g.o}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec gray" id="how">
        <div className="wrap">
          <span className="eyebrow blue">쓰는 법</span>
          <h2>처음 한 번만 정하면<br />그다음은 손댈 일이 없습니다.</h2>
          <p className="sub">직장 다니면서 쓰는 분들을 위해 만들었습니다. 하루 5분도 안 쓰게 하는 게 목표였습니다.</p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="stepx" key={s.n}>
                <div className="sn">{s.n}</div>
                <div><b>{s.t}</b><p>{s.p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="price">
        <div className="wrap">
          <span className="eyebrow">가격</span>
          <h2>월 30,000원입니다.</h2>
          <div className="big">30,000<small>원 / 월</small></div>
          <div className="alt">연 이용권 300,000원 — 두 달치를 아끼십니다</div>
          <a className="btn primary lg" href={BUY}>구매하러 가기</a>
          <div className="fine">부가세 별도 · 세금계산서 발행 가능 · 언제든 해지 가능</div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow">자주 묻는 질문</span>
          <div className="faq">
            {FAQ.map((f) => (
              <div className="qa" key={f.q}><b>{f.q}</b><span>{f.a}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="last">
        <div className="wrap">
          <h2>블로그, 이제 알아서 굴러가게.</h2>
          <p>처음 한 번만 정해두시면 됩니다.</p>
          <a className="btn white lg" href={BUY}>월 30,000원으로 시작하기</a>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">주식회사 아르메스 · 대표 신지한 · 사업자등록번호 798-86-02943 · support.armes@gmail.com</div>
      </footer>

      <style>{`
        .bi{
          --bg:#fff; --gray:#f5f5f7; --dark:#1d1d1f; --t1:#1d1d1f; --t2:#6e6e73; --t3:#86868b;
          --blue:#0066cc; --blue2:#0077ed; --rcard:20px; --rpill:980px;
          --shadow:0 2px 8px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.08);
          --font:"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,system-ui,sans-serif;
          background:var(--bg);color:var(--t1);font-family:var(--font);word-break:keep-all;-webkit-font-smoothing:antialiased;
        }
        .bi .wrap{max-width:980px;margin:0 auto;padding:0 24px}
        .bi .topbar{border-bottom:1px solid rgba(0,0,0,.08);position:sticky;top:0;background:rgba(255,255,255,.82);backdrop-filter:saturate(180%) blur(20px);z-index:50}
        .bi .topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:52px}
        .bi .brand{font-size:16px;font-weight:700;color:var(--t1)}
        .bi .buy-top{font-size:14px;font-weight:600;color:#fff;background:var(--blue);padding:8px 18px;border-radius:var(--rpill)}
        .bi .eyebrow{display:inline-block;font-size:14px;font-weight:600;color:var(--blue);margin-bottom:14px}
        .bi .eyebrow.blue{color:#5AC8FA}
        .bi h1{font-size:60px;font-weight:700;letter-spacing:-.03em;line-height:1.08;margin:0 0 18px}
        .bi .grad{background:linear-gradient(90deg,#2997ff,#5ac8fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .bi .hero{text-align:center;padding:80px 0 60px}
        .bi .lede{font-size:21px;color:var(--t2);margin:0 0 30px;line-height:1.5}
        .bi .cta{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .bi .btn{display:inline-flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;padding:14px 28px;border-radius:var(--rpill);transition:all .2s}
        .bi .btn.lg{font-size:17px;padding:16px 34px}
        .bi .btn.primary{background:var(--blue);color:#fff}
        .bi .btn.primary:hover{background:var(--blue2)}
        .bi .btn.ghost{color:var(--blue)}
        .bi .btn.white{background:#fff;color:var(--dark)}
        .bi .fine{font-size:13px;color:var(--t3);margin-top:16px}
        .bi .warn{background:var(--dark);color:#f5f5f7;text-align:center;padding:96px 0}
        .bi .warn h2{font-size:44px;font-weight:700;letter-spacing:-.025em;line-height:1.15;margin:0 0 16px;color:#fff}
        .bi .warn .sub{font-size:18px;color:#a1a1a6;margin:0 auto 40px;max-width:640px;line-height:1.55}
        .bi .chat{display:grid;gap:16px;max-width:720px;margin:0 auto;text-align:left}
        .bi .bub{background:#2a1416;border:1px solid rgba(255,120,120,.3);border-radius:16px;padding:22px 24px}
        .bi .who{font-size:12.5px;font-weight:700;color:#ff8b8b;margin-bottom:8px}
        .bi .bub p{margin:0;font-size:15px;line-height:1.6;color:#e0d0d0}
        .bi .verdict{background:#26262a;border-radius:16px;padding:22px 24px}
        .bi .verdict b{display:block;font-size:13px;font-weight:700;color:#ff8b8b;margin-bottom:8px}
        .bi .verdict span{font-size:15px;color:#a1a1a6;line-height:1.6}
        .bi .sec{padding:96px 0;text-align:center}
        .bi .sec.gray{background:var(--gray)}
        .bi .sec h2,.bi .price h2{font-size:44px;font-weight:700;letter-spacing:-.025em;line-height:1.15;margin:0 0 16px}
        .bi .sub{font-size:18px;color:var(--t2);margin:0 auto 48px;max-width:640px;line-height:1.55}
        .bi .guards{display:grid;grid-template-columns:1fr 1fr;gap:20px;text-align:left}
        .bi .guard{background:var(--bg);border-radius:var(--rcard);padding:32px 28px;box-shadow:var(--shadow)}
        .bi .gn{font-size:14px;font-weight:700;color:var(--blue);margin-bottom:12px}
        .bi .guard b{display:block;font-size:20px;font-weight:700;letter-spacing:-.02em;margin-bottom:10px}
        .bi .guard p{font-size:15px;color:var(--t2);line-height:1.6;margin:0 0 18px}
        .bi .cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .bi .cmp div{font-size:13px;line-height:1.4;padding:12px 14px;border-radius:12px}
        .bi .cmp em{display:block;font-style:normal;font-weight:700;margin-bottom:4px;font-size:11.5px;opacity:.7}
        .bi .cmp .x{background:#fbeaea;color:#a04040}
        .bi .cmp .o{background:#e8f5ea;color:#2d7a3c}
        .bi .steps{display:grid;gap:16px;max-width:820px;margin:0 auto;text-align:left}
        .bi .stepx{display:flex;gap:20px;background:var(--bg);border-radius:var(--rcard);padding:26px 30px;box-shadow:var(--shadow);align-items:flex-start}
        .bi .sn{flex:0 0 36px;height:36px;border-radius:50%;background:var(--blue);color:#fff;font-weight:700;display:grid;place-items:center;font-size:16px}
        .bi .stepx b{display:block;font-size:18px;font-weight:700;margin-bottom:6px}
        .bi .stepx p{margin:0;font-size:15px;color:var(--t2);line-height:1.6}
        .bi .price{background:var(--gray);text-align:center;padding:96px 0}
        .bi .big{font-size:52px;font-weight:700;letter-spacing:-.03em;margin-top:8px}
        .bi .big small{font-size:20px;font-weight:500;color:var(--t2)}
        .bi .alt{font-size:16px;color:var(--t2);margin:10px 0 28px}
        .bi .faq{max-width:760px;margin:0 auto;text-align:left}
        .bi .qa{border-bottom:1px solid rgba(0,0,0,.1);padding:26px 0}
        .bi .qa b{display:block;font-size:19px;font-weight:700;margin-bottom:10px;letter-spacing:-.01em}
        .bi .qa span{font-size:15.5px;color:var(--t2);line-height:1.7}
        .bi .last{background:var(--dark);color:#fff;text-align:center;padding:100px 0}
        .bi .last h2{font-size:40px;font-weight:700;letter-spacing:-.025em;margin:0 0 14px;color:#fff}
        .bi .last p{color:#a1a1a6;font-size:18px;margin:0 0 32px}
        .bi .foot{padding:36px 0 60px;text-align:center;font-size:12px;color:var(--t3)}
        @media (max-width:860px){
          .bi h1{font-size:38px} .bi .lede{font-size:17px}
          .bi .warn h2,.bi .sec h2,.bi .price h2,.bi .last h2{font-size:28px}
          .bi .guards,.bi .cmp{grid-template-columns:1fr}
          .bi .sec,.bi .warn,.bi .price{padding:64px 0}
          .bi .big{font-size:40px}
        }
      `}</style>
    </main>
  );
}
