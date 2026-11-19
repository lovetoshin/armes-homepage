// 우리집 영유 개인정보 처리방침 — 앱 안 방침(englishkindergarten/app/src/legal.ts 의 PRIVACY)과 같은 글.
// 글은 ../legalData.ts(= 앱 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/uridipyoungyu/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../../movieedit/PolicyView";
import { PRIVACY_INTRO, PRIVACY_SECTIONS, LEGAL_DATE_LABEL } from "../legalData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "우리집 영유 개인정보 처리방침 | 주식회사 아르메스",
  description: "우리집 영유 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/uridipyoungyu/privacy" },
};

export default function UridipyoungyuPrivacyPage() {
  return (
    <LegalLayout title="우리집 영유 개인정보 처리방침" subtitle={LEGAL_DATE_LABEL} updatedAt="2026년 11월 19일">
      <PolicyView intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} />
    </LegalLayout>
  );
}
