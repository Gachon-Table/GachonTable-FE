/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import AlertBox from './_components/AlertBox';
import DetailBox from './_components/DetailBox';
import CancelButton from './_components/CancelButton';
import CancelModal from './_components/CancelModal';
import { getWaitingInfo } from '@/app/api/service/getWaitingInfo';

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  headCount: number;
  order: number; //대기 순번: 취소상태 시 -1 반환
  createdAt: string;
}

const WaitingInfo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [modal, setModal] = useState(true);
  const [waitingState, setWaitingState] = useState<WaitingProps>({
    waitingId: '',
    pubName: '',
    orderStatus: '',
    order: 0,
    createdAt: '',
    headCount: 0,
  });

  const extractWaitingId = () => {
    const pathParts = pathname.split('/');
    return pathParts[pathParts.length - 1];
  };

  const waitingId = extractWaitingId();

  const getWaiting = async () => {
    try {
      const response = await getWaitingInfo(waitingId as string);
      const data: WaitingProps = await response;

      setWaitingState({
        waitingId: data.waitingId,
        pubName: data.pubName,
        orderStatus: data.orderStatus,
        headCount: data.headCount,
        order: data.order,
        createdAt: data.createdAt,
      });
    } catch (error) {
      console.error('웨이팅 현황 조회 실패');
      alert('조회 실패');
      router.push('/');
    }
  };

  useEffect(() => {
    if (!waitingId) {
      console.error('waitingId가 유효하지 않습니다.');
      alert('유효하지 않은 경로입니다.');
      router.push('/');
    } else {
      getWaiting();
    }
  }, [waitingId]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-12 space-y-4">
        <AlertBox />
        <DetailBox
          pubName={waitingState.pubName}
          headCount={waitingState.headCount}
          order={waitingState.order}
          createdAt={waitingState.createdAt}
        />
        <CancelButton handleCancle={() => setModal(!modal)} />
      </div>
      {modal && waitingState.waitingId && (
        <CancelModal setModal={setModal} waitingId={waitingState.waitingId} />
      )}
    </div>
  );
};
export default WaitingInfo;
