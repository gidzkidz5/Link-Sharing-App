import SecondaryNav from "@/components/ui/secondaryNav";
import prismadb from "@/lib/prismadb";
import { ModalProvider } from "@/providers/modal-provider";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardHomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    console.log("no user id: ", userId);
    redirect("/sign-in");
  }

  // const user = await prismadb.user.findFirst({
  //   where: {
  //     userId,
  //   },
  // });

  // if (user) {
  //   redirect(`/profile/${user.id}`);
  // }

  return (
    <>
      <main className="bg-accent-foreground min-h-full min-w-full h-fit">
        <ModalProvider />

        {children}
      </main>
    </>
  );
}
