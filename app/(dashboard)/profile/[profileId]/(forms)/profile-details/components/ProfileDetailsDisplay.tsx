"use client";

import PhoneOverlay from "@/components/ui/phone-overlay";
import { useFormData } from "@/providers/form-provider";
import ProfileDetailsForm from "../../../components/ProfileDetailsForm";

const ProfileDetailsDisplay = () => {
  const { formDataLocal, formDataLocalProfile } = useFormData();

  const links = formDataLocal
    ?.filter((item) => item[0] !== null)
    .map((item) => item[0].replace(".", "").replace(" ", ""));

  const fullName =
    formDataLocalProfile.first_name! + " " + formDataLocalProfile.last_name!;

  const email = formDataLocalProfile.email!;

  console.log("links profile page: ", links);

  return (
    <div className="grid grid-cols-5 gap-4 sm:w-full h-full min-h-screen mx-4 sm:mx-auto">
      <div className="bg-white rounded-xl col-span-2 md:flex justify-center items-start pt-28 hidden">
        <PhoneOverlay
          links={links}
          imageSrc={formDataLocalProfile.profile_img!}
          fullName={fullName}
          email={email}
        />
      </div>
      <ProfileDetailsForm />
    </div>
  );
};

export default ProfileDetailsDisplay;
