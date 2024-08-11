import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import AlertBox from './_components/AlertBox';
import DetailBox from './_components/DetailBox';
import CancleButton from './_components/CancleButton';
import CancelModal from './_components/CancleModal';

interface WaitingProps {
  waitingId?: string;
  pubName: string;
  orderStatus: string;
  order: number;
  createdAt: string;
}

const Waiting = () => {
  const [modal, setModal] = useState(false);
  const [waitingState, setWaitingState] = useState<WaitingProps>({
    waitingId: '',
    pubName: '',
    orderStatus: '',
    order: 0,
    createdAt: '',
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
          orderStatus={waitingState.orderStatus}
          order={waitingState.order}
          createdAt={waitingState.createdAt}
        />
        <CancleButton handleCancle={() => setModal(!modal)} />
      </div>
      {modal && waitingState.waitingId && (
        <CancelModal setModal={setModal} waitingId={waitingState.waitingId} />
      )}
    </div>
  );
};
export default Waiting;
