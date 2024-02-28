"use client";
import React, { createContext, useContext, useState } from "react";
interface FormDataContextType {
  formDataLocal?: any[]; // Replace 'any' with a more specific type relevant to your form data
  setFormDataLocal?: (formData: [string | null, string | null][]) => void; // Optional, based on your implementation
  formLinkCount?: number,
  setFormLinkCount?: (count: number) => void
}

const FormDataContext = createContext<FormDataContextType>({
  formDataLocal: [],
  setFormDataLocal: () => {},
  formLinkCount: 1,
  setFormLinkCount: () => {}
});

export function FormDataProvider({ children }: { children: React.ReactNode }) {
  const [formDataLocal, setFormDataLocal] = useState<[string | null, string | null][]>([
    ["GitHub", ""],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ]); // Initial empty object
  const [formLinkCount, setFormLinkCount] = useState<number>(1);

  return (
    <FormDataContext.Provider value={{ formDataLocal, setFormDataLocal, formLinkCount, setFormLinkCount }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
