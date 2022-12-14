import { Instagram, Twitter, GitHub } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SocialBox } from "../../styles/footer";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation;
  if (pathname === "/quiz") return null;
  // current year variable
  const now = new Date();
  let year = now.getFullYear();

  return (
    <Box
      sx={{
        background: "#37084b",
        height: "170px",
        justifyContent: "center",
        bottom: 0,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ alignItems: { xs: "center" } }}
        p={2}
      >
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow
          </Typography>
          <SocialBox>
            <GitHub />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
        <Box flex={2} m={2}>
          <Typography sx={{ textAlign: "center", color: "white" }}>
            Copyright <CopyrightIcon fontSize="extra-small" /> {year} - Created
            with <FavoriteIcon fontSize="extra-small" /> by Miracle Chinedu
            Anunobi
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Contact
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
