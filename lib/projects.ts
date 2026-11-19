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
  href?: string;        // status === "live" 일 때만 외부 앱(웹) 주소
  androidUrl?: string;  // 구글 플레이 스토어 주소 (없으면 버튼 미표시)
  iosUrl?: string;      // 애플 앱스토어 주소 (없으면 버튼 미표시)
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
    thumbnail: "/projects/sellerai-1.webp",
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
    thumbnail: "/projects/tools-main.webp",
  },
  {
    key: "rewardtalk",
    name: "RewardTalk",
    tagline: "해외여행 지하철 노선도부터 내 동네 생활 정보까지, 지도 한 화면에서 찾는 앱",
    audience: "동네 생활 소비자",
    status: "live",
    tech: ["Location", "Automation"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.rewardtalk.app",
    iosUrl: "https://apps.apple.com/kr/app/id6788670980",
    icon: "🎁",
    thumbnail: "/projects/rewardtalk-main.webp",
  },
  {
    key: "cutit",
    name: "컷잇",
    tagline: "사진·영상 이어붙이기부터 렌즈 카메라, 갤러리 정리, 쇼츠·릴스 바로 올리기까지 한 앱에서",
    audience: "쇼츠·릴스를 빠르게 만들고 싶은 사람",
    status: "live",
    tech: ["Automation"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.cutit.shorts",
    iosUrl: "https://apps.apple.com/kr/app/id6816439301",
    icon: "✂️",
    thumbnail: "/projects/cutit-1.webp",
  },
  {
    key: "travelmoa",
    name: "TravelMoa",
    tagline: "국내 대형 여행사 13곳의 패키지·항공권 특가를 한 앱에 모아 보는 여행 특가 모음 앱",
    audience: "여행을 준비하는 사람",
    status: "live",
    tech: ["Location", "AI"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.travelmoa.app",
    iosUrl: "https://apps.apple.com/kr/app/id6788629138",
    icon: "✈️",
    thumbnail: "/projects/travelmoa-2.webp",
  },
  {
    key: "cocoping",
    name: "CocoPing",
    tagline: "코스트코 매장·온라인 할인 상품과 가격 변동, 점포 휴무일을 한 앱에서 확인하는 쇼핑 도우미",
    audience: "코스트코 이용 쇼핑객",
    status: "live",
    tech: ["AI", "Automation"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.cocoping.app",
    iosUrl: "https://apps.apple.com/kr/app/id6788451449",
    icon: "🛒",
    thumbnail: "/projects/cocoping-main.webp",
  },
  {
    key: "father",
    name: "아버지",
    tagline: "목적지만 정하면, 도착까지 탈 것과 환승 타이밍을 한 화면에서 계속 보여 드립니다",
    audience: "매일 대중교통으로 출퇴근·통학하는 사람",
    status: "live",
    tech: ["Location", "Automation"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.abeoji.app",
    iosUrl: "https://apps.apple.com/kr/app/id6821252757",
    icon: "🚇",
    thumbnail: "/projects/father-1.webp",
  },
  {
    key: "movieedit",
    name: "무비에디트",
    tagline: "폰 하나로 쇼츠·릴스·유튜브 영상을 쉽게 편집하는 영상 편집 앱",
    audience: "쇼츠·릴스·유튜브 영상을 폰으로 만드는 사람",
    status: "pending", // 스토어 미출시 · 안드로이드 apk 시험 운영(무비에디트 세션 2026-11-19)
    tech: ["AI", "Automation"],
    icon: "🎬",
    thumbnail: "/projects/movieedit-1.webp",
  },
  {
    key: "highsky",
    name: "하이스카이",
    tagline: "중·고등학생을 위한 AI 입시 비서 10명 — 전국 대학 입시 정보와 고교학점제 과목 준비를 한 앱에서",
    audience: "중·고등학생과 학부모",
    status: "dev", // 스토어 미출시 · 시험판만(하이스카이 세션 2026-11-19)
    tech: ["AI", "Automation"],
    icon: "🎓",
    thumbnail: "/projects/highsky-1.webp",
  },
  {
    key: "uridipyoungyu",
    name: "우리집 영유",
    tagline: "만 5~7세 아이가 폰 하나로 집에서 영어유치원 하루를 그대로 다니는 앱",
    audience: "만 5~7세 아이와 부모님",
    status: "dev", // 스토어 미출시 · 시험판만(영어유치원 세션 2026-11-19)
    tech: ["AI", "Automation"],
    icon: "🎒",
    thumbnail: "/projects/uridipyoungyu-1.webp",
  },
  {
    key: "hwangso-stock",
    name: "황소주식",
    tagline: "정치·정책 뉴스와 과거 주가 통계로 가상 돈 매매를 연습하는 모의투자 앱",
    audience: "주식을 처음 배우는 사람",
    status: "dev", // 일반 공개 전 · 주식 데이터 허락 전이라 화면·앱 주소 싣지 않음(형님 지시 2026-11-19)
    tech: ["AI", "Automation"],
    icon: "🐂",
  },
  {
    key: "worldlingo",
    name: "월드링고",
    tagline: "세계의 언어를 얼굴 보며 배우다 — 원어민 강사와 1:1 화상 수업",
    audience: "한국어·외국어를 배우려는 전 세계 학습자",
    status: "pending", // 스토어 출시 전 — 「운영중」은 사실과 다름(2026-11-01 형님 지시)
    tech: ["AI", "Automation"],
    icon: "🌐",
    thumbnail: "/projects/worldlingo-s1.webp",
  },
  {
    key: "hoosamgukji",
    name: "후삼국지",
    tagline: "대한민국 후삼국 시대를 배경으로 한 전략 시뮬레이션 게임",
    audience: "전략 게임 유저",
    status: "dev",
    tech: ["AI"],
    icon: "⚔️",
  },
];
