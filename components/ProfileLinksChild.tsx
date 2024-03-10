"use client";
import { motion } from "framer-motion";
import ProfileLinks from "./ProfileLinks";

const ProfileLinksChild = ({
  linksHeader,
  links,
}: {
  linksHeader: string[];
  links: string[];
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        duration: 0.65,
        ease: "easeInOut",
        // Adjust the time between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      className="w-fit flex flex-col gap-5 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {linksHeader
        ?.filter((item) => item[0] !== null)
        .map((item, id) => (
          <motion.a
            href={links[id]}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <ProfileLinks
              key={id}
              text={item}
              variant={
                item.toLowerCase().replace(".", "") as
                  | "github"
                  | "frontendmentor"
                  | "twitter"
                  | "linkedin"
                  | "youtube"
                  | "facebook"
                  | "twitch"
                  | "devto"
                  | "codewars"
                  | "freecodecamp"
                  | "gitlab"
                  | "hashnode"
                  | "stackoverflow"
              }
              className={`min-w-60 max-h-14`}
            />
          </motion.a>
        ))}
    </motion.div>
  );
};

export default ProfileLinksChild;
