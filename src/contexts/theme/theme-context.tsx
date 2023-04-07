import { Theme } from "@/themes";
import { createContext, useContext } from "react";

export interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggle: () => void;
  setTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: {} as Theme,
  isDark: false,
  toggle: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
