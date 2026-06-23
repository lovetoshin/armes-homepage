// ARMES가 보유한 핵심 기술(회사 허브용 소개).
// 홈의 Technology 섹션에서 보여준다. 별도 /technology 라우트는 콘텐츠가 쌓이면 연다(P3).

export interface Tech {
  key: string;
  name: string;
  desc: string;       // 2~3줄 설명 (쉽게)
  apply: string[];    // 실제 적용 프로젝트
  icon: string;
}

export const technologies: Tech[] = [
  {
    key: "AI",
    name: "AI",
    desc: "상품 이미지를 생성·변환하고, 글을 이해해 상세페이지를 만듭니다. 생성형 인공지능으로 사람의 반복 작업을 대신합니다.",
    apply: ["SellerAI"],
    icon: "✨",
  },
  {
    key: "Automation",
    name: "Automation",
    desc: "흩어진 정보를 모으고, 매번 손으로 하던 일을 자동으로 처리합니다. 사람이 더 중요한 일에 집중하도록 돕습니다.",
    apply: ["SellerAI", "CocoPing", "RankingPangPang"],
    icon: "⚙️",
  },
  {
    key: "Vision",
    name: "Vision",
    desc: "사진 속 내용을 인식해 분석하고 분류합니다. 수많은 이미지를 사람 대신 빠르게 정리합니다.",
    apply: ["PhotoSort"],
    icon: "👁️",
  },
  {
    key: "Location",
    name: "Location",
    desc: "내 주변과 지역을 기반으로 필요한 정보를 연결합니다. 위치에 맞는 혜택·여행·매장 정보를 제공합니다.",
    apply: ["RewardTalk", "TravelMoa"],
    icon: "📍",
  },
];
