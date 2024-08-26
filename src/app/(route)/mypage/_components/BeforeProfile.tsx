import React from 'react';
import { KakaoLoginRound } from 'public';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
    const code = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = code;
  };
  return (
    <div className="mt-[4rem] flex w-[100%] justify-evenly">
      <div className="mt-2 flex flex-col items-center gap-6 text-gray-400">
        <div>
          로그인하지 않은 상태입니다.
          <br />
          로그인 후 이용해 주세요.
        </div>
        <button
          className="flex w-full items-center gap-[1rem] rounded-[2rem] "
          onClick={loginProcess}
        >
          <KakaoLoginRound />
        </button>
      </div>
    </div>
  );
};

export default BeforeProfile;
