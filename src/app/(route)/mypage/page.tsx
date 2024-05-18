'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

console.log();
const Mypage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div onClick={() => signIn('kakao', { callbackUrl: '/mypage' })}>
      <Image
        src="/images/kakao_login_medium_wide.png"
        alt="kakao-login"
        width={300}
        height={50}
      />
    </div>
  );
};
export default Mypage;
