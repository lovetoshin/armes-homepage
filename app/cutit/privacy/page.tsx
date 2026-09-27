// 컷잇(Cutit) 개인정보 처리방침 — 앱스토어/플레이스토어 심사용.
// 회사 정책 페이지(/privacy, /terms) 및 코코핑·리워드톡·여행모아와 동일한 LegalLayout 와꾸로 통일.
// ⚠️ 컷잇은 회원가입·로그인·광고·분석·자체 서버가 없는 기기 내부 영상 편집 앱이다.
//    코코핑의 구글 로그인·이메일·푸시·광고식별자·Supabase 항목은 컷잇에 없으므로 절대 복사하지 않는다.
// 주소: https://www.armes.co.kr/cutit/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "컷잇(Cutit) 개인정보 처리방침 | 주식회사 아르메스",
  description: "컷잇(Cutit) 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/cutit/privacy" },
};

export default function CutitPrivacyPage() {
  return (
    <LegalLayout
      title="컷잇(Cutit) 개인정보 처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같은 개인정보처리방침을 수립·공개합니다. 본 방침은 모바일 애플리케이션 '컷잇'(이하 '서비스')에 적용됩니다."
      updatedAt="2026년 9월 27일"
    >
      <CutitPrivacyContent />
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

function CutitPrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        컷잇은 <strong className="text-[#333D4B]">회원가입과 로그인 없이</strong> 이용하는 영상 편집 앱입니다. 이용자가 선택한 사진·영상과 편집 정보, 완성 영상은 이용자의 휴대기기 내부에만 저장되며 회사 서버로 전송되지 않습니다. 회사는 이용자를 식별할 수 있는 개인정보를 수집하지 않습니다.
      </p>

      {/* 1 */}
      <Section num="1" title="수집하는 개인정보 항목">
        <p>회사는 이용자를 식별할 수 있는 개인정보(이름·이메일·전화번호·계정 등)를 수집하지 않습니다.</p>
        <Table
          headers={["구분", "내용"]}
          rows={[
            [
              "기기 내부에만 저장(회사로 전송 안 함)",
              "이용자가 선택하거나 촬영한 사진·영상의 사본, 클립 순서·길이, 프리셋 이름, 완성 영상과 그 목록",
            ],
            [
              "앱 업데이트 확인 시 자동 전송",
              "기기 운영체제 종류, 앱 버전·업데이트 채널, 앱이 무작위로 생성한 설치 식별값, 접속 IP 주소(통신 과정에서 자동 전달)",
            ],
          ]}
        />
        <p>앱 업데이트 확인은 앱 실행 시 최신 앱 코드를 내려받기 위한 것이며, 사진·영상이나 편집 내용은 포함되지 않습니다.</p>
      </Section>

      {/* 2 */}
      <Section num="2" title="개인정보의 이용 목적">
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">기기 내부 저장 정보</strong>: 영상 편집, 미리보기, 완성 영상 생성·보관, 프리셋 불러오기</>,
            <><strong className="text-[#333D4B]">업데이트 확인 정보</strong>: 앱의 최신 버전 제공, 오류 수정 배포</>,
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="기기 접근 권한">
        <Table
          headers={["권한", "목적", "필수 여부"]}
          rows={[
            ["사진·동영상 선택", "편집할 사진·영상을 이용자가 직접 선택할 때 사용 (시스템 사진 선택기 이용)", "선택"],
            ["카메라", "촬영 탭에서 사진·영상을 촬영할 때 사용", "선택"],
            ["마이크", "영상 촬영 시 소리를 함께 녹음할 때 사용", "선택"],
            ["사진 보관함 저장", "완성 영상을 휴대폰 사진 보관함(갤러리)에 저장할 때 사용", "선택"],
          ]}
        />
        <p>선택 권한은 해당 기능을 사용할 때만 요청하며, 허용하지 않아도 나머지 기능은 이용할 수 있습니다. 권한은 기기 설정에서 언제든지 변경할 수 있습니다.</p>
      </Section>

      {/* 4 */}
      <Section num="4" title="개인정보의 보유 및 이용 기간">
        <Bullets
          items={[
            <><strong className="text-[#333D4B]">기기 내부 저장 정보</strong>: 이용자가 앱에서 삭제하거나 앱을 삭제할 때까지 기기에 보관되며, 앱 삭제 시 함께 삭제됩니다.</>,
            "사진 보관함에 저장한 완성 영상과 원본 사진·영상은 앱을 삭제해도 사진 보관함에 남으며, 이용자가 직접 관리합니다.",
            <><strong className="text-[#333D4B]">업데이트 확인 정보</strong>: 회사가 별도로 보관하지 않으며, 아래 수탁업체의 정책에 따라 처리됩니다.</>,
          ]}
        />
      </Section>

      {/* 5 */}
      <Section num="5" title="개인정보의 제3자 제공">
        <p>회사는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 이용자가 앱의 공유 기능으로 완성 영상을 다른 앱(메신저·SNS 등)에 직접 보내는 경우, 해당 영상은 이용자가 선택한 앱으로 전달되며 그 이후 처리는 해당 앱의 정책을 따릅니다.</p>
        <Bullets
          items={[
            "법령의 규정에 의하거나 수사기관의 적법한 요청이 있는 경우",
          ]}
        />
      </Section>

      {/* 6 */}
      <Section num="6" title="개인정보 처리의 위탁 / 외부 서비스">
        <Table
          headers={["수탁업체", "위탁 업무"]}
          rows={[
            ["650 Industries, Inc. (Expo)", "앱 업데이트 배포(EAS Update)"],
          ]}
        />
      </Section>

      {/* 7 */}
      <Section num="7" title="위치정보의 처리">
        <p>본 서비스는 이용자의 위치정보를 수집하거나 이용하지 않습니다.</p>
      </Section>

      {/* 8 */}
      <Section num="8" title="광고 및 이용 분석">
        <p>본 서비스는 광고를 게재하지 않으며, 광고 식별자와 이용 분석 도구를 사용하지 않습니다.</p>
      </Section>

      {/* 9 */}
      <Section num="9" title="이용자의 권리와 행사 방법">
        <Bullets
          items={[
            "앱 안에서 클립·완성 영상·프리셋을 직접 삭제할 수 있습니다.",
            "앱을 삭제하면 기기 내부에 저장된 컷잇 데이터가 모두 삭제됩니다.",
            "회사는 이용자의 편집 데이터를 보관하지 않으므로 서버에서 삭제할 정보가 없습니다. 기타 문의는 아래 개인정보 보호책임자에게 요청할 수 있습니다.",
          ]}
        />
      </Section>

      {/* 10 */}
      <Section num="10" title="만 14세 미만 아동의 개인정보">
        <p>회사는 만 14세 미만 아동을 포함하여 이용자를 식별할 수 있는 개인정보를 수집하지 않습니다.</p>
      </Section>

      {/* 11 */}
      <Section num="11" title="개인정보의 파기">
        <p>회사는 보관하는 개인정보가 없습니다. 기기 내부 정보는 앱 삭제 또는 이용자의 삭제로 파기됩니다.</p>
      </Section>

      {/* 12 */}
      <Section num="12" title="개인정보의 안전성 확보 조치">
        <Bullets
          items={[
            "편집 데이터는 기기 내부의 앱 전용 저장 공간에만 저장",
            "업데이트 통신 구간 암호화(HTTPS) 적용",
          ]}
        />
      </Section>

      {/* 13 */}
      <Section num="13" title="개인정보 보호책임자">
        <p>이용자는 개인정보 보호와 관련한 문의, 불만 처리, 피해 구제 등을 아래 책임자에게 요청할 수 있습니다.</p>
        <div className="mt-4 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB] space-y-2">
          <p><strong className="text-[#333D4B]">회사명</strong>: 주식회사 아르메스</p>
          <p><strong className="text-[#333D4B]">대표자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">사업자등록번호</strong>: 798-86-02943</p>
          <p><strong className="text-[#333D4B]">개인정보 보호책임자</strong>: 신지한</p>
          <p><strong className="text-[#333D4B]">주소</strong>: 경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호 (경복대학교 창업보육센터)</p>
          <p><strong className="text-[#333D4B]">이메일</strong>: <a href="mailto:support.armes@gmail.com" className="text-[#3182F6]">support.armes@gmail.com</a></p>
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

      {/* 14 */}
      <Section num="14" title="개인정보 처리방침의 변경">
        <p>본 개인정보처리방침은 법령 및 서비스 변경 사항을 반영하기 위해 개정될 수 있으며, 변경 시 본 페이지를 통해 안내합니다.</p>
        <Bullets
          items={[
            "공고일자: 2026년 9월 27일",
            "시행일자: 2026년 9월 27일",
          ]}
        />
      </Section>
    </div>
  );
}
