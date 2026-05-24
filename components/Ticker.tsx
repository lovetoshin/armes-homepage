"use client";

const items = [
  { label: "RewardTalk",      status: "출시 준비 중",   dot: "#F59E0B" },
  { label: "드로우 & 포인트", status: "시스템 구축 완료", dot: "#8B5CF6" },
  { label: "QR 멤버십 카드",  status: "",               dot: "#6366F1" },
  { label: "지역 공동구매",   status: "베타 진행 중",    dot: "#10B981" },
  { label: "교통 정보 서비스", status: "",               dot: "#3B82F6" },
  { label: "Seller AI",       status: "출시 예정",       dot: "#F59E0B" },
  { label: "매장 운영 SaaS",  status: "출시 예정",       dot: "#F59E0B" },
  { label: "파트너 모집 중",  status: "",               dot: "#8B5CF6" },
];

const TickerItem = ({ label, status, dot }: { label: string; status: string; dot: string }) => (
  <div className="flex items-center gap-2.5 px-6 whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
    <span className="text-[13px] text-zinc-400 font-medium">{label}</span>
    {status && (
      <span className="text-[11px] text-zinc-600 font-medium">{status}</span>
    )}
    <span className="text-zinc-700 mx-1">·</span>
  </div>
);

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#09090B] border-y border-white/[0.05] py-3">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
