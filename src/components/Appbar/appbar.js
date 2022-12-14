import {
  AppbarHeader,
  StyledAppbar,
  StyledBox,
  StyledNavLink,
  StyledToolbar,
} from "../../styles/appbar";
import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

// <------------ Navbar Section ------------->
const Appbar = () => {
  // hook for the menutiem
  const [open, SetOpen] = useState(false);

  return (
    <StyledAppbar position={"static"}>
      <StyledToolbar>
        <Box>
          <AppbarHeader>
            <Link style={{ textDecoration: "none" }} to="/">
              CybSec
            </Link>
          </AppbarHeader>
        </Box>
        <StyledBox sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <StyledNavLink to="/" sx={{ color: "white" }}>
            Home
          </StyledNavLink>
          <StyledNavLink
            to="mitm"
            style={({ isActive }) => ({
              color: isActive ? "#37084b" : "white",
              background: isActive ? "#876b93" : "none",
            })}
          >
            Man-In-The-Middle
          </StyledNavLink>
          <StyledNavLink
            to="phishing"
            style={({ isActive }) => ({
              color: isActive ? "#37084b" : "white",
              background: isActive ? "#876b93" : "none",
            })}
          >
            Phishing
          </StyledNavLink>
          <StyledNavLink
            to="register"
            style={({ isActive }) => ({
              color: isActive ? "#37084b" : "white",
              background: isActive ? "#876b93" : "none",
            })}
          >
            Start Quiz
          </StyledNavLink>
        </StyledBox>
        <MenuIcon
          sx={{
            color: "white",
            //controls when to display the menu icon
            display: { xs: "block", sm: "none", md: "none" },
          }}
          onClick={() => SetOpen(!open)}
        />
      </StyledToolbar>
      {/* contents of the menu icon  */}
      <Menu
        aria-labelledby="demo-positioned-button"
        variant="temporary"
        open={open}
        onClose={() => SetOpen(!open)}
        ModalProps={{
          keepMounted: true,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            width: 350,
            height: "90vh",
          }}
        >
          <MenuItem sx={{ padding: 2, mt: 2 }}>
            <StyledNavLink
              to="/mitm"
              style={({ isActive }) => ({
                color: "#37084b",
                background: isActive ? "#876b93" : "none",
              })}
              onClick={() => SetOpen(!open)}
            >
              Man-In-The-Middle
            </StyledNavLink>
          </MenuItem>
          <MenuItem sx={{ padding: 2 }}>
            <StyledNavLink
              to="/phishing"
              style={({ isActive }) => ({
                color: "#37084b",
                background: isActive ? "#876b93" : "none",
              })}
              onClick={() => SetOpen(!open)}
            >
              Phishing
            </StyledNavLink>
          </MenuItem>
          <MenuItem sx={{ padding: 2 }}>
            <StyledNavLink
              to="/register"
              style={({ isActive }) => ({
                color: "#37084b",
                background: isActive ? "#876b93" : "none",
              })}
              onClick={() => SetOpen(!open)}
            >
              Start Quiz
            </StyledNavLink>
          </MenuItem>
        </Box>
      </Menu>
    </StyledAppbar>
  );
};

export default Appbar;
