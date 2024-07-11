'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const LoginApi = async () => {
    if (session?.accessToken) {
      const loginToken = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`, null,
        {
          params: {token: session?.accessToken},
        },
      );
      localStorage.setItem('accessToken', loginToken.data.accessToken);
      localStorage.setItem('refreshToken', loginToken.data.refreshToken);
      console.log(loginToken);
      router.back();
    }
  };
  useEffect(() => {
    LoginApi();
  }, [session]);

  return <div>login</div>;
};

export default Login;
