/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import WaitingTeams from '../_components/WaitingTeams';
import { getPubInfoForUser } from '@/app/api/service/user/getPubInfoForUser';
import DetailTitle from './_components/DetailTitle';
import DetailMenuList from './_components/DetailMenuList';
import DetailImage from './_components/DetailImage';
import { PageHeader } from '@/app/common/PageHeader';
import { BackButton } from 'public';

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
  const imageRef = useRef<HTMLDivElement>(null);

  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await getPubInfoForUser(id as string);
        setStore(response);
        console.log(response);
      } catch (err) {
        console.error('데이터를 가져오지 못했습니다', err);
        setError('데이터를 가져오지 못했습니다');
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [id]);

  const handleScroll = () => {
    if (imageRef.current && menuRef.current) {
      const imageBottom = imageRef.current.getBoundingClientRect().bottom;
      const menuTop = menuRef.current.getBoundingClientRect().top;

      setIsImageVisible(imageBottom > 0);
      setIsScrolled(menuTop <= window.innerHeight);

      if (imageBottom > 0) {
        setIsScrolled(false); // 이미지 보일거면 스크롤 false
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div
        className={`relative w-full transition-opacity duration-300 ${
          isImageVisible ? 'opacity-100' : 'opacity-0'
        }`}
        ref={imageRef}
      >
        <DetailImage thumbnails={store.pub.thumbnails} />
      </div>

      {isScrolled && (
        <div className="sticky top-0 z-10 bg-wt">
          <PageHeader
            icon={<BackButton />}
            isDetailPage={false}
            title={store.pub.pubName}
          />
        </div>
      )}

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
