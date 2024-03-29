"use client";
import ProfileLinks from "../ProfileLinks";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type PhoneOverlayProps = {
  links?: string[];
  imageSrc?: string;
  fullName?: string;
  email: string
};

const PhoneOverlay: React.FC<PhoneOverlayProps> = ({ links, imageSrc, fullName, email }) => {
  return (
    <div className=" sticky top-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
        <circle cx="153.5" cy="112" r="48" fill="#EEE" />

        <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
        <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
      </svg>
      {links
        ?.filter((item) => item !== null)
        .map((item, id) => (
          <ProfileLinks
            key={id}
            text={item}
            variant={
              item.toLowerCase() as
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
            className={`absolute max-h-11 right-[35px]`}
            style={{ top: `${278 + id * 64}px` }}
          />
        ))}
      <div className="absolute max-h-7 top-[178px] w-full flex justify-center items-center">
        <p className="fs-bold-S2 text-popover">{fullName}</p>
      </div>
      <div className="absolute max-h-6 top-[207px] w-full flex justify-center items-center">
        <p className="fs-body-S2 text-muted">{email}</p>
      </div>
      <Avatar className="absolute top-[64px] left-[105.5px]">
        <AvatarImage
          src={imageSrc}
          alt="@shadcn"
          loading="lazy"
          className="object-cover"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default PhoneOverlay;
