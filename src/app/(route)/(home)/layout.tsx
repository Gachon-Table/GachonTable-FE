import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '라인업지',
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shadow-2xl shadow-gray-200">
      <main>{children}</main>
    </div>
  );
}
