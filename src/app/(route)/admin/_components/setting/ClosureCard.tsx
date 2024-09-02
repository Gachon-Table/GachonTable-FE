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
    <div className="shadow-client-item flex flex-col space-y-2 rounded-md bg-wt px-[9.5px] pb-4 pt-6">
      <div>
        <span className="text-gy-900 pl-2.5 font-h4">{label}</span>
        {icon}
      </div>
      <button
        className="rounded-md bg-primary-200 px-[29px] py-[13px]"
        onClick={onClick}
      >
        <span className="block w-[108px] text-center text-primary-400 font-b2-normal-semibold">
          {buttonLabel}
        </span>
      </button>
    </div>
  );
};
