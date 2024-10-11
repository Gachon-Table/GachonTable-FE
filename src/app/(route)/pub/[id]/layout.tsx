import React from 'react';
import { Metadata } from 'next';
import { getPubInfoForUser } from '@/app/api/service/user/getPubInfoForUser';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pubId = params.id;

  const pubData = await getPubInfoForUser(pubId);

  return {
    title: `${pubData.pub.pubName} | 라인업지`,
  };
}

interface RouteLayoutProps {
  children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({ children }) => {
  return (
    <div className="shadow-2xl shadow-gray-200">
      <main>{children}</main>
    </div>
  );
};

export default RouteLayout;
