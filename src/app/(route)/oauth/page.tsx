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
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        null,
        { params: { code: code } },
      );
      localStorage.setItem('userAccessToken', result.data.accessToken);
      localStorage.setItem('userRefreshToken', result.data.refreshToken);
      localStorage.setItem('userName', result.data.username);
      const callbackPath = localStorage.getItem('callbackPath');
      if (callbackPath) {
        router.push(callbackPath);
      }
    };

    loginProcess();
  }, [code]);

  return <div></div>;
};

const OauthWrapper = () => {
  return (
    <Suspense>
      <Oauth />
    </Suspense>
  );
};

export default OauthWrapper;
