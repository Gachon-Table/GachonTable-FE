/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { isUserAuthenticated } from '@/app/api/service/user/userAuth';

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
  sortByPopular: boolean;
  sortByLowCongestion: boolean;
}

const PubList = ({
  searchTerm,
  filterStudentCard,
  sortByPopular,
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

  sortByPopular;
  sortByLowCongestion;

  if (sortByLowCongestion) {
    sortedStores.sort((a, b) => b.queueing - a.queueing);
  } else if (sortByPopular) {
    sortedStores.sort((a, b) => a.queueing - b.queueing);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center font-bold">
          <p>로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex h-screen items-center justify-center">
          <p>{error}</p>
        </div>
      ) : sortedStores.length === 0 ? (
        <div className="mt-[260px] flex h-full flex-col items-center justify-center text-center text-gy-400 font-b1-normal-medium">
          <p>검색 결과가 없어요.</p>
          <p>다른 주점을 검색해보세요.</p>
        </div>
      ) : (
        sortedStores.map((store: Store, index: number) => (
          <div
            key={store.pubId}
            onClick={() => {
              router.push(`/pub/${store.pubId}`);
            }}
            className={` flex w-full cursor-pointer flex-col justify-center gap-3 bg-wt py-4 ${
              index !== sortedStores.length - 1 ? 'border-b border-gy-100' : ''
            }`}
          >
            <div className="flex flex-row items-center">
              <div className="relative mr-3 h-20 w-20 flex-shrink-0 overflow-hidden rounded-[6px]">
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
                <div className="mb-1 flex">
                  <div className="text-right text-gy-600 font-c1-semibold ">
                    현재&nbsp;
                    <span className="text-red-400">{store.queueing}</span>명이
                    대기 중
                  </div>
                </div>
                <div className="text-gy-900 font-h4">{store.pubName}</div>
                <div className="text-gy-700 font-b2-normal-semibold">
                  {store.oneLiner}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PubList;
