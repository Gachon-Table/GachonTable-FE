import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios';
import { isUserAuthenticated } from '@/app/api/service/userAuth';
import axios from 'axios';
import PeopleCountPopup from './PeopleCountPopup';
import ConfirmPopup from './ConfirmPopup';

interface WaitingTeamsProps {
  pubId: number;
  studentCard: boolean;
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({ pubId }) => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // 인원 수를 증가시키는 함수
  const incrementPeople = () => {
    setPeopleCount(prevCount => prevCount + 1);
  };

  // 인원 수를 감소시키는 함수
  const decrementPeople = () => {
    setPeopleCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  // 팝업을 여는 함수
  const openPopup = () => {
    setShowPopup(true);
  };

  // 팝업을 닫는 함수
  const closePopup = () => {
    setShowPopup(false);
    setShowConfirmPopup(false);
  };

  // 확인 팝업을 여는 함수
  const openConfirmPopup = () => {
    setShowConfirmPopup(true);
    setShowPopup(false);
  };

  // 폼 제출 처리 함수
  const handleSubmit = async () => {
    // 사용자가 인증된 상태인지 확인
    if (!(await isUserAuthenticated())) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    setLoading(true);
    try {
      // 로컬 스토리지에서 토큰을 가져옴 (다른 방법을 사용하고 있다면 이 부분을 조정해야 함)
      const token = localStorage.getItem('accessToken'); // 실제 토큰 가져오기 방법으로 교체

      // 요청 페이로드 준비
      const payload = {
        pubId,
        headCount: peopleCount,
      };

      // 토큰과 요청 페이로드 로그 출력
      console.log('Request token:', token);
      console.log('Request payload:', payload);

      // API 요청 전송
      const response = await userAxios.post(
        '/waiting/remote',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
            'Authorization': `Bearer ${token}`, // Authorization 헤더에 토큰 포함
          },
        }
      );

      // 응답 데이터 로그 출력
      console.log('Response data:', response.data);

      closePopup();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response);
        const status = error.response?.status;
        if (status === 500) {
          alert('서버 에러가 발생했습니다.');
        } else if (status === 401) {
          alert('인증 오류가 발생했습니다. 다시 로그인 해주세요.');
        } else if (status === 404) {
          alert('요청한 페이지를 찾을 수 없습니다.');
        } else {
          alert(`오류가 발생했습니다: ${error.message}`);
        }
      } else {
        console.error('웨이팅 신청 중 오류 발생: ', error);
        alert('예기치 못한 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[30rem] mx-auto h-full max-h-screen mt-2 flex flex-col">
      <div
        onClick={openPopup}
        style={{ backgroundColor: '#3B4D9B' }}
        className="text-white flex justify-center items-center h-20 text-2xl font-bold cursor-pointer rounded-lg"
      >
        웨이팅 신청
      </div>
      {showPopup && (
        <PeopleCountPopup
          peopleCount={peopleCount}
          incrementPeople={incrementPeople}
          decrementPeople={decrementPeople}
          onClose={closePopup}
          onConfirm={openConfirmPopup}
        />
      )}
      {showConfirmPopup && (
        <ConfirmPopup
          onClose={closePopup}
          onConfirm={handleSubmit}
          //studentCard={studentCard}
        />
      )}
    </div>
  );
};

export default WaitingTeams;
