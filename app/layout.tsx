import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Noto_Serif_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _notoSerifKR = Noto_Serif_KR({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Coregate Global | 한-중 비즈니스 브릿지',
  description: '코어게이트 글로벌은 한국과 중국의 교량 역할로 양국 기업의 성공적인 시장 진출을 지원합니다. 유통망 개발, 온라인 마켓 운영, MCN 서비스, 인플루언서 마케팅까지 원스톱 솔루션을 제공합니다.',
  generator: 'v0.app',
  keywords: ['한중 무역', '중국 진출', '한국 진출', 'MCN', '인플루언서 마케팅', '크로스보더 이커머스', '유통망 개발'],
  openGraph: {
    title: 'Coregate Global | 한-중 비즈니스 브릿지',
    description: '한국과 중국을 잇는 비즈니스 파트너',
    url: 'https://www.coregateglobal.com',
    siteName: 'Coregate Global',
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
