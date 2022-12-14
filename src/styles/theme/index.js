import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#37084b",

      100: "#d7cedb",
      200: "#af9cb7",
      300: "#876b93",
      400: "#5f396f",
      500: "#37084b",
      600: "#2c063c",
      700: "#21052d",
      800: "#16031e",
      900: "#0b020f",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        border: "2px solid rgba(0, 0, 0, 0.23)",
      },
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 450,
  //     md: 600,
  //     lg: 900,
  //     xl: 1200,
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
