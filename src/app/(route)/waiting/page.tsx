/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import AlertBox from './_components/AlertBox';
import DetailBox from './_components/DetailBox';
import CancelButton from './_components/CancelButton';
import CancelModal from './_components/CancelModal';

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus?: string;
  headCount: number;
  order: number; //대기 순번: 취소상태 시 -1 반환
  createdAt: string;
}

const Waiting = () => {
  const [modal, setModal] = useState(true);
  const [waitingState, setWaitingState] = useState<WaitingProps>({
    waitingId: '',
    pubName: '컴퓨터공학과 주점',
    orderStatus: '',
    headCount: 0,
    order: 0,
    createdAt: '2024/08/12 4:44',
  });

  const getWaiting = () => {
    //알림톡 웨이팅 현황 조회 api
    // setWaitingState(res);
  };

  useEffect(() => {
    getWaiting();
  }, []);

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
export default Waiting;
