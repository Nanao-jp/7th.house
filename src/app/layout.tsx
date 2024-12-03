import type { Metadata } from "next";
import { Space_Grotesk, Orbitron, M_PLUS_1 } from "next/font/google";
import "./globals.css";
import Layout from '@/components/Layout'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
});

const mplus = M_PLUS_1({ 
  subsets: ["latin"],
  variable: '--font-mplus',
  weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
  title: "7th.House | AIと共に創る次世代のWeb開発",
  description: "最新技術を活用したWeb開発サービスを提供。スピーディーな開発、データに基づく提案、柔軟なカスタマイズで、あなたのビジネスをサポートします。",
  keywords: "Web開発, AI開発, Next.js, React, フルスタック開発, UI/UXデザイン",
  metadataBase: new URL('https://7th-house.net'),
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  authors: [{ name: 'Nanao' }],
  generator: 'Next.js',
  applicationName: '7th.House',
  referrer: 'origin-when-cross-origin',
  creator: '7th.House',
  publisher: '7th.House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "7th.House | AIと共に創る次世代のWeb開発",
    description: "最新技術を活用したWeb開発サービスを提供。スピーディーな開発、データに基づく提案、柔軟なカスタマイズで、あなたのビジネスをサポートします。",
    type: "website",
    url: 'https://7th-house.net',
    siteName: "7th.House",
    locale: "ja_JP",
    images: [
      {
        url: '/og-image.png',
        secureUrl: 'https://7th-house.net/og-image.png',
        width: 1200,
        height: 630,
        alt: '7th.House | AIと共に創る次世代のWeb開発',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: '@Nanao_AI_Engr',
    creator: '@Nanao_AI_Engr',
    title: "7th.House | AIと共に創る次世代のWeb開発",
    description: "最新技術を活用したWeb開発サービスを提供。スピーディーな開発、データに基づく提案、柔軟なカスタマイズで、あなたのビジネスをサポートします。",
    images: {
      url: 'https://7th-house.net/og-image.png',
      alt: '7th.House | AIと共に創る次世代のWeb開発',
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} ${mplus.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
