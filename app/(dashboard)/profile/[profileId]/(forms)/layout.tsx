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

  console.log("links from layout: ", formattedLinks);
  return (
    <>
      <FormDataProvider data={formattedLinks}>{children}</FormDataProvider>
    </>
  );
}
