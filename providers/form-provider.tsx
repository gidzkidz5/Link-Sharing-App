"use client";
import React, { createContext, useContext, useState } from "react";
import { boolean } from "zod";
interface FormDataContextType {
  formDataLocal?: any[]; // Replace 'any' with a more specific type relevant to your form data
  setFormDataLocal?: (formData: [string | null, string | null][]) => void; // Optional, based on your implementation
  formLinkCount?: number;
  setFormLinkCount?: (count: number) => void;
  initialData: boolean
}

const FormDataContext = createContext<FormDataContextType>({
  formDataLocal: [],
  setFormDataLocal: () => {},
  formLinkCount: 1,
  setFormLinkCount: () => {},
  initialData: false
});

export function FormDataProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: any;
}) {
  const [formDataLocal, setFormDataLocal] = useState<
    [string | null, string | null][]
  >(() => {
    if (data.length == 0) {
      return [
        ["GitHub", ""],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
      ];
    }
    return data;
  }); // Initial empty object
  // data || [
  //   ["GitHub", ""],
  //   [null, null],
  //   [null, null],
  //   [null, null],
  //   [null, null],
  // ]

  const [formLinkCount, setFormLinkCount] = useState<number>(data.length || 1);
  const [initialData, setInitialData] = useState(() => {
    if (data.length == 0) {
      return false;
    }
    return true;
  });

  return (
    <FormDataContext.Provider
      value={{
        formDataLocal,
        setFormDataLocal,
        formLinkCount,
        setFormLinkCount,
        initialData
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
