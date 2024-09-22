import React from 'react';

const BeforeProfile = () => {
  const loginProcess = () => {
    localStorage.setItem('callbackPath', window.location.pathname);

    const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;
    const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;

    const code = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = code;
  };
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex w-[382px] flex-col gap-[10px] text-gy-400  font-b1-normal-medium">
        <button
          className="mb-8 flex h-[64px] w-full cursor-pointer items-center justify-center rounded-[6px] bg-kakao px-6 py-[22px] text-bk font-h4"
          onClick={loginProcess}
        >
          카카오로 3초 만에 시작하기
        </button>
      </div>
    </div>
  );
};

export default BeforeProfile;
