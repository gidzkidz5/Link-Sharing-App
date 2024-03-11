"use client";

import prismadb from "@/lib/prismadb";
import { useAuth } from "@clerk/nextjs";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function RedirectProvider() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current) {
      // This code will execute only on subsequent renders (client-side)
      const findUser = async () => {
        const response = await fetch(`/api/profile`);
        if (!response.ok) {
          router.push(`/profile`)
          return null
        }

        response
          .json()
          .then((user) => {
            if (user && !pathname.includes(`/profile/${user.id}`)) {
              console.log("user present in db: ", user.id);
              console.log("redirecting to /profile/userid");

              router.push(`/profile/${user.id}/profile-links`);
              toast.loading("Redirecting to your profile page...", {
                duration: 1000,
              });
            }
          })
          .catch((error) => {
            console.log("Error fetching data: ", error);
          });

        return null;
      };
      if (isLoaded && userId) {
      findUser();
      console.log("Executing useEffect on client side");
      } 
      
    } else {
      // This code will execute only on the initial client-side render
      console.log("Initial client-side render");
      isInitialRender.current = false; // Update ref after initial render

    }
  }, [isFetching, isInitialRender.current]);

  return null;
}
