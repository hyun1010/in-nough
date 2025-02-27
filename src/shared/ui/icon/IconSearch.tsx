import { IconProps } from '@/shared/model/types';
import { twAllMerge } from '@/shared/utils';

export function IconSearch({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={twAllMerge('stroke-gray-400 w-8 h-8', className)}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L17 17" strokeLinecap="round" />
    </svg>
  );
}
