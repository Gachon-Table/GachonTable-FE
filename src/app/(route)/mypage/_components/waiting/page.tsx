'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface WaitingItem {
  waitingId: string;
  pubName: string;
  orderStatus: string;
  order: number;
}

interface WaitingProps {
  modal: boolean;
  setFunc: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const Waiting = ({ modal, setFunc, setId }: WaitingProps) => {
  const [waitingList, setWaitingList] = useState<WaitingItem[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>('');
  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
    if (accessToken) {
      waitingApi();
    }
  }, [accessToken]);

  const waitingApi = async () => {
    if (!accessToken) return;
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/waiting/order`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      setWaitingList(result.data);
      console.log(waitingList);
    } catch (error) {
      console.error('Error fetching waiting list:', error);
    }
  };

  return (
    <div className="h-full">
      {accessToken ? (
        waitingList.length > 0 ? (
          <div className="mx-auto mt-[2rem] flex w-[90%] flex-col gap-[2rem]">
            {waitingList.map((element) => (
              <div
                key={element.waitingId}
                className="flex items-center justify-between rounded-[1rem] border border-t-0 px-[2rem] py-[1rem] shadow-md"
              >
                <div>
                  <div className="my-[0.5rem] inline-block rounded-[1rem] bg-[#7da4ff] px-[1rem] py-[0.2rem] text-white">
                    {element.orderStatus}
                  </div>
                  <div className="text-[1.5rem] font-bold">
                    {element.pubName}
                  </div>
                  <div className="text-[1rem] font-semibold text-[#969595]">
                    ID: {element.waitingId}
                  </div>
                  <div className="text-[1.2rem] font-bold text-[#3b4d9b]">
                    대기순번: {element.order}
                  </div>
                </div>
                <Image
                  src={'/images/cancel.png'}
                  width={15}
                  height={15}
                  alt="cancel"
                  className="h-[15px] cursor-pointer"
                  onClick={() => {
                    setFunc(!modal);
                    setId(element.waitingId)
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-[#D9D9D9]">
            줄 서기 현황이 존재하지 않습니다.
          </div>
        )
      ) : (
        
        <div className="flex h-full items-center justify-center text-[#D9D9D9]">
          로그인이 필요합니다.
        </div>
      )}
    </div>
  );
};
Waiting.propTypes = {
  modal: PropTypes.bool.isRequired,
  setFunc: PropTypes.func.isRequired,
};
export default Waiting;
