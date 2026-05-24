"use client";

import { motion } from "framer-motion";

// 실제 RewardTalk 앱 UI 기반 목업
const stores = [
  { name: "바나프레소 역삼GFC점", dist: "33m", badges: [],                    color: "#3DB33D", initial: "바나" },
  { name: "할리스 역삼스타점",    dist: "45m", badges: ["⭐ 적립", "💳 멤버십"], color: "#6B3A2A", initial: "할리" },
  { name: "더치앤빈 역삼역점",    dist: "61m", badges: [],                    color: "#4A90D9", initial: "더치" },
];

const bottomNav = [
  { icon: "%",  label: "할인/적립", active: true  },
  { icon: "🚌", label: "교통",     active: false },
  { icon: "👥", label: "공동구매", active: false },
  { icon: "🎁", label: "드로우",   active: false },
  { icon: "👤", label: "마이",     active: false },
];

export default function PhoneMockup() {
  return (
    <div className="relative select-none">
      {/* Glow */}
      <div className="absolute inset-0 bg-violet-600/20 blur-[80px] rounded-full scale-90" />
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-indigo-500/20 blur-3xl" />

      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-white rounded-[44px] border border-zinc-200 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-[20px] z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-7 pt-[52px] pb-0 text-[11px] text-black font-semibold">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-end gap-[2px] h-3">
              {[2, 3, 4, 5].map((h, i) => (
                <div key={i} className="w-[3px] rounded-sm bg-black" style={{ height: `${h * 2}px` }} />
              ))}
            </div>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="black">
              <path d="M7.5 9.5a1 1 0 100 2 1 1 0 000-2z"/>
              <path d="M4.5 7.2a4.2 4.2 0 016 0l1-1a5.6 5.6 0 00-8 0l1 1z"/>
              <path d="M1.9 4.6a8 8 0 0111.2 0l1-1A9.4 9.4 0 00.9 3.6l1 1z" opacity=".6"/>
            </svg>
            <div className="w-6 h-3 border border-black rounded-[3px] relative">
              <div className="absolute inset-[2px] right-[4px] bg-black rounded-[1px]" />
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[3px] h-1.5 bg-black/60 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className="px-5 pt-3 pb-2 flex justify-between items-center">
          <span className="text-[18px] font-bold text-black">RewardTalk</span>
          <div className="flex items-center gap-3 text-black">
            <span className="text-lg">☆</span>
            <span className="text-lg">🛍</span>
            <span className="text-lg">🔔</span>
            <span className="text-lg">⚙️</span>
          </div>
        </div>

        {/* Location + radius bar */}
        <div className="px-4 pb-2 flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-[12px] font-semibold text-black">
            서울시 강남구 역삼동
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-zinc-200 text-[11px] text-zinc-500">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L8 20l4-3 4 3-4-18z"/>
            </svg>
            3km 반경
          </div>
        </div>

        {/* Category Chips */}
        <div className="px-4 pb-3">
          <div className="flex gap-2">
            {[
              { label: "☕ 카페",  active: true  },
              { label: "🍽 맛집",  active: false },
              { label: "🏪 편의",  active: false },
            ].map((cat) => (
              <button
                key={cat.label}
                className={`px-4 py-2 rounded-full text-[12px] font-semibold flex-shrink-0 ${
                  cat.active
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-zinc-200 text-zinc-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-2">
          <div className="flex items-center gap-2 bg-zinc-100 rounded-xl px-3 py-2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <span className="text-[12px] text-zinc-400">매장명, 업종 검색</span>
          </div>
        </div>

        {/* Section header */}
        <div className="px-4 pb-2 flex justify-between items-center">
          <div>
            <div className="text-[13px] font-bold text-black">내 주변 카페</div>
            <div className="text-[10px] text-zinc-400">카페, 베이커리, 디저트</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded-full">
            거리순
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        {/* Store List */}
        <div className="bg-white mx-3 rounded-2xl border border-zinc-100 overflow-hidden divide-y divide-zinc-100">
          {stores.map((store, i) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
              className="flex items-center gap-3 px-3.5 py-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: store.color }}
              >
                {store.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-black text-[12px] font-semibold truncate">{store.name}</div>
                {store.badges.length > 0 && (
                  <div className="flex gap-1 mt-0.5">
                    {store.badges.map((b) => (
                      <span key={b} className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-md">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <span className="text-[11px] text-zinc-400">{store.dist}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-zinc-100 px-2 py-2 pb-4">
          <div className="flex justify-around">
            {bottomNav.map((item) => (
              <button key={item.label} className="flex flex-col items-center gap-0.5">
                <span className={`text-base leading-none ${item.active ? "text-blue-500" : "text-zinc-400"}`}>
                  {item.icon}
                </span>
                <span className={`text-[9px] font-medium ${item.active ? "text-blue-500" : "text-zinc-400"}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
