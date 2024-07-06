"use client";
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
}

interface ResponsiveTestProps {
  searchTerm: string;
}

const ResponsiveTest: React.FC<ResponsiveTestProps> = ({ searchTerm }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // 로그인 상태 관리
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false); // 팝업 상태 관리
  const [stores, setStores] = useState<Store[]>([]); // 가게 정보 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  // 주점목록 API
  useEffect(() => {
    axios.get('http://ec2-3-34-185-126.ap-northeast-2.compute.amazonaws.com:8080/pub/all')
      .then(response => {
        console.log(response.data); // 받아온 데이터 콘솔에 출력
        setStores(response.data); // 받아온 데이터 상태에 저장
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError("데이터를 가져오는 중 오류가 발생했습니다."); // 에러 메시지 설정
      })
      .finally(() => {
        setLoading(false); // 로딩 완료
      });
  }, []);

  const handleStoreClick = (e: React.MouseEvent<HTMLAnchorElement>, pubId: number) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 페이지 이동 막기
      setShowLoginPopup(true); // 팝업 표시
    }
  };

  const closePopup = () => {
    setShowLoginPopup(false);
  };

  // 검색어에 따라 데이터를 필터링
  const filteredStores = stores.filter(store =>
    store.pubName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.oneLiner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      ) : filteredStores.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p>현재 주점이 없습니다</p>
        </div>
      ) : (
        filteredStores.map((store: Store) => (
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
                  <div className="w-80 bg-white flex justify-start mb-[1%] text-base items-start text-left">{store.oneLiner}</div>
                  <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.studentCard ? '학생증 필요' : '학생증 불필요'}</div>
                  <div className="w-12/12 bg-white flex justify-start mb-[0.5%] text-[10px] items-start text-left">{store.menu}</div>
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
          <div className="h-1/3 w-full max-w-2xl mx-auto bg-white text-black text-center">
            <div className="text-black text-xl font-bold h-24 flex justify-center items-center">로그인이 필요한 서비스입니다!</div>
            <div className="text-center">
              <img src="/images/kakao_login_medium_wide.png" alt="카카오 로그인" className="w-80 h-11 mx-auto" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveTest;
