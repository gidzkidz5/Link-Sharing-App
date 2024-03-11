import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/providers/toast-provider";
import RedirectProvider from "@/providers/redirect-provider";

// const inter = Inter({ subsets: ["latin"] });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Link Sharing App",
  description: "Devlinks - Developed by gidzkidz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${instrument.className}`}>
          <ToasterProvider />
          <RedirectProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
