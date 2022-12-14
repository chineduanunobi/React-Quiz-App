import React from "react";
import HeroImage from "../../Images/Home-bg/phishing-1 PNG.png";
import { Box, Grid, Typography } from "@mui/material";
import { HeroBox, StyledCard } from "../../styles/hero";

// <------------ Hero Section ------------->
const Hero = () => {
  return (
    <Box>
      <Grid container>
        <HeroBox>
          <StyledCard
            component="img"
            alt="phishing-fishing"
            image={HeroImage}
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Monospace",
              fontWeight: "bold",
            }}
            gutterBottom
            variant="h3"
          >
            Cyber<b style={{ color: "green" }}>Security</b> Awareness
          </Typography>
        </HeroBox>
      </Grid>
    </Box>
  );
};

export default Hero;
