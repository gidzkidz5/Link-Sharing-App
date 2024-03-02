import SecondaryNav from "@/components/ui/secondaryNav";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();
  console.log("Home Page userId: ", userId);
  const user = await prismadb.user.findFirst({
    where: {
      //@ts-expect-error
      userId,
    },
  });

  // const findUser = async () => {
  //   const user = await prismadb.user.findFirst({
  //     where: {
  //       //@ts-expect-error
  //       userId,
  //     },
  //   });
  //   if (!user) {

  //     //use api route
  //     try {
  //       // toast.loading("waiting...");
  //       // toast.promise(
  //       //   axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile`, {
  //       //     userId,
  //       //   }),
  //       //   {
  //       //     loading: "Creating User",
  //       //     success: "Successfully Created User",
  //       //     error: "Something Went Wrong",
  //       //   }
  //       // );

  //       await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile`, {userId})
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   } else {
  //     console.log("found user!");
  //   }
  // };

  // if (!userId) {
  //   // if not logged in
  //   redirect("/sign-in");
  // } else {
  //   // findUser();
  //   // redirect(`/profile/${userId}`);
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen">
        <SecondaryNav userId={user?.id} />
        <Link href={"/profile"}>Profile Page</Link>
      </div>
    </main>
  );
}
