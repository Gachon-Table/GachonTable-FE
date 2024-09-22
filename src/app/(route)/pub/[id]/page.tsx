'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import WaitingTeams from '../_components/WaitingTeams';
import { getPubInfoForUser } from '@/app/api/service/user/getPubInfoForUser';
import DetailTitle from './_components/DetailTitle';
import DetailMenuList from './_components/DetailMenuList';
import DetailImage from './_components/DetailImage';

interface Store {
  pub: {
    instagramUrl: string;
    menu: string;
    oneLiner: string;
    openStatus: boolean;
    pubId: string;
    pubName: string;
    studentCard: boolean;
    thumbnails: string[];
    waitingCount: number;
    waitingStatus: boolean;
  };
  menu: MenuItem[];
}

interface MenuItem {
  menuName: string;
  price: number;
  oneLiner: string;
  thumbnail: string;
}

const StoreDetailPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const menuRef = useRef<HTMLDivElement>(null);

  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await getPubInfoForUser(id as string);
        setStore(response);
        console.log(response);
      } catch (err) {
        console.error('Error fetching store data:', err);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [id]);

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (store && store.pub.thumbnails.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === store.pub.thumbnails.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [store]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">{error}</div>
    );
  }

  if (!store) {
    return (
      <div className="flex h-screen items-center justify-center">
        Store not found
      </div>
    );
  }

  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <div className="relative h-full w-full ">
        <DetailImage thumbnails={store.pub.thumbnails} />
      </div>

      <div className="mx-auto w-full flex-1 overflow-auto bg-wt">
        <DetailTitle
          pubName={store.pub.pubName}
          oneLiner={store.pub.oneLiner}
          instagramUrl={store.pub.instagramUrl}
          waitingCount={store.pub.waitingCount}
        />
        <div className="border-2 border-gy-0" />

        <div ref={menuRef} />
        <DetailMenuList menu={store.menu} />

        <nav className="fixed bottom-0 left-0 right-0 mx-auto w-full border-none bg-transparent px-4">
          <div className="flex items-center justify-center">
            <WaitingTeams
              pubId={parseInt(id as string, 10)}
              studentCard={store.pub.studentCard}
              openStatus={store.pub.openStatus}
              waitingStatus={store.pub.waitingStatus}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default StoreDetailPage;
