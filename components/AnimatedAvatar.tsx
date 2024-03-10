"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AnimatedAvatar = ({
  imageSrc,
  alt,
  fullName,
  email,
}: {
  imageSrc: string;
  alt: string;
  fullName: string;
  email: string;
}) => {
  return (
    <motion.div
      className="flex flex-col justify-center space-y-6 mb-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="justify-center flex">
        <Avatar className="outline-4 outline-primary outline">
          <AvatarImage
            src={imageSrc}
            alt={alt}
            loading="lazy"
            className="object-cover"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-2 text-center">
        <h2 className="fs-bold-M text-popover mx-auto">{fullName}</h2>
        <p className="fs-body-M text-muted mx-auto">{email}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedAvatar;
