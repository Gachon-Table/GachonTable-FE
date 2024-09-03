'use client';
import React, { useState } from 'react';
import {
  PendingClientItemProps,
  PendingClientItem,
} from '@/app/(route)/admin/_components/client-management/PendingClientItem';
import { TableInputToastModal } from '@/app/(route)/admin/_components/client-management/TableInputToastModal';
import AlertModal from '@/app/(route)/admin/_components/AlertModal';
import { patchCallClient } from '@/app/api/service/admin/patchCallClient';
import { patchEnterClient } from '@/app/api/service/admin/patchEnterClient';

export interface PendingClientListProps {
  pendingClientList: PendingClientItemProps[];
  refreshPendingClientList: () => void;
}

export const PendingClientList = ({
  pendingClientList,
  refreshPendingClientList,
}: PendingClientListProps) => {
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const handleCallClick = (waitingId: string) => {
    setSelectedClientId(waitingId);
    setIsCallModalOpen(true);
  };

  const handleTableInputModal = () => {
    setIsTableModalOpen(true);
  };

  const handleEnterClient = async (tableNumber: number) => {
    if (selectedClientId) {
      try {
        await patchEnterClient(selectedClientId, tableNumber);
        setIsTableModalOpen(false);
        refreshPendingClientList();
      } catch (error) {
        console.error('입장 처리 중 오류 발생:', error);
      }
    }
  };

  const handleCallClient = async () => {
    if (selectedClientId) {
      try {
        await patchCallClient(selectedClientId);
        setIsCallModalOpen(false);
        refreshPendingClientList();
      } catch (error) {
        console.error('고객 호출 중 오류 발생:', error);
      }
    }
  };

  return (
    <>
      <div className="h-screen max-h-[calc(100vh-4rem)] space-y-3 overflow-y-auto">
        {pendingClientList.map((client, idx) => (
          <div key={client.waitingId}>
            <PendingClientItem
              index={idx + 1}
              username={client.username}
              headCount={client.headCount}
              tel={client.tel}
              waitingStatus={client.waitingStatus}
              waitingId={client.waitingId}
              handleCallUser={() => handleCallClick(client.waitingId as string)}
              handleTableInputModal={() => {
                if (client.waitingId) {
                  setSelectedClientId(client.waitingId);
                  handleTableInputModal();
                }
              }}
            />
          </div>
        ))}
      </div>
      {isTableModalOpen && selectedClientId && (
        <TableInputToastModal
          onCancel={() => setIsTableModalOpen(false)}
          onSubmit={handleEnterClient}
        />
      )}
      {isCallModalOpen && selectedClientId && (
        <AlertModal
          message={`${
            pendingClientList.find(
              (client) => client.waitingId === selectedClientId,
            )?.username
          } 고객을 호출하시겠습니까?`}
          onCancel={() => setIsCallModalOpen(false)}
          onConfirm={handleCallClient}
        />
      )}
    </>
  );
};
