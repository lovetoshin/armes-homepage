import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "이용약관 | ARMES",
  description: "주식회사 아르메스의 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="이용약관"
      subtitle="주식회사 아르메스가 제공하는 ARMES 플랫폼 서비스 이용에 관한 약관입니다. 서비스 이용 전 반드시 확인하시기 바랍니다."
      updatedAt="2024년 12월 1일"
    >
      <TermsContent />
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

function Article({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-[15px] font-semibold text-[#191F28] mb-2.5">
        제{num}조 ({title})
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function TermsContent() {
  return (
    <div>
      {/* 서문 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        본 약관은 주식회사 아르메스(이하 &apos;회사&apos;)가 제공하는 ARMES 플랫폼 서비스(RewardTalk, Seller AI,
        지역 공동구매, 매장 운영 SaaS 등, 이하 &apos;서비스&apos;)의 이용과 관련하여 회사와 이용자의 권리, 의무,
        책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
      </p>

      {/* 1장. 총칙 */}
      <Section num="1" title="총칙">

        <Article num={1} title="목적">
          <p>
            이 약관은 주식회사 아르메스(이하 &apos;회사&apos;라 함)가 운영하는 ARMES 플랫폼(이하 &apos;서비스&apos;라 함)을
            이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </Article>

        <Article num={2} title="정의">
          <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              ["서비스", "회사가 제공하는 ARMES 플랫폼 내 모든 서비스 (RewardTalk, Seller AI, 지역 공동구매, 매장 운영 SaaS, 통합 멤버십 인프라 등)"],
              ["이용자", "회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원"],
              ["회원", "회사에 개인정보를 제공하여 회원 등록을 한 자로, 회사의 정보를 지속적으로 제공받으며 서비스를 이용하는 자"],
              ["파트너", "회사와 제휴하여 RewardTalk 멤버십 서비스 등을 제공하는 가맹점 및 사업자"],
              ["포인트", "서비스 내에서 사용 가능한 가상 화폐 단위로, 현금으로 전환되지 않음"],
              ["리워드", "서비스 이용에 따라 이용자에게 제공되는 혜택(포인트, 쿠폰, 드로우 참여권 등)"],
              ["콘텐츠", "이용자가 서비스에 게재한 텍스트, 이미지, 영상, 파일 등 모든 정보"],
            ].map(([term, def]) => (
              <li key={term} className="flex gap-2">
                <span className="text-[#3182F6] mt-1 flex-shrink-0">·</span>
                <span><strong className="text-[#333D4B]">{term}:</strong> {def}</span>
              </li>
            ))}
          </ul>
        </Article>

        <Article num={3} title="약관의 효력 및 변경">
          <p>① 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</p>
          <p>② 회사는 관련 법률에 위반되지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시 최소 7일 전에 공지합니다. 단, 이용자에게 불리한 내용의 변경은 30일 전에 공지합니다.</p>
          <p>③ 이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다. 변경 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우 약관의 변경에 동의한 것으로 간주합니다.</p>
        </Article>

        <Article num={4} title="약관 외 준칙">
          <p>
            이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률,
            개인정보 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 약관의 규제에 관한 법률 등 관련 법령 또는
            회사가 정한 개별 정책, 상관례에 따릅니다.
          </p>
        </Article>

      </Section>

      {/* 2장. 회원 가입 */}
      <Section num="2" title="회원 가입 및 관리">

        <Article num={5} title="회원 가입">
          <p>① 이용자는 회사가 정한 절차에 따라 회원 가입을 신청할 수 있습니다.</p>
          <p>② 회사는 다음 각 호에 해당하는 경우 회원 가입 승낙을 거절하거나 사후에 이용계약을 해지할 수 있습니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "실명이 아니거나 타인의 명의를 이용한 경우",
              "만 14세 미만인 경우 (법정대리인 동의 없이)",
              "가입 신청서의 내용을 허위로 기재한 경우",
              "이전에 이용약관 위반으로 자격이 상실된 이력이 있는 경우",
              "기타 회사가 정한 이용 신청 요건이 충족되지 않은 경우",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Article>

        <Article num={6} title="회원 정보 변경">
          <p>① 회원은 서비스 내 설정 메뉴를 통해 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다.</p>
          <p>② 회원 가입 시 기재한 사항이 변경되었을 경우 즉시 서비스 내에서 수정하거나 고객센터에 통보해야 합니다. 변경하지 않아 발생하는 불이익은 회원의 책임입니다.</p>
        </Article>

        <Article num={7} title="회원 탈퇴 및 자격 상실">
          <p>① 회원은 언제든지 서비스 내에서 탈퇴를 신청할 수 있습니다.</p>
          <p>② 탈퇴 시 미사용 포인트 및 리워드는 즉시 소멸되며 복구되지 않습니다.</p>
          <p>③ 탈퇴 후 30일 간 개인정보가 보관되며, 이후 완전 삭제됩니다. 단, 관련 법령에 따라 보관 의무가 있는 정보는 해당 기간 동안 보관됩니다.</p>
        </Article>

      </Section>

      {/* 3장. 서비스 이용 */}
      <Section num="3" title="서비스 이용">

        <Article num={8} title="서비스 제공">
          <p>① 회사는 다음과 같은 서비스를 제공합니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "RewardTalk: 지역 기반 멤버십 리워드 서비스 (매장 탐색, 포인트 적립, 드로우 등)",
              "지역 공동구매: 사용자 기반 로컬 공동구매 서비스",
              "Seller AI: AI 기반 상세페이지 생성 및 커머스 자동화 서비스",
              "매장 운영 SaaS: 점주 대상 고객 관리, 멤버십 운영 도구",
              "통합 멤버십 인프라: QR/바코드 기반 통합 멤버십 연동 서비스",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">② 회사는 서비스를 일정 범위로 분할하여 각 범위별로 별도 이용 가능 시간을 정할 수 있습니다.</p>
          <p>③ 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 단, 점검·보수 등의 이유로 중단될 수 있으며 사전 공지합니다.</p>
        </Article>

        <Article num={9} title="서비스 변경 및 중단">
          <p>① 회사는 서비스의 변경, 추가, 삭제를 할 수 있으며, 이 경우 변경 내용을 사전에 공지합니다.</p>
          <p>② 다음의 경우 서비스가 일시 중단될 수 있습니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "정기 점검 및 시스템 업그레이드",
              "자연재해, 국가 비상사태 등 불가항력적 사유",
              "전기통신사업자의 서비스 장애",
              "서비스 이용 폭주 등 운영상 불가피한 사유",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Article>

        <Article num={10} title="포인트 및 리워드">
          <p>① 포인트는 회사가 정한 기준에 따라 서비스 이용 및 파트너 매장 방문 시 적립됩니다.</p>
          <p>② 포인트는 현금으로 전환되지 않으며, 서비스 내에서만 사용할 수 있습니다.</p>
          <p>③ 포인트의 유효 기간은 최종 적립일로부터 2년이며, 유효 기간 만료 시 소멸됩니다.</p>
          <p>④ 회원 탈퇴, 서비스 이용 정지 등의 사유로 인한 포인트 소멸에 대해 회사는 책임을 지지 않습니다.</p>
          <p>⑤ 드로우 이벤트의 당첨 조건, 참여 방법, 제공 혜택은 각 이벤트 페이지에서 별도로 공지합니다.</p>
        </Article>

      </Section>

      {/* 4장. 의무 */}
      <Section num="4" title="권리 및 의무">

        <Article num={11} title="회사의 의무">
          <p>① 회사는 관련 법령, 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적·안정적으로 서비스를 제공하기 위해 최선을 다합니다.</p>
          <p>② 회사는 이용자의 개인정보를 개인정보처리방침에 따라 안전하게 관리합니다.</p>
          <p>③ 회사는 서비스 이용과 관련한 불만이 있으면 고객센터를 통해 처리합니다.</p>
        </Article>

        <Article num={12} title="이용자의 의무">
          <p>① 이용자는 다음 행위를 해서는 안 됩니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "타인의 정보 도용 또는 허위 정보 등록",
              "회사 직원 또는 서비스 관리자를 사칭하는 행위",
              "회사가 게시한 정보를 허가 없이 변경·삭제하는 행위",
              "서비스를 이용한 영리 목적 광고 (허가되지 않은 경우)",
              "서비스를 역설계, 해킹하거나 비정상적으로 이용하는 행위",
              "포인트, 리워드 등을 비정상적 방법으로 취득하는 행위",
              "다른 이용자를 괴롭히거나 불쾌하게 하는 행위",
              "기타 불법적이거나 회사 정책에 위반되는 행위",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">② 이용자는 관련 법령, 이 약관의 규정, 회사의 이용 안내, 서비스 공지사항 등을 준수해야 합니다.</p>
        </Article>

        <Article num={13} title="저작권 및 지식재산권">
          <p>① 회사가 제공하는 서비스 내의 콘텐츠, 디자인, 로고, 소프트웨어 등에 대한 지식재산권은 회사에 귀속됩니다.</p>
          <p>② 이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 동의 없이 복사·복제·출판·배포하거나 제3자에게 제공할 수 없습니다.</p>
          <p>③ 이용자가 서비스에 게재한 콘텐츠에 대한 저작권은 이용자 본인에게 귀속됩니다. 단, 이용자는 회사가 서비스 목적 범위 내에서 해당 콘텐츠를 사용할 수 있도록 허락합니다.</p>
        </Article>

      </Section>

      {/* 5장. 결제 */}
      <Section num="5" title="결제 및 환불">

        <Article num={14} title="결제">
          <p>① 유료 서비스의 이용 대금 결제는 회사가 제공하는 결제 방법(신용/체크카드, 계좌이체, 간편결제 등)을 통해 이루어집니다.</p>
          <p>② 결제 서비스는 토스페이먼츠(주) 등 결제 대행사를 통해 처리되며, 결제 관련 개인정보는 해당 결제 대행사의 정책에 따라 처리됩니다.</p>
          <p>③ 회사는 이용자가 결제한 대금에 대해 적법한 영수증 또는 세금계산서를 발급합니다.</p>
        </Article>

        <Article num={15} title="환불 정책">
          <p>① 유료 서비스의 환불은 전자상거래 등에서의 소비자보호에 관한 법률에 따릅니다.</p>
          <p>② 다음의 경우 환불이 제한될 수 있습니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "이용자의 귀책사유로 인한 서비스 이용 불가",
              "서비스 이용 후 콘텐츠가 이미 소비된 경우",
              "이벤트, 프로모션으로 무료 제공된 혜택",
              "기타 회사가 정한 환불 불가 사유에 해당하는 경우",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">③ 환불 요청은 고객센터(support.armes@gmail.com / 010-4995-9867)로 문의 바랍니다.</p>
        </Article>

      </Section>

      {/* 6장. 면책 */}
      <Section num="6" title="면책 조항 및 분쟁 해결">

        <Article num={16} title="면책 조항">
          <p>① 회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이에 따른 이용자의 손해에 대해 책임을 지지 않습니다.</p>
          <ul className="list-none space-y-1 mt-2">
            {[
              "천재지변, 전쟁, 국가 비상사태 등 불가항력적 사유",
              "이용자의 귀책 사유로 인한 서비스 이용 장애",
              "전기통신사업자의 서비스 중단",
              "이용자가 제3자와 연계된 서비스를 이용하면서 발생한 손해",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#3182F6] flex-shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">② 회사는 이용자가 서비스에 게재한 정보·자료의 신뢰도, 정확성 등의 내용에 대해 책임을 지지 않습니다.</p>
          <p>③ 파트너(가맹점)가 제공하는 재화·서비스에 대한 책임은 해당 파트너에게 있습니다.</p>
        </Article>

        <Article num={17} title="분쟁 해결">
          <p>① 회사와 이용자 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</p>
          <p>② 회사와 이용자 간에 제기된 소송에는 대한민국 법률을 적용합니다.</p>
        </Article>

        <Article num={18} title="부칙">
          <p>이 약관은 2024년 12월 1일부터 시행합니다.</p>
          <div className="mt-4 p-4 rounded-xl bg-[#F8FAFF] border border-[#E5E8EB]">
            <p className="text-sm text-[#8B95A1]">시행일: 2024년 12월 1일</p>
            <p className="text-sm text-[#8B95A1]">주식회사 아르메스 대표이사: 신지한</p>
          </div>
        </Article>

      </Section>
    </div>
  );
}
