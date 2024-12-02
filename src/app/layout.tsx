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
  description: "AIを活用した次世代のWeb開発サービスを提供。高速開発、データ駆動の意思決定、カスタマイズ可能なソリューションで、あなたのビジネスをサポートします。",
  keywords: "AI開発, Web開発, Next.js, React, TypeScript, フルスタック開発, UI/UXデザイン",
  openGraph: {
    title: "7th.House | AIと共に創る次世代のWeb開発",
    description: "AIを活用した次世代のWeb開発サービスを提供。高速開発、データ駆動の意思決定、カスタマイズ可能なソリューションで、あなたのビジネスをサポートします。",
    type: "website",
    locale: "ja_JP",
    siteName: "7th.House",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '7th.House | AIと共に創る次世代のWeb開発',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7th.House | AIと共に創る次世代のWeb開発",
    description: "AIを活用した次世代のWeb開発サービスを提供。高速開発、データ駆動の意思決定、カスタマイズ可能なソリューションで、あなたのビジネスをサポートします。",
  },
  robots: {
    index: true,
    follow: true,
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
