// 황소주식 약관·방침 렌더러 — 앱 원본 legal.html 의 글(표·굵은 글씨 포함)을 그대로 그린다(글 변경 없음).
//  와꾸는 무비에디트 PolicyView 와 같게(제목 18px 굵게 · 본문 15px · 안내 상자 · 표는 폰에서 옆으로 밀기).

const cls = [
  "[text-wrap:pretty] [word-break:keep-all] [overflow-wrap:break-word] text-[#4E5968] text-[15px] leading-[1.9]",
  "[&_.box]:mb-10 [&_.box]:p-5 [&_.box]:rounded-2xl [&_.box]:bg-[#F8FAFF] [&_.box]:border [&_.box]:border-[#E5E8EB] [&_.box]:leading-relaxed",
  "[&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[#191F28] [&_h2]:mt-12 [&_h2]:mb-4",
  "[&_b]:font-semibold [&_b]:text-[#191F28]",
  "[&_p]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-3",
  "[&_.tw]:overflow-x-auto [&_.tw]:my-4",
  "[&_table]:w-full [&_table]:min-w-[560px] [&_table]:border-collapse [&_table]:text-[14px] [&_table]:leading-relaxed",
  "[&_th]:border [&_th]:border-[#E5E8EB] [&_th]:bg-[#F8FAFF] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-[#191F28] [&_th]:whitespace-nowrap",
  "[&_td]:border [&_td]:border-[#E5E8EB] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:[text-wrap:balance]",
].join(" ");

export default function HtmlPolicyView({ html }: { html: string }) {
  // 표는 폰에서 옆으로 밀 수 있게 상자로 감싼다(글은 그대로)
  const wrapped = html.replace(/<table>/g, '<div class="tw"><table>').replace(/<\/table>/g, "</table></div>");
  return <div className={cls} dangerouslySetInnerHTML={{ __html: wrapped }} />;
}
