import SecondaryNav from "@/components/ui/secondaryNav";
import { auth } from "@clerk/nextjs";

export default function DesignSystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (userId) {
    return (
      <>
        <SecondaryNav userId={userId} />
        {children}
      </>
    );
  } else {
    return <>{children}</>;
  }
}
