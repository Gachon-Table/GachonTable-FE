import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import userAxios from '@/app/api/axios/userAxios';
import { isUserAuthenticated } from '@/app/api/service/user/userAuth';
import AlertModal from '@/app/common/AlertModal';
import { LoginToastModal } from '@/app/(route)/pub/[id]/_components/LoginToastModal';
import { TableBottomSheet } from '@/app/(route)/pub/[id]/_components/TableBottomSheet';
import { AxiosError } from 'axios';

interface WaitingTeamsProps {
  pubId: number;
  studentCard: boolean;
  openStatus: boolean;
  waitingStatus: boolean;
}

const WaitingButton: React.FC<WaitingTeamsProps> = ({
  pubId,
  openStatus,
  waitingStatus,
}) => {
  const [tableType, setTableType] = useState('BASIC');
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWaitingSuccess, setIsWaitingSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [suberror, setSuberror] = useState<string | null>(null);
  const router = useRouter();

  const handleTableTypeChange = (tableType: 'BASIC' | 'PARTY') => {
    setTableType(tableType);
  };

  const handleErrorModal = () => {
    setIsError(false);
    setError(null);
    setSuberror(null);
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
      setIsAlertModalOpen(false);
      const token = localStorage.getItem('accessToken');

      const payload = {
        pubId: pubId,
        tableType: tableType,
      };

      const response = await userAxios.post('/waiting/remote', payload, {
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsWaitingSuccess(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { code?: string };

        if (errorData?.code === 'WAITING_OVER_COUNT') {
          setError('예약 가능한 주점의\n최대 개수(3개)를 초과했습니다.');
          setSuberror('신청을 원하시면, 다른 주점의 웨이팅을 취소하세요.');
          setIsError(true);
        } else if (errorData?.code === 'WAITING_ALREADY_EXIST') {
          setError('한 주점에 하나의 웨이팅\n신청만 가능합니다.');
          setIsError(true);
        } else if (errorData?.code === 'SEATING_ALREADY_EXIST') {
          setError('현재 이용 중인 주점이 존재합니다.');
          setIsError(true);
        }
      }
      console.error(error);
    }
  };

  const handleBottomSheet = () => {
    setIsVisitorModalOpen(false);
    setIsAlertModalOpen(true);
  };

  return (
    <div className="mt-2 flex w-[382px] flex-col">
      <div
        onClick={(e) => handleStoreClick(e)}
        className={`mb-6 flex h-16 w-full items-center justify-center rounded-md  text-wt font-h4
  ${openStatus && waitingStatus ? 'cursor-pointer bg-primary-400' : 'cursor-not-allowed bg-gy-400'}
  ${loading || !openStatus || !waitingStatus ? 'cursor-not-allowed' : ''}`}
      >
        {openStatus
          ? waitingStatus
            ? '웨이팅 신청하기'
            : '대기 마감되었어요'
          : '오픈 준비중이에요'}
      </div>

      {isVisitorModalOpen && (
        <TableBottomSheet
          onClose={() => setIsVisitorModalOpen(false)}
          handleSelectedTableType={handleTableTypeChange}
          onSubmit={handleBottomSheet}
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
          message={`${tableType === 'BASIC' ? '4인 테이블' : '8인 테이블'} 이용 예정인가요?`}
          hasSubmessage={true}
          submessage={'신청 시 카카오톡으로 대기 현황을 알려드려요!'}
          onCancel={() => setIsAlertModalOpen(false)}
          onConfirm={handleSubmit}
        />
      )}

      {isError && (
        <AlertModal
          message={error as string}
          hasSubmessage={suberror !== null}
          hasCancelButton={false}
          submessage={suberror !== null ? suberror : ''}
          onConfirm={handleErrorModal}
        />
      )}

      {isWaitingSuccess && (
        <AlertModal
          message={'웨이팅 신청이 완료되었습니다!'}
          hasSubmessage={false}
          hasCancelButton={true}
          isCloseButton={true}
          onCancel={() => setIsWaitingSuccess(false)}
          onConfirm={() => router.push('/mypage')}
        />
      )}
    </div>
  );
};

export default WaitingButton;
