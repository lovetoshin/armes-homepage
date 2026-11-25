// 하이스카이 이용약관 — 앱 안 약관(highsky/app/src/legal.ts 의 TERMS)과 같은 글.
// 글은 ../legalData.ts(= 앱 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/highsky/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../../movieedit/PolicyView";
import { TERMS_INTRO, TERMS_SECTIONS, TERMS_FOOTER, LEGAL_DATE_LABEL } from "../legalData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "하이스카이 이용약관 | 주식회사 아르메스",
  description: "하이스카이 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/highsky/terms" },
};

export default function HighskyTermsPage() {
  return (
    <LegalLayout title="하이스카이 이용약관" subtitle={LEGAL_DATE_LABEL} updatedAt="2026년 11월 26일">
      <PolicyView intro={TERMS_INTRO} sections={TERMS_SECTIONS} />
      <div className="text-[#4E5968] text-[15px] leading-[1.9] space-y-1">
        {TERMS_FOOTER.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </LegalLayout>
  );
}
