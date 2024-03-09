import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn, isAbsoluteUrl } from "@/lib/utils";
import { UserButton, auth } from "@clerk/nextjs";
import Button from "@/components/ui/button";
import PreviewNav from "@/components/ui/previewNav";
import PreviewCard from "@/components/PreviewCard";
import prismadb from "@/lib/prismadb";

const ProfileIdPage = async ({ params }: { params: { profileId: string } }) => {
  const linkshref = await prismadb.link.findMany({
    where: {
      userId: params.profileId,
    },
    include: {
      platform: true,
    },
    orderBy: {
      orderKey: "asc",
    },
  });

  const links = linkshref.map((item) => {
    const isAbsolute = isAbsoluteUrl(item.link);
    if (isAbsolute) {
      return item.link;
    } else {
      const absoluteLink = `https://${item.link}`;
      return absoluteLink.replace(" ", "");
    }
  });

  const platforms = linkshref.map((item) => item.platform.platform);



  return (
    <>
      <div className="w-full min-h-screen relative h-max">
        <div className="hidden sm:block sm:bg-primary w-full h-[37%] min-h-[350px] absolute top-0 rounded-b-[32px]">
          {/* Absolute background purple */}
        </div>
        <PreviewNav />
        <PreviewCard
          imageSrc="https://res.cloudinary.com/dwviiuoes/image/upload/v1709700775/bf74cdjbo96p3zt7me9y.png"
          fullName="Ben Wright"
          email="benwright@gmail.com"
          linksHeader={platforms}
          links={links}
        />
      </div>
    </>
  );
};

export default ProfileIdPage;
