"use client";
import { useUserModal } from "@/hooks/use-user-modal";
import { useEffect } from "react";

import { auth, currentUser, useUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export default function SetupPage() {
  // const onOpen = useUserModal((state) => state.onOpen)
  // const isOpen = useUserModal((state) => state.isOpen)

  const { onOpen, isOpen } = useUserModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <>Profile Page</>;
}

// export default async function ProfilePage() {
//     const { userId } = auth()
//     const user = await currentUser()

//     return (
//         <>
//             Profile Page
//             <br/>
//             {userId}
//             <br/>
//             currentUser: {user?.id}
//             <br/>
//             email: {user?.emailAddresses[0].emailAddress}
//             <br/>
//             first_name: {user?.firstName}
//             <br/>
//             last_name: {user?.lastName}
//         </>
//     )
// }
