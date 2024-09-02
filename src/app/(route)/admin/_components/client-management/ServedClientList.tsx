import React from 'react';
import {
  ServedClientItem,
  ServedClientItemProps,
} from '@/app/(route)/admin/_components/client-management/ServedClientItem';

export interface ServedClientListProps {
  servedClientList: ServedClientItemProps[];
}

export const ServedClientList = ({
  servedClientList,
}: ServedClientListProps) => {
  return (
    <div className="max-h-[700px] space-y-3 overflow-y-auto">
      {servedClientList.map((client) => (
        <div key={client.waitingId}>
          <ServedClientItem
            tableNum={client.tableNum}
            exitTime={client.exitTime}
          />
        </div>
      ))}
    </div>
  );
};
