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
      try {
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
      } catch (error) {
        console.error('로그인 에러 발생', error);

        if (error.response && error.response.data.error_code === 'KOE320') {
          const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
          const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/oauth`;

          const codeRequestURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
          window.location.href = codeRequestURL;
        }
      }
    };

    if (code) loginProcess();
  }, [code, router]);

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
