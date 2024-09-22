import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios';
import { isUserAuthenticated } from '@/app/api/service/user/userAuth';
import axios from 'axios';
// import ConfirmPopup from './ConfirmPopup';
import SuccessPopup from './SuccessPopup';
import AlertModal from '@/app/common/AlertModal';
import { LoginToastModal } from '@/app/(route)/(home)/_components/LoginToastModal';
import { VisitorCountToastModal } from '@/app/(route)/(home)/_components/VisitorCountToastModal';

interface WaitingTeamsProps {
  pubId: number;
  studentCard: boolean;
  openStatus: boolean;
  waitingStatus: boolean;
}

const WaitingTeams: React.FC<WaitingTeamsProps> = ({
  pubId,
  openStatus,
  waitingStatus,
}) => {
  const [headCount, setHeadCount] = useState(0);
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const router = useRouter();

  const handleHeadCountChange = (count: number) => {
    setHeadCount(count);
  };

  const closePopup = () => {
    setIsVisitorModalOpen(false);
    setError(null);
    setShowSuccessPopup(false);
  };

  const handleStoreClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!waitingStatus) {
      return;
    }

    const loggedIn = await isUserAuthenticated();

    if (!loggedIn) {
      setIsLoginModalOpen(true);
    } else {
      setIsVisitorModalOpen(true);
    }
  };

  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
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
        headCount: headCount,
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
    <div className="mt-2 flex w-[382px] flex-col">
      <div
        onClick={(e) => handleStoreClick(e)}
        className={`mb-6 flex h-16 w-full items-center justify-center rounded-md  text-wt font-h4
  ${openStatus && waitingStatus ? 'cursor-pointer bg-primary-400' : 'cursor-not-allowed bg-gy-400'}
  ${loading || !openStatus || !waitingStatus ? 'cursor-not-allowed' : ''}`}
      >
        {loading
          ? '로딩 중...'
          : openStatus
            ? waitingStatus
              ? '웨이팅 신청하기'
              : '대기 마감되었어요'
            : '오픈 준비중이에요'}
      </div>

      {isVisitorModalOpen && (
        <VisitorCountToastModal
          onClose={() => setIsVisitorModalOpen(false)}
          handleHeadCountChange={handleHeadCountChange}
          onSubmit={handleSubmit}
        />
      )}

      {isLoginModalOpen && (
        <LoginToastModal
          onClose={() => setIsLoginModalOpen(false)}
          onSubmit={loginProcess}
        />
      )}

      {isAlertModalOpen && (
        <AlertModal
          message={`${headCount}명 방문 예정인가요?`}
          hasSubmessage={true}
          submessage={'신청 시 카카오톡으로 대기 현황을 알려드려요!'}
          onCancel={() => setIsAlertModalOpen(false)}
          onConfirm={handleSubmit}
        />
      )}

      {/* 옛날 코드 다 수정해야함..ㅋ */}
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
    </div>
  );
};

export default WaitingTeams;
