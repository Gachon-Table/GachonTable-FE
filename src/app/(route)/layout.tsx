'use client';
import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import '../globals.css';
import Footer from './_components/footer/page';

const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={noto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
