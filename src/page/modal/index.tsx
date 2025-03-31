'use client';
import React, { ReactNode } from 'react';
import { useModalStore } from '@/shared/store';
import { Modal } from '@/shared/ui';

const _ModalTypes = ['register'] as const;
type ModalType = (typeof _ModalTypes)[number];

export const MODAL_COMPONENTS: Record<ModalType, ReactNode> = {
  register: <div>Register</div>,
};

export function ModalComponents({
  id,
  title,
}: {
  id: ModalType;
  title: string;
}) {
  const { closeModal } = useModalStore();
  return (
    <Modal id={id} className="h-[500px] w-[500px]">
      <Modal.Header onClose={() => closeModal(id)}>{title}</Modal.Header>
      {MODAL_COMPONENTS[id]}
    </Modal>
  );
}
