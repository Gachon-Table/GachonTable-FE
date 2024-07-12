'use client';
import React, { useEffect } from 'react';
import Navbar from '../_components/NavBar';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { WaitingList } from '../_components/WaitingList';
import { useRouter } from 'next/navigation';

export default function WaitingManagement() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin/login');
    }
  }, []);

  return (
    <div className="bg-bg-white flex min-h-screen flex-col items-center justify-start pt-2">
      <Navbar />
      <WaitingList />
    </div>
  );
}
