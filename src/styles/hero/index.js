import { CardMedia, Grid, styled } from "@mui/material";

// <------------ Hero Styling ------------->
export const StyledCard = styled(CardMedia)({
  height: "100%",
  opacity: 0.4,
});

export const HeroBox = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  backgroundColor: "#000000",
});
