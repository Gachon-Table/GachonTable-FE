import React, { useState } from 'react';
import {
  PendingClientItemProps,
  PendingClientItem,
} from '@/app/(route)/admin/_components/client-management/PendingClientItem';
import { TableInputToastModal } from '@/app/(route)/admin/_components/client-management/TableInputToastModal';

export interface PendingClientListProps {
  pendingClientList: PendingClientItemProps[];
}

export const PendingClientList = ({
  pendingClientList,
}: PendingClientListProps) => {
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  const handleTableInputModal = () => {
    setIsTableModalOpen(true);
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
              handleTableInputModal={handleTableInputModal}
            />
          </div>
        ))}
      </div>
      {isTableModalOpen && (
        <TableInputToastModal
          onCancel={() => setIsTableModalOpen(false)}
          onSubmit={handleTableInputModal}
        />
      )}
    </>
  );
};
