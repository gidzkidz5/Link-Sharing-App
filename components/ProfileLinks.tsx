"use client";
import { cn } from "@/lib/utils";
import GithubIcon from "@/components/ui/icons/icon-github";
import { cva } from "class-variance-authority";
import React, { useEffect, useState } from "react";
import FrontEndMentorIcon from "./ui/icons/icon-fed";
import Twitter from "./ui/icons/icon-twitter";
import LinkedInIcon from "./ui/icons/icon-linkedin";
import YoutubeIcon from "./ui/icons/icon-youtube";
import FacebookIcon from "./ui/icons/icon-facebook";
import TwitchIcon from "./ui/icons/icon-twitch";
import DevTo from "./ui/icons/icon-devto";
import CodeWars from "./ui/icons/icon-codewars";
import FreeCodeCampIcon from "./ui/icons/icon-freeCodeCamp";
import GitlabIcon from "./ui/icons/icon-gitLab";
import Hashnode from "./ui/icons/icon-hashnode";
import StackOverflow from "./ui/icons/icon-stackOverflow";
import Codepen from "./ui/icons/icon-codepen";

const profileLinkVariants = cva(
  "w-full max-w-60 max-h p-4 flex justify-between items-center rounded-lg text-white max-h-14",
  {
    variants: {
      variant: {
        github: "bg-[#1A1A1A]",
        frontendmentor: "bg-white text-black",
        twitter: "bg-[#43B7E9]",
        linkedin: "bg-[#2D68FF]",
        youtube: "bg-[#EE3939]",
        facebook: "bg-[#2442AC]",
        twitch: "bg-[#EE3FC8]",
        devto: "bg-[#333333]",
        codewars: "bg-[#8A1A50]",
        freecodecamp: "bg-[#302267]",
        gitlab: "bg-[#EB4925]",
        hashnode: "bg-[#0330D1]",
        stackoverflow: "bg-[#EC7100]",
        codepen: "bg-[#333333]",
      },
    },
    defaultVariants: {
      variant: "github",
    },
  }
);

type ProfileLinkProps = {
  className?: string;
  variant?:
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
    | "codepen";
  text: string;
  style?: object;
  onClick?: () => void;
};
const ProfileLinks: React.FC<ProfileLinkProps> = ({
  className,
  variant = "github",
  text,
  style,
  onClick,
}) => {
  const socialIcons = {
    github: <GithubIcon />,
    frontendmentor: <FrontEndMentorIcon />,
    twitter: <Twitter />,
    linkedin: <LinkedInIcon />,
    youtube: <YoutubeIcon />,
    facebook: <FacebookIcon />,
    twitch: <TwitchIcon />,
    devto: <DevTo />,
    codewars: <CodeWars />,
    freecodecamp: <FreeCodeCampIcon />,
    gitlab: <GitlabIcon />,
    hashnode: <Hashnode />,
    stackoverflow: <StackOverflow />,
    codepen: <Codepen />,
  };

  return (
    <div
      className={cn(
        profileLinkVariants({ variant }),
        className,
        "border hover:cursor-pointer"
      )}
      style={style}
      onClick={onClick}
    >
      <div className="flex justify-start items-center gap-4 fs-body-M ">
        {socialIcons[variant]}

        {text}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill={variant == "frontendmentor" ? "#737373" : "#fff"}
          d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
        />
      </svg>
    </div>
  );
};

export default ProfileLinks;
export { profileLinkVariants };
