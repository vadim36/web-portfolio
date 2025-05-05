import { createContext } from "react";

export const ThemeContext = createContext<{
  dark: boolean;
  toggleDark: () => void;
}>({
  dark: false,
  toggleDark: () => {},
});