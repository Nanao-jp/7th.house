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
  title: "7th House",
  description: "Portfolio website",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.jpg', sizes: '32x32', type: 'image/jpg' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
