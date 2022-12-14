import React from "react";
import { Box, Grid } from "@mui/material";
import { Card1, Card2 } from "../Cards/Cards";
import Phish from "../../Images/Phishing/Phish3.jpg";
import Mitm from "../../Images/Mitm/mitm1.png";

// <------------ This displays the Midsection  ------------->
const Midsection = () => {
  return (
    <Box>
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          mt={2}
        >
          <Grid item>
            <Card2 Mitm={Mitm} />
          </Grid>
          <Grid item>
            <Card1 Phish={Phish} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Midsection;
