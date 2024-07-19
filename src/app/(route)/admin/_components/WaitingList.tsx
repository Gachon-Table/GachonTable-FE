'use client';
import React, { useEffect, useState } from 'react';
import AlertModal from '../_components/AlertModal';
import { getWaitingList } from '@/app/api/service/getWaitingList';
import adminAxios from '@/app/api/axios/adminAxios';

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
  const [selectedWaitingId, setSelectedWaitingId] = useState<string | null>(
    null,
  );

  interface User {
    username: string;
    time: string;
    headCount: number;
    tel: string;
    waitingId: string;
  }

  const [list, setList] = useState<User[]>([]);

  const handleCallout = (waitingId: string) => {
    setSelectedWaitingId(waitingId);
    setCallout(!callout);
  };

  const handleBeSeated = (waitingId: string) => {
    setSelectedWaitingId(waitingId);
    setBeSeated(!beSeated);
  };

  const handleEnterUser = async () => {
    if (selectedWaitingId === null) return;
    const credentials = {
      waitingId: selectedWaitingId,
    };

    try {
      const response = await adminAxios.patch('/enter', credentials);
      if (response.status === 200) {
        console.log('입장에 완료하였습니다.');
        alert('입장 완료');

        // 대기 리스트를 새로 불러오는 함수 호출
        await fetchWaitingList();
      }
    } catch (error) {
      console.error('입장 실패: ', error);
      alert('입장 처리 중 오류가 발생했습니다.');
    } finally {
      setBeSeated(false);
      setSelectedWaitingId(null);
    }
  };

  const fetchWaitingList = async () => {
    try {
      const waitingList = await getWaitingList();
      setList(waitingList);
    } catch (error) {
      console.error('대기열 조회 중 오류 발생:', error);
    }
  };

  const handleCallUser = async () => {
    const credentials = { waitingId: selectedWaitingId };
    try {
      const response = await adminAxios.patch('/call', credentials);
      if (response.status === 200) {
        console.log('호출에 성공하였습니다.');
        alert('호출 성공');
      }
    } catch (error) {
      console.error('호출 실패: ', error);
      throw error;
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
    fetchWaitingList();
    const intervalId = setInterval(fetchWaitingList, 10000);
    return () => clearInterval(intervalId);
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
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCallout(user.waitingId)}
                  className="h-12 w-14 rounded-xl text-sm font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
                >
                  호출
                </button>
                <div className="h-6 border-r bg-gray-200"></div>
                <button
                  className="h-12 w-14 rounded-xl text-sm font-medium text-[#5F6977] hover:bg-[#F2F4F6]"
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
