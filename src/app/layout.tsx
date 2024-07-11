'use client';
import { Noto_Sans_KR } from 'next/font/google';
import { usePathname } from 'next/navigation';
import React from 'react';
import './globals.css';

const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isRowAlignment = pathname === '/admin/field-lineup';

  return (
    <html lang="en">
      <body
        className={`${noto.className} ${!isRowAlignment ? 'h-screen mobile:mx-auto mobile:max-w-[480px]' : 'h-screen w-screen'}`}
      >
        {children}
      </body>
    </html>
  );
}
