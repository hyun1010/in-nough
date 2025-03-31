import { useModalStore } from '@/shared/store';
import { Modal } from '@/shared/ui';
import React from 'react';

export default function RegisterModal({ id }) {
  const { closeModal } = useModalStore();
  return (
    <Modal id={id} className="h-[500px] w-[500px]">
      <Modal.Header onClose={() => closeModal(id)}>ㅋㅋㅋ</Modal.Header>
    </Modal>
  );
}
