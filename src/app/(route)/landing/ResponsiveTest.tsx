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
}

interface ResponsiveTestProps {
  searchTerm: string;
  filterStudentCard: boolean | null;
  sortByCongestion: boolean;
  sortByLowCongestion: boolean;
}

const ResponsiveTest: React.FC<ResponsiveTestProps> = ({ searchTerm, filterStudentCard, sortByCongestion, sortByLowCongestion }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // 로그인 상태 관리
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false); // 로그인 팝업 표시 상태 관리
  const [stores, setStores] = useState<Store[]>([]); // 가게 정보 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  // 주점 목록 API 요청
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    axios.get(`${apiUrl}/pub/all`)
      .then(response => {
        console.log(response.data); // 받아온 데이터 콘솔에 출력
        setStores(response.data); // 받아온 데이터 상태에 저장
      })
      .catch(error => {
        console.error("데이터를 가져오는 중 오류 발생: ", error);
        setError("데이터를 가져오는 중 오류가 발생했습니다."); // 에러 메시지 설정
      })
      .finally(() => {
        setLoading(false); // 로딩 완료
      });
  }, []);

  const handleStoreClick = (e: React.MouseEvent<HTMLAnchorElement>, pubId: number) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 페이지 이동 방지
      setShowLoginPopup(true); // 로그인 팝업 표시
    }
  };

  const closePopup = () => {
    setShowLoginPopup(false); // 팝업 닫기
  };

  const filteredStores = stores.filter(store => {
    if (filterStudentCard !== null) {
      return store.studentCard === filterStudentCard; // 학생증 필터링
    }
    return true;
  }).filter(store => 
    store.pubName.toLowerCase().includes(searchTerm.toLowerCase()) // 검색어 필터링
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
        <div className="flex justify-center items-center h-screen">
          <p>로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p>{error}</p>
        </div>
      ) : sortedStores.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p>현재 주점이 없습니다</p>
        </div>
      ) : (
        sortedStores.map((store: Store) => (
          <a
            href={`/landing/${store.pubId}`}
            key={store.pubId}
            onClick={(e) => handleStoreClick(e, store.pubId)}
            className="w-full h-1/10 bg-white flex flex-row"
          >
            <div className="w-full h-1/10 bg-white flex flex-row">
              <img src='/images/storeImage.png' alt='가게사진' className="w-28 h-28 mr-2" />
              <div className="w-4/5 bg-white flex flex-row justify-between">
                <div>
                  <div className="w-11/12 bg-white flex items-center text-center justify-start text-[20px]">
                    <div className="font-bold text-lg">{store.pubName}</div>
                    <div className="ml-2">
                      {store.people === "많음" && <img src="/images/manypeople.png" alt="많은 사람" className="w-4 h-4 mr-1" />}
                      {store.people === "보통" && <img src="/images/normalpeople.png" alt="보통 사람" className="w-4 h-4 mr-1" />}
                      {store.people === "적음" && <img src="/images/nonepeople.png" alt="적은 사람" className="w-4 h-4 mr-1" />}
                    </div>
                  </div>
                  <div className="w-80 bg-white flex justify-start text-base items-start text-left">대기인원 수 : {store.queueing}</div>
                  <div className="w-80 bg-white flex justify-start mb-[1%] text-xs items-start text-left">한줄 소개 : {store.oneLiner}</div>
                  <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentCard ? '학생증 필요' : '학생증 불필요'}</div>
                  <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">대표 메뉴 : {store.menu}</div> {/* 첫 번째 메뉴 이름만 표시 */}
                </div>
                <div>
                  {store.bookmark ? (
                    <img src="/images/clickbookmark.png" alt="북마크됨" className="w-7 h-7" />
                  ) : (
                    <img src="/images/nonebookmark.png" alt="북마크안됨" className="w-7 h-7" />
                  )}
                </div>
              </div>
            </div>
          </a>
        ))
      )}

      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="absolute inset-0" onClick={closePopup}></div>
          <div className="bg-white p-8 rounded shadow-md z-10">
            <p>로그인이 필요합니다.</p>
            <button onClick={closePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveTest;
