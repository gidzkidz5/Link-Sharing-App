import { create } from "zustand";

interface useUserModalType {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useUserModal = create<useUserModalType>((set)=> ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))