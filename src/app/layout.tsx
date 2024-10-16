import React from 'react';
import './globals.css';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import { META } from '@/app/constants/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  keywords: [...META.keyword],
  openGraph: {
    title: META.title,
    description: META.description,
    locale: 'ko_KR',
    type: 'website',
    url: META.url,
    images: {
      url: `${META.url}${META.ogImage}`,
    },
  },
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const measurementId = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId={measurementId} />
      </head>
      <body
        className={`${pretendard.variable} mx-auto w-full max-w-[430px] font-pretendard`}
      >
        {children}
      </body>
    </html>
  );
}
