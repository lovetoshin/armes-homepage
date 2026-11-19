// 우리집 영유 이용약관 — 앱 안 약관(englishkindergarten/app/src/legal.ts 의 TERMS)과 같은 글.
// 글은 ../legalData.ts(= 앱 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/uridipyoungyu/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../../movieedit/PolicyView";
import { TERMS_INTRO, TERMS_SECTIONS, LEGAL_DATE_LABEL } from "../legalData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "우리집 영유 이용약관 | 주식회사 아르메스",
  description: "우리집 영유 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/uridipyoungyu/terms" },
};

export default function UridipyoungyuTermsPage() {
  return (
    <LegalLayout title="우리집 영유 이용약관" subtitle={LEGAL_DATE_LABEL} updatedAt="2026년 11월 19일">
      <PolicyView intro={TERMS_INTRO} sections={TERMS_SECTIONS} />
    </LegalLayout>
  );
}
