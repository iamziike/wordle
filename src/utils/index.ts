import { dictionary } from "@/constants";

export const generateArray = (length: number) => {
  return new Array(length).fill(null);
};

export const isWordValid = (word: string) => {
  return Boolean(dictionary[word]);
};

export const wordMatch = (word: string, targetWord: string) => {
  return word?.toLowerCase() === targetWord?.toLowerCase();
};
