'use client';
import React, { useState } from 'react';
import {
  ServedClientItem,
  ServedClientItemProps,
} from '@/app/(route)/admin/_components/client-management/ServedClientItem';
import { patchExitClient } from '@/app/api/service/admin/patchExitClient';
import AlertModal from '@/app/common/AlertModal';

export interface ServedClientListProps {
  servedClientList: ServedClientItemProps[];
}

export const ServedClientList = ({
  servedClientList,
}: ServedClientListProps) => {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [selectedSeatingId, setSelectedSeatingId] = useState(0);

  const handleExitModal = (seatingId: number) => {
    setSelectedSeatingId(seatingId);
    setIsExitModalOpen(true);
  };

  const handleExitClient = async () => {
    if (selectedSeatingId > 0) {
      try {
        await patchExitClient(selectedSeatingId);
        setIsExitModalOpen(false);
        window.location.reload();
      } catch (error) {
        console.error('퇴장 처리 중 오류 발생:', error);
      }
    }
  };

  return (
    <>
      <div className="max-h-[700px] space-y-3 overflow-y-auto">
        {servedClientList.map((client) => (
          <div key={client.waitingId}>
            <ServedClientItem
              seatingNum={client.seatingNum}
              exitTime={client.exitTime}
              handleExitModal={() =>
                handleExitModal(client.seatingId as number)
              }
            />
          </div>
        ))}
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
    </>
  );
};
