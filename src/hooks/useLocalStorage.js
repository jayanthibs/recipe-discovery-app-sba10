
import { useState } from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);

    // Only parse if stored is not null and not the string "undefined"
    if (stored !== null && stored !== "undefined") {
      return JSON.parse(stored);
    }

    // Otherwise use initialValue
    return initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue((prev) => {
      const updatedValue =
        typeof newValue === "function" ? newValue(prev) : newValue;

      localStorage.setItem(key, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  return [value, setStoredValue];
}
