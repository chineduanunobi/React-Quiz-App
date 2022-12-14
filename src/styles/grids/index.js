import { Box, CardMedia, Grid, styled } from "@mui/material";

export const StyledGrid = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 1,
  gridAutoRows: "minmax(100px, auto)",
});

export const StyledBox = styled(Box)({
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRowStart: 1,
  gridRowEnd: 3,
});

export const StyledGrid1 = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const StyledGrid2 = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});
