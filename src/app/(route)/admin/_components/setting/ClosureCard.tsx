import React from 'react';

export interface ClouserCardProps {
  label?: string;
  icon?: React.ReactNode;
  buttonLabel?: string;
  onClick: () => void;
}

export const ClouserCard = ({
  label,
  icon,
  buttonLabel,
  onClick,
}: ClouserCardProps) => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-md bg-wt px-[9.5px] pb-4 pt-6 shadow-client-item">
      <div>
        <span className="pl-2.5 text-gy-900 font-h4">{label}</span>
        {icon}
      </div>
      <button
        className="flex flex-1 items-center justify-center rounded-md bg-primary-200 px-[29px] py-[13px] text-center text-primary-400 font-b2-normal-semibold"
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
