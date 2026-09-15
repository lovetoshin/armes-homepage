// UI 공통 글자 사전(메뉴·푸터·버튼·공통 라벨). 페이지 본문이 아닌 "화면 뼈대" 텍스트만 여기 둔다.
// 작고 가벼워서 클라이언트 컴포넌트(Navbar 등)에서도 그대로 import 해서 쓸 수 있다.
// 페이지별 본문(소개글·프로젝트 설명 등)은 각 페이지에서 따로 번역한다.

import type { Locale } from "./i18n";

type Dict = {
  nav: {
    about: string;
    projects: string;
    tech: string;
    news: string;
    blog: string;
    contact: string;
    menu: string;
    language: string;
  };
  footer: {
    tagline: string; // 브랜드 한 줄
    links: {
      partner: string;
      privacy: string;
      terms: string;
    };
    legal: {
      company: string; // 회사명
      bizno: string; // "사업자등록번호: ..."
      ceo: string; // "대표자: 신지한"
      address: string;
      copyright: string;
    };
  };
  common: {
    backToList: string;
    relatedPosts: string;
    relatedServices: string;
    readMore: string;
    all: string; // 카테고리 "전체"
    emptyPosts: string;
    published: string; // 발행
    updatedLabel: string; // 수정
    relatedReadTitle: string; // 함께 읽으면 좋은 글
    relatedServiceTitle: string; // 이 글과 관련된 아르메스 서비스
  };
  home: {
    hero: {
      titlePre: string; // 제목 앞부분
      titleHl: string; // 파란색 강조 부분
      titleSuf: string; // 제목 뒷부분
      desc: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    showcase: {
      h2: string;
      sellerai: string;
      tools: string;
      cta: string;
    };
    tech: { h2: string };
    projects: { h2: string; viewAll: string };
    cta: {
      h2: string;
      desc: string;
      button: string;
      badges: [string, string, string];
    };
  };
};

const dictionaries: Record<Locale, Dict> = {
  ko: {
    nav: {
      about: "회사소개",
      projects: "프로젝트",
      tech: "기술",
      news: "뉴스",
      blog: "블로그",
      contact: "파트너·제휴 문의하기",
      menu: "메뉴",
      language: "언어 선택",
    },
    footer: {
      tagline: "매일의 불편을 해결하는 생활 서비스 회사",
      links: {
        partner: "파트너·제휴 문의",
        privacy: "개인정보처리방침",
        terms: "이용약관",
      },
      legal: {
        company: "주식회사 아르메스",
        bizno: "사업자등록번호: 798-86-02943",
        ceo: "대표자: 신지한",
        address: "경기도 남양주시 진접읍 경복대로 425-80, 경복대학교 창업보육센터 4층 6406호",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "목록으로",
      relatedPosts: "관련 글",
      relatedServices: "관련 서비스",
      readMore: "자세히 보기",
      all: "전체",
      emptyPosts: "해당 카테고리의 글이 아직 없습니다.",
      published: "발행",
      updatedLabel: "수정",
      relatedReadTitle: "함께 읽으면 좋은 글",
      relatedServiceTitle: "이 글과 관련된 아르메스 서비스",
    },
    home: {
      hero: {
        titlePre: "매일의 불편을",
        titleHl: "직접 해결하는",
        titleSuf: " 생활 서비스 회사",
        desc: "아르메스는 쇼핑몰·지역 생활·여행처럼 매일의 영역에서, 누구나 바로 쓸 수 있는 서비스를 직접 만들고 운영합니다.",
        ctaPrimary: "프로젝트 둘러보기",
        ctaSecondary: "파트너·제휴 문의",
      },
      showcase: {
        h2: "지금 바로 쓸 수 있는 서비스",
        sellerai: "상품 사진 한 장만 올리면 모델 착용컷·상세페이지·누끼까지 1분 만에 자동 완성",
        tools: "이미지·PDF·문서 편집부터 계산기까지, 176개 도구를 설치·회원가입 없이 무료로",
        cta: "바로 써보기",
      },
      tech: { h2: "우리가 다루는 기술" },
      projects: { h2: "아르메스가 만든 프로젝트", viewAll: "전체 보기" },
      cta: {
        h2: "아르메스와 함께 만들어요",
        desc: "새로운 서비스 제휴와 사업 협업을 환영합니다.",
        button: "파트너·제휴 문의하기",
        badges: ["사업자 등록 법인", "경복대학교 창업보육", "개인정보 보호 준수"],
      },
    },
  },
};

export function getUI(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.ko;
}
