'use client';
import React, { useRef, useState } from 'react';
import {
  PendingClientItemProps,
  PendingClientItem,
} from '@/app/(route)/admin/_components/client-management/PendingClientItem';
import { TableInputToastModal } from '@/app/(route)/admin/_components/client-management/TableInputToastModal';
import AlertModal from '@/app/common/AlertModal';
import { patchCallClient } from '@/app/api/service/admin/patchCallClient';
import { patchEnterClient } from '@/app/api/service/admin/patchEnterClient';
import { ReloadButton } from 'public';
import { ScrollToTopButton } from '@/app/common/ScrollToTopButton';

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

  const listRef = useRef<HTMLDivElement>(null);

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

  const handleRefreshButton = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-end justify-between">
          <div className="pb-1 text-gy-400 font-b2-normal-semibold">
            웨이팅 등록순
          </div>

          <button onClick={handleRefreshButton}>
            <ReloadButton />
          </button>
        </div>{' '}
        <div className="h-[100vh-88px] overflow-y-auto" ref={listRef}>
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
      </div>
      <div className="fixed bottom-4 right-4 flex justify-end">
        <ScrollToTopButton />
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
