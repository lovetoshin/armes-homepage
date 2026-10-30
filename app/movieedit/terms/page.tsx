// 무비에디트(영상 편집 앱) 이용약관 — 구글 플레이 등록용.
// 글은 ../policyData.ts(= 앱 원본 terms_ko.txt 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/movieedit/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../PolicyView";
import { TERMS_SECTIONS, POLICY_DATE_LABEL } from "../policyData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "무비에디트 이용약관 | 주식회사 아르메스",
  description: "무비에디트(영상 편집 앱) 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/movieedit/terms" },
};

export default function MovieEditTermsPage() {
  return (
    <LegalLayout title="무비에디트 이용약관" subtitle={POLICY_DATE_LABEL} updatedAt="2026년 10월 30일">
      <PolicyView sections={TERMS_SECTIONS} />
    </LegalLayout>
  );
}
