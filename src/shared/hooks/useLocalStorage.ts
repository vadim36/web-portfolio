import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, value: T): [T, typeof setData] {
  const [data, setData] = useState<T>(() => {
    const localData = localStorage.getItem(key);

    if (!localData) {
      localStorage.setItem(key, JSON.stringify(value));
      return value;
    }

    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}