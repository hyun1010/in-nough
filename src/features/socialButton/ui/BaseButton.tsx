'use client';

import { twAllMerge } from '@/shared/utils';

const BaseButton = ({
  text,
  src,
  onClick,
  className,
}: {
  text?: string;
  src: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twAllMerge(
        'w-full flex items-center justify-center border rounded-lg py-2 font-medium',
        className
      )}
    >
      <img src={src} alt={text} className="w-5 h-5 mr-2" />
      {text}
    </button>
  );
};
export default BaseButton;
