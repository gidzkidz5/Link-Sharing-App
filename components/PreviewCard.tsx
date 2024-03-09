
import ProfileLinks from "./ProfileLinks";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useFormData } from "@/providers/form-provider";

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
    <div className="z-10 flex flex-col justify-center relative top-20">
      <div className="bg-white flex flex-col previewCard rounded-3xl min-w-80 py-12 px-14 relative mx-auto">
        <div className="flex flex-col justify-center space-y-6 mb-14">
          <div className="justify-center flex">
            <Avatar className="outline-4 outline-primary outline">
              <AvatarImage
                src={imageSrc}
                alt="@shadcn"
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
        </div>
        <div className="w-fit flex flex-col gap-5 mx-auto">
          {linksHeader
            ?.filter((item) => item[0] !== null)
            .map((item, id) => (
              <a href={links[id]} key={id} target="_blank" rel="noopener noreferrer">
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
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
