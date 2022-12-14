import { styled, Box, AppBar } from "@mui/material";
import { Toolbar, Typography } from "@mui/material";
import "@fontsource/montez";
import { NavLink } from "react-router-dom";

//<------------ Navbar Styling ------------->
export const StyledAppbar = styled(AppBar)({
  background: "#37084b",
});

export const AppbarHeader = styled(Typography)(() => ({
  display: "inline",
  padding: "4px",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  fontSize: "2.5em",
  fontFamily: '"Montez", "cursive"',
  textDecoration: "none",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
});

export const StyledBox = styled(Box)({
  display: "inline-block",
  textAlign: "center",
  justifyContent: "space-around",
});

export const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  marginRight: 10,
  padding: 2,
});
