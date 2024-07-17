import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios';
import { isUserAuthenticated } from '@/app/api/service/userAuth';
import axios from 'axios';
import PeopleCountPopup from './PeopleCountPopup';
import ConfirmPopup from './ConfirmPopup';
import SuccessPopup from './SuccessPopup';

interface WaitingTeamsProps {
  pubId: number;
  studentCard: boolean;
  openStatus: boolean; // Add this line
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({ pubId, openStatus }) => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const router = useRouter();

  const incrementPeople = () => {
    setPeopleCount(prevCount => prevCount + 1);
  };

  const decrementPeople = () => {
    setPeopleCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowConfirmPopup(false);
    setError(null);
    setShowSuccessPopup(false);
  };

  const openConfirmPopup = () => {
    setShowConfirmPopup(true);
    setShowPopup(false);
  };

  const handleSubmit = async () => {
    if (!(await isUserAuthenticated())) {
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('accessToken');

      const payload = {
        pubId,
        headCount: peopleCount,
      };

      const response = await userAxios.post(
        '/waiting/remote',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('Response data:', response.data);

      const { httpStatus, code, message } = response.data;

      // 응답 데이터의 상태 코드가 412인지 확인하고 예외 처리
      if (httpStatus === 412) {
        if (code === 'WAITING_OVER_COUNT') {
          setError('예약 가능한 주점의 최대 개수를 초과했습니다.');
        } else if (code === 'WAITING_ALREADY_EXIST') {
          setError('한 주점에 하나의 웨이팅 신청만 가능합니다');
        } else {
          setError(`오류가 발생했습니다: ${message}`);
        }
      } else {
        // 성공적인 응답을 받은 경우에만 성공 팝업을 표시
        setShowSuccessPopup(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response);
        const status = error.response?.status;

        if (status === 500) {
          setError('서버 에러가 발생했습니다.');
        } else if (status === 401) {
          setError('인증 오류가 발생했습니다. 다시 로그인 해주세요.');
        } else if (status === 404) {
          setError('요청한 페이지를 찾을 수 없습니다.');
        } else if (status === 403) {
          setError('권한이 존재하지 않습니다.');
        } else if (status === 503) {
          setError('관리자에게 문의해주세요.');
        }else {
          setError(`오류가 발생했습니다: ${error.message}`);
        }
      } else {
        console.error('웨이팅 신청 중 오류 발생: ', error);
        setError('예기치 못한 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[31rem] mx-auto h-full max-h-screen mt-2 flex flex-col">
      <div
        onClick={() => openStatus && !loading && openPopup()} // Conditionally call openPopup
        style={{ backgroundColor: openStatus ? '#3B4D9B' : '#969595' }}
        className={`text-white flex justify-center items-center h-20 text-2xl font-bold cursor-pointer ${loading || !openStatus ? 'cursor-not-allowed' : ''}`}
      >
        {loading ? '로딩 중...' : openStatus ? '웨이팅 신청' : '오픈 준비중이에요'}
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
        />
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p>{error}</p>
            <div className="flex justify-center mt-6">
              <button onClick={closePopup} style={{ backgroundColor: '#3B4D9B' }} className="px-4 py-2 text-white rounded">닫기</button>
            </div>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <SuccessPopup
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default WaitingTeams;
