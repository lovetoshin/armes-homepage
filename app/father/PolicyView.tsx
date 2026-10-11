// 아버지 개인정보 처리방침·이용약관 공용 렌더러 — policyData.ts 글을 그대로 그린다(글 변경 없음).
//  · h = 소제목 · b = 본문(\n 줄바꿈, 빈 줄 = 문단 나눔)
//  · 「■ 」로 시작하는 줄 = 작은 제목 · 「· 」로 시작하는 줄 = 목록
//  리워드톡·코코핑 방침과 같은 LegalLayout 안 와꾸(제목 크기·여백·목록 점)로 맞춘다.

import type { PolicySection } from "./policyData";
import { 회사 } from "./policyData";

type Block =
  | { kind: "sub"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "p"; text: string };

// 본문 한 덩어리를 작은 제목·목록·문단으로 나눈다(연속된 「· 」 줄은 한 목록으로 묶음).
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

      {/* 회사 정보 */}
      <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2 text-[15px] text-[#4E5968]">
        <p><strong className="text-[#333D4B]">회사명</strong>: {회사.이름}</p>
        <p><strong className="text-[#333D4B]">대표</strong>: {회사.대표}</p>
        <p><strong className="text-[#333D4B]">사업자등록번호</strong>: {회사.사업자번호}</p>
        <p><strong className="text-[#333D4B]">주소</strong>: {회사.주소}</p>
        <p>
          <strong className="text-[#333D4B]">이메일</strong>:{" "}
          <a href={`mailto:${회사.이메일}`} className="text-[#3182F6] whitespace-nowrap">{회사.이메일}</a>
        </p>
      </div>
    </div>
  );
}
