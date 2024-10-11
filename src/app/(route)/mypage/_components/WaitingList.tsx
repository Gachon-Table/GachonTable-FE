'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AlertBox from '../../waiting/biztalk-status/[waitingId]/_components/AlertBox';

interface WaitingItem {
  waitingId: string;
  pubName: string;
  orderStatus: string;
  order: number;
  createdAt: string;
  tableType: string;
}

interface WaitingProps {
  modal: boolean;
  setFunc: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const WaitingList = ({ modal, setFunc, setId }: WaitingProps) => {
  const [waitingList, setWaitingList] = useState<WaitingItem[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>('');

  // useEffect(() => {
  //   setAccessToken(localStorage.getItem('accessToken'));
  //   if (accessToken) {
  //     waitingApi();
  //   }
  // }, [accessToken, waitingList]);

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, []);

  useEffect(() => {
    if (accessToken) {
      waitingApi();
    }
  }, [accessToken]);

  const waitingApi = async () => {
    if (!accessToken) return;
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/waiting/status`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      setWaitingList(result.data);
      console.log(waitingList);
    } catch (error) {
      console.error('Error fetching waiting list:', error);
    }
  };

  return (
    <div className="gap-3 bg-gy-0 px-4 pt-6">
      {accessToken && (
        <div className="px flex w-full justify-center ">
          <AlertBox color="primary" />
        </div>
      )}
      {accessToken ? (
        waitingList.length > 0 ? (
          <div className="mt-3 flex flex-col items-center justify-center">
            {waitingList.map((element) => (
              <div
                key={element.waitingId}
                className="w-full rounded-lg border border-gy-200 bg-wt p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className={`inline-block rounded-full px-2 py-[5px] font-c2-semibold ${
                      element.orderStatus === '대기 중'
                        ? 'bg-orange-200 text-orange-400'
                        : 'bg-orange-200 text-orange-400'
                    }`}
                  >
                    대기 중 : 내 순서 {element.order}번째
                  </div>
                </div>
                <div className="mb-1 text-gy-900 font-h4">
                  {element.pubName}
                </div>
                <div className="text-gy-500 font-b2-normal-medium">
                  등록 시간 : {element.createdAt}
                </div>
                <div className="mb-3 text-gy-500 font-b2-normal-medium">
                  테이블 :{' '}
                  {element.tableType === 'BASIC'
                    ? '4인 테이블'
                    : element.tableType === 'PARTY'
                      ? '8인 테이블'
                      : element.tableType}
                </div>
                <button
                  className=" w-full rounded-md border border-gy-100 bg-gy-100 px-[117px] py-3 text-center text-gy-700 font-b2-normal-semibold"
                  onClick={() => {
                    setFunc(!modal);
                    setId(element.waitingId);
                  }}
                >
                  대기 취소
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gy-300 font-b1-normal-medium">
            줄서기 현황이 존재하지 않습니다.
          </p>
        )
      ) : (
        <p className="text-gy-300 font-b1-normal-medium">
          로그인 후 이용해 보세요!
        </p>
      )}
    </div>
  );
};

export default WaitingList;
