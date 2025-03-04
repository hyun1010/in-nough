import { IconProps } from '@/shared/model/types';
import { twAllMerge } from '@/shared/utils';

export function IconPlus({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={twAllMerge('stroke-gray-400 w-8 h-8', className)}
    >
      <path d="M12 6L12 18" strokeLinecap="round" />
      <path d="M18 12L6 12" strokeLinecap="round" />
    </svg>
  );
}
