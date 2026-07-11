// 리워드톡(RewardTalk) 개인정보 처리방침 — 플레이스토어 심사용.
// 회사 정책 페이지(/privacy, /terms)와 동일한 LegalLayout 와꾸로 통일.
// ⚠️ 법적 텍스트는 기존 docs 원본을 토시 하나 안 틀리게 그대로 유지한다(내용 변경 금지).
// 주소: https://www.armes.co.kr/rewardtalk/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "리워드톡(RewardTalk) 개인정보 처리방침 | 주식회사 아르메스",
  description: "리워드톡(RewardTalk) 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/rewardtalk/privacy" },
};

export default function RewardtalkPrivacyPage() {
  return (
    <LegalLayout
      title="리워드톡(RewardTalk) 개인정보 처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 「개인정보 보호법」, 「위치정보의 보호 및 이용 등에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같은 처리방침을 두고 있습니다."
      updatedAt="2026년 6월 23일"
    >
      <RewardtalkPrivacyContent />
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

function Sub({ title }: { title: string }) {
  return <h3 className="text-[15px] font-semibold text-[#191F28] mt-4 mb-2">{title}</h3>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
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

function RewardtalkPrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        회사는 본 개인정보 처리방침을 앱 내 및 회사가 운영하는 웹페이지에 공개하여 이용자가 언제든지 쉽게 확인할 수 있도록 하고 있습니다.
      </p>

      {/* 1 */}
      <Section num="1" title="수집하는 개인정보 항목 및 수집 방법">
        <p>회사는 서비스 제공을 위해 아래의 개인정보를 수집합니다.</p>
        <Sub title="가. 회원가입 및 로그인 시" />
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">필수항목</strong>: 이메일 주소, 닉네임(프로필명), 로그인 인증정보(소셜 로그인 식별자, Apple 로그인 식별자 등)</>,
            <><strong className="text-[#333D4B]">선택항목</strong>: 프로필 사진</>,
          ]}
        />
        <Sub title="나. 서비스 이용 과정에서 수집되는 항목" />
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">위치정보</strong>: 단말기의 GPS 기반 위치(위도·경도) — 주변 가맹점 탐색 및 위치 기반 혜택 제공 목적</>,
            <><strong className="text-[#333D4B]">연락처(주소록)</strong>: 이용자가 공동구매 채팅방 등에서 연락처 공유 기능을 사용할 경우에 한해 접근</>,
            <><strong className="text-[#333D4B]">카메라 및 사진/미디어</strong>: 프로필 사진 촬영·선택, QR코드 스캔, 상품(기프티콘) 이미지 등록 시</>,
            <><strong className="text-[#333D4B]">기기 및 서비스 이용 정보</strong>: 기기 식별값, OS 정보, 푸시 알림 토큰, 앱 이용 기록, 추첨·응모·당첨 내역, 공동구매 참여 내역</>,
            <><strong className="text-[#333D4B]">광고 식별자</strong>: 광고 제공 및 부정 이용 방지를 위한 광고 ID</>,
          ]}
        />
        <Sub title="다. 수집 방법" />
        <Bullets
          items={[
            "앱 내 회원가입, 서비스 이용, 이벤트 응모 과정에서 이용자가 직접 입력하거나 단말기 권한 동의를 통해 수집",
            "서비스 이용 과정에서 자동으로 생성·수집되는 정보",
          ]}
        />
      </Section>

      {/* 2 */}
      <Section num="2" title="개인정보의 수집 및 이용 목적">
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">회원 식별 및 관리</strong>: 회원제 서비스 제공, 본인 확인, 부정 이용 방지</>,
            <><strong className="text-[#333D4B]">위치 기반 서비스 제공</strong>: 주변 가맹점·매장 탐색, 거리 계산, 지역 기반 리워드 및 혜택 제공</>,
            <><strong className="text-[#333D4B]">리워드·추첨 서비스 운영</strong>: 룰렛/응모 추첨, 당첨자 관리, 경품(기프티콘) 발송</>,
            <><strong className="text-[#333D4B]">공동구매 및 커뮤니티 기능</strong>: 채팅, 거래, 판매자-구매자 연결</>,
            <><strong className="text-[#333D4B]">알림 제공</strong>: 당첨 알림, 채팅 알림, 공지 등 푸시 알림 발송</>,
            <><strong className="text-[#333D4B]">고객 문의 응대 및 분쟁 처리</strong></>,
            <><strong className="text-[#333D4B]">서비스 개선 및 통계 분석</strong></>,
            <><strong className="text-[#333D4B]">광고 제공</strong>: 앱 내 광고 노출 및 효과 측정</>,
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="개인정보의 보유 및 이용 기간">
        <ul className="list-none space-y-2 mt-2">
          <li className="flex gap-2">
            <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
            <span>회사는 원칙적으로 수집·이용 목적이 달성되거나 회원 탈퇴를 요청한 경우 <strong className="text-[#333D4B]">지체 없이 파기</strong>합니다.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
            <div>
              <span>다만 관계 법령에 따라 보존이 필요한 경우 아래와 같이 보관합니다.</span>
              <ul className="list-none space-y-1 mt-2 pl-3">
                {[
                  "계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)",
                  "대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)",
                  "소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)",
                  "위치정보 이용·제공사실 확인자료: 6개월 (위치정보법)",
                  "서비스 방문 기록: 3개월 (통신비밀보호법)",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-[#8B95A1] mt-1 flex-shrink-0">-</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </Section>

      {/* 4 */}
      <Section num="4" title="개인정보의 제3자 제공">
        <p>회사는 이용자의 개인정보를 본 방침에서 고지한 범위 내에서만 이용하며, 이용자의 사전 동의 없이는 제3자에게 제공하지 않습니다. 다만 다음의 경우는 예외로 합니다.</p>
        <Bullets
          items={[
            "이용자가 사전에 동의한 경우",
            "법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우",
            "경품(기프티콘) 발송 등 서비스 이행을 위해 배송·발송 대행이 필요한 경우, 해당 목적에 필요한 최소한의 정보에 한하여 제공",
          ]}
        />
      </Section>

      {/* 5 */}
      <Section num="5" title="개인정보 처리의 위탁">
        <p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 외부에 위탁하고 있습니다.</p>
        <Table
          headers={["수탁업체", "위탁 업무", "보유·이용 기간"]}
          rows={[
            ["Supabase Inc.", "데이터 저장 및 서버 인프라 운영", "회원 탈퇴 또는 위탁계약 종료 시까지"],
            ["Google LLC (AdMob)", "앱 내 광고 제공 및 광고 식별자 처리", "회원 탈퇴 또는 위탁계약 종료 시까지"],
            ["Google LLC / Apple Inc.", "푸시 알림 발송, 소셜 로그인 인증", "회원 탈퇴 또는 위탁계약 종료 시까지"],
          ]}
        />
        <p>회사는 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 관련 법령에 따라 필요한 사항을 규정하고 있습니다.</p>
      </Section>

      {/* 6 */}
      <Section num="6" title="위치정보의 처리">
        <Bullets
          items={[
            "회사는 주변 가맹점 탐색 및 위치 기반 혜택 제공을 위해 이용자의 단말기 위치정보를 이용합니다.",
            <>위치정보는 <strong className="text-[#333D4B]">서비스 이용 시점에만 일시적으로 처리</strong>하며, 지속적인 위치 추적은 하지 않습니다.</>,
            "이용자는 단말기 설정에서 위치 권한을 언제든지 철회할 수 있으며, 철회 시 위치 기반 기능 이용에 제한이 있을 수 있습니다.",
          ]}
        />
      </Section>

      {/* 7 */}
      <Section num="7" title="광고 식별자 및 맞춤형 광고">
        <Bullets
          items={[
            "본 앱은 Google AdMob을 통해 광고를 제공하며, 이 과정에서 광고 식별자(Advertising ID)가 사용될 수 있습니다.",
            "이용자는 단말기 설정 > Google > 광고 메뉴에서 광고 식별자를 재설정하거나 맞춤형 광고를 제한할 수 있습니다.",
          ]}
        />
      </Section>

      {/* 8 */}
      <Section num="8" title="이용자 및 법정대리인의 권리와 행사 방법">
        <Bullets
          items={[
            "이용자는 언제든지 자신의 개인정보를 조회·수정할 수 있으며, 회원 탈퇴를 통해 개인정보 수집·이용에 대한 동의를 철회할 수 있습니다.",
            "개인정보의 열람·정정·삭제·처리정지 요청은 아래 개인정보 보호책임자에게 서면, 이메일로 연락하시면 지체 없이 조치하겠습니다.",
          ]}
        />
      </Section>

      {/* 9 */}
      <Section num="9" title="만 14세 미만 아동의 개인정보">
        <p>회사는 만 14세 미만 아동의 회원가입을 받지 않으며, 만 14세 미만 아동의 개인정보를 수집하지 않습니다.</p>
      </Section>

      {/* 10 */}
      <Section num="10" title="개인정보의 파기 절차 및 방법">
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">파기 절차</strong>: 목적이 달성된 개인정보는 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</>,
            <><strong className="text-[#333D4B]">파기 방법</strong>: 전자적 파일 형태의 정보는 복구할 수 없는 기술적 방법으로 삭제하며, 종이 문서는 분쇄하거나 소각합니다.</>,
          ]}
        />
      </Section>

      {/* 11 */}
      <Section num="11" title="개인정보의 안전성 확보 조치">
        <Bullets
          items={[
            "개인정보 접근 권한의 최소화 및 접근 통제",
            "전송 구간 암호화(SSL/TLS) 적용",
            "개인정보가 저장되는 데이터베이스에 대한 접근 통제 및 보안 관리",
          ]}
        />
      </Section>

      {/* 12 */}
      <Section num="12" title="개인정보 보호책임자">
        <p>이용자는 개인정보 보호와 관련한 문의, 불만 처리, 피해 구제 등을 아래 담당자에게 요청할 수 있습니다.</p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">회사명</strong>: 주식회사 아르메스</p>
          <p><strong className="text-[#333D4B]">대표자</strong>: 신지한</p>
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
        <p>본 개인정보 처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용이 추가·삭제·수정될 수 있으며, 변경 시 앱 내 공지사항 또는 본 페이지를 통해 고지합니다.</p>
        <Bullets
          items={[
            "공고일자: 2026년 6월 23일",
            "시행일자: 2026년 6월 23일",
          ]}
        />
      </Section>
    </div>
  );
}
