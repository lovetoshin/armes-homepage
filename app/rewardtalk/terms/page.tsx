// 리워드톡 이용약관 — 앱 안 약관(constants/terms.ts)과 같은 글.
// 글은 ../termsData.ts(= 앱 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/rewardtalk/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../../movieedit/PolicyView";
import { TERMS_SECTIONS, TERMS_DATE_LABEL } from "../termsData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "리워드톡 이용약관 | 주식회사 아르메스",
  description: "리워드톡(RewardTalk) 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/rewardtalk/terms" },
};

export default function RewardtalkTermsPage() {
  return (
    <LegalLayout title="리워드톡 이용약관" subtitle={TERMS_DATE_LABEL} updatedAt="2026년 10월 6일">
      <PolicyView sections={TERMS_SECTIONS} />
    </LegalLayout>
  );
}
