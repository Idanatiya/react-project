import React from "react";
export const useLocalStorage = <T>() => {
  const saveToStorage = (key: string, val: T) => {
    if (typeof val !== "object") localStorage.setItem(key, JSON.stringify(val));
    else localStorage.setItem(key, JSON.stringify(val));
  };

  const loadFromStorage = (key: string) =>
    JSON.parse(localStorage.getItem(key) as string);

  const removeFromStorage = (key: string) => localStorage.removeItem(key);

  const clearLocalStorage = () => localStorage.clear();

  return {
    saveToStorage,
    loadFromStorage,
    removeFromStorage,
    clearLocalStorage,
  };
};
