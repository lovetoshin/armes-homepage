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
    og: "/projects/sellerai-1.webp",
  },
  tools: {
    title: "ARMES Tools — 무료 온라인 이미지·PDF·텍스트 도구",
    keywords: ["무료 온라인 도구", "이미지 변환", "PDF 변환", "이미지 압축", "JSON 포맷", "텍스트 도구", "설치 없는 도구"],
    appCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    og: "/projects/og/tools.png",
  },
  rewardtalk: {
    title: "RewardTalk — 내 주변 맛집·교통·할인·약국 찾기 · 외국인 한국 여행",
    keywords: ["내 주변 맛집", "주유소 가격", "통신사 멤버십 할인", "동네 최저가", "야간 약국", "외국인 한국 여행 앱", "리워드톡"],
    appCategory: "LifestyleApplication",
    operatingSystem: "Android, iOS",
    og: "/projects/rewardtalk-main.webp",
  },
  travelmoa: {
    title: "TravelMoa — 여행 특가·항공권 비교",
    keywords: ["항공권 비교", "여행 특가", "항공권 최저가", "여행 플랫폼", "항공권 검색"],
    appCategory: "TravelApplication",
    operatingSystem: "Web",
    og: "/projects/travelmoa-2.webp",
  },
  cocoping: {
    title: "CocoPing — 코스트코 할인·가격 변동·휴무 안내",
    keywords: ["코스트코 할인", "코스트코 가격", "코스트코 세일", "코스트코 가격 변동", "코스트코 휴무", "코스트코 온라인 할인", "코코핑"],
    appCategory: "ShoppingApplication",
    operatingSystem: "Android, iOS",
    og: "/projects/cocoping-main.webp",
  },
  cutit: {
    title: "컷잇 — 사진·영상 이어붙이기 간편 쇼츠 릴스 만들기",
    keywords: ["쇼츠 만들기", "릴스 만들기", "사진 영상 이어붙이기", "영상 편집 앱", "쇼츠 편집 앱", "사진으로 영상 만들기", "컷잇"],
    appCategory: "MultimediaApplication",
    operatingSystem: "Android, iOS",
    og: "/projects/cutit-1.webp",
  },
  father: {
    title: "아버지 — 아~! 버스, 지하철 한눈에 · 실시간 도착·환승 길안내",
    keywords: ["버스 도착 정보", "지하철 실시간", "환승 타이밍", "길찾기 앱", "출퇴근 앱", "실시간 열차 위치", "아버지 앱"],
    appCategory: "TravelApplication",
    operatingSystem: "Android, iOS",
    og: "/projects/father-1.webp",
  },
  movieedit: {
    title: "무비에디트 — 자동 자막·AI 읽어주기 영상 편집 앱",
    keywords: ["영상 편집 앱", "쇼츠 편집", "릴스 편집", "자동 자막", "AI 목소리 자막", "무비에디트"],
    appCategory: "MultimediaApplication",
    operatingSystem: "Android",
    og: "/projects/movieedit-1.webp",
  },
  highsky: {
    title: "하이스카이 — 중·고등학생 AI 입시 비서",
    keywords: ["입시 앱", "고교학점제 과목", "대학 입시결과", "논술 준비", "고입 정보", "하이스카이"],
    appCategory: "EducationalApplication",
    operatingSystem: "Android",
    og: "/projects/highsky-1.webp",
  },
  uridipyoungyu: {
    title: "우리집 영유 — 집에서 다니는 영어유치원",
    keywords: ["영어유치원 앱", "유아 영어", "파닉스 앱", "영어 동화", "만 5세 영어", "우리집 영유"],
    appCategory: "EducationalApplication",
    operatingSystem: "Android",
    og: "/projects/uridipyoungyu-1.webp",
  },
  "hwangso-stock": {
    title: "황소주식 — 정치 뉴스·주가 공식 모의투자",
    keywords: ["모의투자 앱", "주식 연습", "정치 테마주", "주식 공부", "황소주식"],
    appCategory: "FinanceApplication",
    operatingSystem: "Android",
    og: "/projects/hwangso-stock-1.webp",
  },
  hoosamgukji: {
    title: "후삼국지 — 후삼국 시대 전략 시뮬레이션 게임",
    keywords: ["후삼국 게임", "한국사 전략게임", "후삼국지 게임", "전략 시뮬레이션", "후삼국 시대"],
    appCategory: "GameApplication",
    operatingSystem: "Android",
    og: "/projects/og/hoosamgukji.png",
  },
};
