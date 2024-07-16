'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NumberKeypad from '../_components/field/NumberKeypad';
import Information from '../_components/field/Information';
import ParticipantsModal from '../_components/field/ParticipantsModal';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { submitWaitingRequest } from '@/app/api/service/onsiteWaiting';
import { pubInfo } from '@/app/api/service/pubInfo';

interface PubData {
  pubId: number;
  pubName: string;
  queueing: number;
  // pubStatus: boolean;
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
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          try {
            const data = await pubInfo();
            setPubData(data);
          } catch (error) {
            console.error('주점 정보를 가져오는데 실패했습니다:', error);
            alert(
              '주점 정보를 가져오는데 실패했습니다. 페이지를 새로고침 해주세요.',
            );
          }
        } else {
          router.push('/admin/login');
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
      alert('pubId가 없습니다. 로그인을 다시 해주세요.');
      return;
    }
    const pubId = parseInt(pubIdString, 10);
    if (isNaN(pubId)) {
      alert('유효하지 않은 pubId입니다.');
      return;
    }

    const waitingRequest: WaitingRequest = {
      pubId: pubId,
      tel: tel,
      headCount: headCount,
    };

    try {
      const data = await submitWaitingRequest(waitingRequest);
      console.log(data);
      alert('웨이팅이 성공적으로 등록되었습니다!');
      setClose(true);

      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error) {
      alert('웨이팅 등록에 실패했습니다. 다시 시도해주세요.');
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 flex-col items-center bg-main-blue text-white">
        {pubData ? (
          <Information pubName={pubData.pubName} queueing={pubData.queueing} />
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
    </div>
  );
}
