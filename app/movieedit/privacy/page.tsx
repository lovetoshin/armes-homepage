// 무비에디트(영상 편집 앱) 개인정보처리방침 — 구글 플레이·Snap Camera Kit 심사용.
// 글은 ../policyData.ts(= 앱 원본 privacy_ko.txt 변환본)를 그대로 그린다. 여기서 글을 고치지 않는다.
// 맨 아래 영어 요약은 컷잇 개인정보 페이지처럼 Snap 심사자용으로 붙인다(원본 한글 방침의 내용만 요약).
// 주소: https://www.armes.co.kr/movieedit/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import PolicyView from "../PolicyView";
import { PRIVACY_SECTIONS, PRIVACY_INTRO, PRIVACY_DATE_LABEL } from "../policyData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "무비에디트 개인정보처리방침 | 주식회사 아르메스",
  description: "무비에디트(영상 편집 앱) 개인정보처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/movieedit/privacy" },
};

const link = "text-[#3182F6] whitespace-nowrap";

export default function MovieEditPrivacyPage() {
  return (
    <LegalLayout title="무비에디트 개인정보처리방침" subtitle={PRIVACY_DATE_LABEL} updatedAt="2026년 11월 1일">
      <PolicyView intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} />

      {/* 영어 요약 — Snap Camera Kit 심사자용 */}
      <section lang="en" className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] text-[#4E5968] text-[15px] leading-[1.9]">
        <h2 className="text-lg font-bold text-[#191F28] mb-4">Summary in English (for reviewers)</h2>
        <p>MovieEdit is a video editing app that does not require an account or login and does not collect personally identifiable information.</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            <><strong className="text-[#333D4B]">On-device data</strong>: selected videos, photos and music, editing projects, text-to-speech audio and exported videos are stored only on the user&apos;s phone and are never sent to our servers.</>,
            <><strong className="text-[#333D4B]">Updates and downloads</strong>: when checking for app updates and downloading the voice model file, only information automatically transmitted over the network (such as the IP address) is passed to Cloudflare, Inc. No user content is sent.</>,
            <><strong className="text-[#333D4B]">Camera (Snap Camera Kit)</strong>: some AR Lenses use information about faces, hands and voices detected by the camera and microphone. This information is used on the device only to apply effects; ARMES does not collect, store or transmit it. To download and run Lenses, device and usage information may be sent to Snap Inc. and is handled under Snap&apos;s <a href="https://values.snap.com/privacy/privacy-policy" target="_blank" rel="noopener noreferrer" className={link}>Privacy Policy</a>. Users see Snap&apos;s Privacy Policy and <a href="https://snap.com/terms" target="_blank" rel="noopener noreferrer" className={link}>Terms of Service</a> consent prompt before first use of the camera; declining disables Lenses only, and shooting and editing remain available.</>,
            <><strong className="text-[#333D4B]">Permissions</strong>: camera, microphone, photos/videos, music/audio and app install permissions are all optional and requested only when the related feature is used.</>,
            <><strong className="text-[#333D4B]">No ads or analytics</strong>: the app shows no ads and uses no advertising identifiers, third-party analytics or location data.</>,
            <><strong className="text-[#333D4B]">Contact</strong>: <a href="mailto:support.armes@gmail.com" className="text-[#3182F6]">support.armes@gmail.com</a></>,
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span className="[text-wrap:pretty]">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </LegalLayout>
  );
}
