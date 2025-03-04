import { twAllMerge } from '@/shared/utils';

export default function InternalTip({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  return (
    <div className="relative">
      <div
        className={twAllMerge(
          'bg-purple-200 text-purple-700 text-sm px-3 py-1 rounded-full',
          className
        )}
      >
        {message}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-2 w-2 h-2 bg-purple-200 rotate-45"></div>
    </div>
  );
}
