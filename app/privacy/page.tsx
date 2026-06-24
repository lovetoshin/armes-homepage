import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "개인정보처리방침 | ARMES",
  description: "주식회사 아르메스의 개인정보 처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="개인정보처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 정보주체의 자유와 권리 보호를 위해 개인정보 보호법 및 관계 법령을 준수합니다."
      updatedAt="2024년 12월 1일"
    >
      <PrivacyContent />
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

function PrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        주식회사 아르메스(이하 &apos;회사&apos;라 합니다)는 &apos;개인정보 보호법&apos; 제30조에 따라 정보주체의 개인정보를
        보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
        처리방침을 수립·공개합니다.
      </p>

      {/* 1. 개인정보 처리 목적 */}
      <Section num="1" title="개인정보의 처리 목적">
        <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            ["회원 가입 및 관리", "회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지 등"],
            ["서비스 제공", "RewardTalk 멤버십 서비스, 리워드 적립·교환, 공동구매 서비스, Seller AI 서비스, 매장 운영 SaaS 서비스 등"],
            ["고충처리", "민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보"],
            ["마케팅 및 광고 활용", "신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 등 (동의 시)"],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span><strong className="text-[#333D4B]">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 2. 처리하는 개인정보 항목 */}
      <Section num="2" title="처리하는 개인정보 항목">
        <p>회사는 서비스 제공을 위해 다음과 같은 개인정보 항목을 수집·처리합니다.</p>
        <Table
          headers={["구분", "수집 항목", "수집 목적", "보유 기간"]}
          rows={[
            ["회원가입(필수)", "이름, 이메일, 휴대폰 번호, 생년월일", "회원 식별 및 서비스 제공", "회원 탈퇴 후 30일"],
            ["회원가입(선택)", "프로필 사진, 성별, 지역 정보", "맞춤형 서비스 제공", "회원 탈퇴 후 30일"],
            ["결제 및 거래", "결제수단 정보, 거래 내역", "결제 처리 및 환불", "관련 법령에 따름 (최대 5년)"],
            ["서비스 이용", "위치 정보, 서비스 이용 기록, 접속 로그, IP 주소", "서비스 개선 및 부정이용 방지", "1년"],
            ["파트너(매장)", "상호명, 대표자 정보, 사업자등록번호, 정산 계좌", "파트너 계약 및 정산", "계약 종료 후 5년"],
            ["Seller AI 이용", "상품 정보, 생성된 콘텐츠", "AI 서비스 제공", "서비스 이용 중"],
          ]}
        />
        <p className="mt-3 text-sm text-[#8B95A1]">
          * 서비스 이용 과정에서 단말기 정보(모델명, OS 버전), 쿠키, 광고 ID 등이 자동으로 수집될 수 있습니다.
        </p>
      </Section>

      {/* 3. 보유 기간 */}
      <Section num="3" title="개인정보의 처리 및 보유 기간">
        <p>회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.</p>
        <p className="mt-2">관련 법령에 따른 보유 기간은 다음과 같습니다.</p>
        <Table
          headers={["근거 법령", "보유 항목", "보유 기간"]}
          rows={[
            ["전자상거래 등에서의 소비자 보호에 관한 법률", "계약 또는 청약철회 기록", "5년"],
            ["전자상거래 등에서의 소비자 보호에 관한 법률", "대금결제 및 재화 공급 기록", "5년"],
            ["전자상거래 등에서의 소비자 보호에 관한 법률", "소비자 불만 또는 분쟁처리 기록", "3년"],
            ["통신비밀보호법", "서비스 이용 관련 로그인 기록", "3개월"],
            ["개인정보 보호법", "개인정보 이용·제공 동의·철회 기록", "3년"],
          ]}
        />
      </Section>

      {/* 4. 제3자 제공 */}
      <Section num="4" title="개인정보의 제3자 제공">
        <p>회사는 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "정보주체가 사전에 동의한 경우",
            "법률의 특별한 규정이 있는 경우, 법령상 의무를 준수하기 위해 불가피한 경우",
            "수사기관의 요청이 있는 경우 (적법한 절차에 따름)",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Table
          headers={["제공 받는 자", "제공 목적", "제공 항목", "보유 기간"]}
          rows={[
            ["토스페이먼츠(주)", "결제 처리 및 정산", "이름, 이메일, 결제 정보", "5년"],
            ["파트너 가맹점", "멤버십 적립 서비스 제공", "회원 식별값, 적립 정보", "서비스 이용 중"],
          ]}
        />
      </Section>

      {/* 5. 처리 위탁 */}
      <Section num="5" title="개인정보 처리 위탁">
        <p>회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
        <Table
          headers={["수탁 업체", "위탁 업무 내용", "보유 및 이용 기간"]}
          rows={[
            ["Amazon Web Services(AWS)", "서버 인프라 운영 및 데이터 보관", "위탁 계약 기간"],
            ["토스페이먼츠(주)", "결제 처리 및 결제 데이터 관리", "위탁 계약 기간"],
            ["카카오(주)", "알림톡, SMS 발송", "위탁 계약 기간"],
            ["Firebase (Google LLC)", "앱 푸시 알림, 앱 분석", "위탁 계약 기간"],
          ]}
        />
        <p className="mt-3 text-sm text-[#8B95A1]">
          위탁 업무의 내용이나 수탁자가 변경될 경우 지체 없이 본 개인정보 처리방침을 통하여 공개합니다.
        </p>
      </Section>

      {/* 6. 정보주체 권리 */}
      <Section num="6" title="정보주체의 권리·의무 및 행사 방법">
        <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "개인정보 처리 현황 열람 요구",
            "오류 등이 있을 경우 정정 요구",
            "처리 정지 요구",
            "삭제 요구 (단, 법령에 따라 처리가 의무화된 경우 제외)",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          위의 권리 행사는 회사에 대해 서면, 전화, 이메일, 모사전송(FAX) 등을 통하여 하실 수 있으며,
          회사는 이에 대해 지체 없이 조치합니다. 만 14세 미만 아동의 경우 법정대리인이 권리를 행사할 수 있습니다.
        </p>
      </Section>

      {/* 7. 자동 수집 */}
      <Section num="7" title="개인정보 자동 수집 장치의 설치·운영 및 거부">
        <p>
          회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는
          &apos;쿠키(cookie)&apos;를 사용합니다.
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "쿠키 사용 목적: 이용자의 로그인 상태 유지, 서비스 이용 현황 분석, 개인화 서비스 제공, 보안 및 부정이용 방지",
            "쿠키 설치·운영 거부: 이용자는 웹브라우저의 설정을 통해 쿠키 수집을 거부할 수 있습니다. 단, 거부 시 서비스 일부 기능 이용에 제한이 있을 수 있습니다.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-[#8B95A1]">
          앱(Application) 이용 시 개인정보 수집·이용에 대한 권한은 단말기의 설정에서 관리할 수 있습니다.
        </p>
      </Section>

      {/* 8. 보호 조치 */}
      <Section num="8" title="개인정보의 안전성 확보 조치">
        <p>회사는 개인정보 보호법 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
        <Table
          headers={["조치 유형", "상세 내용"]}
          rows={[
            ["관리적 조치", "내부관리계획 수립·시행, 정기 직원 교육, 개인정보 접근 권한 최소화"],
            ["기술적 조치", "개인정보 암호화 저장, 접근 통제 시스템 구축, 보안 프로그램 설치 및 주기적 업데이트"],
            ["물리적 조치", "전산실 및 자료 보관실 접근 통제, 잠금장치 설치"],
            ["전송 보안", "HTTPS/TLS를 통한 통신 구간 암호화, 비밀번호 단방향 암호화(해시)"],
          ]}
        />
      </Section>

      {/* 9. 만 14세 미만 */}
      <Section num="9" title="만 14세 미만 아동의 개인정보 처리">
        <p>
          회사는 만 14세 미만 아동의 개인정보를 원칙적으로 수집하지 않습니다.
          만 14세 미만 아동이 회원가입을 시도하는 경우 회원가입이 제한됩니다.
          만약 법정대리인의 동의 하에 개인정보를 수집하는 경우, 법정대리인은 해당 아동의 개인정보에 대한
          열람·정정·삭제·처리정지 요구의 권리를 행사할 수 있습니다.
        </p>
      </Section>

      {/* 10. 개인정보 보호책임자 */}
      <Section num="10" title="개인정보 보호책임자">
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및
          피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">성명:</strong> 신지한</p>
          <p><strong className="text-[#333D4B]">직책:</strong> 대표이사</p>
          <p><strong className="text-[#333D4B]">연락처:</strong> 010-4995-9867</p>
          <p><strong className="text-[#333D4B]">이메일:</strong> support.armes@gmail.com</p>
        </div>
        <p className="mt-4">
          정보주체께서는 회사의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한
          사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
        </p>
        <p className="mt-3 text-sm text-[#8B95A1]">
          또한 개인정보가 침해되었다고 생각되시는 경우 아래 기관에 신고하실 수 있습니다.
        </p>
        <ul className="list-none space-y-1 mt-2 text-sm">
          {[
            ["개인정보침해신고센터", "privacy.kisa.or.kr / 118"],
            ["개인정보분쟁조정위원회", "www.kopico.go.kr / 1833-6972"],
            ["대검찰청 사이버수사과", "www.spo.go.kr / 02-3480-3573"],
            ["경찰청 사이버수사국", "ecrm.cyber.go.kr / 182"],
          ].map(([org, contact]) => (
            <li key={org} className="flex gap-2">
              <span className="text-[#3182F6] flex-shrink-0">·</span>
              <span><strong className="text-[#4E5968]">{org}:</strong> {contact}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 11. 방침 변경 */}
      <Section num="11" title="개인정보 처리방침의 변경">
        <p>
          이 개인정보 처리방침은 2024년 12월 1일부터 적용됩니다. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
        </p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
          <p className="text-sm text-[#8B95A1]">이전 버전: 2024년 6월 1일 ~ 2024년 11월 30일</p>
        </div>
        <p className="mt-3 text-sm">
          개인정보 처리방침이 변경될 경우, 변경사항은 본 홈페이지를 통해 공지되며 변경된 방침은 공지한 날로부터
          7일 이후에 효력이 발생합니다. 단, 이용자의 중요한 권리 변경의 경우 최소 30일 전에 공지합니다.
        </p>
      </Section>
    </div>
  );
}
