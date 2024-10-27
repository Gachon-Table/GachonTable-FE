'use client';
import React, { useState } from 'react';
import {
  ServedClientItem,
  ServedClientItemProps,
} from '@/app/(route)/admin/_components/client-management/ServedClientItem';
import { patchExitClient } from '@/app/api/service/admin/patchExitClient';
import AlertModal from '@/app/common/AlertModal';
import { ReloadButton } from 'public';
import LoadingModal from '@/app/common/LoadingModal';

export interface ServedClientListProps {
  servedClientList: ServedClientItemProps[];
}

export const ServedClientList = ({
  servedClientList,
}: ServedClientListProps) => {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [selectedSeatingId, setSelectedSeatingId] = useState(0);
  const [message, setMessage] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExitModal = (seatingId: number) => {
    setSelectedSeatingId(seatingId);
    setIsExitModalOpen(true);
  };

  const handleExitClient = async () => {
    if (selectedSeatingId > 0) {
      setLoading(true);
      const result = await patchExitClient(selectedSeatingId);
      setLoading(false);
      setIsExitModalOpen(false);
      if (result.success) {
        setMessage(result.message as string);
        setIsMessage(true);
      } else {
        setError(result.message as string);
        setIsError(true);
      }
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
            퇴장 시간 임박순
          </div>
          <button onClick={handleRefreshButton}>
            <ReloadButton />
          </button>
        </div>
        <div className="max-h-[calc(100vh-150px)] space-y-3 overflow-y-auto pb-16">
          {servedClientList.map((client) => (
            <div key={client.waitingId}>
              <ServedClientItem
                seatingNum={client.seatingNum}
                tableType={client.tableType}
                exitTime={client.exitTime}
                handleExitModal={() =>
                  handleExitModal(client.seatingId as number)
                }
              />
            </div>
          ))}
        </div>
      </div>
      {isExitModalOpen && (
        <AlertModal
          hasSubmessage={false}
          message={`${
            servedClientList.find(
              (client) => client.seatingId === selectedSeatingId,
            )?.seatingNum
          }번 테이블을 퇴장 처리하시겠습니까?`}
          onCancel={() => setIsExitModalOpen(false)}
          onConfirm={handleExitClient}
        />
      )}

      {loading && <LoadingModal message={'요청 중...\n 곧 요청이 완료돼요.'} />}

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
