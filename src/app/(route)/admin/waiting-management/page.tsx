'use client';
import React, { useEffect } from 'react';
import Navbar from '../_components/NavBar';
import { isAuthenticated } from '@/app/api/service/adminAuth';
import { WaitingList } from '../_components/WaitingList';
import { useRouter } from 'next/navigation';

export default function WaitingManagement() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (!authenticated) {
          router.push('/admin');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-bg-white pt-2">
      <Navbar />
      <WaitingList />
    </div>
  );
}
