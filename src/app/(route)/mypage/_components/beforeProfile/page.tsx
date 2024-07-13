import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    signIn('kakao', { callbackUrl: '/login' });
  }
  return (
    <div className="mr-[8rem] mt-[8rem] flex w-[100%] justify-evenly">
      <div className="flex h-full">
        <img src="/images/profile.png" />
      </div>
      <div className="mt-2 flex flex-col items-center gap-6 text-gray-400">
        <div>
          로그인하지 않은 상태입니다.
          <br />
          로그인 후 이용해 주세요.
        </div>
        <div onClick={loginProcess}>
          <Image
            src="/images/kakao_login_medium_wide.png"
            alt="kakao-login"
            width={300}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeProfile;
