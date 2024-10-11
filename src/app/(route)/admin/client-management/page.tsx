'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../_components/NavBar';
import { isAuthenticated } from '@/app/api/service/admin/adminAuth';
import { useRouter } from 'next/navigation';
import { ClientStateTabs } from '@/app/(route)/admin/_components/client-management/ClientStateTabs';
import { PendingClientList } from '@/app/(route)/admin/_components/client-management/PendingClientList';
import { ServedClientList } from '@/app/(route)/admin/_components/client-management/ServedClientList';
import { getWaitingList } from '@/app/api/service/admin/getWaitingList';
import { getSeatingList } from '@/app/api/service/admin/getSeatingList';

export default function ClientManagement() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<'대기 고객' | '이용 고객'>(
    '대기 고객',
  );
  const [pendingClientList, setPendingClientList] = useState([]);
  const [servedClientList, setServedClientList] = useState([]);

  const fetchWaitingList = async () => {
    try {
      const waitingList = await getWaitingList();
      setPendingClientList(waitingList);
    } catch (error) {
      console.error('대기열 조회 중 오류 발생:', error);
    }
  };

  const fetchSeatingList = async () => {
    try {
      const seatingList = await getSeatingList();
      setServedClientList(seatingList);
    } catch (error) {
      console.error('이용 고객 조회 중 오류 발생:', error);
    }
  };

  const refreshPendingClientList = () => {
    fetchWaitingList();
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (!authenticated) {
          router.push('/admin');
        } else {
          setSelectedValue('대기 고객');
          fetchWaitingList();
          fetchSeatingList();
        }
      } catch (error) {
        console.error('인증 실패:', error);
      }
    };
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (selectedValue === '대기 고객') {
      fetchWaitingList();
    } else if (selectedValue === '이용 고객') {
      fetchSeatingList();
    }
  }, [selectedValue]);

  return (
    <div className="flex h-screen w-full flex-col items-center bg-gy-0">
      <div className="fixed top-0 z-50 w-full max-w-[430px]">
        <Navbar />
      </div>
      <div className="w-full">
        <ClientStateTabs
          selectedValue={selectedValue}
          onClick={setSelectedValue}
        />
        {selectedValue === '대기 고객' ? (
          <PendingClientList
            pendingClientList={pendingClientList}
            refreshPendingClientList={refreshPendingClientList}
          />
        ) : (
          <ServedClientList servedClientList={servedClientList} />
        )}
      </div>
    </div>
  );
}
