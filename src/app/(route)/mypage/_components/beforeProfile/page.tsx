import React from 'react';
import Image from 'next/image';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = "a69eba9e5d96ac3b3e5ecc51206a4d51";
    const code =
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    console.log(code);
    window.location.href = code;
  };
  console.log(process.env.KAKAO_CLIENT_ID);
  return (
    <div className="mt-[4rem] flex w-[100%] justify-evenly">
      <div className="mt-2 flex flex-col items-center gap-6 text-gray-400">
        <div>
          로그인하지 않은 상태입니다.
          <br />
          로그인 후 이용해 주세요.
        </div>
        <button
          className="flex items-center gap-[1rem] rounded-[2rem] bg-[#fee500] px-[1rem] py-[1rem] font-bold text-black"
          onClick={loginProcess}
        >
          <Image src="/images/kakao.png" width={18} height={58} alt="kakao" />
          <div>카카오로 3초 만에 시작하기</div>
        </button>
      </div>
    </div>
  );
};

export default BeforeProfile;
