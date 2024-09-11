import React from 'react';

export interface DividerProps {
  orientation?: 'width' | 'height';
  length: number;
  borderColor?: string;
  borderWeight?: number;
}

export const Divider = ({
  orientation = 'height',
  length,
  borderColor = 'border-gy-200',
  borderWeight = 1,
}: DividerProps) => {
  const style =
    orientation === 'height'
      ? `h-[${length}px] border-r border-[${borderWeight}px] ${borderColor}`
      : `w-[${length}px] border-b border-[${borderWeight}px] ${borderColor}`;

  return <div className={style} />;
};
