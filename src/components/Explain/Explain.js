import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import Mitm from "../../Images/Icons/mitm.png";
import Phish from "../../Images/Icons/phishing.png";
import Malware from "../../Images/Icons/malware.png";

// <------- Homepage section with three boxes of explanation -------->
const Explain = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={2}
      >
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            image={Phish}
            height="130"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <Box sx={{ border: 3 }}>
            <CardContent
              style={{
                paddingBottom: "0%",
                maxHeight: "auto",
                overflow: "auto",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Phishing
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Phishing is a technique where an attacker pretends to be a
                trusted source thereby tricking the victim into handing over
                sensitive information.
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            image={Mitm}
            height="130"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <Box sx={{ border: 3 }}>
            <CardContent
              style={{
                paddingBottom: "0%",
                maxHeight: "auto",

                overflow: "auto",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Man
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                This is a form of attack in which an attacker eavesdrops and
                interferes in a conversation or data transfer between two
                parties.
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            image={Malware}
            height="130"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <Box sx={{ border: 3 }}>
            <CardContent
              style={{
                paddingBottom: "0%",
                maxHeight: "auto",
                overflow: "auto",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                Malware Attacks
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                These are forms of attack which involved the use of malicious
                software designed to cause harm or exploit a computer or any
                device, typically without end-user knowledge.
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Explain;
