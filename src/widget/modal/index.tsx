'use client';
import React from 'react';
import RegisterModal from './RegisterModal';

const ModalTypes = ['register'] as const;
type ModalType = (typeof ModalTypes)[number];

export const MODAL_COMPONENTS: Record<ModalType, React.FC> = {
  register: () => <RegisterModal id={ModalTypes[0]} />,
};
