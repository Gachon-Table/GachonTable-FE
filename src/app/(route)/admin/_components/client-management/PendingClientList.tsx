'use client';
import React, { useState } from 'react';
import {
  PendingClientItemProps,
  PendingClientItem,
} from '@/app/(route)/admin/_components/client-management/PendingClientItem';
import { TableInputToastModal } from '@/app/(route)/admin/_components/client-management/TableInputToastModal';
import AlertModal from '@/app/common/AlertModal';
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
  const [selectedClientIndex, setSelectedClientIndex] = useState<number | null>(
    null,
  );

  const handleCallClick = (waitingId: string, index: number) => {
    setSelectedClientId(waitingId);
    setSelectedClientIndex(index);
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
        window.location.reload();
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
        window.location.reload();
      } catch (error) {
        console.error('고객 호출 중 오류 발생:', error);
      }
    }
  };

  return (
    <>
      <div className="h-screen space-y-3 overflow-y-auto">
        {pendingClientList.map((client, idx) => (
          <div key={client.waitingId}>
            <PendingClientItem
              index={idx + 1}
              username={client.username}
              tableType={client.tableType}
              tel={client.tel}
              waitingStatus={client.waitingStatus}
              waitingId={client.waitingId}
              handleCallUser={() =>
                handleCallClick(client.waitingId as string, idx + 1)
              }
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
      {isCallModalOpen && selectedClientId && selectedClientIndex && (
        <AlertModal
          hasSubmessage={false}
          message={`${selectedClientIndex}번 고객을 호출하시겠습니까?`}
          onCancel={() => setIsCallModalOpen(false)}
          onConfirm={handleCallClient}
        />
      )}
    </>
  );
};
