import Image from 'next/image';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';

const BeforeProfile = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="mr-[8rem] mt-[8rem] flex w-[100%] justify-center gap-2">
      <div className="flex h-[4rem] w-[4rem] items-center justify-center">
        <img src="/images/profile.png" />
      </div>
      <div className="mt-2 flex flex-col items-center gap-6 text-gray-400">
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
  );
};

export default BeforeProfile;
