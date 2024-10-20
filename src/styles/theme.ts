import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#377DFF",
    },
    secondary: {
      main: "#38CB89",
      light:"#73EC8B"

    },
    warning: {
      main: "#fec655",
      dark: "#FFAB00",
      light: "#ffdd99",
    },
    error: {
      main: "#FF5630",
    },
    grey: {
      50: "#FEFEFE",
      100: "#F3F5F7",
      200: "#E8ECEF",
      300: "#6C7275",
      400: "#343839",
      500: "#232627",
      600: "#141718",
      700: "#000000",
    },
  },
});

export { theme, ThemeProvider, CssBaseline };
export type ThemeType = typeof theme