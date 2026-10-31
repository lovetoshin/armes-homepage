// 월드링고(WorldLingo) 서비스 이용약관 — 포트원 결제사(KG이니시스·한국결제네트웍스·카카오페이) 심사·스토어 심사용.
// 코코핑 개인정보 페이지와 같은 LegalLayout·Section 와꾸. 요금·취소·환불 숫자는 lib/project-details.ts 의 worldlingo.billing 과 같다.
// 적용 앱: 학생용 「월드링고」(com.armes.worldlingo.student) · 선생님용 「월드링고 튜터」(WorldLingo Tutor, com.armes.worldlingo.teacher)
// 주소: https://www.armes.co.kr/worldlingo/terms

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { projectDetails } from "@/lib/project-details";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "월드링고(WorldLingo) 서비스 이용약관 | 주식회사 아르메스",
  description: "월드링고(WorldLingo) 서비스 이용약관 - 주식회사 아르메스",
  alternates: { canonical: "/worldlingo/terms" },
};

export default function WorldlingoTermsPage() {
  return (
    <LegalLayout
      title="월드링고(WorldLingo) 서비스 이용약관"
      subtitle="본 약관은 주식회사 아르메스가 제공하는 학생용 앱 '월드링고'와 선생님용 앱 '월드링고 튜터'(이하 '서비스')의 이용에 관한 조건과 절차를 정합니다."
      updatedAt="2026년 11월 1일"
    >
      <WorldlingoTermsContent />
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

function WorldlingoTermsContent() {
  const billing = projectDetails.worldlingo.billing!;
  return (
    <div>
      {/* 1 */}
      <Section num="1" title="목적">
        <p>본 약관은 주식회사 아르메스(이하 &apos;회사&apos;)가 제공하는 1:1 실시간 화상 언어 수업 서비스 &apos;월드링고&apos;의 이용과 관련하여 회사, 학생 회원, 강사 회원의 권리·의무 및 책임 사항을 정합니다.</p>
      </Section>

      {/* 2 */}
      <Section num="2" title="용어의 정의">
        <Bullets
          items={[
            "서비스: 한류 K-컬처 커리큘럼 등을 활용한 원어민 1:1 실시간 화상 한국어 수업(영어·중국어 포함)을 학생과 강사가 이용할 수 있도록 회사가 제공하는 플랫폼",
            "회원: 본 약관에 동의하고 서비스에 가입한 자로, 학생 회원과 강사 회원으로 나뉩니다.",
            "학생 회원: 강사를 골라 수업을 예약하고 수강하는 회원(학생용 앱 '월드링고')",
            "강사 회원: 회사의 승인을 받아 수업을 제공하는 회원(선생님용 앱 '월드링고 튜터')",
            "수업권·정기구독: 정해진 횟수의 수업을 이용할 수 있도록 매월 결제하는 상품",
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="서비스의 성격">
        <p>① 회사는 학생과 강사를 연결하는 플랫폼을 제공하며, 수업은 강사 회원이 제공합니다.</p>
        <p>② 학생은 강사의 프로필·후기를 보고 강사를 고른 뒤 수업을 예약하고, 예약한 시간에 앱에서 1:1 화상수업을 받으며, 수업 후 후기를 남길 수 있습니다.</p>
      </Section>

      {/* 4 */}
      <Section num="4" title="약관의 효력 및 변경">
        <p>① 본 약관은 서비스 화면 또는 본 페이지에 게시함으로써 효력이 발생합니다.</p>
        <p>② 회사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전(회원에게 불리한 변경은 30일 전)부터 앱 안 공지 또는 본 페이지를 통해 안내합니다.</p>
      </Section>

      {/* 5 */}
      <Section num="5" title="회원가입 및 계정 관리">
        <p>① 회원가입은 이용자가 약관과 개인정보 처리방침에 동의하고 이메일 또는 구글 계정으로 가입을 신청한 뒤 회사가 승낙함으로써 성립합니다.</p>
        <p>② 만 14세 미만은 회원으로 가입할 수 없습니다.</p>
        <p>③ 회원은 자신의 계정 정보를 직접 관리해야 하며, 타인에게 계정을 양도·대여하거나 타인의 계정을 도용해서는 안 됩니다.</p>
        <p>④ 계정 도용이나 무단 사용을 알게 된 경우 즉시 회사에 알려야 합니다.</p>
      </Section>

      {/* 6 */}
      <Section num="6" title="요금 및 결제">
        <Table
          headers={["상품", "가격", "구성", "결제 방식"]}
          rows={billing.plans.map((p) => [p.name, p.price, p.desc.replace("\n", " "), p.pay])}
        />
        <Bullets
          items={[
            "표시 가격은 부가세가 포함된 실제 결제 금액입니다.",
            "결제수단은 신용카드·카카오페이입니다.",
            "가격은 회사 사정에 따라 바뀔 수 있으며, 결제 시점에 앱 안에 표시된 가격이 우선합니다. 가격 변경은 다음 결제일 전에 앱 안에서 미리 안내합니다.",
          ]}
        />
      </Section>

      {/* 7 */}
      <Section num="7" title="정기구독의 이용 기간·자동 갱신·해지">
        <Bullets items={billing.period} />
        <p>해지는 앱 안의 &apos;내 수업권·구독&apos; 화면에서 언제든지 할 수 있습니다.</p>
      </Section>

      {/* 8 */}
      <Section num="8" title="수업 취소·노쇼·청약철회·환불">
        <Bullets items={billing.refund} />
      </Section>

      {/* 9 */}
      <Section num="9" title="강사 회원">
        <p>① 강사 회원은 회사의 근로자가 아닌 독립 사업자로서 자신의 책임으로 수업을 제공합니다.</p>
        <p>② 강사 회원은 국적·가르치는 언어·전문 분야·자기소개·희망 수업료 등 등록 정보를 사실대로 입력해야 하며, 회사는 심사 후 강사 등록을 승인합니다.</p>
        <p>③ 회사는 강사가 진행한 수업의 수업료에서 플랫폼 수수료 20%를 뺀 금액을 정산합니다.</p>
        <p>④ 강사 회원은 앱 안에서 출금 계좌를 등록하고 정산을 신청하며, 회사는 신청 내역을 확인한 뒤 등록된 계좌로 지급합니다.</p>
        <p>⑤ 수업료 수입에 대한 세금 신고·납부는 강사 회원 본인이 부담합니다.</p>
        <p>⑥ 강사 노쇼(무단 불참)가 반복되면 회사는 강사 회원의 서비스 이용을 제한할 수 있습니다.</p>
      </Section>

      {/* 10 */}
      <Section num="10" title="금지 행위">
        <p>회원은 다음 행위를 해서는 안 됩니다.</p>
        <Bullets
          items={[
            "상대방의 동의 없이 수업을 녹화·녹음하거나 배포하는 행위",
            "플랫폼 밖에서의 직거래(개인 연락처 교환을 통한 수업료 직접 결제 등)를 유도하는 행위",
            "욕설·성희롱·차별 등 상대방에게 불쾌감이나 피해를 주는 행위",
            "타인이나 회사 관계자를 사칭하는 행위",
            "서비스를 무단으로 복제·변경·역설계하거나 정상적인 운영을 방해하는 행위",
            "그 밖에 법령이나 본 약관에 어긋나는 행위",
          ]}
        />
      </Section>

      {/* 11 */}
      <Section num="11" title="이용 제한 및 계약 해지">
        <p>① 회원은 언제든지 앱 안에서 회원 탈퇴를 신청해 이용계약을 해지할 수 있습니다. 정기구독 중 탈퇴하는 경우의 환불은 8번 규정을 따릅니다.</p>
        <p>② 회사는 회원이 10번의 금지 행위를 하거나 약관을 위반한 경우 사전 통지 후 서비스 이용을 제한하거나 이용계약을 해지할 수 있습니다. 다만 위반이 중대하거나 긴급한 경우에는 먼저 조치한 뒤 통지할 수 있습니다.</p>
      </Section>

      {/* 12 */}
      <Section num="12" title="면책">
        <p>① 회사는 천재지변, 통신 장애 등 회사의 고의 또는 과실이 없는 사유로 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</p>
        <p>② 회사는 회원 사이(학생과 강사 사이)에서 발생한 분쟁에 대해 회사의 고의 또는 과실이 없는 한 책임을 지지 않으며, 분쟁 해결을 위해 성실히 협조합니다.</p>
        <p>③ 회사는 회원의 기기·통신 환경으로 인한 화상수업 품질 저하에 대해 회사의 고의 또는 과실이 없는 한 책임을 지지 않습니다.</p>
      </Section>

      {/* 13 */}
      <Section num="13" title="분쟁 해결 및 관할">
        <p>① 서비스 이용과 관련한 분쟁은 대한민국 법을 따릅니다.</p>
        <p>② 서비스 이용과 관련하여 소송이 제기될 경우 회사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>
      </Section>

      {/* 14 */}
      <Section num="14" title="회사 정보 및 고객센터">
        <div className="mt-2 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">회사명</strong>: 주식회사 아르메스</p>
          <p><strong className="text-[#333D4B]">대표자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">사업자등록번호</strong>: 798-86-02943</p>
          <p><strong className="text-[#333D4B]">주소</strong>: 경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)</p>
          <p><strong className="text-[#333D4B]">고객센터</strong>: 070-4544-7659 · <a href="mailto:support.armes@gmail.com" className="text-[#3182F6]">support.armes@gmail.com</a></p>
        </div>
        <Bullets
          items={[
            "공고일자: 2026년 11월 1일",
            "시행일자: 2026년 11월 1일",
          ]}
        />
      </Section>
    </div>
  );
}
