'use client';
import React, { useEffect } from 'react';

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    //   <div className="rounded-m flex flex-col items-center justify-center bg-white shadow-lg">
    //     <div className="px-24 py-3 text-lg font-normal">{message}</div>
    //   </div>
    // </div>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="rounded-m flex flex-col items-center justify-center bg-white shadow-lg">
        <div className="px-6 py-10 text-lg font-normal">{message}</div>

        <div>
          <button
            className="mb-6 mr-5 rounded-md bg-gray-400 px-16 py-3 text-sm font-semibold text-white"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
