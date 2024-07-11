'use client';
import React, { useEffect, useState } from 'react';
import AlertModal from '../_components/AlertModal';
import { getWaitingList } from '@/app/api/service/getWaitingList';

function formatTime(timeString: string): string {
  const date = new Date(timeString);
  return date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export const WaitingList = () => {
  const [callout, setCallout] = useState<boolean>(false); //고객호출
  const [beSeated, setBeSeated] = useState<boolean>(false); //착석완료

  interface User {
    username: string;
    time: string;
    headCount: number;
    tel: string;
    waitingId: number;
  }

  const [list, setList] = useState<User[]>([
    {
      username: '서유빈',
      time: '2024-07-11T17:02:31.129Z',
      headCount: 2,
      tel: '010-1234-1234',
      waitingId: 1,
    },
  ]);

  const handleCallout = () => setCallout(!callout);

  const handleBeSeated = () => setBeSeated(!beSeated);

  // useEffect(() => {
  //   const fetchWaitingList = async () => {
  //     try {
  //       const waitingList = await getWaitingList();
  //       setList(waitingList);
  //       console.log(`총 ${waitingList.length}개의 대기열이 있습니다.`);
  //     } catch (error) {
  //       console.error('대기열 조회 중 오류 발생:', error);
  //       alert('대기열을 불러오는 중 오류가 발생했습니다.');
  //     }
  //   };
  //   fetchWaitingList();
  // }, []);

  return (
    <div className="mt-3 h-[690px] w-11/12 max-w-screen-xl overflow-y-auto rounded-lg p-5">
      {list.map((user, idx) => (
        <div key={idx}>
          <div className="flex flex-row items-center justify-between rounded-2xl bg-white px-4 py-2 text-[#434343]">
            <div className="flex items-center space-x-4">
              <div className="mb-4 flex flex-col items-center pt-2.5">
                <div className="text-3xl font-bold">{idx + 1}</div>
                <span className="mt-1 text-sm">{formatTime(user.time)}</span>
              </div>
              <div>
                <div className="text-2xl font-bold">{user.username}</div>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="text-sm font-medium">
                    {user.headCount}명
                  </span>
                  <div className="mt-1 h-5 border-l border-[#C2C2C2]" />
                  <span className="cursor-pointer text-sm font-medium hover:underline">
                    {user.tel.substring(user.tel.length - 4)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCallout}
                className="h-16 w-20 rounded-xl font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
              >
                호출
              </button>
              <button
                className="h-16 w-20 rounded-xl font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
                onClick={handleBeSeated}
              >
                완료
              </button>
            </div>
          </div>
          {idx !== list.length - 1 && <div className="mt-5" />}
        </div>
      ))}
      {callout ? (
        <AlertModal
          message={'고객 호출'}
          button={'호출'}
          onCancel={handleCallout}
        />
      ) : null}
      {beSeated ? (
        <AlertModal
          message={'착석 완료'}
          button={'완료'}
          onCancel={handleBeSeated}
        />
      ) : null}
    </div>
  );
};
