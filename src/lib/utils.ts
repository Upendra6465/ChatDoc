import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToAscii(inputstring: string) {
  // remove all non ascii characters
  const asciiString = inputstring.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}