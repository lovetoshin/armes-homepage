// 무비에디트 이용약관 렌더러 — policyData.ts 글을 그대로 그린다(글 변경 없음).
//  아버지 PolicyView 와 같은 와꾸. 단 회사 정보는 원본 맨 끝 「회사 정보」 섹션으로 들어 있으므로 따로 상자를 그리지 않는다.
//  · h = 소제목 · b = 본문(\n 줄바꿈) · 「■ 」 줄 = 작은 제목 · 「· 」 줄 = 목록

import type { PolicySection } from "./policyData";

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
                  <span className="[text-wrap:balance]">{t}</span>
                </li>
              ))}
            </ul>
          );
        return <p key={i}>{blk.text}</p>;
      })}
    </>
  );
}

export default function PolicyView({ sections }: { sections: PolicySection[] }) {
  return (
    <div className="[text-wrap:pretty]">
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
