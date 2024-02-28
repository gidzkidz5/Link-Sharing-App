'use client'
import { cn } from "@/lib/utils"
import GithubIcon from "@/components/ui/icons/icon-github"
import { cva } from "class-variance-authority"
import React, { useEffect, useState } from "react"
import FrontEndMentorIcon from "./ui/icons/icon-fed"
import Twitter from "./ui/icons/icon-twitter"
import LinkedInIcon from "./ui/icons/icon-linkedin"
import YoutubeIcon from "./ui/icons/icon-youtube"
import FacebookIcon from "./ui/icons/icon-facebook"
import TwitchIcon from "./ui/icons/icon-twitch"
import DevTo from "./ui/icons/icon-devto"
import CodeWars from "./ui/icons/icon-codewars"
import FreeCodeCampIcon from "./ui/icons/icon-freeCodeCamp"
import GitlabIcon from "./ui/icons/icon-gitLab"
import Hashnode from "./ui/icons/icon-hashnode"
import StackOverflow from "./ui/icons/icon-stackOverflow"


const profileLinkVariants = cva(
    "w-full max-w-60 max-h p-4 flex justify-between items-center rounded-lg text-white max-h-14",
    {
        variants: {
            variant: {
                github:"bg-[#1A1A1A]",
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
                stackoverflow: "bg-[#EC7100]"
            }
        },
        defaultVariants: {
            variant: "github"
        }
    }
)

type ProfileLinkProps = {
    className?: string;
    variant?: 'github' | 'frontendmentor' | 'twitter' | "linkedin" | "youtube" | "facebook" | "twitch" | "devto" | "codewars" | "freecodecamp" | "gitlab" | "hashnode" | "stackoverflow";
    text: string
    style?: object
}
const ProfileLinks: React.FC<ProfileLinkProps> = ({className, variant="github", text, style}) => {

    const socialIcons = {
        github: <GithubIcon/>,
        frontendmentor: <FrontEndMentorIcon/>,
        twitter: <Twitter/>,
        linkedin: <LinkedInIcon/>,
        youtube: <YoutubeIcon/>,
        facebook: <FacebookIcon/>,
        twitch: <TwitchIcon/>,
        devto: <DevTo/>,
        codewars: <CodeWars/>,
        freecodecamp: <FreeCodeCampIcon/>,
        gitlab: <GitlabIcon/>,
        hashnode: <Hashnode/>,
        stackoverflow: <StackOverflow/>
    }


    return (
        <div className={cn(profileLinkVariants({variant}), className, "border hover:cursor-pointer" )} style={style}>
        
            <div className="flex justify-start items-center gap-4 fs-body-M ">
                    {/* <svg className="mb-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 16 16"
                    >
                    <g clip-path="url(#a)">
                        <path
                        fill="#FFFFFF"
                        d="M9.982 2.288a8.756 8.756 0 0 0-3.963 0c-.754-.462-1.329-.674-1.747-.764a2.315 2.315 0 0 0-.544-.056 1.342 1.342 0 0 0-.247.03l-.01.002-.005.002h-.003l.146.513-.146-.512a.533.533 0 0 0-.342.294 3.328 3.328 0 0 0-.17 2.241 3.578 3.578 0 0 0-.817 2.287c0 1.657.488 2.77 1.321 3.486.584.501 1.292.768 2.002.92a2.496 2.496 0 0 0-.123 1.022v.638c-.434.09-.735.062-.95-.008-.267-.089-.473-.267-.67-.523a5.118 5.118 0 0 1-.289-.429l-.06-.099a9.772 9.772 0 0 0-.24-.378c-.202-.3-.503-.675-.99-.803l-.515-.135-.271 1.032.516.136c.085.021.196.101.379.369.07.106.137.213.202.322l.073.117c.1.162.215.342.349.517.27.352.637.707 1.184.887.373.124.797.154 1.282.079v1.992a.533.533 0 0 0 .533.533h4.267a.533.533 0 0 0 .533-.534v-3.8c0-.336-.015-.644-.11-.931.707-.15 1.41-.416 1.99-.918.833-.72 1.32-1.845 1.32-3.511v-.001a3.578 3.578 0 0 0-.82-2.267 3.328 3.328 0 0 0-.169-2.24.533.533 0 0 0-.34-.295l-.146.512c.146-.512.145-.512.144-.512l-.002-.001-.005-.002-.01-.003a1.344 1.344 0 0 0-.248-.03 2.318 2.318 0 0 0-.544.057c-.417.09-.992.302-1.745.764Z"
                        />
                    </g>
                    <defs>
                        <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                    </defs>
                    </svg> */}
                    {socialIcons[variant]}
                    
                    {text}
            </div>
        
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill={variant == "frontendmentor" ? "#737373" : "#fff"} d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"/></svg>

        </div>
    )
}

export default ProfileLinks 
export {profileLinkVariants}