// 코코핑(CocoPing) 개인정보 처리방침 — 플레이스토어 심사용.
// 회사 정책 페이지(/privacy, /terms) 및 리워드톡·여행모아와 동일한 LegalLayout 와꾸로 통일.
// ⚠️ 법적 텍스트는 코코핑 실제 수집 범위(구글 로그인 이메일·푸시·광고식별자)에 맞춰 정직하게 작성한다.
// 주소: https://www.armes.co.kr/cocoping/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "코코핑(CocoPing) 개인정보 처리방침 | 주식회사 아르메스",
  description: "코코핑(CocoPing) 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/cocoping/privacy" },
};

export default function CocopingPrivacyPage() {
  return (
    <LegalLayout
      title="코코핑(CocoPing) 개인정보 처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같은 개인정보처리방침을 수립·공개합니다. 본 방침은 모바일 애플리케이션 '코코핑'(이하 '서비스')에 적용됩니다."
      updatedAt="2026년 6월 24일"
    >
      <CocopingPrivacyContent />
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

function CocopingPrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        회사는 서비스 제공에 필요한 <strong className="text-[#333D4B]">최소한의 개인정보만</strong> 수집합니다. 관심 상품(찜) 목록 등 일부 정보는 이용자의 휴대기기 내부에만 저장되며 회사 서버로 전송되지 않습니다.
      </p>

      {/* 1 */}
      <Section num="1" title="수집하는 개인정보 항목 및 수집 방법">
        <p>회사는 서비스 제공에 필요한 최소한의 개인정보만을 수집합니다.</p>
        <Table
          headers={["구분", "수집 항목"]}
          rows={[
            ["필수 항목(회원 로그인)", "이메일 주소(구글 계정)"],
            ["자동 수집(알림)", "푸시 알림 토큰, 알림 수신 설정값"],
            ["자동 수집(광고)", "광고 식별자(ADID)"],
            ["자동 수집(이용 분석)", "기기 정보(OS·기기 모델), 접속 로그, 오류 기록"],
          ]}
        />
        <p className="font-semibold text-[#333D4B]">수집 방법</p>
        <Bullets
          items={[
            "이용자가 구글 계정으로 로그인할 때 수집",
            "앱 실행 및 알림 동의 시 자동 수집",
            "서비스 이용 과정에서 자동 생성·수집(광고 식별자, 로그)",
          ]}
        />
        <div className="mt-2 p-4 rounded-xl bg-[#F8FAFF] border border-[#C5D8FB] text-sm">
          <strong className="text-[#333D4B]">기기 내부에만 저장되어 회사로 전송되지 않는 정보</strong>: 관심 상품(찜) 목록은 이용자의 휴대기기 내부에만 저장되며 회사 서버로 전송되지 않습니다.
        </div>
      </Section>

      {/* 2 */}
      <Section num="2" title="개인정보의 수집 및 이용 목적">
        <Bullets
          items={[
            "회원 가입 및 본인 식별, 로그인 상태 유지",
            "할인·세일 정보 등 맞춤 알림(푸시) 발송",
            "서비스 운영, 품질 개선 및 오류 분석",
            "광고 게재를 통한 무료 서비스 유지",
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="개인정보의 보유 및 이용 기간">
        <p>회사는 원칙적으로 개인정보의 수집·이용 목적이 달성되면 지체 없이 파기합니다.</p>
        <Bullets
          items={[
            "회원 정보(이메일): 회원 탈퇴 또는 동의 철회 시 즉시 파기",
            "푸시 알림 토큰: 알림 해제 또는 앱 삭제 후 파기",
            "관련 법령에 따라 보존이 필요한 경우 해당 법령이 정한 기간 동안 보관",
          ]}
        />
      </Section>

      {/* 4 */}
      <Section num="4" title="개인정보의 제3자 제공">
        <p>회사는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 아래의 경우는 예외로 합니다.</p>
        <Bullets
          items={[
            "이용자가 사전에 동의한 경우",
            "법령의 규정에 의하거나 수사기관의 적법한 요청이 있는 경우",
          ]}
        />
      </Section>

      {/* 5 */}
      <Section num="5" title="개인정보 처리의 위탁">
        <p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
        <Table
          headers={["수탁업체", "위탁 업무"]}
          rows={[
            ["Google LLC", "회원 인증(구글 로그인), 푸시 알림 발송(Firebase), 광고 게재(AdMob)"],
            ["Supabase, Inc.", "서비스 데이터 저장 및 클라우드 인프라 운영"],
          ]}
        />
      </Section>

      {/* 6 */}
      <Section num="6" title="위치정보의 처리">
        <p>본 서비스는 이용자의 위치정보를 수집하거나 이용하지 않습니다.</p>
      </Section>

      {/* 7 */}
      <Section num="7" title="광고 식별자 및 맞춤형 광고">
        <p>본 서비스는 구글 애드몹(Google AdMob)을 통해 광고를 게재하며, 이 과정에서 광고 식별자(ADID) 및 기기 정보가 수집·이용될 수 있습니다. 이용자는 기기 설정에서 광고 식별자를 초기화하거나 맞춤 광고를 제한할 수 있습니다.</p>
        <Bullets
          items={[
            "안드로이드: 설정 > Google > 광고 > 광고 ID 삭제 / 맞춤 광고 선택 해제",
          ]}
        />
      </Section>

      {/* 8 */}
      <Section num="8" title="이용자 및 법정대리인의 권리와 행사 방법">
        <p>이용자는 언제든지 본인의 개인정보를 조회·수정·삭제하거나 처리 정지, 동의 철회를 요청할 수 있습니다. 앱 내 설정에서 알림 수신을 해제하거나 회원 탈퇴를 통해 개인정보 삭제를 요청할 수 있으며, 아래 개인정보 보호책임자 연락처로도 요청하실 수 있습니다.</p>
      </Section>

      {/* 9 */}
      <Section num="9" title="만 14세 미만 아동의 개인정보">
        <p>회사는 만 14세 미만 아동의 개인정보를 수집하지 않습니다. 만 14세 미만임이 확인될 경우 해당 정보를 지체 없이 파기합니다.</p>
      </Section>

      {/* 10 */}
      <Section num="10" title="개인정보의 파기 절차 및 방법">
        <Bullets
          items={[
            "전자적 파일 형태의 정보: 복구가 불가능한 방법으로 영구 삭제",
            "종이 출력물: 분쇄하거나 소각하여 파기",
          ]}
        />
      </Section>

      {/* 11 */}
      <Section num="11" title="개인정보의 안전성 확보 조치">
        <p>회사는 개인정보 보호를 위해 다음의 조치를 시행하고 있습니다.</p>
        <Bullets
          items={[
            "전송 구간 암호화(HTTPS) 적용",
            "개인정보에 대한 접근 권한의 최소화 및 접근 통제",
            "인증 정보의 안전한 관리",
          ]}
        />
      </Section>

      {/* 12 */}
      <Section num="12" title="개인정보 보호책임자">
        <p>이용자는 개인정보 보호와 관련한 문의, 불만 처리, 피해 구제 등을 아래 책임자에게 요청할 수 있습니다.</p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">회사명</strong>: 주식회사 아르메스</p>
          <p><strong className="text-[#333D4B]">대표자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">사업자등록번호</strong>: 798-86-02943</p>
          <p><strong className="text-[#333D4B]">개인정보 보호책임자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">주소</strong>: 경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)</p>
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
        <p>본 개인정보처리방침은 법령 및 서비스 변경 사항을 반영하기 위해 개정될 수 있으며, 변경 시 앱 내 공지 또는 본 페이지를 통해 변경 사항을 사전에 안내합니다.</p>
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
