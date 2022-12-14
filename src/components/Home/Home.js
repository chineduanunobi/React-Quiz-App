import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Hero from "../Hero/Hero";
import Midsection from "../Midsection/Midsection";
import Explain from "../Explain/Explain";
import Rightbar from "../../rightbar/Rightbar";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Explain />
        <hr />
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} mt={2}>
          <Box flex={2}>
            <Midsection />
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
