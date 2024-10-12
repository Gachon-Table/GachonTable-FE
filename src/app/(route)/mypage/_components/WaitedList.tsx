'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface WaitedItem {
  waitingId: string;
  pubName: string;
  status: string;
  enteredTime: string;
  exitTime?: string;
}

const WaitedList = () => {
  const [waitedList, setWaitedList] = useState<WaitedItem[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>('');

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);

  useEffect(() => {
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
    <div className="flex h-full flex-col bg-gy-0">
      {accessToken ? (
        waitedList.length > 0 ? (
          <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 px-4 pb-[69px]">
            {waitedList.map((element) => (
              <div
                key={element.waitingId}
                className="w-full rounded-lg border border-gy-200 bg-wt p-5"
              >
                <div
                  className={`inline-block rounded-full px-2 py-[5px] font-c2-semibold ${
                    element.status === 'ENTERED'
                      ? 'bg-green-100 text-green-500'
                      : 'bg-red-100 text-red-500'
                  }`}
                >
                  {element.status === 'ENTERED' ? '입장 완료' : '대기 취소'}
                </div>

                <div className="mt-2 text-gy-900 font-h4">
                  {element.pubName}
                </div>

                {element.status === 'CANCELED' ? (
                  <div className="mt-1 text-gy-500 font-b2-normal-medium">
                    {/* 취소시간 api 수정 */}
                    취소 시간 : {element.enteredTime}
                  </div>
                ) : (
                  <>
                    <div className="mt-1 text-red-400 font-b2-normal-medium">
                      퇴장 예정 시간 : {element.exitTime}
                    </div>
                    <div className="text-gy-500 font-b2-normal-medium">
                      입장 시간 : {element.enteredTime}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-[calc(100vh_-_210px)] items-center justify-center">
            <p className="text-gy-300 font-b1-normal-medium">
              줄서기 내역이 존재하지 않습니다.
            </p>
          </div>
        )
      ) : (
        <div className="flex h-[calc(100vh_-_210px)] items-center justify-center">
          <p className="text-gy-300 font-b1-normal-medium">
            로그인 후 이용해 보세요!
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitedList;
