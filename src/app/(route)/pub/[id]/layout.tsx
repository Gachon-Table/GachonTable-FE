import React from 'react';
import { Metadata } from 'next';
import { getPubInfoForUser } from '@/app/api/service/user/getPubInfoForUser';
import { getMetadata } from '@/app/utils/getMetadata';

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const pubId = params.id;
  const pubData = await getPubInfoForUser(pubId);
  return getMetadata({ title: pubData.pub.pubName, asPath: `/pub/${pubId}` });
};

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
