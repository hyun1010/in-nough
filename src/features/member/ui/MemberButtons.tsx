import { Button } from '@/shared/ui';
import { cn } from '@/shared/utils';

export default function MemberTypeBtn({
  prefixPath,
  className,
  size = 'w-96',
}: {
  prefixPath: string;
  className?: string;
  size?: string;
}) {
  return (
    <div className={cn('mt-6 w-full flex gap-2 max-w-sm pb-2', className)}>
      <Button.Link
        href={`${prefixPath}/company`}
        label="기업"
        className={size}
      />
      <Button.Link
        href={`${prefixPath}/personal`}
        variant="secondary"
        label="일반"
        className={size}
      />
    </div>
  );
}
