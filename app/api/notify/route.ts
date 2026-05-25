import { NextRequest, NextResponse } from "next/server";

export interface NotifyPayload {
  name: string;
  email: string;
  service?: string;
}

function validate(data: Partial<NotifyPayload>): string | null {
  if (!data.name?.trim())  return "이름을 입력해 주세요.";
  if (!data.email?.trim()) return "이메일을 입력해 주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "올바른 이메일 형식이 아닙니다.";
  return null;
}

async function sendEmail(data: NotifyPayload) {
  const apiKey  = process.env.RESEND_API_KEY;
  const to      = process.env.CONTACT_TO ?? "support@armes.co.kr";
  const service = data.service ?? "RewardTalk";

  if (!apiKey) {
    console.log("=== ARMES 출시 알림 신청 (RESEND_API_KEY 미설정 — 콘솔 출력) ===");
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff;">
      <h2 style="color:#191F28;margin-bottom:4px;">🔔 출시 알림 신청이 접수되었습니다</h2>
      <p style="color:#8B95A1;font-size:13px;margin-bottom:24px;">ARMES ${service} 출시 알림 신청</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;width:90px;font-weight:600;">서비스</td>
          <td style="padding:10px 8px;color:#191F28;">${service}</td>
        </tr>
        <tr style="border-bottom:1px solid #E5E8EB;">
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">이름</td>
          <td style="padding:10px 8px;color:#191F28;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:10px 8px;color:#8B95A1;font-weight:600;">이메일</td>
          <td style="padding:10px 8px;color:#191F28;"><a href="mailto:${data.email}" style="color:#3182F6;">${data.email}</a></td>
        </tr>
      </table>
      <div style="margin-top:24px;padding:16px;background:#EBF3FF;border-radius:12px;font-size:12px;color:#3182F6;">
        출시 시 위 이메일로 안내 발송 예정
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
      subject: `[ARMES 출시알림] ${service} — ${data.name} (${data.email})`,
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
    const data: Partial<NotifyPayload> = await request.json();
    const error = validate(data);
    if (error) return NextResponse.json({ success: false, message: error }, { status: 400 });

    await sendEmail(data as NotifyPayload);

    return NextResponse.json({
      success: true,
      message: "출시 알림이 등록되었습니다. 출시 시 이메일로 안내해 드리겠습니다!",
    });
  } catch (err) {
    console.error("[notify API error]", err);
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
