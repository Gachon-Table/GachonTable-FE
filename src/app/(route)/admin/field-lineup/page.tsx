import NumberKeypad from '../_components/NumberKeypad';
import Information from '../_components/Information';
import ParticipantsModal from '../_components/ParticipantsModal';

export default function FieldLineUp() {
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
        <NumberKeypad />
      </div>
      <ParticipantsModal />
    </div>
  );
}
