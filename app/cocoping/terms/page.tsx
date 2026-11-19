// 코코핑 이용약관 — 앱 안 약관(app/src/app/profile.tsx 의 TERMS_TEXT, 마이페이지 > 이용약관 팝업)과 같은 글.
// 글은 ../termsData.ts(= 앱 원본 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 주소: https://www.armes.co.kr/cocoping/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../../movieedit/PolicyView";
import { TERMS_SECTIONS, TERMS_DATE_LABEL, TERMS_FOOTER } from "../termsData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "코코핑(CocoPing) 이용약관 | 주식회사 아르메스",
  description: "코코핑(CocoPing) 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/cocoping/terms" },
};

export default function CocopingTermsPage() {
  return (
    <LegalLayout title="코코핑(CocoPing) 이용약관" subtitle={TERMS_DATE_LABEL} updatedAt="2026년 6월 1일">
      <PolicyView sections={TERMS_SECTIONS} />
      <div className="text-[#4E5968] text-[15px] leading-[1.9] space-y-1">
        {TERMS_FOOTER.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </LegalLayout>
  );
}
