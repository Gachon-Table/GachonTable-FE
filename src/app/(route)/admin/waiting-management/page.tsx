'use client';

import { useState } from 'react';
import Dropdown from '../_components/Dropdown';
import AlertModal from '../_components/AlertModal';

export default function WaitingManagement() {
  const [callout, setCallout] = useState<boolean>(false); //고객호출
  const [beSeated, setBeSeated] = useState<boolean>(false); //착석완료

  interface User {
    name: string;
    userId: number;
    headCount: number;
    registerTime: string;
    phoneNumber: string;
  }

  const [list, setList] = useState<User[]>([
    {
      name: '이동훈',
      userId: 123123,
      headCount: 4,
      registerTime: '17:57',
      phoneNumber: '010-0000-0000',
    },

    {
      name: '이근표',
      userId: 143123,
      headCount: 2,
      registerTime: '18:01',
      phoneNumber: '010-0000-0000',
    },
  ]);

  const handleCallout = () => setCallout(!callout);

  const handleBeSeated = () => setBeSeated(!beSeated);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-deep-cove pt-11">
      <div className="w-full max-w-screen-xl pb-11">
        <Dropdown />
      </div>
      <div className="h-[515px] w-full max-w-screen-xl rounded-lg bg-white p-4 shadow-md tablet:h-[805px]">
        {list.map((user, idx) => (
          <div
            key={idx}
            className="mb-4 flex flex-row items-center justify-between rounded-lg border p-4 "
          >
            <div className="mb-4 flex items-center space-x-4 tablet:mb-0">
              <div className="mb-4 flex flex-col items-center pt-2">
                <div className="text-lg font-bold mobile:text-3xl">
                  {idx + 1}
                </div>
                <span className="text-sm mobile:text-base">
                  {user.registerTime}
                </span>
              </div>
              <div>
                <div className="text-base font-bold mobile:text-xl">
                  {user.name}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-base mobile:text-lg">
                    {user.headCount}명
                  </span>
                  <span className="cursor-pointer text-lg hover:underline mobile:text-base">
                    {user.phoneNumber.substring(user.phoneNumber.length - 4)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="flex cursor-pointer flex-col items-center space-y-2"
                onClick={handleCallout}
              >
                <img
                  src="/images/bell-icon.png"
                  alt="고객 호출 아이콘"
                  className="h-7 mobile:h-8 tablet:h-9"
                />
                <span className="text-xs font-light mobile:text-base">
                  고객 호출
                </span>
              </div>
              <div
                className="flex cursor-pointer flex-col items-center space-y-2"
                onClick={handleBeSeated}
              >
                <img
                  src="/images/check-icon.png"
                  alt="착석 완료 아이콘"
                  className="h-7 mobile:h-8 tablet:h-9"
                />
                <span className="text-xs font-light mobile:text-base">
                  착석 완료
                </span>
              </div>
            </div>
          </div>
        ))}
        {callout ? (
          <AlertModal message={'고객 호출'} onCancel={handleCallout} />
        ) : null}
        {beSeated ? (
          <AlertModal message={'착석 완료'} onCancel={handleBeSeated} />
        ) : null}
      </div>

      <div className="flex w-full max-w-screen-xl items-center justify-center space-x-2 pt-11 tablet:space-x-2">
        <button className="flex-1 rounded-lg bg-sunglo py-6 text-2xl font-semibold text-white">
          현장 줄서기
        </button>
        <button className="flex-1 rounded-lg bg-sunglo py-6 text-2xl font-semibold text-white">
          대기 마감
        </button>
      </div>
    </div>
  );
}
