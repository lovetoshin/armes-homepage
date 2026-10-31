// 월드링고(WorldLingo) 개인정보 처리방침 — 포트원 결제사(KG이니시스·한국결제네트웍스·카카오페이) 심사·스토어 심사용.
// 코코핑 개인정보 페이지(app/cocoping/privacy/page.tsx)와 같은 LegalLayout·Section·Table 와꾸.
// ⚠️ 실제 수집 범위만 적는다. 위치정보·광고식별자 수집, 수업 녹화는 하지 않으므로 절대 쓰지 않는다.
// 적용 앱: 학생용 「월드링고」(com.armes.worldlingo.student) · 선생님용 「월드링고 튜터」(WorldLingo Tutor, com.armes.worldlingo.teacher)
// 서버 위치(2026-11-01 월드링고 세션이 각 관리 화면에서 확인): Supabase=대한민국(서울) · LiveKit=미국 · Google FCM=미국 · 결제 4곳=대한민국
// 주소: https://www.armes.co.kr/worldlingo/privacy

import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "월드링고(WorldLingo) 개인정보 처리방침 | 주식회사 아르메스",
  description: "월드링고(WorldLingo) 개인정보 처리방침 - 주식회사 아르메스",
  alternates: { canonical: "/worldlingo/privacy" },
};

export default function WorldlingoPrivacyPage() {
  return (
    <LegalLayout
      title="월드링고(WorldLingo) 개인정보 처리방침"
      subtitle="주식회사 아르메스(이하 '회사')는 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같은 개인정보처리방침을 수립·공개합니다. 본 방침은 학생용 앱 '월드링고'와 선생님용 앱 '월드링고 튜터'(이하 '서비스')에 적용됩니다."
      updatedAt="2026년 11월 1일"
    >
      <WorldlingoPrivacyContent />
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

// minWidth: 칸이 많은 표(국외 이전 6칸)는 폰에서 글자가 세로로 쪼개지지 않게 최소 폭을 주고 옆으로 밀어 보게 한다
function Table({ headers, rows, minWidth }: { headers: string[]; rows: React.ReactNode[][]; minWidth?: number }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse" style={minWidth ? { minWidth } : undefined}>
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

function WorldlingoPrivacyContent() {
  return (
    <div>
      {/* 총칙 */}
      <p className="text-[#4E5968] text-[15px] leading-relaxed mb-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#E5E8EB]">
        월드링고는 학생과 강사를 연결해 <strong className="text-[#333D4B]">1:1 실시간 화상 언어 수업</strong>을 제공하는 서비스입니다. 회사는 서비스 제공에 필요한 최소한의 개인정보만 수집합니다. 화상수업 영상·음성은 실시간으로 전송만 하며 <strong className="text-[#333D4B]">녹화하거나 저장하지 않습니다.</strong>
      </p>

      {/* 1 */}
      <Section num="1" title="수집하는 개인정보 항목 및 수집 방법">
        <Table
          headers={["구분", "수집 항목"]}
          rows={[
            ["회원가입·로그인", "이메일 주소·비밀번호 또는 구글 계정 정보(이메일·이름·프로필 사진)"],
            ["프로필", "이름, 프로필 사진"],
            ["강사 등록 시", "국적, 가르치는 언어, 전문 분야, 자기소개, 희망 수업료, 프로필 사진, 자기소개 영상"],
            ["수업 이용", "예약 일시, 수업 이력, 후기·별점"],
            ["결제", "결제수단 종류, 결제 내역, 구독 정보 (카드번호 등 결제 정보는 회사가 저장하지 않으며 결제대행사가 처리)"],
            ["강사 정산", "출금 계좌(은행명·계좌번호·예금주)"],
            ["채팅", "학생과 강사 사이의 메시지 내용"],
            ["자동 수집(알림)", "푸시 알림용 기기 토큰(FCM)"],
          ]}
        />
        <p className="font-semibold text-[#333D4B]">수집 방법</p>
        <Bullets
          items={[
            "회원가입·로그인, 프로필·강사 정보 입력, 수업 예약·후기 작성, 결제·정산 신청 과정에서 이용자가 직접 입력",
            "앱 실행 및 알림 허용 시 푸시 알림용 기기 토큰 자동 수집",
          ]}
        />
        <div className="mt-2 p-4 rounded-xl bg-[#F8FAFF] border border-[#C5D8FB] text-sm">
          <strong className="text-[#333D4B]">화상수업은 녹화·저장하지 않습니다</strong>: 1:1 화상수업의 영상과 음성은 수업 연결을 위해 실시간으로 전송될 뿐, 회사나 수탁업체가 녹화하거나 저장하지 않습니다.
        </div>
      </Section>

      {/* 2 */}
      <Section num="2" title="개인정보의 수집 및 이용 목적">
        <Bullets
          items={[
            "회원 가입 및 본인 식별, 로그인 상태 유지, 부정 이용 방지",
            "강사 프로필 공개와 학생-강사 매칭, 수업 예약·진행·후기 관리",
            "1:1 실시간 화상수업 연결",
            "유료 수업권·정기구독 결제, 환불 처리, 강사 수업료 정산",
            "학생과 강사 사이의 채팅 제공",
            "수업 예약·변경·시작 등 알림(푸시) 발송",
            "고객 문의 응대와 분쟁 처리",
          ]}
        />
      </Section>

      {/* 3 */}
      <Section num="3" title="앱 접근 권한">
        <Table
          headers={["권한", "목적", "필수 여부"]}
          rows={[
            ["카메라", "1:1 화상수업에서 영상 송출, 프로필·자기소개 영상 촬영", "선택"],
            ["마이크", "1:1 화상수업에서 음성 송출", "선택"],
            ["사진·동영상", "프로필 사진·자기소개 영상 업로드", "선택"],
            ["알림", "수업 예약·변경·시작 알림 수신", "선택"],
          ]}
        />
        <p>선택 권한은 해당 기능을 사용할 때만 요청하며, 허용하지 않아도 나머지 기능은 이용할 수 있습니다. 다만 카메라·마이크를 허용하지 않으면 화상수업을 진행할 수 없습니다. 권한은 기기 설정에서 언제든지 변경할 수 있습니다.</p>
      </Section>

      {/* 4 */}
      <Section num="4" title="개인정보의 보유 및 이용 기간">
        <p>회사는 회원 탈퇴 시 개인정보를 지체 없이 파기합니다. 다만 관련 법령에 따라 보존이 필요한 정보는 아래 기간 동안 보관합니다.</p>
        <Table
          headers={["보존 정보", "근거 법령", "보존 기간"]}
          rows={[
            ["계약 또는 청약철회 등에 관한 기록", "전자상거래 등에서의 소비자보호에 관한 법률", "5년"],
            ["대금결제 및 재화 등의 공급에 관한 기록", "전자상거래 등에서의 소비자보호에 관한 법률", "5년"],
            ["소비자의 불만 또는 분쟁처리에 관한 기록", "전자상거래 등에서의 소비자보호에 관한 법률", "3년"],
            ["서비스 접속 기록(로그)", "통신비밀보호법", "3개월"],
          ]}
        />
      </Section>

      {/* 5 */}
      <Section num="5" title="개인정보의 제3자 제공">
        <p>회사는 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 아래의 경우는 예외로 합니다.</p>
        <Bullets
          items={[
            "수업 진행을 위해 예약한 강사에게 학생의 이름·프로필 사진·예약 일시를, 학생에게 강사의 공개 프로필을 보여 주는 경우",
            "이용자가 사전에 동의한 경우",
            "법령의 규정에 의하거나 수사기관의 적법한 요청이 있는 경우",
          ]}
        />
      </Section>

      {/* 6 */}
      <Section num="6" title="개인정보 처리의 위탁">
        <p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
        <Table
          headers={["수탁업체", "위탁 업무", "처리 장소"]}
          rows={[
            ["Supabase, Inc.", "회원 인증, 서비스 데이터베이스 및 파일(프로필 사진·자기소개 영상) 저장", "대한민국(서울)"],
            ["Google LLC", "구글 계정 로그인, 푸시 알림 발송(Firebase Cloud Messaging)", "미국"],
            ["LiveKit, Inc.", "1:1 실시간 화상수업 연결(녹화·저장 없음)", "미국"],
            ["(주)포트원", "결제 중계(결제 요청·결과 전달)", "대한민국"],
            ["(주)케이지이니시스", "신용카드 결제 처리", "대한민국"],
            ["한국결제네트웍스(주)", "신용카드 결제 처리", "대한민국"],
            ["(주)카카오페이", "카카오페이 결제 처리", "대한민국"],
          ]}
        />
        <p>회원 정보·서비스 데이터·파일은 대한민국(서울)에 있는 서버에 보관되며, 국외로 이전되는 정보는 7번에 적은 항목뿐입니다.</p>
      </Section>

      {/* 7 */}
      <Section num="7" title="개인정보의 국외 이전">
        <p>회사는 서비스 제공을 위해 아래와 같이 개인정보를 국외 수탁업체에 이전합니다.</p>
        <Table
          minWidth={760}
          headers={["이전받는 자", "이전 국가", "이전 항목", "이전 목적", "이전 시기·방법", "보유 기간"]}
          rows={[
            ["LiveKit, Inc.", "미국", "화상수업 중 영상·음성의 실시간 전송(녹화·저장하지 않음)", "1:1 화상수업 연결", "화상수업 진행 시 네트워크로 실시간 전송", "저장하지 않으므로 해당 없음"],
            ["Google LLC (Firebase Cloud Messaging)", "미국", "푸시 알림용 기기 토큰과 알림 내용", "푸시 알림 발송", "알림 발송 시 네트워크로 전송", "회원 탈퇴 또는 알림 해제 시까지"],
          ]}
        />
        <p>이용자는 국외 이전을 거부할 수 있습니다. 다만 LiveKit 이전을 거부하면 화상수업을, Google 이전을 거부하면 푸시 알림을 이용할 수 없습니다. 푸시 알림은 기기 설정에서 끌 수 있으며, 그 밖의 거부는 아래 개인정보 보호책임자에게 요청하실 수 있습니다.</p>
      </Section>

      {/* 8 */}
      <Section num="8" title="이용자 및 법정대리인의 권리와 행사 방법">
        <p>이용자는 언제든지 본인의 개인정보를 조회·수정·삭제하거나 처리 정지, 동의 철회를 요청할 수 있습니다. 앱 안에서 프로필을 직접 수정할 수 있고, 아래 개인정보 보호책임자 연락처로도 요청하실 수 있으며 회사는 지체 없이 조치합니다.</p>
        <div className="mt-2 p-4 rounded-xl bg-[#F8FAFF] border border-[#C5D8FB] text-sm">
          <strong className="text-[#333D4B]">회원 탈퇴(계정 삭제)</strong>: 앱 안의 마이페이지에서 회원 탈퇴를 신청하면 계정과 개인정보가 삭제됩니다. 단 4번의 법정 보존 정보는 해당 기간 동안 분리 보관 후 파기합니다.
        </div>
      </Section>

      {/* 9 */}
      <Section num="9" title="만 14세 미만 아동의 개인정보">
        <p>서비스는 만 14세 미만 아동의 회원 가입을 받지 않습니다. 만 14세 미만임이 확인될 경우 해당 정보를 지체 없이 파기합니다.</p>
      </Section>

      {/* 10 */}
      <Section num="10" title="개인정보의 파기 절차 및 방법">
        <Bullets
          items={[
            "파기 절차: 보유 기간이 끝났거나 처리 목적이 달성된 개인정보는 지체 없이 파기하며, 법령에 따라 보존해야 하는 정보는 별도로 분리해 보관 후 기간이 끝나면 파기합니다.",
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
            "비밀번호 암호화 저장, 카드 정보는 회사가 저장하지 않고 결제대행사가 처리",
            "개인정보에 대한 접근 권한의 최소화 및 접근 통제",
            "화상수업 녹화·저장 기능 미운영",
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
          <p><strong className="text-[#333D4B]">전화</strong>: 070-4544-7659</p>
          <p><strong className="text-[#333D4B]">이메일</strong>: <a href="mailto:support.armes@gmail.com" className="text-[#3182F6]">support.armes@gmail.com</a></p>
        </div>
      </Section>

      {/* 13 */}
      <Section num="13" title="권익침해 구제 방법">
        <p>개인정보 침해에 대한 신고나 상담, 분쟁 해결이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
        <ul className="list-none space-y-1 mt-2 text-sm">
          {[
            "개인정보분쟁조정위원회 (www.kopico.go.kr / 1833-6972)",
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
        <p>본 개인정보처리방침은 법령 및 서비스 변경 사항을 반영하기 위해 개정될 수 있으며, 변경 시 앱 내 공지 또는 본 페이지를 통해 변경 사항을 사전에 안내합니다.</p>
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
