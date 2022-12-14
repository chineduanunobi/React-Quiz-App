import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import postImage from "../Images/Rightbar/Cyberfacts.webp";
import eventImage from "../Images/Rightbar/dev-setup.webp";
import React from "react";
import { StyledCard, StyledGrid } from "../styles/rightbar";
import { createTheme } from "@mui/material/styles";
import Carousel from "./Carousel";

let theme = createTheme();
theme.typography.caption = {
  fontSize: "16px",
  "@media (min-width:600px)": {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
};

const Rightbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography align="center" bgcolor={"black"} color="white">
          Cyber Attack Facts
        </Typography>
        <StyledGrid>
          <StyledCard
            component="img"
            alt="green iguana"
            image={postImage}
            height="300"
            sx={{ maxWidth: 500, margin: "10px auto", padding: "0.1em" }}
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Comic Sans MS",
              fontWeight: "bold",
              mt: 4,
            }}
            gutterBottom
            variant="caption"
            fontSize="18px"
          >
            <Carousel />
          </Typography>
        </StyledGrid>
        <Typography align="center" bgcolor={"black"} color="white">
          Recent Cyber Attack Events
        </Typography>
        <List
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 110, width: 110 }}
                variant="square"
                alt="Remy Sharp"
                src={eventImage}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ marginLeft: 3, width: "100%" }}
              primary={"Russian Hacktivists, Killnets, attack US websites"}
              secondary={
                "In October 2022, a pro-Russian hacker group claimed responsibility for hacking several US airport websites."
              }
            />
          </ListItem>
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 110, width: 110 }}
                variant="square"
                alt="Remy Sharp"
                src={eventImage}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ marginLeft: 3 }}
              primary={"2.4TB Microsoft data leak"}
              secondary={
                "Microsoft customers' data totaling 2.4 TB was leaked due to a misconfigured Azure Blob Storage is September 2022."
              }
            />
          </ListItem>
          <ListItem alignItems="flex-end">
            <ListItemAvatar>
              <Avatar
                sx={{ height: 110, width: 110 }}
                variant="square"
                alt="Remy Sharp"
                src={eventImage}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ marginLeft: 3 }}
              primary={"$570 million Binance hack"}
              secondary={
                "In October 2022, A BNB (Binance coin) bridge exploiter led to attackers stealing two million BNB tokens worth $570 million."
              }
            />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Rightbar;
