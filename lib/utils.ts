import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAbsoluteUrl(url: string) {
  // Regular expression to test if the URL starts with a protocol scheme
  const pattern = new RegExp("^(?:[a-z]+:)?//", "i");
  return pattern.test(url);
}
