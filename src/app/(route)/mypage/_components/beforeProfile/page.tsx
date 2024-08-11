import React from 'react';
import Image from 'next/image';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);
    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = "a69eba9e5d96ac3b3e5ecc51206a4d51";
    const code =
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
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
          className="flex items-center gap-[1rem] w-full rounded-[2rem] "
          onClick={loginProcess}
        >
          <Image src="/images/kakao_login_medium_wide.png" width={300} height={1} alt="kakao" />
        </button>
      </div>
    </div>
  );
};

export default BeforeProfile;
