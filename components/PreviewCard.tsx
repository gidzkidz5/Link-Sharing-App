import AnimatedAvatar from "./AnimatedAvatar";
import ProfileLinks from "./ProfileLinks";
import ProfileLinksChild from "./ProfileLinksChild";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";

export default function PreviewCard({
  imageSrc,
  fullName,
  email,
  linksHeader,
  links,
}: {
  imageSrc: string;
  fullName: string;
  email: string;
  linksHeader: string[];
  links: string[];
}) {
  return (
    <div className="z-10 flex flex-col justify-center relative top-8 sm:top-16 md:top-20">
      <div className="bg-white flex flex-col previewCard rounded-3xl min-w-80 py-12 px-14 relative mx-auto">
        <AnimatedAvatar
          imageSrc={imageSrc}
          alt={fullName}
          email={email}
          fullName={fullName}
        />

        <ProfileLinksChild linksHeader={linksHeader} links={links} />
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
}
