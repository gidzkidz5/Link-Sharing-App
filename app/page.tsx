import prismadb from "@/lib/prismadb";
import { UserButton, auth, useAuth } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const { userId } = auth();
  // const { isLoaded, userId, sessionId, getToken } = useAuth();

  const findUser = async () => {
    const user = await prismadb.user.findFirst({
      where: {
        //@ts-expect-error
        userId,
      },
    });
    if (!user) {
      //use api route
      try {
        // toast.loading("waiting...");
        // toast.promise(
        //   axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile`, {
        //     userId,
        //   }),
        //   {
        //     loading: "Creating User",
        //     success: "Successfully Created User",
        //     error: "Something Went Wrong",
        //   }
        // );

        await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile`, {userId})
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log("found user!");
    }
  };

  if (!userId) {
    redirect("/sign-in");
  } else {
    findUser();
    // redirect(`/profile/${userId}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen">
        <UserButton />
        <Link href={"/profile"}>Profile Page</Link>
      </div>
    </main>
  );
}
