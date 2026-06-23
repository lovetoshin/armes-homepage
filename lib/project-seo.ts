// 서비스(프로젝트) 상세 페이지 전용 SEO 설정.
// title 키워드 전진배치 + 검색 유입 키워드 + SoftwareApplication 스키마용 분류/플랫폼 + OG 이미지.
// ⚠️ 허위 별점/리뷰/aggregateRating 금지 — 여기에는 사실만 둔다.

export interface ProjectSeo {
  title: string;            // <title>의 키워드 전진 부분 (" | ARMES" 는 페이지에서 부착)
  keywords: string[];       // 검색 유입 키워드
  appCategory: string;      // schema.org SoftwareApplication.applicationCategory
  operatingSystem: string;  // schema.org SoftwareApplication.operatingSystem
  og: string;               // OG/Twitter 이미지 경로 (절대화는 페이지에서)
}

export const projectSeo: Record<string, ProjectSeo> = {
  sellerai: {
    title: "SellerAI — AI 상품 이미지·상세페이지 자동화",
    keywords: ["AI 상품 이미지", "AI 상세페이지", "상품 사진 AI", "누끼 AI", "모델컷 AI", "스마트스토어 이미지", "쇼핑몰 자동화"],
    appCategory: "BusinessApplication",
    operatingSystem: "Web",
    og: "/projects/sellerai-1.jpg",
  },
  tools: {
    title: "ARMES Tools — 무료 온라인 이미지·PDF·텍스트 도구",
    keywords: ["무료 온라인 도구", "이미지 변환", "PDF 변환", "이미지 압축", "JSON 포맷", "텍스트 도구", "설치 없는 도구"],
    appCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    og: "/projects/og/tools.png",
  },
  rewardtalk: {
    title: "RewardTalk — 내 주변 매장 할인·적립·공동구매",
    keywords: ["내 주변 할인", "동네 적립", "공동구매 앱", "로컬 멤버십", "매장 적립", "리워드 앱"],
    appCategory: "LifestyleApplication",
    operatingSystem: "Android",
    og: "/projects/rewardtalk-2.jpg",
  },
  travelmoa: {
    title: "TravelMoa — 여행 특가·항공권 비교",
    keywords: ["항공권 비교", "여행 특가", "항공권 최저가", "여행 플랫폼", "항공권 검색"],
    appCategory: "TravelApplication",
    operatingSystem: "Web",
    og: "/projects/travelmoa-2.jpg",
  },
  cocoping: {
    title: "CocoPing — 코스트코 할인·가격 변동 알림",
    keywords: ["코스트코 할인", "코스트코 가격", "코스트코 세일", "코스트코 가격 변동", "코스트코 쇼핑"],
    appCategory: "ShoppingApplication",
    operatingSystem: "Web",
    og: "/projects/cocoping-2.jpg",
  },
  rankingpangpang: {
    title: "RankingPangPang — 분야별 인기상품 랭킹",
    keywords: ["인기상품 순위", "베스트 상품", "상품 추천", "상품 랭킹", "인기 상품"],
    appCategory: "ShoppingApplication",
    operatingSystem: "Web",
    og: "/projects/og/rankingpangpang.png",
  },
  photosort: {
    title: "PhotoSort — 사진 자동 분류·정리 AI",
    keywords: ["사진 자동 분류", "사진 정리 앱", "AI 사진 정리", "사진 정리", "Vision AI"],
    appCategory: "MultimediaApplication",
    operatingSystem: "Web",
    og: "/projects/og/photosort.png",
  },
  hoosamgukji: {
    title: "후삼국지 — 후삼국 시대 전략 시뮬레이션 게임",
    keywords: ["후삼국 게임", "한국사 전략게임", "후삼국지 게임", "전략 시뮬레이션", "후삼국 시대"],
    appCategory: "GameApplication",
    operatingSystem: "Android",
    og: "/projects/og/hoosamgukji.png",
  },
};
