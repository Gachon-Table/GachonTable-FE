import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    signIn('kakao', { callbackUrl: '/login', redirect: false});
  };
  return (
    <div className="mt-[4rem] flex w-[100%] justify-evenly">
      <div className="mt-2 flex flex-col items-center gap-6 text-gray-400">
        <div>
          로그인하지 않은 상태입니다.
          <br />
          로그인 후 이용해 주세요.
        </div>
        <button className="flex items-center gap-[1rem] bg-[#fee500] rounded-[2rem] font-bold text-black px-[1rem] py-[1rem]" onClick={loginProcess}>
          <Image src='/images/kakao.png' width={18} height={58} alt='kakao'/>
          <div>카카오로 3초 만에 시작하기</div>
        </button>
      </div>
    </div>
  );
};

export default BeforeProfile;
