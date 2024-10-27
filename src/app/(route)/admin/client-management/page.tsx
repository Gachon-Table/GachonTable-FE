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
import AlertModal from '@/app/common/AlertModal';

export default function ClientManagement() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<'대기 고객' | '이용 고객'>(
    '대기 고객',
  );
  const [pendingClientList, setPendingClientList] = useState([]);
  const [servedClientList, setServedClientList] = useState([]);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchWaitingList = async () => {
    const result = await getWaitingList();
    if (result.success) {
      setPendingClientList(result.value);
    } else {
      setError(result.message as string);
      setIsError(true);
    }
  };

  const fetchSeatingList = async () => {
    const result = await getSeatingList();
    if (result.success) {
      setServedClientList(result.value);
    } else {
      setError(result.message as string);
      setIsError(true);
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
    <div className="flex h-screen w-full flex-col items-center overflow-hidden bg-gy-0">
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

      {isError && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={error}
          onConfirm={() => setIsError(false)}
        />
      )}
    </div>
  );
}
