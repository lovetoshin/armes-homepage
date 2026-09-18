// 리워드톡(RewardTalk) 개인정보 처리방침 — App Store / Play 심사용.
// ⚠️ 법적 텍스트는 privacyDocs.ts / docs/*.ts 의 데이터를 그대로 렌더한다(내용 변경 금지).
// 한 페이지(https://www.armes.co.kr/rewardtalk/privacy)에 10개 언어를 위→아래로 순서대로 나열한다.
// 언어 순서: 한국어 · English · 日本語 · 简体中文 · 繁體中文 · Español · Français · Português · Deutsch · Русский

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import type { PrivacyDoc, Body, Line } from "./privacyDocs";
import { ko } from "./privacyDocs";
import { en } from "./docs/en";
import { ja } from "./docs/ja";
import { zhCN } from "./docs/zhCN";
import { zhTW } from "./docs/zhTW";
import { es } from "./docs/es";
import { fr } from "./docs/fr";
import { pt } from "./docs/pt";
import { de } from "./docs/de";
import { ru } from "./docs/ru";

export const dynamic = "force-static";

const DOCS: PrivacyDoc[] = [ko, en, ja, zhCN, zhTW, es, fr, pt, de, ru];

export const metadata: Metadata = {
  title: "리워드톡(RewardTalk) 개인정보 처리방침 | 주식회사 아르메스",
  description:
    "리워드톡(RewardTalk) 개인정보 처리방침 (Privacy Policy) — 한국어·English·日本語·简体中文·繁體中文·Español·Français·Português·Deutsch·Русский",
  alternates: { canonical: "/rewardtalk/privacy" },
};

// ── 렌더 헬퍼 ─────────────────────────────────────────────
function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h3 className="text-lg font-bold text-[#191F28] mb-4 flex items-center gap-3">
        <span className="w-7 h-7 rounded-lg bg-[#EBF3FF] border border-[#C5D8FB] flex items-center justify-center text-[#3182F6] text-xs font-bold flex-shrink-0">
          {num}
        </span>
        {title}
      </h3>
      <div className="text-[#4E5968] text-[15px] leading-[1.9] space-y-3 pl-10">{children}</div>
    </section>
  );
}

function renderLine(l: Line, key: number) {
  if (typeof l === "string") return <span key={key}>{l}</span>;
  return (
    <span key={key}>
      {l.b ? <strong className="text-[#333D4B]">{l.b}</strong> : null}
      {l.t}
    </span>
  );
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function renderBody(body: Body, i: number) {
  switch (body.type) {
    case "p":
      return (
        <p key={i} className={body.text.length > 0 ? "" : "hidden"}>
          {body.text}
        </p>
      );
    case "sub":
      return (
        <h4 key={i} className="text-[15px] font-semibold text-[#191F28] mt-4 mb-2">
          {body.text}
        </h4>
      );
    case "ul":
      return (
        <ul key={i} className="list-none space-y-2 mt-2">
          {body.items.map((item, j) => (
            <li key={j} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span>{renderLine(item, j)}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F2F4F6]">
                {body.headers.map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[#333D4B] font-semibold border border-[#E5E8EB] whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.rows.map((row, r) => (
                <tr key={r} className={r % 2 === 0 ? "" : "bg-[#FBFCFE]"}>
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 text-[#4E5968] border border-[#E5E8EB] align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "contact":
      return (
        <div key={i} className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          {body.rows.map((r, j) => (
            <p key={j}>
              <strong className="text-[#333D4B]">{r.label}</strong>:{" "}
              {isEmail(r.value) ? (
                <a href={`mailto:${r.value.trim()}`} className="text-[#3182F6]">
                  {r.value}
                </a>
              ) : (
                r.value
              )}
            </p>
          ))}
        </div>
      );
  }
}

// 한 언어의 처리방침 블록 (언어명 소제목 + 부제 + 총칙 + 13개 섹션)
function DocBlock({ doc, first }: { doc: PrivacyDoc; first: boolean }) {
  return (
    <section className={first ? "" : "mt-20 pt-14 border-t-2 border-[#E5E8EB]"}>
      {/* 언어 이름 소제목 */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#191F28] text-white text-lg font-extrabold tracking-tight">
          {doc.langName}
        </span>
      </div>
      <h2 className="text-2xl font-extrabold text-[#191F28] mb-3 tracking-tight">{doc.title}</h2>
      <p className="text-[#4E5968] text-[15px] mb-3 leading-relaxed">{doc.subtitle}</p>
      <p className="text-xs text-[#8B95A1] font-semibold mb-8">
        {doc.updatedLabel}: {doc.updatedAt}
      </p>

      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        {doc.note}
      </p>

      {doc.sections.map((s) => (
        <Section key={s.num} num={s.num} title={s.title}>
          {s.body.map((b, i) => renderBody(b, i))}
        </Section>
      ))}
    </section>
  );
}

export default function RewardtalkPrivacyPage() {
  return (
    <LegalLayout
      title="리워드톡(RewardTalk) 개인정보 처리방침 · Privacy Policy"
      subtitle="본 개인정보 처리방침은 아래에 10개 언어로 순서대로 제공됩니다. / This Privacy Policy is provided below in 10 languages."
      updatedAt="2026년 6월 23일"
    >
      <div className="legal-multilang">
        {DOCS.map((doc, i) => (
          <DocBlock key={doc.langName} doc={doc} first={i === 0} />
        ))}
      </div>
    </LegalLayout>
  );
}
