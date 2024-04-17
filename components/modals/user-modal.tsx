"use client";

import { useState } from "react";
import axios from "axios";
import { Modal } from "@/components/ui/modal";
import { z } from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useUserModal } from "@/hooks/use-user-modal";
import Button from "../ui/button";

const formSchema = z.object({
  fname: z.string().min(1),
  lname: z.string().min(1),
});

const UserModal = () => {
  const userModal = useUserModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    const response = toast.promise(axios.post("/api/profile", values), {
      loading: "Creating User",
      success: "User Created",
      error: "Something went wrong",
    });

    response
      .then((responseData) => {
        // console.log("Response Data:", responseData);
        window.location.assign(`/profile/${responseData.data.id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      title="Create User Profile"
      description="Enter details to begin"
      isOpen={userModal.isOpen}
      onClose={userModal.onClose}
    >
      <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="e.g. John"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="e.g. Smith"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
              <Button
                disabled={loading}
                variant="primary"
                onClick={userModal.onClose}
                text="Cancel"
              />

              <Button disabled={loading} type="submit" text="Continue" />
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default UserModal;
