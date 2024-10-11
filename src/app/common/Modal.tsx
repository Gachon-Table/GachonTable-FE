import React from 'react';
import { NobgClose } from 'public';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  currentIndex?: number;
  totalItems?: number;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  currentIndex,
  totalItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="absolute left-4 top-3 z-10 flex cursor-pointer items-center">
        <NobgClose onClick={onClose} />
      </div>

      <div className="absolute left-0 right-0 top-4 flex justify-center">
        {currentIndex !== undefined && totalItems !== undefined && (
          <p className="text-wt font-b1-normal-semibold">
            {`${currentIndex + 1} / ${totalItems}`}
          </p>
        )}
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default Modal;
