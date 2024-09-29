import React from 'react';

interface TableTypeLabelProps {
  tableType: 'BASIC' | 'PARTY' | undefined;
}

export const TableTypeLabel = ({ tableType }: TableTypeLabelProps) => {
  return (
    <div
      className={`rounded-[32px] px-[10px] py-0.5 font-c1-semibold ${
        tableType === 'BASIC'
          ? 'bg-yellow-200 text-yellow-400'
          : 'bg-pink-200 text-pink-400'
      }`}
    >
      {tableType === 'BASIC' ? '4인' : '8인'}
    </div>
  );
};
