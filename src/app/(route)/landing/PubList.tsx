'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { isUserAuthenticated } from '@/app/api/service/userAuth';

interface Store {
  pubId: number;
  pubName: string;
  people: string;
  oneLiner: string;
  studentCard: boolean;
  menu: string;
  bookmark: boolean;
  queueing: number;
  thumbnails: string[];
}

interface ResponsiveTestProps {
  searchTerm: string;
  filterStudentCard: boolean | null;
  sortByCongestion: boolean;
  sortByLowCongestion: boolean;
}

const PubList = ({
  searchTerm,
  filterStudentCard,
  sortByCongestion,
  sortByLowCongestion,
}: ResponsiveTestProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isUserAuthenticated();
      setIsLoggedIn(loggedIn);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      axios
        .get(`${apiUrl}/pub/all`)
        .then((response) => {
          setStores(response.data);
        })
        .catch((error) => {
          console.error('데이터를 가져오는 중 오류 발생: ', error);
          setError('데이터를 가져오는 중 오류가 발생했습니다.');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    checkLoginStatus();
  }, []);

  const filteredStores = stores
    .filter((store) => {
      if (filterStudentCard !== null) {
        return store.studentCard === filterStudentCard;
      }
      return true;
    })
    .filter((store) =>
      store.pubName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const sortedStores = [...filteredStores];

  if (sortByCongestion) {
    sortedStores.sort((a, b) => b.queueing - a.queueing);
  } else if (sortByLowCongestion) {
    sortedStores.sort((a, b) => a.queueing - b.queueing);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center font-bold">
          <p>로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex h-screen items-center justify-center">
          <p>{error}</p>
        </div>
      ) : sortedStores.length === 0 ? (
        <div className="h-screen w-full font-bold">현재 주점이 없습니다</div>
      ) : (
        sortedStores.map((store: Store, index: number) => (
          <div
            key={store.pubId}
            onClick={() => {
              router.push(`/landing/${store.pubId}`);
            }}
            className={`flex w-full cursor-pointer flex-col justify-center bg-white px-9 py-5 ${
              index !== sortedStores.length - 1
                ? 'border-b border-[#F2F4F6]'
                : ''
            }`}
          >
            <div className="flex flex-row items-center">
              <div className="relative mr-3 h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={
                    store.thumbnails.length > 0
                      ? store.thumbnails[0]
                      : '/images/storeImage.png'
                  }
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col">
                <div className="text-md font-bold">{store.pubName}</div>
                <div className="text-sm">{store.oneLiner}</div>
                <div className="mt-3 flex items-center">
                  <div
                    className={`items-center justify-center rounded-full px-2.5 py-1 text-[8px] font-medium text-white ${store.studentCard ? 'bg-[#E87567]' : 'bg-[#3B4D9B]'}`}
                  >
                    {store.studentCard ? '학생증 필요' : '학생증 불필요'}
                  </div>
                </div>
                <div className="mr-2 mt-2 flex justify-end">
                  <div className="text-right text-xs font-bold">
                    현재&nbsp;
                    <span className="text-[#FF805A]">{store.queueing}</span>명이
                    대기하고 있어요
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {/* {showLoginPopup && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
          onClick={closePopup} 
        >
          <div
            className="w-full max-w-md rounded-t-xl bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex flex-col items-center">
              <Logo className="mb-4" />
              <p className="mb-4 text-lg font-semibold">
                대기를 하려면 로그인이 필요해요!
              </p>
              <button className="cursor-pointer" onClick={loginProcess}>
                <KakaoLogin />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default PubList;
