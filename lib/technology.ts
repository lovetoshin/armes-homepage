// ARMES가 보유한 핵심 기술(회사 허브용 소개).
// 홈의 Technology 섹션에서 간결하게 보여준다. 별도 /technology 라우트는 콘텐츠가 쌓이면 연다(P3).

export interface Tech {
  key: string;
  name: string;
  desc: string;   // 한 줄 설명 (쉽게)
  icon: string;
}

export const technologies: Tech[] = [
  {
    key: "AI",
    name: "AI",
    desc: "이미지·글을 만들고 이해하는 생성형 인공지능",
    icon: "✨",
  },
  {
    key: "Automation",
    name: "Automation",
    desc: "사람이 반복하던 일을 대신 처리하는 자동화",
    icon: "⚙️",
  },
  {
    key: "Vision",
    name: "Vision",
    desc: "사진을 분석하고 분류하는 컴퓨터 비전",
    icon: "👁️",
  },
  {
    key: "Location",
    name: "Location",
    desc: "내 주변·지역을 기반으로 한 위치 서비스",
    icon: "📍",
  },
];
