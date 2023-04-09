"use client";

import { ReactNode } from "react";
import { Theme, getTheme } from "@/themes";
import { useState, useEffect } from "react";
import { ThemeContext, ThemeContextType } from "./theme-context";

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  // TODO: custom hook
  const [isDark, setIsDark] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    document.body.classList.add(...theme.body.className.split(" "));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else root.classList.remove("dark");
  }, [isDark]);

  const toggle = (): void => setIsDark((prev) => !prev);

  const contextValue = { theme, isDark, toggle, setTheme } as ThemeContextType;

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
