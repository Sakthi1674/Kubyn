// theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import colors from "./color";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: typeof colors.light;
  mode: ThemeType;
  toggleTheme: (mode?: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: colors.light,
  mode: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const deviceScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeType>(deviceScheme === "dark" ? "dark" : "light");

  useEffect(() => {
    setMode(deviceScheme === "dark" ? "dark" : "light");
  }, [deviceScheme]);

  const toggleTheme = (newMode?: ThemeType) => {
    setMode(newMode ?? (mode === "light" ? "dark" : "light"));
  };

  const theme = mode === "dark" ? colors.dark : colors.light;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
