"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import WaitingTeams from './WaitingTeams';
import userAxios from '@/app/api/axios/userAxios'; // Import userAxios

// 인터페이스 정의
interface Store {
  pub: {
    bookmark: boolean;
    waitingCount: number;
    pubName: string;
    onLiner: string;
    studentCard: boolean;
    menu: string;
    instagramUrl: string; // Add this line
    openStatus: boolean; // Add this line
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

  // 상태 훅
  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 가게 데이터 가져오기
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await userAxios.get<Store>(`/pub/${id}`);
        setStore(response.data);
      } catch (err) {
        console.error('가게 데이터를 가져오는 중 오류 발생:', err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [id]);

  // 메뉴 섹션으로 스크롤
  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">로딩 중...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
  }

  if (!store) {
    return <div className="flex justify-center items-center h-screen">가게를 찾을 수 없습니다</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 이미지와 뒤로가기 버튼을 포함한 컨테이너 */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <img
          src='/images/place.png'
          alt='Place'
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 z-9999">
          <a href={'/landing'}>
            <img
              src='/images/return.png'
              alt='뒤로가기'
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 w-full max-w-2xl mx-auto bg-white p-6 border rounded-bl-[40px] rounded-br-[40px] overflow-auto">
        {/* 가게 정보 텍스트 */}
        <div>
          <div className="w-80 bg-white flex justify-start text-xs items-start font-bold mt-2">
            현재&nbsp;<span style={{ color: '#FF805A' }}>{store.pub.waitingCount}</span>명이 대기하고 있어요
          </div>
          <h1 className="text-2xl font-bold mb-4">{store.pub.pubName}</h1>
          <p>{store.pub.onLiner}</p>
          <div className="flex items-center mt-3">
            <div className={`min-w-[2rem] px-2 h-6 flex items-center justify-center rounded-full text-xs text-white ${store.pub.studentCard ? 'bg-red-500' : 'bg-blue-500'}`}>
              {store.pub.studentCard ? '학생증 필요' : '학생증 불필요'}
            </div>
          </div>
        </div>
        {/* 메뉴 & 전화 카테고리 */}
        <div className="border-b border-gray-300 flex flex-row mt-5 h-16">
          <a
            href={store.pub.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300 mb-2"
          >
            인스타그램
          </a>
          <div className="w-1/2 text-lg flex justify-center items-center cursor-pointer mb-2" onClick={scrollToMenu}>
            메뉴
          </div>
        </div>
        <div ref={menuRef} className="w-full mt-5 mb-20">
          <div className="text-2xl font-bold mb-5 mt-5 p-4">메뉴</div>
          <div className="flex flex-col">
            {store.menu.length === 0 ? (
              <p className="text-center text-gray-600">현재 등록되어있는 메뉴가 없습니다</p>
            ) : (
              store.menu.map((menuItem: MenuItem) => (
                <div key={menuItem.menuName} className="border-b border-gray-300 mb-4 p-4">
                  <h2 className="text-xl font-bold">{menuItem.menuName}</h2>
                  <p className="text-base my-2">{menuItem.price}원</p>
                  <p className="text-gray-800 text-sm my-2">{menuItem.oneLiner}</p>
                </div>
              ))
            )}
          </div>
        </div>
        {/* studentCard와 openStatus 값을 WaitingTeams 컴포넌트에 전달 */}
        <nav className=" mobile:mx-auto border-none bg-transparent fixed bottom-0 left-0 right-0 ">
          <nav className="mx-auto w-full max-w-[31rem] flex justify-evenly ">
            <WaitingTeams
              pubId={parseInt(id as string, 10)}
              studentCard={store.pub.studentCard}
              openStatus={store.pub.openStatus} // Pass openStatus here
            />
          </nav>
        </nav>
      </div>
    </div >
  );
};

export default StoreDetailPage;
