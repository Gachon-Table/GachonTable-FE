'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NumberKeypad from '../_components/field/NumberKeypad';
import Information from '../_components/field/Information';
import ParticipantsModal from '../_components/field/ParticipantsModal';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { submitWaitingRequest } from '@/app/api/service/onsiteWaiting';

// 수정된 인터페이스
interface PubData {
  pubName: string;
  queueing: number;
  pubId: number;
}

interface WaitingRequest {
  pubId: number;
  tel: string;
  headCount: number;
}

export default function FieldLineUp() {
  const [close, setClose] = useState<boolean>(true);
  const [tel, setTel] = useState<string>('');
  const [headCount, setHeadCount] = useState<number>(0);
  const router = useRouter();

  const data: PubData = {
    pubName: '경제학과 이코노미더머니',
    queueing: 2,
    pubId: 0, // 실제 pubId 값으로 설정해야 합니다
  };

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        router.push('/admin/login');
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
    const pubId = localStorage.getItem('pubId');
    const waitingRequest = {
      pubId: pubId,
      tel: tel,
      headCount: headCount,
    };
    try {
      const data = await submitWaitingRequest(waitingRequest);
      console.log(data);
      alert('웨이팅이 성공적으로 등록되었습니다!');
      setClose(true);
    } catch (error) {
      alert('웨이팅 실패했습니다. 다시 시도해주세요.');
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex h-screen w-1/2 flex-col items-center bg-deep-cove text-white">
        <Information pubName={data.pubName} queueing={data.queueing} />
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
