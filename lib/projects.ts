// ARMES가 직접 관리하는 프로젝트 목록(회사 허브용).
// ⚠️ 각 프로젝트의 기능/SEO 콘텐츠는 절대 여기 넣지 않는다.
//    여기는 "카드 한 줄 소개 + 상태 + 바로가기"까지만. 자세한 내용은 각 프로젝트가 책임진다.

export type ProjectStatus = "live" | "pending" | "dev" | "soon" | "research";

export interface Project {
  key: string;          // 내부 식별자
  name: string;         // 표시 이름
  tagline: string;      // 한 줄 소개 (짧게)
  status: ProjectStatus;
  tech: string[];       // 사용 기술 (technology.ts의 라벨과 연결)
  href?: string;        // status === "live" 일 때만 외부 앱 주소
  icon: string;         // 카드 아이콘(이모지) — 썸네일 없을 때 사용
  thumbnail?: string;   // 실제 화면 캡쳐(Hero 타일에서만 사용)
  audience: string;     // 대상 고객
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
  pending: {
    label: "배포대기중",
    dot: "bg-[#F59E0B]",
    chip: "bg-[#FEF6E7] text-[#B45309]",
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
  dev: {
    label: "개발중",
    dot: "bg-[#3182F6]",
    chip: "bg-[#EBF3FF] text-[#3182F6]",
  },
};

export const projects: Project[] = [
  {
    key: "sellerai",
    name: "SellerAI",
    tagline: "쇼핑몰 셀러를 위한 AI 상품 이미지·상세페이지 자동화",
    audience: "쇼핑몰·스마트스토어 셀러",
    status: "live",
    tech: ["AI", "Vision", "Automation"],
    href: "https://www.armes.co.kr/sellerai/studio",
    icon: "🖼️",
    thumbnail: "/projects/sellerai-1.jpg",
  },
  {
    key: "tools",
    name: "ARMES Tools",
    tagline: "이미지·PDF·텍스트·개발자 도구를 설치 없이 브라우저에서 바로 쓰는 무료 온라인 도구",
    audience: "누구나 · 글로벌 9개 언어",
    status: "live",
    tech: ["Automation"],
    href: "https://www.armes.co.kr/tools/",
    icon: "🧰",
  },
  {
    key: "rewardtalk",
    name: "RewardTalk",
    tagline: "내 주변 매장 할인·적립·공동구매를 잇는 로컬 멤버십 플랫폼",
    audience: "동네 생활 소비자",
    status: "pending",
    tech: ["Location", "Automation"],
    icon: "🎁",
    thumbnail: "/projects/rewardtalk-2.jpg",
  },
  {
    key: "travelmoa",
    name: "TravelMoa",
    tagline: "여행 특가와 항공권을 한곳에서 찾는 스마트 여행 플랫폼",
    audience: "여행을 준비하는 사람",
    status: "pending",
    tech: ["Location", "AI"],
    icon: "✈️",
    thumbnail: "/projects/travelmoa-2.jpg",
  },
  {
    key: "cocoping",
    name: "CocoPing",
    tagline: "코스트코 할인정보와 가격 변동을 한눈에 보는 쇼핑 도우미",
    audience: "코스트코 이용 쇼핑객",
    status: "pending",
    tech: ["AI", "Automation"],
    icon: "🛒",
    thumbnail: "/projects/cocoping-2.jpg",
  },
  {
    key: "rankingpangpang",
    name: "RankingPangPang",
    tagline: "분야별 인기 상품을 AI로 분석해 추천하는 랭킹 플랫폼",
    audience: "온라인 쇼핑객",
    status: "soon",
    tech: ["Automation", "AI"],
    icon: "📊",
  },
  {
    key: "photosort",
    name: "PhotoSort",
    tagline: "사진을 자동으로 분류·정리하는 Vision AI",
    audience: "사진이 많은 사람·창작자",
    status: "research",
    tech: ["Vision", "AI"],
    icon: "🗂️",
  },
  {
    key: "hoosamgukji",
    name: "후삼국지",
    tagline: "대한민국 후삼국 시대를 배경으로 한 전략 시뮬레이션 게임",
    audience: "전략 게임 유저",
    status: "soon",
    tech: ["AI"],
    icon: "⚔️",
  },
  {
    key: "worldlingo",
    name: "월드링고",
    tagline: "한류 타고 배우는 1:1 화상 한국어·영어·중국어 플랫폼",
    audience: "한국어·외국어를 배우려는 전 세계 학습자",
    status: "dev",
    tech: ["AI", "Automation"],
    icon: "🌐",
  },
];
