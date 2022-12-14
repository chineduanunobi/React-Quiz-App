import { CardMedia, Grid, styled } from "@mui/material";
import theme from "../theme";

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

export const StyledGridButton = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
});
