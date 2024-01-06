import './globals.css';
import { Inter } from 'next/font/google';
import Top from './Bar/Top';
import Buttom from './Bar/Buttom';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '억조종합기계(주)',
  description: '억조종합기계에 오신걸 환영합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Script strategy='beforeInteractive' src="open API 키 값 입력"/>
      <body className={inter.className}>
        <Top/>
        {children}
        <Buttom/>
      </body>
    </html>
  );
}
