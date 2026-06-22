// ARMES가 직접 관리하는 프로젝트 목록(회사 허브용).
// ⚠️ 각 프로젝트의 기능/SEO 콘텐츠는 절대 여기 넣지 않는다.
//    여기는 "카드 한 줄 소개 + 상태 + 바로가기"까지만. 자세한 내용은 각 프로젝트가 책임진다.

export type ProjectStatus = "live" | "soon" | "research";

export interface Project {
  key: string;          // 내부 식별자
  name: string;         // 표시 이름
  tagline: string;      // 한 줄 소개 (짧게)
  status: ProjectStatus;
  tech: string[];       // 사용 기술 (technology.ts의 라벨과 연결)
  href?: string;        // status === "live" 일 때만 외부 앱 주소
  icon: string;         // 카드 아이콘(이모지)
}

// 상태 표시용 메타 (색상은 파랑/녹색/회색만 — 보라 금지)
export const STATUS_META: Record<
  ProjectStatus,
  { label: string; dot: string; chip: string }
> = {
  live: {
    label: "운영중",
    dot: "bg-[#15B66E]",
    chip: "bg-[#E7F7EF] text-[#15803D]",
  },
  soon: {
    label: "준비중",
    dot: "bg-[#3182F6]",
    chip: "bg-[#EBF3FF] text-[#3182F6]",
  },
  research: {
    label: "연구중",
    dot: "bg-[#8B95A1]",
    chip: "bg-[#F2F4F6] text-[#6B7684]",
  },
};

export const projects: Project[] = [
  {
    key: "sellerai",
    name: "SellerAI",
    tagline: "쇼핑몰 셀러를 위한 AI 상품 이미지·상세페이지 자동화",
    status: "live",
    tech: ["AI", "Vision", "Automation"],
    href: "https://www.armes.co.kr/sellerai/studio",
    icon: "🖼️",
  },
  {
    key: "rewardtalk",
    name: "RewardTalk",
    tagline: "내 주변 매장 할인·적립·공동구매를 잇는 로컬 멤버십 플랫폼",
    status: "soon",
    tech: ["Location", "Automation"],
    icon: "🎁",
  },
  {
    key: "travelmoa",
    name: "TravelMoa",
    tagline: "여행 특가와 항공권을 한곳에서 찾는 스마트 여행 플랫폼",
    status: "soon",
    tech: ["Location", "AI"],
    icon: "✈️",
  },
  {
    key: "cocoping",
    name: "CocoPing",
    tagline: "코스트코 할인정보와 가격 변동을 한눈에 보는 쇼핑 도우미",
    status: "soon",
    tech: ["AI", "Automation"],
    icon: "🛒",
  },
  {
    key: "rankingpangpang",
    name: "RankingPangPang",
    tagline: "분야별 인기 상품을 AI로 분석해 추천하는 랭킹 플랫폼",
    status: "soon",
    tech: ["Automation", "AI"],
    icon: "📊",
  },
  {
    key: "photosort",
    name: "PhotoSort",
    // ⚠️ 추정 카피 — 형님 확인 필요
    tagline: "사진을 자동으로 분류·정리하는 Vision AI",
    status: "research",
    tech: ["Vision", "AI"],
    icon: "🗂️",
  },
  {
    key: "hoosamgukji",
    name: "후삼국지",
    tagline: "대한민국 후삼국 시대를 배경으로 한 전략 시뮬레이션 게임",
    status: "soon",
    tech: ["AI"],
    icon: "⚔️",
  },
];
