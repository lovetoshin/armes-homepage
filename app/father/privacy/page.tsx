// 아버지(com.abeoji.app) 개인정보 처리방침 — 구글 플레이·앱스토어 등록용.
// 글은 ../policyData.ts(= 아버지 앱 원본 terms.ts 복사본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/father/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../PolicyView";
import { PRIVACY_SECTIONS, POLICY_DATE_LABEL } from "../policyData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "아버지 개인정보 처리방침 | 주식회사 아르메스",
  description: "아버지 - 아~! 버스, 지하철 한눈에 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/father/privacy" },
};

export default function FatherPrivacyPage() {
  return (
    <LegalLayout title="아버지 개인정보 처리방침" subtitle={POLICY_DATE_LABEL} updatedAt="2026년 10월 11일">
      <PolicyView sections={PRIVACY_SECTIONS} />
    </LegalLayout>
  );
}
