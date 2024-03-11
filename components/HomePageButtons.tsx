"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/button";

const HomePageButtons = () => {
  return (
    <motion.div
      className="flex w-full md:w-1/2 justify-center px-8 sm:py-12 gap-4 md:gap-16 mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.75 }}
    >
      <Link href="/sign-in" className="w-full max-w-[420px]">
        <Button text="Sign-in" />
      </Link>
      <Link href="/sign-up" className="w-full max-w-[420px]">
        <Button text="Sign-up" />
      </Link>
    </motion.div>
  );
};

export default HomePageButtons;
