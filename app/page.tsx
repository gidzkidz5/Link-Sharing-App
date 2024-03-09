import SecondaryNav from "@/components/ui/secondaryNav";
import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen">
        <SecondaryNav />
        <Link href={"/profile"}>Profile Page</Link>
      </div>
    </main>
  );
}
