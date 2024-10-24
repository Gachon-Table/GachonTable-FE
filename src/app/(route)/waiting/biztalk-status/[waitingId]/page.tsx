/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PageHeader } from '@/app/common/PageHeader';
import { Home } from 'public';
import AlertModal from '@/app/common/AlertModal';
import AlertBox from './_components/AlertBox';
import DetailBox from './_components/DetailBox';
import CancelButton from './_components/CancelButton';
import { NoteBox } from '@/app/(route)/waiting/biztalk-status/[waitingId]/_components/NoteBox';
import { getWaitingInfo } from '@/app/api/service/getWaitingInfo';

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  tableType: string;
  order: number;
  createdAt: string;
}

const WaitingInfo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waitingState, setWaitingState] = useState<WaitingProps>({
    waitingId: '',
    pubName: '',
    orderStatus: '',
    order: 0,
    createdAt: '',
    tableType: '',
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
        tableType: data.tableType,
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
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden bg-white ">
      <div className="flex-grow">
        <PageHeader icon={<Home />} title={'마이 웨이팅'} />
        <div className="mt-7 flex w-full flex-col items-center space-y-3 px-4">
          <div className="flex w-full justify-center">
            <AlertBox />
          </div>
          <DetailBox
            pubName={waitingState.pubName}
            tableType={waitingState.tableType}
            order={waitingState.order}
            createdAt={waitingState.createdAt}
          />
          <NoteBox />
        </div>
      </div>

      <div className="mt-auto flex w-full flex-col px-4">
        <CancelButton
          handleCancel={() => setIsModalOpen(true)}
          order={waitingState.order}
        />
      </div>

      {isModalOpen && waitingState.waitingId && (
        <AlertModal
          message={'대기를 취소하시겠습니까?'}
          hasSubmessage={true}
          submessage={'확인 후 확인 버튼을 눌러주세요.'}
          onCancel={() => setIsModalOpen(false)}
          waitingId={waitingState.waitingId}
          onConfirm={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default WaitingInfo;
