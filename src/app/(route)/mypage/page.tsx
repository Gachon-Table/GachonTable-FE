'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Waiting from './_components/waited/page';
import Waited from './_components/waiting/page';

const Mypage = () => {
  const { data: session } = useSession();
  const [curTab, setCurTab] = useState('ing');
  console.log(session);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <Image
          src="/images/profile.png"
          alt="profile"
          width={100}
          height={20}
        />
        <div className="flex flex-col items-center">
          <div>
            로그인하지 않은 상태입니다.
            <br />
            로그인 후 이용해 주세요.
          </div>
          <div onClick={() => signIn('kakao', { callbackUrl: '/mypage' })}>
            <Image
              src="/images/kakao_login_medium_wide.png"
              alt="kakao-login"
              width={300}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-between">
        <div
          className="flex w-[50%] cursor-pointer flex-col items-center border-b-2"
          onClick={() => {
            setCurTab('ing');
          }}
        >
          <div>3</div>
          <div>줄서기 현황</div>
        </div>
        <div
          className="flex w-[50%] cursor-pointer flex-col items-center border-b-2"
          onClick={() => {
            setCurTab('ed');
          }}
        >
          <div>3</div>
          <div>줄서기 내역</div>
        </div>
      </div>
      {curTab === 'ing' && <Waiting />}
      {curTab === 'ed' && <Waited />}
    </div>
  );
};
export default Mypage;
