import { Button, CardMedia, Grid, styled } from "@mui/material";

export const StyledCard = styled(CardMedia)({
  height: "100%",
  backgroundColor: "#000000",
});

export const StyledGrid = styled(Grid)({
  maxWidth: 500,
  margin: "0 auto",
  padding: "0.1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
});

export const StyledButton = styled(Button)({
  color: "white",
  justifyContent: "space-between",
});
