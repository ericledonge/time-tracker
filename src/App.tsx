import { ThemeProvider } from "./theme";
import { RouterProvider } from "./routing";

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
};
