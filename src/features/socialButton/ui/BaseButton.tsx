'use client';
import { twAllMerge } from '@/shared/utils';
import Image from 'next/image';

const BaseButton = ({
  text,
  src,
  onClick,
  className,
}: {
  text: string;
  src: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twAllMerge(
        'w-full flex items-center justify-center gap-1 border border-gray-300 rounded-lg py-2 font-medium font-noto-sans',
        className
      )}
    >
      <Image src={src} alt={text} width={15} height={15} />
      {text}
    </button>
  );
};
export default BaseButton;
