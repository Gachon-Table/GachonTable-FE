import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자 | 라인업지',
};

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default RouteLayout;
