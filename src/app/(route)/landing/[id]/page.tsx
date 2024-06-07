"use client";
import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import storeData from '../data.json';
import WaitingTeams from './WaitingTeams';
import Navigation from '../../_components/nav/Navigation';

const StoreDetailPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const menuRef = useRef<HTMLDivElement>(null);

  const store = storeData.stores.find((store) => store.id === Number(id));

  if (!store) {
    return <div>Store not found</div>;
  }

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center mb-10">
      <div className="w-full max-w-2xl h-full bg-white rounded-lg shadow-md p-6 border overflow-auto scrollbar-hide">
        <div className="w-full flex justify-between mb-10">
          {/* 뒤로가기 & 북마크 */}
          <div>
            <a href={'/landing'}>
              <img src='/images/return.png' alt='뒤로가기' className="w-7 h-7" />
            </a>
          </div>
          <div>
            {store.bookmark ? (
              <img src="/images/clickbookmark.png" alt="북마크됨" className="w-7 h-7" />
            ) : (
              <img src="/images/nonebookmark.png" alt="북마크안됨" className="w-7 h-7" />
            )}
          </div>
        </div>
        {/* 가게 정보 텍스트 */}
        <div>
          <div>
            {store.people === "많음" &&
              <div className="flex justify-left items-center">
                <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />
                <p className="text-red-600 font-bold">많음</p>
              </div>
            }
            {store.people === "보통" &&
              <div className="flex justify-left items-center">
                <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />
                <p className="text-yellow-500 font-bold">보통</p>
              </div>
            }
            {store.people === "적음" &&
              <div className="flex justify-left items-center">
                <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />
                <p className="text-green-500 font-bold">적음</p>
              </div>
            }
          </div>
          <h1 className="text-2xl font-bold mb-4">{store.department}</h1>
          <p>{store.introduction}</p>
          <p className="w-full bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentIDRequired ? '학생증 필요' : '학생증 불필요'}</p>
          <p className="w-full bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.menu[0].name}</p>
          <div className="text-lg font-bold border-b-2 border-black w-min">Instagram</div>
        </div>
        {/* 메뉴 & 전화 카테고리 */}
        <div className="border-b border-gray-300 flex flex-row mt-5 h-20">
          <div className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300">전화</div>
          <div className="w-1/2 text-lg flex justify-center items-center cursor-pointer" onClick={scrollToMenu}>메뉴</div>
        </div>
        <div className="mt-4">
          <WaitingTeams />
        </div>
        <div ref={menuRef} className="w-full mt-10 pt-10">
          <div className="text-2xl font-bold mb-10 mt-10 p-4">메뉴</div>
          <div className="flex flex-col">
            {store.menu.map((menuItem) => (
              <div key={menuItem.name} className="border-t border-gray-200 mb-4 p-4">
                <h2 className="text-xl font-bold">{menuItem.name}</h2>
                <p className="text-gray-600 text-sm">{menuItem.price}원</p>
                <p className="text-gray-800 text-sm">{menuItem.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default StoreDetailPage;
