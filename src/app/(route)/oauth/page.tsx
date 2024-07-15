'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

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
      localStorage.setItem('accessToken', result.data.accessToken);
      localStorage.setItem('refreshToken', result.data.refreshToken);
      const callbackPath = localStorage.getItem('callbackPath');
      if (callbackPath) {
        router.push(callbackPath);
      }
    };
    loginProcess();
  }, [code]);
  console.log(code);
  return <div></div>;
};

export default Oauth;
