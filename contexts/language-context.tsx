"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ko" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ko: {
    // Header
    "nav.services": "서비스",
    "nav.about": "회사소개",
    "nav.solutions": "솔루션",
    "nav.contact": "문의하기",
    "nav.getStarted": "상담 신청",

    // Hero
    "hero.badge": "한국-중국 비즈니스 브릿지",
    "hero.title": "한국과 중국을 잇는",
    "hero.titleHighlight": "글로벌 파트너",
    "hero.description": "코어게이트 글로벌은 한국과 중국의 교량 역할로 양국 기업의 성공적인 시장 진출을 지원합니다. 온라인/오프라인 유통망 개발부터 MCN 서비스, 인플루언서 마케팅까지 원스톱 솔루션을 제공합니다.",
    "hero.cta.consultation": "무료 상담 신청",
    "hero.cta.learnMore": "자세히 보기",
    "hero.stat.experience": "업력",
    "hero.stat.experienceValue": "10년+",
    "hero.stat.partners": "파트너사",
    "hero.stat.partnersValue": "200+",
    "hero.stat.markets": "진출 시장",
    "hero.stat.marketsValue": "중국/한국",

    // Services
    "services.badge": "핵심 서비스",
    "services.title": "양국 시장 진출을 위한 통합 솔루션",
    "services.description": "한국 기업의 중국 진출, 중국 기업의 한국 및 글로벌 진출을 위한 모든 서비스를 제공합니다.",
    
    "services.distribution.title": "유통망 개발",
    "services.distribution.description": "중국/한국 현지 유통상 발굴 및 파트너십 구축, 온/오프라인 채널 확보",
    
    "services.market.title": "시장 개발",
    "services.market.description": "타겟 시장 분석, 진입 전략 수립, 현지화 마케팅 및 브랜딩 지원",
    
    "services.online.title": "온라인 플랫폼 운영",
    "services.online.description": "타오바오 입점 및 운영 대행, 샤오홍슈 마케팅 및 계정 운영, 플랫폼별 맞춤 전략 수립",
    
    "services.mcn.title": "도우인/틱톡 MCN",
    "services.mcn.description": "도우인, 틱톡 전문 MCN 서비스, 인플루언서 섭외, 라이브커머스 기획 및 콘텐츠 제작",
    
    "services.consulting.title": "시장 진출 컨설팅",
    "services.consulting.description": "법인 설립, 인허가, 물류, 통관 등 현지 진출에 필요한 전문 컨설팅",
    
    "services.global.title": "글로벌 확장",
    "services.global.description": "한국을 거점으로 한 글로벌 시장 진출 지원, 해외 바이어 연결",

    // About
    "about.badge": "회사 소개",
    "about.title": "한-중 비즈니스의 가교",
    "about.description1": "코어게이트 글로벌은 한국과 중국에 사무실을 두고 양국 기업의 성공적인 시장 진출을 돕는 전문 기업입니다.",
    "about.description2": "10년 이상의 경험과 현지 네트워크를 바탕으로 유통망 개발, 온라인 마켓 운영, MCN 서비스, 인플루언서 마케팅 등 시장 진출에 필요한 모든 서비스를 원스톱으로 제공합니다.",
    "about.stat.projects": "성공 프로젝트",
    "about.stat.projectsValue": "500+",
    "about.stat.satisfaction": "고객 만족도",
    "about.stat.satisfactionValue": "98%",
    "about.stat.network": "현지 네트워크",
    "about.stat.networkValue": "1,000+",

    // Solutions
    "solutions.badge": "비즈니스 솔루션",
    "solutions.title": "맞춤형 시장 진출 솔루션",
    "solutions.description": "귀사의 목표와 상황에 맞는 최적의 솔루션을 제안합니다.",
    
    "solutions.korea.title": "한국 기업 → 중국 진출",
    "solutions.korea.description": "중국 시장 분석, 유통상 개발, 타오바오 입점, 도우인/틱톡 마케팅, 샤오홍슈 운영까지 중국 시장 진출의 A to Z",
    
    "solutions.china.title": "중국 기업 → 한국/글로벌 진출",
    "solutions.china.description": "한국 시장을 발판으로 글로벌 시장까지, 유통망 구축부터 브랜딩, 틱톡/인스타그램 마케팅까지 통합 지원",
    
    "solutions.ecommerce.title": "타오바오 & 샤오홍슈 운영",
    "solutions.ecommerce.description": "타오바오 스토어 입점 및 운영 대행, 샤오홍슈 계정 운영 및 콘텐츠 마케팅, KOL 협업",
    
    "solutions.influencer.title": "도우인 & 틱톡 MCN",
    "solutions.influencer.description": "도우인/틱톡 전문 MCN, 왕홍/KOL 섭외, 라이브커머스 기획 및 진행, 숏폼 콘텐츠 제작",

    // CTA
    "cta.title": "지금 바로 시작하세요",
    "cta.description": "한국-중국 시장 진출에 대한 무료 상담을 받아보세요. 귀사에 맞는 최적의 솔루션을 제안해 드립니다.",
    "cta.button": "무료 상담 신청",
    "cta.contact": "또는 이메일로 문의하기",

    // Footer
    "footer.description": "한국과 중국을 잇는 비즈니스 파트너. 양국 기업의 성공적인 시장 진출을 위한 원스톱 솔루션을 제공합니다.",
    "footer.services": "서비스",
    "footer.services.distribution": "유통망 개발",
    "footer.services.market": "시장 개발",
    "footer.services.online": "온라인 마켓 입점",
    "footer.services.mcn": "MCN 서비스",
    "footer.services.consulting": "컨설팅",
    "footer.services.global": "글로벌 확장",
    "footer.company": "회사",
    "footer.company.about": "회사 소개",
    "footer.company.team": "팀 소개",
    "footer.company.partners": "파트너",
    "footer.company.contact": "문의하기",
    "footer.offices": "사무실",
    "footer.offices.korea": "한국 사무소",
    "footer.offices.china": "중국 사무소",
    "footer.copyright": "© 2024 Coregate Global. All rights reserved.",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Korea-China Business Bridge",
    "hero.title": "Your Global Partner",
    "hero.titleHighlight": "Bridging Korea & China",
    "hero.description": "Coregate Global serves as a bridge between Korea and China, supporting successful market entry for companies in both countries. We provide one-stop solutions from online/offline distribution network development to MCN services and influencer marketing.",
    "hero.cta.consultation": "Free Consultation",
    "hero.cta.learnMore": "Learn More",
    "hero.stat.experience": "Experience",
    "hero.stat.experienceValue": "10+ Years",
    "hero.stat.partners": "Partners",
    "hero.stat.partnersValue": "200+",
    "hero.stat.markets": "Markets",
    "hero.stat.marketsValue": "CN/KR",

    // Services
    "services.badge": "Core Services",
    "services.title": "Integrated Solutions for Market Entry",
    "services.description": "We provide comprehensive services for Korean companies entering China and Chinese companies expanding to Korea and global markets.",
    
    "services.distribution.title": "Distribution Network",
    "services.distribution.description": "Local distributor discovery and partnership building, securing online/offline channels",
    
    "services.market.title": "Market Development",
    "services.market.description": "Target market analysis, entry strategy, localization marketing and branding support",
    
    "services.online.title": "Online Platform Operation",
    "services.online.description": "Taobao store entry and operation, Xiaohongshu marketing and account management, platform-specific strategies",
    
    "services.mcn.title": "Douyin/TikTok MCN",
    "services.mcn.description": "Specialized MCN services for Douyin and TikTok, influencer recruitment, live commerce planning and content creation",
    
    "services.consulting.title": "Market Entry Consulting",
    "services.consulting.description": "Expert consulting for local establishment, licensing, logistics, and customs clearance",
    
    "services.global.title": "Global Expansion",
    "services.global.description": "Global market entry support using Korea as a base, international buyer connections",

    // About
    "about.badge": "About Us",
    "about.title": "Bridge Between Korea & China",
    "about.description1": "Coregate Global is a specialized company with offices in Korea and China, helping businesses from both countries successfully enter each other's markets.",
    "about.description2": "With over 10 years of experience and local networks, we provide one-stop solutions for market entry including distribution network development, online marketplace operation, MCN services, and influencer marketing.",
    "about.stat.projects": "Successful Projects",
    "about.stat.projectsValue": "500+",
    "about.stat.satisfaction": "Client Satisfaction",
    "about.stat.satisfactionValue": "98%",
    "about.stat.network": "Local Network",
    "about.stat.networkValue": "1,000+",

    // Solutions
    "solutions.badge": "Business Solutions",
    "solutions.title": "Customized Market Entry Solutions",
    "solutions.description": "We propose optimal solutions tailored to your goals and circumstances.",
    
    "solutions.korea.title": "Korean Companies → China Entry",
    "solutions.korea.description": "A to Z of China market entry: market analysis, distributor development, Taobao entry, Douyin/TikTok marketing, and Xiaohongshu operation",
    
    "solutions.china.title": "Chinese Companies → Korea/Global Entry",
    "solutions.china.description": "From Korea to global markets: comprehensive support from distribution network building to branding and TikTok/Instagram marketing",
    
    "solutions.ecommerce.title": "Taobao & Xiaohongshu Operation",
    "solutions.ecommerce.description": "Taobao store entry and operation, Xiaohongshu account management and content marketing, KOL collaboration",
    
    "solutions.influencer.title": "Douyin & TikTok MCN",
    "solutions.influencer.description": "Specialized Douyin/TikTok MCN, Wanghong/KOL recruitment, live commerce planning and execution, short-form content creation",

    // CTA
    "cta.title": "Get Started Today",
    "cta.description": "Get a free consultation about entering the Korea-China market. We'll propose the optimal solution for your company.",
    "cta.button": "Free Consultation",
    "cta.contact": "Or contact us via email",

    // Footer
    "footer.description": "Your business partner bridging Korea and China. We provide one-stop solutions for successful market entry in both countries.",
    "footer.services": "Services",
    "footer.services.distribution": "Distribution Network",
    "footer.services.market": "Market Development",
    "footer.services.online": "Online Marketplace",
    "footer.services.mcn": "MCN Services",
    "footer.services.consulting": "Consulting",
    "footer.services.global": "Global Expansion",
    "footer.company": "Company",
    "footer.company.about": "About Us",
    "footer.company.team": "Our Team",
    "footer.company.partners": "Partners",
    "footer.company.contact": "Contact",
    "footer.offices": "Offices",
    "footer.offices.korea": "Korea Office",
    "footer.offices.china": "China Office",
    "footer.copyright": "© 2024 Coregate Global. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "ko" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
