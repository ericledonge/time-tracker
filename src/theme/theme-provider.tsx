import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

import { theme } from "./theme.ts";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
