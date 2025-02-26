import { IconProps } from '@/shared/model/types';

export function IconPlus({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 12H17M12 7L12 17"
        strokeWidth="2"
        strokeLinecap="round"
        className={className}
      />
    </svg>
  );
}
