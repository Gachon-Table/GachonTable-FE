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
              router.push(`/pub/${store.pubId}`);
            }}
            className={` flex w-full cursor-pointer flex-col justify-center gap-3 bg-wt p-4 ${
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
                <div className="text-gy-900 font-h4">{store.pubName}</div>
                <div className="text-gy-700 font-b2-normal-semibold">
                  {store.oneLiner}
                </div>
                <div className="mt-2 flex">
                  <div className="text-right text-gy-600 font-c1-semibold ">
                    현재&nbsp;
                    <span className="text-red-400">{store.queueing}</span>명이
                    대기 중
                  </div>
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
