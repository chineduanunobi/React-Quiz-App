import { Avatar, Input, InputLabel, Paper, styled } from "@mui/material";
import theme from "../theme";
import Button from "@mui/material/Button";

const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

export const StyledPaper = styled(Paper)({
  position: "relative",
  marginTop: theme.spacing(12),
  padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#37084b",
});

export const StyledAvatar = styled(Avatar)({
  marginTop: 20,
  position: "relative",
  background: "rgba(255,255,255,0.85)",
  width: "60px",
  height: "60px",
  boxShadow: "0px 0px 12px rgba(131,153,167,0.99)",
});

export const StyledInputLabel = styled(InputLabel)({
  padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
  fontSize: "10px",
  lineHeight: "10px",
  fontFamily: "PT Mono, monospace",
  fontWeight: 500,
  opacity: 0.9,
  color: `${textLight} !important`,
});

export const StyledInput = styled(Input)({
  position: "relative",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  fontFamily: "Cutive Mono, monospace",
  color: textDark,
  fontSize: "14px",
  padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
  borderRadius: "8px",
  border: "1.4px solid",
  boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
  borderColor: borderLight,

  "&:hover": {
    background: "rgba(169,198,217,0.36457423) ",
  },
});

export const StyledButton = styled(Button)({
  color: textDark,
  background: "rgba(255,255,255,.45)",
  position: "relative",
  fontWeight: 400,
  fontFamily: "Raleway, sans-serif",
  overflow: "hidden",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
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
