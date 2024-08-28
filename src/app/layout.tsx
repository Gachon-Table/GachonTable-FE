'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import './globals.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isRowAlignment = pathname === '/admin/onsite-lineup';

  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} font-pretendard ${!isRowAlignment ? 'mx-auto h-screen min-w-[360px] max-w-[500px]' : 'h-screen w-screen'}`}
      >
        {children}
      </body>
    </html>
  );
}
