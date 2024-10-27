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
import LoadingModal from '@/app/common/LoadingModal';

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
  const [message, setMessage] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const result = await patchEnterClient(selectedClientId, tableNumber);
      setLoading(false);
      setIsTableModalOpen(false);
      if (result.success) {
        setMessage(result.message as string);
        setIsMessage(true);
      } else {
        setError(result.message as string);
        setIsError(true);
      }
      refreshPendingClientList();
    }
  };

  const handleCallClient = async () => {
    if (selectedClientId) {
      setLoading(true);
      setIsCallModalOpen(false);
      const result = await patchCallClient(selectedClientId);
      setLoading(false);
      if (result.success) {
        setMessage(result.message as string);
        setIsMessage(true);
      } else {
        setError(result.message as string);
        setIsError(true);
      }
      refreshPendingClientList();
    }
  };

  const handleRefreshButton = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="w-full space-y-3 bg-gy-0 px-4">
        <div className="flex items-end justify-between">
          <div className="pb-1 text-gy-400 font-b2-normal-semibold">
            웨이팅 등록순
          </div>

          <button onClick={handleRefreshButton}>
            <ReloadButton />
          </button>
        </div>{' '}
        <div
          className="max-h-[calc(100vh-150px)] space-y-3 overflow-y-auto pb-16"
          ref={listRef}
        >
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
      <div className="z-1111 fixed bottom-4 flex w-full max-w-[430px] justify-end pr-4">
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

      {loading && (
        <LoadingModal firstLine="요청 중..." secondLine="곧 요청이 완료돼요." />
      )}

      {isMessage && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={message}
          onConfirm={() => {
            setIsMessage(false);
            window.location.reload();
          }}
        />
      )}

      {isError && (
        <AlertModal
          hasSubmessage={false}
          hasCancelButton={false}
          message={error}
          onConfirm={() => setIsError(false)}
        />
      )}
    </>
  );
};
