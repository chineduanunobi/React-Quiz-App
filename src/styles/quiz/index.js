import { Grid, Paper, styled, Box, ButtonGroup } from "@mui/material";
import theme from "../theme";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

export const StyledPaper = styled(Paper)({
  background: "#37084b",
  marginTop: theme.spacing(6),
  margin: `${theme.spacing(4)}px auto`,
  padding: theme.spacing(4),
});

export const ResultBox = styled(Box)({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  margin: `${theme.spacing(4)}px auto`,
  background: "#876b93",
  padding: theme.spacing(2, 3),
});

export const StyledPaper2 = styled(Paper)({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  marginBottom: theme.spacing(3),
  margin: `${theme.spacing(4)}px auto`,
  background: "inherit",
  padding: theme.spacing(2, 3),
});

export const StyledTypography = styled(Typography)({
  color: "primary",
  textAlign: "center",
});

export const StyledGridButton = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(12),
});

export const StyledButton1 = styled(Button)({
  backgroundColor: "rgb(40, 42, 54)",
  textTransform: "none",
  "&$disabled": {
    color: "white",
  },
});

export const StyledButton = styled(Button)({
  color: textDark,
  background: "rgba(255,255,255,.45)",
  position: "relative",
  fontWeight: 400,
  fontFamily: "Raleway, sans-serif",
  overflow: "hidden",
  padding: `${theme.spacing(1.6)}px`,
  border: "none",
  borderRadius: "80px",
  letterSpacing: "3px",

  "&::before, &::after": {
    position: "absolute",
    content: '""',
    boxSizing: "border-box",
    borderRadius: "8px",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
  },
  "&::before": {
    borderBottom: "2px solid rgba(255,255,255,.58)",
    borderTop: "2px solid rgba(255,255,255,.58)",
    transform: "scale(0,1)",
  },
  "&::after": {
    borderLeft: "3px solid rgba(255,255,255,.58)",
    borderRight: "3px solid rgba(255,255,255,.58)",
    transform: "scale(1,0)",
  },
  "&:hover::before": {
    transform: "scale(1,1)",
    transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s",
  },
  "&:hover::after": {
    transform: "scale(1,1)",
    transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s",
  },
  "&:hover": {
    background: "#876b93",
    color: textLight,
  },
});

export const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const StyledButtonGroup = styled(ButtonGroup)({
  backgroundColor: "#876b93",
});

export const CorrectAnswer = styled(Button)({
  background: "linear-gradient(to right, rgb(86, 171, 47), rgb(168, 224, 99))",
});

export const WrongAnswer = styled(Button)({
  // backgroundColor: "red",
  background: "linear-gradient(to right, rgb(255, 81, 47), rgb(221, 36, 118))",
});
