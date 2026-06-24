// 여행모아(TravelMoa) 개인정보 처리방침 — 플레이스토어 심사용.
// 회사 정책 페이지(/privacy, /terms) 및 리워드톡과 동일한 LegalLayout 와꾸로 통일.
// ⚠️ 법적 텍스트는 여행모아 실제 수집 범위에 맞춰 정직하게 작성한다(없는 수집 항목을 적지 않는다).
// 주소: https://armes.co.kr/travelmoa/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "여행모아(TravelMoa) 개인정보 처리방침 | 주식회사 아르메스",
  description: "여행모아(TravelMoa) 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/travelmoa/privacy" },
};

export default function TravelmoaPrivacyPage() {
  return (
    <LegalLayout
      title="여행모아(TravelMoa) 개인정보 처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 여행모아(이하 '서비스')를 운영하면서 이용자의 개인정보를 소중히 여기며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수합니다."
      updatedAt="2026년 6월 24일"
    >
      <TravelmoaPrivacyContent />
    </LegalLayout>
  );
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-bold text-[#191F28] mb-4 flex items-center gap-3">
        <span className="w-7 h-7 rounded-lg bg-[#EBF3FF] border border-[#C5D8FB] flex items-center justify-center text-[#3182F6] text-xs font-bold flex-shrink-0">
          {num}
        </span>
        {title}
      </h2>
      <div className="text-[#4E5968] text-[15px] leading-[1.9] space-y-3 pl-10">{children}</div>
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#F2F4F6]">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-[#333D4B] font-semibold border border-[#E5E8EB] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "" : "bg-[#FBFCFE]"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-[#4E5968] border border-[#E5E8EB] align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-none space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TravelmoaPrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        여행모아는 <strong className="text-[#333D4B]">회원가입·로그인 없이 이용</strong>할 수 있는 여행 특가 정보 제공 서비스입니다. 이름·전화번호·주소·결제정보 등 개인을 직접 식별하는 정보를 입력받지 않으며, 아래에 기재된 최소한의 정보만 처리합니다.
      </p>

      {/* 1 */}
      <Section num="1" title="수집하는 개인정보 항목 및 수집 방법">
        <p>회사는 다음의 정보를 처리합니다.</p>
        <Table
          headers={["구분", "항목", "수집 방법"]}
          rows={[
            ["알림(푸시) 관련", "기기 푸시 알림 토큰, 기기 운영체제(OS) 종류", "앱 실행 및 알림 권한 허용 시 자동 생성"],
            ["광고 관련", "광고 식별자(ADID/IDFA), 기기 정보", "광고 SDK(Google AdMob)에 의해 자동 수집"],
            ["서비스 이용", "관심 상품(찜) 목록, 알림 설정 값", "이용자 기기 내부에만 저장(서버 전송 안 함)"],
            ["관리자 전용", "운영 관리자 Google 계정 이메일", "관리자 본인의 로그인 시 — 일반 이용자 비해당"],
          ]}
        />
        <p className="text-sm text-[#8B95A1]">
          ※ 일반 이용자에 대해서는 위치정보, 연락처, 카메라/사진, 결제정보, 이름·전화번호 등을 일절 수집하지 않습니다.
        </p>
      </Section>

      {/* 2 */}
      <Section num="2" title="개인정보의 수집 및 이용 목적">
        <Bullets
          items={[
            "여행 특가 및 서비스 관련 알림(푸시) 발송",
            "무료 서비스 운영을 위한 광고 게재(Google AdMob)",
            "관심 상품(찜) 및 이용자 설정 저장",
            "서비스 운영·관리 및 부정 이용 방지(관리자에 한함)",
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="개인정보의 보유 및 이용 기간">
        <Bullets
          items={[
            "푸시 알림 토큰: 알림 수신 거부, 앱 삭제, 또는 발송 실패가 누적될 경우 더 이상 이용되지 않으며 서버에서 삭제됩니다.",
            "찜 목록·알림 설정: 이용자 기기에 저장되며 앱 삭제 시 함께 삭제됩니다.",
            "관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.",
          ]}
        />
      </Section>

      {/* 4 */}
      <Section num="4" title="개인정보의 제3자 제공">
        <p>회사는 이용자의 개인정보를 외부에 판매하거나 동의 없이 제3자에게 제공하지 않습니다. 다만, 법령에 근거하거나 수사기관의 적법한 요청이 있는 경우는 예외로 합니다.</p>
      </Section>

      {/* 5 */}
      <Section num="5" title="개인정보 처리의 위탁">
        <p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있으며, 각 수탁사는 자체 개인정보 처리방침에 따라 정보를 처리합니다.</p>
        <Table
          headers={["수탁업체", "위탁 업무", "개인정보 처리방침"]}
          rows={[
            ["Supabase Inc.", "데이터 저장 및 서버 인프라", <a key="s" href="https://supabase.com/privacy" className="text-[#3182F6]" target="_blank" rel="noreferrer">supabase.com/privacy</a>],
            ["Google LLC (AdMob)", "앱 내 광고 게재", <a key="g" href="https://policies.google.com/privacy" className="text-[#3182F6]" target="_blank" rel="noreferrer">policies.google.com/privacy</a>],
            ["Expo (EXPO INC.)", "푸시 알림 발송 인프라", <a key="e" href="https://expo.dev/privacy" className="text-[#3182F6]" target="_blank" rel="noreferrer">expo.dev/privacy</a>],
          ]}
        />
      </Section>

      {/* 6 */}
      <Section num="6" title="위치정보의 처리">
        <p>여행모아는 이용자의 GPS 등 위치정보를 수집하거나 이용하지 않습니다.</p>
      </Section>

      {/* 7 */}
      <Section num="7" title="광고 식별자 및 맞춤형 광고">
        <p>회사는 무료 서비스 운영을 위해 Google AdMob 광고를 게재하며, 이 과정에서 광고 SDK가 광고 식별자(ADID/IDFA)를 이용해 맞춤형 광고를 제공할 수 있습니다. 이용자는 기기 설정에서 광고 식별자를 초기화하거나 맞춤형 광고를 제한할 수 있습니다.</p>
        <Bullets
          items={[
            "Android: 설정 > Google > 광고 > 광고 ID 재설정 / 맞춤설정 거부",
            "iOS: 설정 > 개인정보 보호 및 보안 > 추적 > 앱 추적 요청 허용 끄기",
          ]}
        />
      </Section>

      {/* 8 */}
      <Section num="8" title="이용자의 권리와 행사 방법">
        <Bullets
          items={[
            "기기 또는 앱 설정에서 알림 권한을 끄면 언제든 알림 수신을 중단할 수 있습니다.",
            "기기 설정에서 광고 식별자를 초기화하거나 맞춤형 광고를 거부할 수 있습니다.",
            "앱을 삭제하면 기기에 저장된 모든 정보가 함께 삭제됩니다.",
            "기타 개인정보 관련 요청은 아래 개인정보 보호책임자 연락처로 접수하실 수 있습니다.",
          ]}
        />
      </Section>

      {/* 9 */}
      <Section num="9" title="만 14세 미만 아동의 개인정보">
        <p>여행모아는 만 14세 미만 아동을 주 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다.</p>
      </Section>

      {/* 10 */}
      <Section num="10" title="개인정보의 파기 절차 및 방법">
        <p>처리 목적이 달성되었거나 보유기간이 경과한 개인정보는 지체 없이 파기합니다. 전자적 파일은 복구가 불가능한 방법으로 영구 삭제하며, 기기 내부 데이터는 앱 삭제 시 함께 삭제됩니다.</p>
      </Section>

      {/* 11 */}
      <Section num="11" title="개인정보의 안전성 확보 조치">
        <Bullets
          items={[
            "전송 구간 암호화(HTTPS) 적용",
            "데이터 접근 권한의 최소화 및 관리",
            "서버 인프라(Supabase)의 접근 통제",
          ]}
        />
      </Section>

      {/* 12 */}
      <Section num="12" title="개인정보 보호책임자">
        <p>회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 관련 문의를 처리하기 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">회사명</strong>: 주식회사 아르메스</p>
          <p><strong className="text-[#333D4B]">대표자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">사업자등록번호</strong>: 798-86-02943</p>
          <p><strong className="text-[#333D4B]">주소</strong>: 경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)</p>
          <p><strong className="text-[#333D4B]">개인정보 보호책임자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">이메일</strong>: <a href="mailto:lovetoshin@gmail.com" className="text-[#3182F6]">lovetoshin@gmail.com</a></p>
        </div>
        <p className="mt-4 text-sm text-[#8B95A1]">기타 개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
        <ul className="list-none space-y-1 mt-2 text-sm">
          {[
            "개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)",
            "대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)",
            "경찰청 사이버수사국 (cyberbureau.police.go.kr / 국번없이 182)",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-[#3182F6] flex-shrink-0">·</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 13 */}
      <Section num="13" title="개인정보 처리방침의 변경">
        <p>본 방침은 법령·서비스 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.</p>
        <Bullets
          items={[
            "공고일자: 2026년 6월 24일",
            "시행일자: 2026년 6월 24일",
          ]}
        />
      </Section>
    </div>
  );
}
