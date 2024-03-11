import AnimtaedHomePage from "@/components/AnimatedHomePage";
import HomePageButtons from "@/components/HomePageButtons";
import Button from "@/components/ui/button";
import AnimatedLogo from "@/components/ui/icons/icon-logo-animated";
import AnimatedLogoBig from "@/components/ui/icons/icon-logo-animated-big";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    return (
      <AnimtaedHomePage/>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        Redirecting you to profile page...
      </main>
    );
  }
}
