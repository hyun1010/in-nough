import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ModalStore {
  modals: string[];
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

export const useModalStore = create<ModalStore>()(
  immer((set) => ({
    modals: [],
    openModal: (id) =>
      set((state) => {
        state.modals.push(id);
      }),
    closeModal: (id) =>
      set((state) => {
        state.modals = state.modals.filter((modalId) => modalId !== id);
      }),
    closeAllModals: () =>
      set((state) => {
        state.modals = [];
      }),
  }))
);
