import SecondaryNav from "@/components/ui/secondaryNav";
import prismadb from "@/lib/prismadb";
import { FormDataProvider } from "@/providers/form-provider";
import { useParams } from "next/navigation";

export default async function formPagesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { profileId: string };
}) {
  const links = await prismadb.link.findMany({
    where: {
      userId: params.profileId,
    },
    orderBy: {
      orderKey: "asc",
    },
    include: {
      platform: true,
    },
  });

  const formattedLinks = links.map((item) => [
    item.platform.platform,
    item.link,
  ]);

  const user = await prismadb.user.findFirst({
    where: {
      id: params.profileId,
    },
  });

  console.log("user from layout: ", user);
  console.log("links from layout: ", formattedLinks);
  return (
    <FormDataProvider data1={formattedLinks} data2={user}>
      <div className="sm:mx-6 2xl:mx-24 sm:py-6 2xl:pt-6 2xl:pb-24 min-h-full">
        <SecondaryNav />
        <br />
        {children}
      </div>
    </FormDataProvider>
  );
}
