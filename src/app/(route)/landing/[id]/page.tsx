'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import WaitingTeams from './WaitingTeams';
import { getPubInfoForUser } from '@/app/api/service/getPubInfo';
import { LeftArrow } from '@/app/assets';

// 인터페이스 정의
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
  };
  menu: MenuItem[];
}

interface MenuItem {
  menuName: string;
  price: number;
  oneLiner: string;
}

const StoreDetailPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const menuRef = useRef<HTMLDivElement>(null);

  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await getPubInfoForUser(id as string);
        setStore(response);
        console.log(response);
      } catch (err) {
        console.error('가게 데이터를 가져오는 중 오류 발생:', err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
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

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        로딩 중...
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
        가게를 찾을 수 없습니다
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative h-64 w-full sm:h-80 md:h-96">
        {/* 여기에 thumbnails 이미지 배열 가져와서 넣어주세요. */}
        {store.pub.thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
        <div className="z-9999 absolute left-4 top-4">
          <a href={'/landing'}>
            <LeftArrow />
          </a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-2xl flex-1 overflow-auto rounded-bl-[40px] rounded-br-[40px] border bg-white p-6">
        <div>
          <div className="mt-2 flex w-80 items-start justify-start bg-white pl-0.5 text-xs font-bold">
            현재&nbsp;
            <span style={{ color: '#FF805A' }}>{store.pub.waitingCount}</span>
            명이 대기하고 있어요
          </div>
          <h1 className="mb-2 text-2xl font-bold">{store.pub.pubName}</h1>
          <p className="text-sm">{store.pub.oneLiner}</p>
          <div className="mt-3 flex items-center">
            <div
              className={`items-center justify-center rounded-full px-2.5 py-1 text-[8px] font-medium text-white ${store.pub.studentCard ? 'bg-[#E87567]' : 'bg-[#3B4D9B]'}`}
            >
              {store.pub.studentCard ? '학생증 필요' : '학생증 불필요'}
            </div>
          </div>
        </div>

        <div className="mt-5 flex h-16 flex-row border-b border-gray-300">
          <a
            href={store.pub.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 flex w-1/2 items-center justify-center border-r border-gray-300 text-lg"
          >
            인스타그램
          </a>
          <div
            className="mb-2 flex w-1/2 cursor-pointer items-center justify-center text-lg"
            onClick={scrollToMenu}
          >
            메뉴
          </div>
        </div>
        <div ref={menuRef} className="mb-20 mt-5 w-full">
          <div className="mb-5 mt-5 p-4 text-2xl font-bold">메뉴</div>
          <div className="flex flex-col">
            {store.menu.length === 0 ? (
              <p className="text-center text-gray-600">
                현재 등록되어있는 메뉴가 없습니다
              </p>
            ) : (
              store.menu.map((menuItem: MenuItem) => (
                <div
                  key={menuItem.menuName}
                  className="mb-4 border-b border-gray-300 p-4"
                >
                  <h2 className="text-xl font-bold">{menuItem.menuName}</h2>
                  <p className="my-2 text-base">{menuItem.price}원</p>
                  <p className="my-2 text-sm text-gray-800">
                    {menuItem.oneLiner}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        {/* studentCard와 openStatus 값을 WaitingTeams 컴포넌트에 전달 */}
        <nav className=" fixed bottom-0 left-0 right-0 border-none bg-transparent mobile:mx-auto ">
          <nav className="mx-auto flex w-full max-w-[31rem] justify-evenly ">
            <WaitingTeams
              pubId={parseInt(id as string, 10)}
              studentCard={store.pub.studentCard}
              openStatus={store.pub.openStatus} // Pass openStatus here
            />
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default StoreDetailPage;
