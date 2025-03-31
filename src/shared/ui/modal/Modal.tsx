import { useModalStore } from '@/shared/store';
import Portal from '../portal';
import { cn } from '@/shared/utils';

export interface ModalProps {
  id: string;
  className?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Modal({
  id,
  className,
  onClose,
  children,
}: ModalProps) {
  const { modals } = useModalStore();

  return (
    <>
      {modals.includes(id) && (
        <Portal>
          <div
            id={`${id}_deem`}
            onClick={onClose}
            className={cn(
              `shadow[0px_0px_10px_2px_rgba(0, 0, 0.12)] fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-primary-50/70`
            )}
          />
          <div
            id={id}
            className={cn(
              `fixed left-1/2 top-1/2 z-50 flex w-fit -translate-x-1/2 -translate-y-1/2 transform flex-col gap-[0.8rem] rounded-xl border border-gray-200 bg-white p-6 text-gray-800`,
              className
            )}
          >
            {children}
          </div>
        </Portal>
      )}
    </>
  );
}
