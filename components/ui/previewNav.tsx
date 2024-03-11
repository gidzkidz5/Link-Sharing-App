"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Button from "./button";
import { useParams, useRouter } from "next/navigation";
import { useOrigin } from "@/hooks/use-origin";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";
import revalidate from "@/lib/actions";

const PreviewNav = () => {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/profile/${params.profileId}`;

  const shareLink = () => {
    navigator.clipboard.writeText(baseUrl);
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-[400px] w-full bg-popover shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 py-4 px-6">
            <div className="flex justify-center items-center gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    fill="#737373"
                    d="M11.154 14.65a.94.94 0 0 1 0 1.329l-.464.464a4.689 4.689 0 0 1-6.631-6.631l1.884-1.884a4.688 4.688 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.812 2.812 0 0 0-3.857.115l-1.883 1.88a2.813 2.813 0 1 0 3.978 3.979l.464-.464a.937.937 0 0 1 1.327 0Zm5.788-11.093a4.695 4.695 0 0 0-6.632 0l-.464.464a.94.94 0 0 0 1.328 1.328l.464-.464a2.813 2.813 0 1 1 3.979 3.978l-1.884 1.885a2.812 2.812 0 0 1-3.858.112.94.94 0 1 0-1.25 1.406 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .003-6.633v-.002Z"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1 max-w-fit">
                <p className="text-sm font-medium text-white">
                  The link has been copied to your clipboard!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      { position: "bottom-center" }
    );
  };

  const goBack = () => {
    revalidate();
    router.replace(
      `/profile/${params.profileId}/profile-links?key=${new Date().getTime()}`
    );
  };

  return (
    <nav className="flex justify-between p-4 rounded-lg bg-white items-center z-10 relative sm:mx-6 px-6 py-4 sm:top-6 sm:mb-20">
      <div>
        {userId && (
          <Button text="Back to Editor" variant="primary" onClick={goBack} />
        )}
      </div>
      <div className="flex gap-6 items-center">
        {userId && (
          <div className="hidden md:block">
            <UserButton />
          </div>
        )}
        <Button text="Share Link" variant="secondary" onClick={shareLink} />
      </div>
    </nav>
  );
};

export default PreviewNav;
