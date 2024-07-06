"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import WaitingTeams from './WaitingTeams';
import Navigation from '../../_components/nav/Navigation';
import axios from 'axios';

const StoreDetailPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const menuRef = useRef<HTMLDivElement>(null);

  // 상태 훅
  const [store, setStore] = useState<any>(null); // 가능하면 더 구체적인 타입 사용
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 가게 데이터 가져오기
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(`http://ec2-3-34-185-126.ap-northeast-2.compute.amazonaws.com:8080/pub/${id}`);
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
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!store) {
    return <div>가게를 찾을 수 없습니다</div>;
  }

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
            {store.pub.bookmark ? (
              <img src="/images/clickbookmark.png" alt="북마크됨" className="w-7 h-7" />
            ) : (
              <img src="/images/nonebookmark.png" alt="북마크안됨" className="w-7 h-7" />
            )}
          </div>
        </div>
        {/* 가게 정보 텍스트 */}
        <div>
          <div>
            {store.pub.queueing === 3 && (
              <div className="flex justify-left items-center">
                <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />
                <p className="text-red-600 font-bold">많음</p>
              </div>
            )}
            {store.pub.queueing === 2 && (
              <div className="flex justify-left items-center">
                <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />
                <p className="text-yellow-500 font-bold">보통</p>
              </div>
            )}
            {store.pub.queueing === 1 && (
              <div className="flex justify-left items-center">
                <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />
                <p className="text-green-500 font-bold">적음</p>
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold mb-4">{store.pub.pubName}</h1>
          <p>{store.pub.onLiner}</p>
          <p className="w-full bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">
            {store.pub.studentCard ? '학생증 필요' : '학생증 불필요'}
          </p>
          <p className="w-full bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">
            {store.pub.menu}
          </p>
          <div className="text-lg font-bold border-b-2 border-black w-min">Instagram</div>
        </div>
        {/* 메뉴 & 전화 카테고리 */}
        <div className="border-b border-gray-300 flex flex-row mt-5 h-20">
          <div className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300">전화</div>
          <div className="w-1/2 text-lg flex justify-center items-center cursor-pointer" onClick={scrollToMenu}>메뉴</div>
        </div>
        <div className="mt-4">
          <WaitingTeams queueing={store.pub.queueing} />
        </div>
        <div ref={menuRef} className="w-full mt-10 pt-10">
          <div className="text-2xl font-bold mb-10 mt-10 p-4">메뉴</div>
          <div className="flex flex-col">
            {store.menu.length === 0 ? (
              <p className="text-center text-gray-600">현재 등록되어있는 메뉴가 없습니다</p>
            ) : (
              store.menu.map((menuItem: any) => (
                <div key={menuItem.name} className="border-t border-gray-200 mb-4 p-4">
                  <h2 className="text-xl font-bold">{menuItem.name}</h2>
                  <p className="text-gray-600 text-sm">{menuItem.price}원</p>
                  <p className="text-gray-800 text-sm">{menuItem.explanation}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default StoreDetailPage;