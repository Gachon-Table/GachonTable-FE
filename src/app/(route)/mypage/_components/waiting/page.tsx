import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface WaitingItem {
  waitingId: number;
  pubName: string;
  orderStatus: string;
  order: number;
}

const Waiting = () => {
  const [waitingList, setWaitingList] = useState<WaitingItem[]>([]);
  const accessToken = localStorage.getItem('accessToken');

  const waitingApi = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/waiting/order`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    setWaitingList(result.data);
  };

  useEffect(() => {
    if (accessToken) {
      waitingApi();
    }
  }, []);
  return (
    <div className="flex h-[5rem] w-[100%] flex-col p-[1.2rem]">
      <div className="flex items-center justify-around">
        {waitingList
          ? waitingList.map((element) => {
            return (
              <div key={element.waitingId} className="flex flex-col items-center">
                <div>{element.pubName}</div>
                <div className="text-[0.7rem] font-light">
                  대기상태 : {element.orderStatus}
                </div>
                <div>대기순번 : {element.order}</div>
                <Link
                  href={'/mypage/cancel'}
                  className="cursor-pointer text-red-600"
                  >
                  취소
                </Link>
                <div className='border border-b-[1px]'></div>
              </div>
                );
            })
          : null}
      </div>
    </div>
  );
};

export default Waiting;
