import { useState, useEffect } from "react";

// Function to get and set localStorage
// type as a tuple that will be recognized as a REACT element
type LocalStorageValue = [number, React.Dispatch<React.SetStateAction<number>>];
export const useLocalStorage = (
  key: string,
  defaultValue: number | boolean
): LocalStorageValue => {
  const stored: string | null = localStorage.getItem(key);
  const initial: number = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState<number>(initial);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};