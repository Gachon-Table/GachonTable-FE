'use client';
import { useState } from 'react';
import NumberKeypad from '../_components/field/NumberKeypad';
import Information from '../_components/field/Information';
import ParticipantsModal from '../_components/field/ParticipantsModal';

export default function FieldLineUp() {
  const [close, setClose] = useState(true);

  const onClose = () => {
    setClose(!close);
  };

  const data = {
    pubName: '경제학과 이코노미더머니',
    queueing: 2,
  };

  return (
    <div className="flex h-[768px] w-[1024px] flex-row items-center justify-center">
      <div className="flex h-full w-1/2 flex-col items-center bg-deep-cove text-white">
        <Information pubName={data.pubName} queueing={data.queueing} />
      </div>

      <div className="flex h-full w-1/2 flex-col bg-white">
        <NumberKeypad onClose={onClose} />
      </div>

      {!close && <ParticipantsModal onClose={onClose} />}
    </div>
  );
}
