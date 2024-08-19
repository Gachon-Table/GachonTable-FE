import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Store {
  pubId: number;
  pubName: string;
  people: string;
  oneLiner: string;
  studentCard: boolean;
  menu: string;
  bookmark: boolean;
  queueing: number;
  thumbnails: string[]; // 썸네일 이미지 배열
}

interface ResponsiveTestProps {
  searchTerm: string;
  filterStudentCard: boolean | null;
  sortByCongestion: boolean;
  sortByLowCongestion: boolean;
}

const ResponsiveTest: React.FC<ResponsiveTestProps> = ({
  searchTerm,
  filterStudentCard,
  sortByCongestion,
  sortByLowCongestion,
}) => {
  const [stores, setStores] = useState<Store[]>([]); // 가게 정보 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.get(`${apiUrl}/pub/all`);
        setStores(response.data); // 받아온 데이터 상태에 저장
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
        setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 에러 메시지 설정
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchStores();
  }, []);

  const filteredStores = stores
    .filter((store) => {
      if (filterStudentCard !== null) {
        return store.studentCard === filterStudentCard; // 학생증 필터링
      }
      return true;
    })
    .filter((store) =>
      store.pubName.toLowerCase().includes(searchTerm.toLowerCase()), // 검색어 필터링
    );

  // 정렬 로직
  const sortedStores = [...filteredStores]; // 원본 데이터 보호를 위한 복사본 생성

  if (sortByCongestion) {
    // 혼잡도 많은 순 (내림차순) 정렬
    sortedStores.sort((a, b) => b.queueing - a.queueing);
  } else if (sortByLowCongestion) {
    // 혼잡도 낮은 순 (오름차순) 정렬
    sortedStores.sort((a, b) => a.queueing - b.queueing);
  }

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center font-bold">
          <p>로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex h-screen items-center justify-center">
          <p>{error}</p>
        </div>
      ) : sortedStores.length === 0 ? (
        <div className="flex h-screen w-full items-center justify-center font-bold">
          현재 주점이 없습니다
        </div>
      ) : (
        sortedStores.map((store: Store) => (
          <a
            href={`/landing/${store.pubId}`}
            key={store.pubId}
            className="flex w-full flex-col rounded-lg border-b border-gray-300 bg-white p-4"
          >
            <div className="flex flex-row items-center">
              <div className="-mt-4 mr-2 h-28 w-36 overflow-hidden rounded-2xl">
                <img
                  src={
                    store.thumbnails.length > 0
                      ? store.thumbnails[0] // 첫 번째 썸네일 이미지 사용
                      : '/images/storeImage.png' // 썸네일이 없을 경우 기본 이미지 사용
                  }
                  alt="가게사진"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col">
                <div className="mb-2 text-xl font-bold">{store.pubName}</div>
                <div className="mb-2 text-sm">{store.oneLiner}</div>
                <div className="mt-3 flex items-center">
                  <div
                    className={`flex h-6 min-w-[2rem] items-center justify-center rounded-full px-2 text-[10px] font-bold text-white ${store.studentCard ? 'bg-red-500' : 'bg-blue-500'}`}
                  >
                    {store.studentCard ? '학생증 필요' : '학생증 불필요'}
                  </div>
                </div>
                <div className="mr-4 mt-2 flex justify-end">
                  <div className="text-right text-xs font-bold">
                    현재&nbsp;
                    <span className="text-[#FF805A]">{store.queueing}</span>명이
                    대기하고 있어요
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))
      )}
    </>
  );
};

export default ResponsiveTest;
