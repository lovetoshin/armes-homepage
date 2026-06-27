// UI 공통 글자 사전(메뉴·푸터·버튼·공통 라벨). 페이지 본문이 아닌 "화면 뼈대" 텍스트만 여기 둔다.
// 작고 가벼워서 클라이언트 컴포넌트(Navbar 등)에서도 그대로 import 해서 쓸 수 있다.
// 페이지별 본문(소개글·프로젝트 설명 등)은 각 페이지에서 따로 번역한다.

import type { Locale } from "./i18n";

type Dict = {
  nav: {
    about: string;
    projects: string;
    tech: string;
    contact: string;
    menu: string;
    language: string;
  };
  footer: {
    tagline: string; // 브랜드 한 줄
    groups: {
      company: string;
      projects: string;
      tech: string;
      news: string;
      contact: string;
    };
    links: {
      about: string;
      allProjects: string;
      techIntro: string;
      news: string;
      blog: string;
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
      rewardtalk: string;
      travelmoa: string;
      cocoping: string;
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
      contact: "문의하기",
      menu: "메뉴",
      language: "언어 선택",
    },
    footer: {
      tagline: "AI로 일상을 바꾸는 서비스 기업",
      groups: {
        company: "회사",
        projects: "프로젝트",
        tech: "기술",
        news: "소식",
        contact: "문의",
      },
      links: {
        about: "회사소개",
        allProjects: "전체 보기",
        techIntro: "기술 소개",
        news: "News",
        blog: "Blog",
        partner: "파트너·제휴 문의",
        privacy: "개인정보처리방침",
        terms: "이용약관",
      },
      legal: {
        company: "주식회사 아르메스",
        bizno: "사업자등록번호: 798-86-02943",
        ceo: "대표자: 신지한",
        address: "경기도 남양주시 진접읍 경복대로 425-80, 4층 6406호",
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
        titlePre: "AI로",
        titleHl: "일상을 바꾸는",
        titleSuf: " 서비스 기업",
        desc: "아르메스는 AI·데이터·자동화·위치기술을 활용해 쇼핑몰, 지역 생활, 여행 등 일상의 여러 영역에 실제로 쓰이는 서비스를 만듭니다.",
        ctaPrimary: "프로젝트 둘러보기",
        ctaSecondary: "파트너·제휴 문의",
      },
      showcase: {
        h2: "실제로 만드는 회사입니다",
        rewardtalk: "로컬 멤버십",
        travelmoa: "여행 특가·항공권",
        cocoping: "코스트코 할인정보",
      },
      tech: { h2: "우리가 다루는 기술" },
      projects: { h2: "아르메스가 만든 프로젝트", viewAll: "전체 보기" },
      cta: {
        h2: "아르메스와 함께 만들어요",
        desc: "새로운 AI 서비스 제휴와 사업 협업을 환영합니다.",
        button: "파트너·제휴 문의하기",
        badges: ["사업자 등록 법인", "경복대학교 창업보육", "개인정보 보호 준수"],
      },
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      tech: "Technology",
      contact: "Contact",
      menu: "Menu",
      language: "Select language",
    },
    footer: {
      tagline: "An AI-driven company building services that change everyday life",
      groups: {
        company: "Company",
        projects: "Projects",
        tech: "Technology",
        news: "Updates",
        contact: "Contact",
      },
      links: {
        about: "About",
        allProjects: "View all",
        techIntro: "Our technology",
        news: "News",
        blog: "Blog",
        partner: "Partnership inquiry",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      legal: {
        company: "ARMES Inc.",
        bizno: "Business Reg. No.: 798-86-02943",
        ceo: "CEO: Jihan Shin",
        address: "4F #6406, 425-80 Gyeongbokdae-ro, Jinjeop-eup, Namyangju-si, Gyeonggi-do, Korea",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "Back to list",
      relatedPosts: "Related posts",
      relatedServices: "Related services",
      readMore: "Read more",
      all: "All",
      emptyPosts: "No posts in this category yet.",
      published: "Published",
      updatedLabel: "Updated",
      relatedReadTitle: "Related reads",
      relatedServiceTitle: "ARMES services related to this article",
    },
    home: {
      hero: {
        titlePre: "Services that change",
        titleHl: "everyday life",
        titleSuf: ", powered by AI",
        desc: "ARMES uses AI, data, automation and location technology to build services people actually use — across online shopping, local life, travel and more.",
        ctaPrimary: "Explore projects",
        ctaSecondary: "Partnership inquiry",
      },
      showcase: {
        h2: "A company that actually builds",
        rewardtalk: "Local membership",
        travelmoa: "Travel deals & flights",
        cocoping: "Costco deals",
      },
      tech: { h2: "The technology we work with" },
      projects: { h2: "Projects by ARMES", viewAll: "View all" },
      cta: {
        h2: "Let's build together",
        desc: "We welcome new AI service partnerships and business collaboration.",
        button: "Start a partnership inquiry",
        badges: ["Registered corporation", "Gyeongbok Univ. startup incubation", "Privacy compliant"],
      },
    },
  },

  "zh-Hans": {
    nav: {
      about: "公司介绍",
      projects: "项目",
      tech: "技术",
      contact: "联系我们",
      menu: "菜单",
      language: "选择语言",
    },
    footer: {
      tagline: "用人工智能改变日常生活的服务型企业",
      groups: {
        company: "公司",
        projects: "项目",
        tech: "技术",
        news: "动态",
        contact: "联系",
      },
      links: {
        about: "公司介绍",
        allProjects: "查看全部",
        techIntro: "技术介绍",
        news: "News",
        blog: "Blog",
        partner: "合作咨询",
        privacy: "隐私政策",
        terms: "服务条款",
      },
      legal: {
        company: "ARMES 株式会社",
        bizno: "营业执照号: 798-86-02943",
        ceo: "代表人: 申智汉",
        address: "韩国京畿道南扬州市榛接邑景福大路425-80, 4楼6406室",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "返回列表",
      relatedPosts: "相关文章",
      relatedServices: "相关服务",
      readMore: "查看详情",
      all: "全部",
      emptyPosts: "该分类暂无文章。",
      published: "发布",
      updatedLabel: "更新",
      relatedReadTitle: "推荐阅读",
      relatedServiceTitle: "与本文相关的ARMES服务",
    },
    home: {
      hero: {
        titlePre: "用AI",
        titleHl: "改变日常",
        titleSuf: "的服务型企业",
        desc: "ARMES运用AI、数据、自动化与位置技术，在网购、本地生活、旅行等日常领域打造真正实用的服务。",
        ctaPrimary: "浏览项目",
        ctaSecondary: "合作咨询",
      },
      showcase: {
        h2: "真正在做产品的公司",
        rewardtalk: "本地会员",
        travelmoa: "旅行特价·机票",
        cocoping: "Costco折扣",
      },
      tech: { h2: "我们运用的技术" },
      projects: { h2: "ARMES打造的项目", viewAll: "查看全部" },
      cta: {
        h2: "与ARMES一起打造",
        desc: "欢迎新的AI服务合作与商务洽谈。",
        button: "发起合作咨询",
        badges: ["工商注册法人", "庆福大学创业孵化", "遵守隐私保护"],
      },
    },
  },

  "zh-Hant": {
    nav: {
      about: "公司介紹",
      projects: "專案",
      tech: "技術",
      contact: "聯絡我們",
      menu: "選單",
      language: "選擇語言",
    },
    footer: {
      tagline: "以人工智慧改變日常生活的服務型企業",
      groups: {
        company: "公司",
        projects: "專案",
        tech: "技術",
        news: "動態",
        contact: "聯絡",
      },
      links: {
        about: "公司介紹",
        allProjects: "查看全部",
        techIntro: "技術介紹",
        news: "News",
        blog: "Blog",
        partner: "合作諮詢",
        privacy: "隱私權政策",
        terms: "服務條款",
      },
      legal: {
        company: "ARMES 株式會社",
        bizno: "營業執照號: 798-86-02943",
        ceo: "代表人: 申智漢",
        address: "韓國京畿道南楊州市榛接邑景福大路425-80, 4樓6406室",
        copyright: "© 2026 ARMES. All rights reserved.",
      },
    },
    common: {
      backToList: "返回列表",
      relatedPosts: "相關文章",
      relatedServices: "相關服務",
      readMore: "查看詳情",
      all: "全部",
      emptyPosts: "此分類目前尚無文章。",
      published: "發布",
      updatedLabel: "更新",
      relatedReadTitle: "推薦閱讀",
      relatedServiceTitle: "與本文相關的ARMES服務",
    },
    home: {
      hero: {
        titlePre: "以AI",
        titleHl: "改變日常",
        titleSuf: "的服務型企業",
        desc: "ARMES運用AI、資料、自動化與位置技術，在網購、在地生活、旅行等日常領域打造真正實用的服務。",
        ctaPrimary: "瀏覽專案",
        ctaSecondary: "合作諮詢",
      },
      showcase: {
        h2: "真正在做產品的公司",
        rewardtalk: "在地會員",
        travelmoa: "旅行特價·機票",
        cocoping: "好市多折扣",
      },
      tech: { h2: "我們運用的技術" },
      projects: { h2: "ARMES打造的專案", viewAll: "查看全部" },
      cta: {
        h2: "與ARMES一起打造",
        desc: "歡迎新的AI服務合作與商務洽談。",
        button: "發起合作諮詢",
        badges: ["工商註冊法人", "慶福大學創業育成", "遵守隱私保護"],
      },
    },
  },
};

export function getUI(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.ko;
}
