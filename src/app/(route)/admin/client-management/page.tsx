'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../_components/NavBar';
import { isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { useRouter } from 'next/navigation';
import { ClientStateTabs } from '@/app/(route)/admin/_components/client-management/ClientStateTabs';
import { PendingClientList } from '@/app/(route)/admin/_components/client-management/PendingClientList';
import { ServedClientList } from '@/app/(route)/admin/_components/client-management/ServedClientList';

export default function WaitingManagement() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<'대기 고객' | '이용 고객'>(
    '대기 고객',
  );

  const pendingClientList = [
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
    {
      username: '노정완',
      time: '2024-09-02T21:09:07.93427',
      headCount: 2,
      tel: '010-3952-0517',
      waitingId: 'ed526d59-da74-49f4-8579-a2da2551b6c4',
      waitingStatus: 'WAITING',
    },
  ];

  const servedClientList = [
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
    {
      tableNum: 1,
      exitTime: '17:57',
      waitingId: '노정완',
    },
  ];

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
      <ClientStateTabs
        selectedValue={selectedValue}
        onClick={setSelectedValue}
      />
      {selectedValue === '대기 고객' ? (
        <PendingClientList pendingClientList={pendingClientList} />
      ) : (
        <ServedClientList servedClientList={servedClientList} />
      )}
    </div>
  );
}
