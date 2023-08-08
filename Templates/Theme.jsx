"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
    },
    secondary: {
      // This is green.A700 as hex.
      main: cyan[50],
    },
    error: {
      main: red[700],
    },
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
