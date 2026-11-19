// 황소주식 이용약관 — 앱 원본(F:\APP\stock\web\static\legal.html 의 <section id="terms">)과 같은 글.
// 글은 ../legalData.ts(= 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/hwangso-stock/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import HtmlPolicyView from "../HtmlPolicyView";
import { TERMS_HTML, TERMS_DATE_LABEL } from "../legalData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "황소주식 이용약관 | 주식회사 아르메스",
  description: "황소주식 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/hwangso-stock/terms" },
};

export default function HwangsoTermsPage() {
  return (
    <LegalLayout title="황소주식 이용약관" subtitle={TERMS_DATE_LABEL} updatedAt="2026년 11월 20일">
      <HtmlPolicyView html={TERMS_HTML} />
    </LegalLayout>
  );
}
