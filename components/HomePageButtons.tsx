"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/button";
import { cn } from "@/lib/utils";

const HomePageButtons = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn(
        "flex w-full lg:w-1/2 justify-center px-8 sm:py-12 gap-4 md:gap-16 mx-auto",
        className
      )}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.7 }}
    >
      <Link href="/sign-in" className="w-full md:max-w-[420px] max-w-[200px]">
        <Button text="Sign-in" />
      </Link>
      <Link href="/sign-up" className="w-full md:max-w-[420px] max-w-[200px]">
        <Button text="Sign-up" />
      </Link>
    </motion.div>
  );
};

export default HomePageButtons;
