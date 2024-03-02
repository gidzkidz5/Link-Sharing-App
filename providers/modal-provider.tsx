"use client"

import UserModal from "@/components/modals/user-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
           <UserModal/>
        </>
    )
}