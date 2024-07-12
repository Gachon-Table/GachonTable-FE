import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios'; // import 경로는 필요에 따라 조정하세요
import { isUserAuthenticated } from '@/app/api/service/userAuth'; // import 경로는 필요에 따라 조정하세요
import axios from 'axios'; // axios를 import 합니다

interface WaitingTeamsProps {
  queueing: number; // 대기 중인 팀 수를 prop으로 받습니다
  pubId: number; // pubId를 prop으로 받습니다
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({ queueing, pubId }) => {
  const [peopleCount, setPeopleCount] = useState(1); // 인원 수 상태를 관리합니다
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false); // 팝업 상태를 관리합니다
  const router = useRouter();

  // 인원 수를 증가시키는 함수
  const incrementPeople = () => {
    setPeopleCount(peopleCount + 1);
  };

  // 인원 수를 감소시키는 함수
  const decrementPeople = () => {
    if (peopleCount > 1) {
      setPeopleCount(peopleCount - 1);
    }
  };

  // 팝업을 여는 함수
  const openPopup = () => {
    setShowLoginPopup(true);
  };

  // 팝업을 닫는 함수
  const closePopup = () => {
    setShowLoginPopup(false);
  };

  // 웨이팅 신청을 처리하는 함수
  const handleSubmit = async () => {
    if (!isUserAuthenticated()) {
      alert('로그인이 필요합니다.');
      router.push('/login'); // 필요한 경우 경로를 조정하세요.// 인증되지 않은 경우 알림을 표시합니다
      return;
    }

    try {
      const response = await userAxios.post(
        '/waiting/remote', // API 엔드포인트
        {
          pubId,
          headCount: peopleCount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
          },
        }
      );
      console.log('Response data:', response.data); // 응답 데이터를 콘솔에 출력합니다
      alert('웨이팅 신청이 완료되었습니다.'); // 웨이팅 신청 완료 알림을 표시합니다
      closePopup(); // 요청 성공 후 팝업을 닫습니다
    } catch (error) {
      if (axios.isAxiosError(error)) { // axios 오류 확인
        console.error('Error response:', error.response); // 오류 응답을 콘솔에 출력합니다
        if (error.response?.status === 500) {
          alert('서버 에러가 발생했습니다.'); // 500번 에러 처리
        } else if (error.response?.status === 401) {
          alert('인증 오류가 발생했습니다. 다시 로그인 해주세요.'); // 401번 에러 처리
        } else {
          alert(`오류가 발생했습니다: ${error.message}`); // 기타 오류 처리
        }
      } else {
        console.error('웨이팅 신청 중 오류 발생: ', error); // 비axios 오류 처리
      }
    }
  };

  return (
    <div className="w-full h-full max-h-screen mt-2 flex flex-col">
      <div className="text-xl font-bold mb-10">현재 {queueing}팀이 웨이팅 중입니다.</div>
      <div className="flex flex-col justify-center items-center mt-2">
        <div className="mb-2">인원 수</div>
        <div className="flex items-center mb-20">
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-l"
            onClick={decrementPeople}
          >
            -
          </button>
          <div className="bg-white text-black py-2 px-4 border">{peopleCount}</div>
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-r"
            onClick={incrementPeople}
          >
            +
          </button>
        </div>
      </div>
      <div onClick={openPopup} className="bg-gray-800 text-white flex justify-center items-center h-24 text-2xl font-bold cursor-pointer">
        웨이팅 신청
      </div>
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="absolute inset-0" onClick={closePopup}></div>
          <div className="relative w-full max-w-md mx-auto bg-white text-black text-center rounded-lg shadow-lg border p-4">
            <div className="text-black text-xl font-bold h-20 flex justify-center items-center">신청하시겠습니까?</div>
            <div className="text-black text-xs h-10 flex justify-center items-center">신청 시 카카오톡으로 대기 현황을 알려 드려요!</div>
            <div className="text-red-600 text-xs flex justify-center items-center">해당 주점은 학생증이 필수인 주점입니다!</div>
            <div className="flex flex-row mt-5 h-16">
              <div className="w-1/2 text-lg flex justify-center items-center border-r border-gray-300 cursor-pointer" onClick={closePopup}>취소</div>
              <div className="w-1/2 text-lg flex justify-center items-center cursor-pointer" onClick={handleSubmit}>신청</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingTeams;
