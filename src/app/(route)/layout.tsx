'use client';

import { SessionProvider } from 'next-auth/react';
import { Noto_Sans_KR } from 'next/font/google';
import '../globals.css';
import { ReactNode } from 'react';

const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={noto.className}>
        <SessionProvider>
          {children}
          {modal}
        </SessionProvider>
      </body>
    </html>
  );
}
