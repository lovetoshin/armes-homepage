import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  type: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  region?: string;
  message: string;
}

// ──────────────────────────────────────────────
// 간단한 유효성 검사
// ──────────────────────────────────────────────
function validate(data: Partial<ContactPayload>): string | null {
  if (!data.type)    return "문의 유형을 선택해 주세요.";
  if (!data.name?.trim())    return "이름을 입력해 주세요.";
  if (!data.email?.trim())   return "이메일을 입력해 주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "올바른 이메일 형식이 아닙니다.";
  if (!data.phone?.trim())   return "연락처를 입력해 주세요.";
  if (!data.message?.trim()) return "문의 내용을 입력해 주세요.";
  if (data.message.trim().length < 10) return "문의 내용을 10자 이상 입력해 주세요.";
  return null;
}

// ──────────────────────────────────────────────
// 이메일 발송 (Nodemailer 또는 외부 서비스 연동)
// 환경 변수가 설정되지 않은 경우 콘솔 로깅으로 fallback
// ──────────────────────────────────────────────
async function sendNotification(data: ContactPayload) {
  const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

  if (WEBHOOK_URL) {
    // Slack, Discord, Make(Integromat) 등 Webhook 연동
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `📬 새 문의 도착`,
        attachments: [
          {
            color: "#8B5CF6",
            fields: [
              { title: "유형",     value: data.type,            short: true },
              { title: "이름",     value: data.name,            short: true },
              { title: "이메일",   value: data.email,           short: true },
              { title: "연락처",   value: data.phone,           short: true },
              { title: "회사/매장", value: data.company || "-",  short: true },
              { title: "지역",     value: data.region  || "-",  short: true },
              { title: "내용",     value: data.message,         short: false },
            ],
          },
        ],
      }),
    });
  } else {
    // 개발 환경: 콘솔 출력
    console.log("=== ARMES 문의 접수 ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("=======================");
  }
}

// ──────────────────────────────────────────────
// POST /api/contact
// ──────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const data: Partial<ContactPayload> = await request.json();

    const error = validate(data);
    if (error) {
      return NextResponse.json({ success: false, message: error }, { status: 400 });
    }

    await sendNotification(data as ContactPayload);

    return NextResponse.json({
      success: true,
      message: "문의가 정상적으로 접수되었습니다. 1~2 영업일 내에 연락드리겠습니다.",
    });
  } catch (err) {
    console.error("[contact API error]", err);
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
