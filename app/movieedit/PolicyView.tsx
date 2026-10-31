// 무비에디트 이용약관 렌더러 — policyData.ts 글을 그대로 그린다(글 변경 없음).
//  아버지 PolicyView 와 같은 와꾸. 단 회사 정보는 원본 맨 끝 「회사 정보」 섹션으로 들어 있으므로 따로 상자를 그리지 않는다.
//  · h = 소제목 · b = 본문(\n 줄바꿈) · 「■ 」 줄 = 작은 제목 · 「· 」 줄 = 목록
//  · 글 안의 https:// 주소는 글자 그대로 두고 링크만 건다(Snap 개인정보처리방침·서비스 약관 등).

import type { PolicySection } from "./policyData";

const URL_RE = /(https?:\/\/[^\s)]+)/g;
// 「서비스」)에 처럼 닫는 괄호 뒤에 글자가 붙은 어절 — 브라우저가 괄호 뒤에서 끊으므로 어절째 묶는다
const GLUED_RE = /(\S*[)」』][^\s)」』]\S*)/g;

function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(GLUED_RE).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} data-w="1" className="whitespace-nowrap">{part}</span>
        ) : (
          part
        ),
      )}
    </>
  );
}

// 「이름 주소」로 적힌 링크는 컷잇 개인정보 페이지처럼 이름에 링크를 걸고 긴 주소 글자는 뺀다(폰에서 주소가 쪼개지지 않게)
const LINK_LABELS: Record<string, string> = {
  "https://values.snap.com/privacy/privacy-policy": "Snap 개인정보처리방침",
  "https://snap.com/terms": "Snap 서비스 약관",
};

const linkCls = "text-[#3182F6] inline-block max-w-full align-bottom break-all";

function Linkify({ text }: { text: string }) {
  const parts = text.split(URL_RE);
  // parts = [글, 주소, 글, 주소, …]
  for (let i = 1; i < parts.length; i += 2) {
    const label = LINK_LABELS[parts[i]];
    if (label && parts[i - 1].endsWith(label + " ")) {
      parts[i - 1] = parts[i - 1].slice(0, -(label.length + 1));
      parts[i] = "\u0000" + label + "\u0000" + parts[i];
    }
  }
  // 주소 앞뒤에 붙은 글자(「약관(」 「)과」)는 주소와 한 덩어리로 묶는다 — 「)과」만 다음 줄로 떨어지지 않게
  const before: string[] = [];
  const after: string[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const pre = parts[i - 1].match(/\S+$/)?.[0] ?? "";
    const post = parts[i + 1]?.match(/^\S+/)?.[0] ?? "";
    parts[i - 1] = parts[i - 1].slice(0, parts[i - 1].length - pre.length);
    if (post) parts[i + 1] = parts[i + 1].slice(post.length);
    before[i] = pre;
    after[i] = post;
  }
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <Words key={i} text={part} />;
        const [, label, href] = part.startsWith("\u0000") ? part.split("\u0000") : [null, part, part];
        return (
          <span key={i} data-g="1" className="whitespace-nowrap">
            {before[i]}
            <a href={href} target="_blank" rel="noopener noreferrer" className={label === href ? linkCls : "text-[#3182F6]"}>
              {label}
            </a>
            {after[i]}
          </span>
        );
      })}
    </>
  );
}

type Block =
  | { kind: "sub"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "p"; text: string };

function parse(b: string): Block[] {
  const out: Block[] = [];
  for (const line of b.split("\n")) {
    if (line.trim() === "") continue;
    if (line.startsWith("■ ")) out.push({ kind: "sub", text: line.slice(2) });
    else if (line.startsWith("· ")) {
      const last = out[out.length - 1];
      if (last && last.kind === "ul") last.items.push(line.slice(2));
      else out.push({ kind: "ul", items: [line.slice(2)] });
    } else out.push({ kind: "p", text: line });
  }
  return out;
}

function SectionBody({ b }: { b: string }) {
  return (
    <>
      {parse(b).map((blk, i) => {
        if (blk.kind === "sub")
          return (
            <h3 key={i} className="text-[15px] font-semibold text-[#191F28] pt-2">
              {blk.text}
            </h3>
          );
        if (blk.kind === "ul")
          return (
            <ul key={i} className="list-none space-y-2">
              {blk.items.map((t, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
                  <span className="[text-wrap:balance]"><Linkify text={t} /></span>
                </li>
              ))}
            </ul>
          );
        return <p key={i}><Linkify text={blk.text} /></p>;
      })}
    </>
  );
}

export default function PolicyView({ sections, intro }: { sections: PolicySection[]; intro?: string }) {
  return (
    <div className="[text-wrap:pretty] [word-break:keep-all] [overflow-wrap:break-word]">
      {intro && (
        <div className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-3">
          {intro.split(/\n\s*\n/).map((para, i) => (
            <p key={i}><Linkify text={para} /></p>
          ))}
        </div>
      )}
      {sections.map((s) => (
        <section key={s.h} className="mb-12">
          <h2 className="text-lg font-bold text-[#191F28] mb-4">{s.h}</h2>
          <div className="text-[#4E5968] text-[15px] leading-[1.9] space-y-3 [text-wrap:balance]">
            <SectionBody b={s.b} />
          </div>
        </section>
      ))}
    </div>
  );
}
