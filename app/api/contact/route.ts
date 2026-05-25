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

async function sendEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to     = process.env.CONTACT_TO ?? "support@armes.co.kr";

  if (!apiKey) {
    console.log("=== ARMES 문의 접수 (RESEND_API_KEY 미설정 — 콘솔 출력) ===");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
      <h2 style="color:#191F28;margin-bottom:4px;">📬 새 문의가 도착했습니다</h2>
      <p style="color:#8B95A1;font-size:13px;margin-bottom:24px;">ARMES 홈페이지 문의 폼</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;width:90px;font-weight:600;">유형</td>
          <td style="padding:10px 8px;color:#191F28;">${data.type}</td>
        </tr>
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">이름</td>
          <td style="padding:10px 8px;color:#191F28;">${data.name}</td>
        </tr>
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">이메일</td>
          <td style="padding:10px 8px;color:#191F28;"><a href="mailto:${data.email}" style="color:#3182F6;">${data.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">연락처</td>
          <td style="padding:10px 8px;color:#191F28;"><a href="tel:${data.phone}" style="color:#3182F6;">${data.phone}</a></td>
        </tr>
        ${data.company ? `<tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">회사/매장</td>
          <td style="padding:10px 8px;color:#191F28;">${data.company}</td>
        </tr>` : ""}
        ${data.region ? `<tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">지역</td>
          <td style="padding:10px 8px;color:#191F28;">${data.region}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;vertical-align:top;">내용</td>
          <td style="padding:10px 8px;color:#191F28;white-space:pre-wrap;">${data.message}</td>
        </tr>
      </table>
      <div style="margin-top:24px;padding:16px;background:#F8FAFF;border-radius:12px;font-size:12px;color:#8B95A1;">
        <strong style="color:#3182F6;">ARMES</strong> 홈페이지 자동발송
      </div>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ARMES 홈페이지 <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email,
      subject: `[ARMES 문의] ${data.type} — ${data.name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: Partial<ContactPayload> = await request.json();
    const error = validate(data);
    if (error) return NextResponse.json({ success: false, message: error }, { status: 400 });

    await sendEmail(data as ContactPayload);

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
