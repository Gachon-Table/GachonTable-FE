import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isUserAuthenticated } from '@/app/api/service/userAuth'; // 로그인 상태 확인 함수
import Image from 'next/image';

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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 상태 관리
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false); // 로그인 팝업 표시 상태 관리
  const [stores, setStores] = useState<Store[]>([]); // 가게 정보 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isUserAuthenticated();
      setIsLoggedIn(loggedIn);

      //로그인 에러로 인한 임시 로직
      //const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiLquYDsiLIxMjMiLCJ1aWQiOiJkNGU4MWNmYi1kNzEwLTQ2YTgtOTcwNC1lZjFmYWY1YzFmNGEiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzIxMjAxMzkwfQ.Sk1NsrJZXx8iN-IyDs0sU-itoA03c1x0RKl34_8TnZJDBtU0SHtnW4iDOafruXE4"
      //const token2 = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiLquYDsiLIxMjMiLCJ1aWQiOiJkNGU4MWNmYi1kNzEwLTQ2YTgtOTcwNC1lZjFmYWY1YzFmNGEiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzIyMzg5MzgxfQ.06J0HJRM2bXkrZ0Z6zs0Pou3eX0gPo8R6kXlE1RHAwDg51tsX0YqzNiuVhPOCitE"
      //const accessToken = localStorage.setItem("accessToken", token);
      //const refreshToken = localStorage.setItem("refreshToken", token2);

      // 주점 목록 API 요청
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      axios.get(`${apiUrl}/pub/all`)
        .then(response => {
          setStores(response.data); // 받아온 데이터 상태에 저장
        })
        .catch(error => {
          console.error("데이터를 가져오는 중 오류 발생: ", error);
          setError("데이터를 가져오는 중 오류가 발생했습니다."); // 에러 메시지 설정
        })
        .finally(() => {
          setLoading(false); // 로딩 완료
        });
    };

    checkLoginStatus();
  }, []);

  const handleStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 페이지 이동 방지
      setShowLoginPopup(true); // 로그인 팝업 표시
    }
  };

  const closePopup = () => {
    setShowLoginPopup(false); // 팝업 닫기
  };

  const loginProcess = () => {   //로그인로직
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = "a69eba9e5d96ac3b3e5ecc51206a4d51";
    const code =
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = code;
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
        <div className="w-full flex justify-center items-center h-screen font-bold">
          <p>로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p>{error}</p>
        </div>
      ) : sortedStores.length === 0 ? (
        <div className="w-full flex justify-center items-center h-screen font-bold">
          현재 주점이 없습니다
        </div>
      ) : (
        sortedStores.map((store: Store) => (
          <a
            href={isLoggedIn ? `/landing/${store.pubId}` : '#'}
            key={store.pubId}
            onClick={(e) => handleStoreClick(e)}
            className="flex flex-col w-full bg-white p-4 border-b border-gray-300 rounded-lg"
          >
            <div className="flex flex-row items-center">
              <img
                src='/images/storeImage.png'
                alt='가게사진'
                className="w-28 h-28 mr-2 rounded-2xl -mt-4"
              />
              <div className="flex flex-col w-full">
                <div className="text-xl font-bold mb-2">{store.pubName}</div>
                <div className="text-sm mb-2">{store.oneLiner}</div>
                <div className="flex items-center mt-3">
                  <div
                    className={`min-w-[2rem] px-2 h-6 flex items-center justify-center rounded-full text-[10px] font-bold text-white ${store.studentCard ? 'bg-red-500' : 'bg-blue-500'}`}
                  >
                    {store.studentCard ? '학생증 필요' : '학생증 불필요'}
                  </div>
                </div>
                <div className="flex justify-end mt-2 mr-4">
                  <div className="text-xs font-bold text-right">
                    현재&nbsp;<span className="text-[#FF805A]">{store.queueing}</span>명이 대기하고 있어요
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))
      )}

      {showLoginPopup && (
        <div
          className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup} // 팝업 외부를 클릭하면 닫히도록 설정
        >
          <div
            className="w-full max-w-md bg-white p-6 rounded-t-xl shadow-lg"
            onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 이벤트 전파 방지
          >
            <div className="flex flex-col items-center">
              <div className="w-1/5 flex items-center justify-center mb-4">
                <img src="/images/popuplogo.png" alt="Logo" className="w-11 h-11" />
              </div>
              <p className="text-lg font-semibold mb-4">대기를 하려면 로그인이 필요해요!</p>
              <button
                className="flex items-center gap-[1rem] rounded-[2rem] bg-[#fee500] px-[1rem] py-[1rem] font-bold text-black"
                onClick={loginProcess}
              >
                <Image src="/images/kakao.png" width={18} height={58} alt="kakao" />
                <div>카카오로 3초 만에 시작하기</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveTest;