import { RadioButton, RadioButtonClicked } from 'public';
import React, { useState } from 'react';

interface TableRadioButtonProps {
  buttonName?: string;
  buttonInfo?: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TableRadioButton = ({
  buttonName,
  buttonInfo,
  isSelected,
  onClick,
}: TableRadioButtonProps) => {
  return (
    <button
      className={`flex items-center justify-between rounded-md border-2 p-[18px] ${
        isSelected ? 'border-primary-400 bg-wt' : 'border-gy-200 bg-wt'
      }`}
      onClick={onClick}
    >
      <div>
        <span
          className={`font-h4 ${
            isSelected ? 'text-primary-400' : 'text-gray-900'
          }`}
        >
          {buttonName}
        </span>{' '}
        <span
          className={`font-b1-normal-semibold ${
            isSelected ? 'text-primary-400' : 'text-gray-700'
          }`}
        >
          {buttonInfo}
        </span>
      </div>
      {isSelected ? <RadioButtonClicked /> : <RadioButton />}
    </button>
  );
};

export const TableRadioGroup = () => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const handleSelection = (tableName: string) => {
    setSelectedTable(tableName);
  };

  return (
    <div className="mb-8 flex flex-col space-y-3">
      <TableRadioButton
        buttonName="4인 테이블"
        buttonInfo="(1-5인)"
        isSelected={selectedTable === '4인 테이블'}
        onClick={() => handleSelection('4인 테이블')}
      />
      <TableRadioButton
        buttonName="8인 테이블"
        buttonInfo="(5-8인)"
        isSelected={selectedTable === '8인 테이블'}
        onClick={() => handleSelection('8인 테이블')}
      />
    </div>
  );
};
