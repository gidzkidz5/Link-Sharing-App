"use client";

import Button from "@/components/ui/button";
import EmptyIllustration from "@/components/ui/icons/icon-empty";
import { Separator } from "@/components/ui/separator";
import LinkForm from "../../components/LinkForm";
import { useState } from "react";
import { useFormData } from "@/providers/form-provider";

export default function FullForm() {
  const isEmpty = false;
  const [disabledBtnLink, setDisabledBtnLink] = useState(false)

  const { formLinkCount, setFormLinkCount } = useFormData();

  const handleLinkCount = () => {
    if (formLinkCount) {
      if (formLinkCount >= 5) {
        //cannot add more links
        alert("Cannot add more links");
        setDisabledBtnLink(true)
      } else {
        setFormLinkCount!(formLinkCount + 1);
        
      }
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 md:col-span-3 col-span-full rounded-xl">
      <h1 className="fs-bold-M mb-2">Customize your links</h1>
      <p className="fs-body-M mb-10">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <Button
        text={"+ Add new link"}
        variant="secondary"
        className="mb-10"
        onClick={handleLinkCount}
        disabled={disabledBtnLink}
      />
      <div className="w-full">
        
        <LinkForm count={formLinkCount} />
  

        {isEmpty && <EmptyIllustration />}
      </div>

      <Separator className="mt-8 sm:mt-10" />
      <div className="sm:flex justify-center  sm:justify-end items-center my-6 md:mr-10">
        <Button text="Save" className="px-7" type="submit" form="myForm" />
      </div>
    </div>
  );
}
