'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, Suspense } from 'react';

const Oauth = () => {
  const params = useSearchParams();
  const code = params.get('code');
  const router = useRouter();

  useEffect(() => {
    const loginProcess = async () => {
      if (!code) {
        console.error('No code found');
        return;
      }

      try {
        const result = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          { code },
        );
        localStorage.setItem('accessToken', result.data.accessToken);
        localStorage.setItem('refreshToken', result.data.refreshToken);
        localStorage.setItem('userName', result.data.username);

        const callbackPath = localStorage.getItem('callbackPath');
        console.log('callbackPath:', localStorage.getItem('callbackPath'));

        if (callbackPath) {
          router.push(callbackPath);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('로그인 에러 :', error);
      }
    };

    loginProcess();
  }, [code, router]);

  return <div></div>;
};

const OauthWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Oauth />
    </Suspense>
  );
};

export default OauthWrapper;
