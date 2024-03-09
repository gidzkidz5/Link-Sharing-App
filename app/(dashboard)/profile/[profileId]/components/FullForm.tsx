"use client";

import Button from "@/components/ui/button";
import EmptyIllustration from "@/components/ui/icons/icon-empty";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import { useFormData } from "@/providers/form-provider";
import LinkForm from "../../components/LinkForm";
import toast from "react-hot-toast";

export default function FullForm() {
  const isEmpty = false;

  const { formDataLocal, setFormDataLocal, formLinkCount, setFormLinkCount } =
    useFormData();

  const handleLinkCount = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    //@ts-ignore
    setFormLinkCount((prevState: number) => {
      if (prevState >= 5) {
        //cannot add more links
        console.log("in Fullform.tsx: more than 5 links!");
        alert("Cannot have more than 5 links!");
        //@ts-ignore
        setFormDataLocal!((prevData) => {
          const newArray = [...prevData];
          return newArray.slice(0, 5);
        });
        return prevState;
      } else if (prevState < 1) {
        alert("Must have at least 1 link!");
        return prevState;
      }
      //@ts-ignore
      setFormDataLocal!((prevArray) => {
        console.log("activated");
        const newArray = [...prevArray, [null, null]];
        // newArray.push([null, null]);
        console.log("newArray: ", newArray);
        return newArray;
      });

      return prevState + 1;
    });
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
        onClick={(e) => handleLinkCount(e)}
      />
      <div className="w-full">
        <LinkForm />

        {isEmpty && <EmptyIllustration />}
      </div>

      <Separator className="mt-8 sm:mt-10" />
      <div className="sm:flex justify-center  sm:justify-end items-center my-6 md:mr-10">
        <Button text="Save" className="px-7" type="submit" form="myForm" />
      </div>
    </div>
  );
}
