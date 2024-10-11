'use client';
// import { usePathname } from 'next/navigation';
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
  // const pathname = usePathname();

  // const isRowAlignment = pathname === '/admin/onsite-lineup';

  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} mx-auto w-full max-w-[430px] font-pretendard`}
      >
        {children}
      </body>
    </html>
  );
}
