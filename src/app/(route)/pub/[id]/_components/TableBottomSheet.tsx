/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { TableRadioButton } from '@/app/(route)/pub/[id]/_components/TableRadioButton';

interface TableBottomSheetProps {
  onClose: () => void;
  handleSelectedTableType: (tableType: 'BASIC' | 'PARTY') => void;
  onSubmit: () => void;
}

export const TableBottomSheet = ({
  onClose,
  handleSelectedTableType,
  onSubmit,
}: TableBottomSheetProps) => {
  const [selectedTableType, setSelectedTableType] = useState<'BASIC' | 'PARTY'>(
    'BASIC',
  );

  useEffect(() => {
    handleSelectedTableType(selectedTableType);
  }, [selectedTableType, handleSelectedTableType]);

  const handleTableSelect = (tableType: 'BASIC' | 'PARTY') => {
    setSelectedTableType(tableType);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="fixed inset-0 bg-bk/30 opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-50 flex flex-col rounded-t-[20px] bg-wt px-4 pb-8 pt-6">
        <div className="mb-6 flex flex-col space-y-0.5">
          <div className="text-gy-900 font-h3">
            방문 인원에 따라 테이블을 선택해주세요.
          </div>
          <span className="pl-0.5 text-gy-400 font-b2-normal-semibold">
            *8인 테이블은 대기시간이 더 소요될 수 있습니다.
          </span>
        </div>

        <div className="mb-8 flex flex-col space-y-3">
          <TableRadioButton
            buttonName="4인 테이블"
            buttonInfo="(1-5인)"
            isSelected={selectedTableType === 'BASIC'}
            onClick={() => handleTableSelect('BASIC')}
          />
          <TableRadioButton
            buttonName="8인 테이블"
            buttonInfo="(5-8인)"
            isSelected={selectedTableType === 'PARTY'}
            onClick={() => handleTableSelect('PARTY')}
          />
        </div>

        <button
          className="rounded-md bg-primary-400 px-6 py-[19px]"
          onClick={onSubmit}
        >
          <span className="block w-[334px] text-center text-wt font-h4">
            웨이팅 신청하기
          </span>
        </button>
      </div>
    </div>
  );
};
