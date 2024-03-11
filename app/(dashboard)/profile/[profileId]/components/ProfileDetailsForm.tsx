"use client";

import ImageUploadWidget from "@/components/ImageUploadWidget";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputSmall } from "@/components/ui/inputSmall";
import { Separator } from "@/components/ui/separator";
import { useFormData } from "@/providers/form-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().min(1),
  profile_img: z.string(),
});

type ProfileFormValues = z.infer<typeof formSchema>;

// interface ProfileFormsProps {
//   initialData: string[][] | null;
// }

export default function ProfileDetailsForm() {
  const [loading, setLoading] = useState(false);

  const { formDataLocalProfile, setFormDataLocalProfile } = useFormData();
  const params = useParams();
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    //@ts-expect-error
    defaultValues: formDataLocalProfile || {
      first_name: "",
      last_name: "",
      email: "",
      profile_img: "",
    },
  });
  const onSubmit = async (data: ProfileFormValues) => {
    try {
      setLoading(true);
      toast
        .promise(
          axios.patch(`/api/profile/${params.profileId}/profile-details`, data),
          {
            loading: "Updating profile",
            success: "Profile Updated",
            error: "Something went wrong",
          }
        )
        .then((data) => window.location.reload());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 md:col-span-3 col-span-full rounded-xl flex flex-col">
      <div className="w-full">
        <h1 className="fs-bold-M mb-2">Profile Details</h1>
        <p className="fs-body-M mb-10">
          Add your details to create a personal touch to your profile
        </p>
      </div>

      <div className="h-full">
        <Form {...form}>
          <form
            //@ts-expect-error
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full relative h-full"
            id="myform2"
          >
            <div className="w-full space-y-6">
              <div className="bg-secondary-foreground rounded-lg p-5">
                <FormField
                  //@ts-ignore
                  control={form.control}
                  name="profile_img"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row">
                        <FormLabel className="col-span-1 justify-items-center self-center text-muted fs-body-M">
                          Profile Picture
                        </FormLabel>
                        <FormControl>
                          <ImageUploadWidget
                            value={field.value ? [field.value] : []}
                            // disabled={loading}
                            onChange={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="bg-secondary-foreground rounded-lg p-5 space-y-3">
                <FormField
                  //@ts-expect-error
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row">
                        <FormLabel className="col-span-1 justify-items-center self-center text-muted fs-body-M">
                          First Name*
                        </FormLabel>
                        <FormControl>
                          <InputSmall placeholder="e.g. John" {...field} />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  //@ts-expect-error
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row">
                        <FormLabel className="col-span-1 justify-items-center self-center text-muted fs-body-M">
                          Last Name*
                        </FormLabel>
                        <FormControl>
                          <InputSmall placeholder="e.g. Appleseed" {...field} />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  //@ts-expect-error
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row">
                        <FormLabel className="col-span-1 justify-items-center self-center text-muted fs-body-M">
                          Email
                        </FormLabel>
                        <FormControl>
                          <InputSmall
                            placeholder="email@example.com"
                            {...field}
                          />
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-full bottom-0 absolute">
              <Separator className="mt-8 sm:mt-10" />
              <div className="sm:flex justify-center  sm:justify-end items-center my-6 md:mr-10">
                <Button text="Save" className="px-7" type="submit" />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
