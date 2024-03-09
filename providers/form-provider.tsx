"use client";
import React, { createContext, useContext, useState } from "react";
import { boolean } from "zod";
interface FormDataContextType {
  formDataLocal?: any[];
  setFormDataLocal?: (formData: [string | null, string | null][]) => void;
  formDataLocalProfile: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    userId: string;
    email: string | null;
    profile_img: string | null;
  };
  setFormDataLocalProfile: ({}) => void;
  formLinkCount?: number;
  setFormLinkCount?: (count: number) => void;
  initialData: boolean;
}

const FormDataContext = createContext<FormDataContextType>({
  formDataLocal: [],
  setFormDataLocal: () => {},
  formDataLocalProfile: {
    id: "initialId",
    first_name: null,
    last_name: null,
    userId: "initialUserId",
    email: null,
    profile_img: null,
  },
  setFormDataLocalProfile: () => {},
  formLinkCount: 1,
  setFormLinkCount: () => {},
  initialData: false,
});

export function FormDataProvider({
  children,
  data1,
  data2,
}: {
  children: React.ReactNode;
  data1?: any;
  data2?: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    userId: string;
    email: string | null;
    profile_img: string | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}) {
  const [formDataLocal, setFormDataLocal] = useState<
    [string | null, string | null][]
  >(() => {
    if (data1.length == 0) {
      return [
        ["GitHub", ""],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
      ];
    }
    return data1;
  });
  const [formDataLocalProfile, setFormDataLocalProfile] = useState<any>({
    first_name: data2?.first_name || "",
    last_name: data2?.last_name || "",
    email: data2?.email || "",
    profile_img: data2?.profile_img || "",
  });

  const [formLinkCount, setFormLinkCount] = useState<number>(data1.length || 1);
  const [initialData, setInitialData] = useState(() => {
    if (data1.length == 0) {
      return false;
    }
    return true;
  });

  return (
    <FormDataContext.Provider
      value={{
        formDataLocal,
        setFormDataLocal,
        formDataLocalProfile,
        setFormDataLocalProfile,
        formLinkCount,
        setFormLinkCount,
        initialData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
