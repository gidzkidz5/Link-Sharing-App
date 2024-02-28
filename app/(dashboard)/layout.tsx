import SecondaryNav from "@/components/ui/secondaryNav";
import { FormDataProvider } from "@/providers/form-provider";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardHomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <main className="bg-accent-foreground min-h-full min-w-full">
        <FormDataProvider>
          <div className="sm:mx-6 2xl:mx-24 sm:py-6 2xl:pt-6 2xl:pb-24 min-h-full">
            <SecondaryNav />
            <br />
            {children}
          </div>
        </FormDataProvider>
      </main>
    </>
  );
}
