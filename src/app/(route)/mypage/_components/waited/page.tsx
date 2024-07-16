'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface WaitedItem {
  waitingId: number;
  pubName: string;
  status: string;
  enteredTime: string;
}

const Waited = () => {
  const [waitedList, setWaitedList] = useState<WaitedItem[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>('');
  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
    if (accessToken) {
      waitedApi();
    }
  }, [accessToken]);
  const waitedApi = async () => {
    if (!accessToken) return;
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/waiting/history`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      setWaitedList(result.data);
    } catch (error) {
      console.error('Error fetching waited list:', error);
    }
  };

  return (
    <div className="h-full">
      {accessToken ? (
        waitedList.length > 0 ? (
          <div className="mx-auto mt-[2rem] flex h-full w-[90%] flex-col gap-[2rem]">
            {waitedList.map((element) => (
              <div
                key={element.waitingId}
                className="rounded-[1rem] border border-t-0 px-[2rem] py-[1rem] shadow-md"
              >
                <div className="my-[0.5rem] inline-block rounded-[1rem] bg-[#7da4ff] px-[1rem] py-[0.2rem] text-white">
                  {element.status}
                </div>
                <div className="text-[1.5rem] font-bold">{element.pubName}</div>
                <div className="text-[1rem] font-semibold text-[#969595]">
                  ID: {element.waitingId}
                </div>
                <div className="text-[1.2rem] font-bold text-[#3b4d9b]">
                  방문 입장 시간: {element.enteredTime}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-[#D9D9D9]">
            줄 서기 내역이 존재하지 않습니다.
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

export default Waited;
