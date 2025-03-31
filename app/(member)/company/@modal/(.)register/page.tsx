'use client';
import { MODAL_COMPONENTS } from '@/widget/modal';
import React from 'react';

export default function page() {
  const ModalComponent = MODAL_COMPONENTS['register'];
  return <ModalComponent />;
}
