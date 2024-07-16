"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {

    router.push('/landing');
  }, [router]);

  return null; 
};

export default HomePage;
