'use client';
import React, { useEffect, useState } from 'react';
import AlertModal from '../_components/AlertModal';
import { getWaitingList } from '@/app/api/service/getWaitingList';
import { callUser } from '@/app/api/service/callUser';
import { enterUser } from '@/app/api/service/enterUser';

function formatTime(timeString: string): string {
  const date = new Date(timeString);
  return date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export const WaitingList = () => {
  const [callout, setCallout] = useState<boolean>(false);
  const [beSeated, setBeSeated] = useState<boolean>(false);
  const [selectedWaitingId, setSelectedWaitingId] = useState<number | null>(
    null,
  );

  interface User {
    username: string;
    time: string;
    headCount: number;
    tel: string;
    waitingId: number;
  }

  const [list, setList] = useState<User[]>([]);

  const handleCallout = (waitingId: number) => {
    setSelectedWaitingId(waitingId);
    setCallout(!callout);
  };

  const handleBeSeated = (waitingId: number) => {
    setSelectedWaitingId(waitingId);
    setBeSeated(!beSeated);
  };

  const handleEnterUser = async () => {
    if (selectedWaitingId === null) return;
    const credentials = {
      waitingId: selectedWaitingId,
    };

    try {
      await enterUser(credentials);
      console.log('입장 완료 처리되었습니다.');
      const updatedList = await getWaitingList();
      setList(updatedList);
    } catch (error) {
      console.error('입장 완료 처리 중 오류 발생:', error);
      alert('입장 완료 처리 중 오류가 발생했습니다.');
    } finally {
      setBeSeated(false);
      setSelectedWaitingId(null);
    }
  };

  const handleCallUser = async () => {
    if (selectedWaitingId === null) return;

    const credentials = {
      waitingId: selectedWaitingId,
    };

    try {
      await callUser(credentials);
    } catch (error) {
      console.error('호출 처리 중 오류 발생:', error);
      alert('호출 처리 중 오류가 발생했습니다.');
    } finally {
      setCallout(false);
      setSelectedWaitingId(null);
    }
  };

  const handlePhoneCall = (phoneNumber: string) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert('이 기능은 모바일 기기에서만 사용할 수 있습니다.');
    }
  };

  useEffect(() => {
    const fetchWaitingList = async () => {
      try {
        const waitingList = await getWaitingList();
        setList(waitingList);
        console.log(`총 ${waitingList.length}개의 대기열이 있습니다.`);
      } catch (error) {
        console.error('대기열 조회 중 오류 발생:', error);
      }
    };
    fetchWaitingList();
  }, []);

  return (
    <div className="mt-3 h-690 w-11/12 max-w-screen-xl overflow-y-auto rounded-lg p-5">
      {!list || list.length === 0 ? (
        <div className="flex h-screen items-center justify-center"></div>
      ) : (
        list.map((user, idx) => (
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
                    <span className="text-xs font-medium">
                      {user.headCount}명
                    </span>
                    <div className="mt-1 h-5 border-l border-[#C2C2C2]" />
                    <span
                      className="cursor-pointer text-sm font-medium hover:underline"
                      onClick={() => handlePhoneCall(user.tel)}
                    >
                      {user.tel.substring(user.tel.length - 4)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleCallout(user.waitingId)}
                  className="h-16 w-20 rounded-xl font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
                >
                  호출
                </button>
                <button
                  className="h-16 w-20 rounded-xl font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
                  onClick={() => handleBeSeated(user.waitingId)}
                >
                  완료
                </button>
              </div>
            </div>
            {idx !== list.length - 1 && <div className="mt-5" />}
          </div>
        ))
      )}
      {callout && selectedWaitingId !== null ? (
        <AlertModal
          message={'고객 호출'}
          button={'호출'}
          onCancel={() => setCallout(false)}
          onConfirm={handleCallUser}
        />
      ) : null}
      {beSeated && selectedWaitingId !== null ? (
        <AlertModal
          message={'입장 완료'}
          button={'완료'}
          onCancel={() => setBeSeated(false)}
          onConfirm={handleEnterUser}
        />
      ) : null}
    </div>
  );
};
