'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

console.log();
const Mypage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div className='flex'>
        <div></div>
        <div className='flex flex-col'>
          <div>로그인하지 않은 상태입니다. <br /> 로그인 후 이용해 주세요.</div>
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
      <div className='flex'>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Mypage;
