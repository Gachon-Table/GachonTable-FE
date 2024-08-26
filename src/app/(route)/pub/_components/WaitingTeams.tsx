import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios';
import { isUserAuthenticated } from '@/app/api/service/user/userAuth';
import axios from 'axios';
import PeopleCountPopup from './PeopleCountPopup';
import ConfirmPopup from './ConfirmPopup';
import SuccessPopup from './SuccessPopup';
import { KakaoLogin, Logo } from 'public';

interface WaitingTeamsProps {
  pubId: number;
  studentCard: boolean;
  openStatus: boolean;
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({ pubId, openStatus }) => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
  const router = useRouter();

  const incrementPeople = () => setPeopleCount((prevCount) => prevCount + 1);
  const decrementPeople = () =>
    setPeopleCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));

  const openPopup = () => setShowPopup(true);

  const closePopup = () => {
    setShowPopup(false);
    setShowConfirmPopup(false);
    setError(null);
    setShowSuccessPopup(false);
    setShowLoginPopup(false);
  };

  const openConfirmPopup = () => {
    setShowConfirmPopup(true);
    setShowPopup(false);
  };

  const handleStoreClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const loggedIn = await isUserAuthenticated();

    if (!loggedIn) {
      setShowLoginPopup(true);
    } else {
      openPopup();
    }
  };

  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
    const code = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = code;
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

      const response = await userAxios.post('/waiting/remote', payload, {
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });

      const { httpStatus, code, message } = response.data;

      if (httpStatus === 412) {
        if (code === 'WAITING_OVER_COUNT') {
          setError('예약 가능한 주점의 최대 개수를 초과했습니다.');
        } else if (code === 'WAITING_ALREADY_EXIST') {
          setError('한 주점에 하나의 웨이팅 신청만 가능합니다.');
        } else {
          setError(`오류가 발생했습니다: ${message}`);
        }
      } else {
        setShowSuccessPopup(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
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
        } else {
          setError(`오류가 발생했습니다: ${error.message}`);
        }
      } else {
        setError('예기치 못한 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-2 flex h-full max-h-screen w-full max-w-[480px] flex-col">
      <div
        onClick={(e) => handleStoreClick(e)}
        style={{ backgroundColor: openStatus ? '#3B4D9B' : '#969595' }}
        className={`flex h-20 cursor-pointer items-center justify-center text-2xl font-bold text-white ${
          loading || !openStatus ? 'cursor-not-allowed' : ''
        }`}
      >
        {loading
          ? '로딩 중...'
          : openStatus
            ? '웨이팅 신청'
            : '오픈 준비중이에요'}
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
        <ConfirmPopup onClose={closePopup} onConfirm={handleSubmit} />
      )}

      {error && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p>{error}</p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closePopup}
                style={{ backgroundColor: '#3B4D9B' }}
                className="rounded px-4 py-2 text-white"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && <SuccessPopup onClose={closePopup} />}

      {showLoginPopup && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div
            className="w-full max-w-[480px] rounded-t-xl bg-white p-6 shadow-lg"
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
      )}
    </div>
  );
};

export default WaitingTeams;
