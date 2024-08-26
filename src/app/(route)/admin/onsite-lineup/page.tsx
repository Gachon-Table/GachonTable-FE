'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NumberKeypad from '../_components/field/NumberKeypad';
import Information from '../_components/field/Information';
import ParticipantsModal from '../_components/field/ParticipantsModal';
import { isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { submitWaitingRequest } from '@/app/api/service/admin/onsiteWaiting';
import { getPubInfo } from '@/app/api/service/admin/getPubInfo';
import ErrorModal from '../_components/ErrorModal';

interface PubData {
  pubName: string;
  waitingCount: number;
}

interface WaitingRequest {
  pubId: number;
  tel: string;
  headCount: number;
}

export default function OnsiteLineUp() {
  const [close, setClose] = useState<boolean>(true);
  const [tel, setTel] = useState<string>('');
  const [headCount, setHeadCount] = useState<number>(0);
  const [pubData, setPubData] = useState<PubData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          try {
            const response = await getPubInfo();
            setPubData({
              pubName: response.pub.pubName,
              waitingCount: response.pub.waitingCount,
            });
          } catch (error) {
            console.error('주점 정보를 가져오는데 실패했습니다:', error);
            alert(
              '주점 정보를 가져오는데 실패했습니다. 페이지를 새로고침 해주세요.',
            );
          }
        } else {
          router.push('/admin');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuth();
  }, [router]);

  const onClose = () => {
    setClose(!close);
  };

  const handlePhoneNumberChange = (number: string) => {
    setTel(number);
  };

  const handleHeadCountChange = (count: number) => {
    setHeadCount(count);
  };

  const handleWaitingRequest = async () => {
    const pubIdString = localStorage.getItem('pubId');
    if (pubIdString === null) {
      setError('pubId가 없습니다. 로그인을 다시 해주세요.');
      return;
    }
    const pubId = parseInt(pubIdString, 10);
    if (isNaN(pubId)) {
      setError('유효하지 않은 pubId입니다.');
      return;
    }

    const waitingRequest: WaitingRequest = {
      pubId: pubId,
      tel: tel,
      headCount: headCount,
    };

    try {
      const response = await submitWaitingRequest(waitingRequest);
      const data = response.data;

      if (data.httpStatus === 412) {
        if (data.code === 'WAITING_ALREADY_EXIST') {
          setClose(true);
          setError('한 주점에 하나의 웨이팅 신청만 가능합니다.');
        } else if (data.code === 'WAITING_OVER_COUNT') {
          setClose(true);
          setError('예약 가능한 주점의 최대 개수를 초과했습니다.');
        } else {
          setClose(true);
          setError(`오류가 발생했습니다: ${data.message}`);
        }
      } else if (data.status === true) {
        console.log(data.message);
        setClose(true);
        alert('대기 등록되었습니다!');

        setTimeout(() => {
          window.location.reload();
        }, 300);
      } else {
        setError('웨이팅 등록에 실패했습니다.\n다시 시도해주세요.');
      }
    } catch (error) {
      setError('웨이팅 등록 중 오류가 발생했습니다.\n다시 시도해주세요.');
      console.error(error);
    }
  };

  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 flex-col items-center bg-main-blue text-white">
        {pubData ? (
          <Information
            pubName={pubData.pubName}
            queueing={pubData.waitingCount}
          />
        ) : (
          <p>주점 정보를 불러오는 중...</p>
        )}
      </div>

      <div className="flex h-screen w-1/2 flex-col bg-white">
        <NumberKeypad
          onClose={onClose}
          handlePhoneNumberChange={handlePhoneNumberChange}
        />
      </div>

      {!close && (
        <ParticipantsModal
          onClose={onClose}
          handleHeadCountChange={handleHeadCountChange}
          onSubmit={handleWaitingRequest}
        />
      )}

      {error && <ErrorModal message={error} onClose={closeErrorModal} />}
    </div>
  );
}
