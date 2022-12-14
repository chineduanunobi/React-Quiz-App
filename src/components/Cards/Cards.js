import React from "react";
import {
  Box,
  Button,
  CardActions,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Link, Link as RouterLink } from "react-router-dom";

// <------------ Homepage Midsection ------------->
export const Card1 = ({ Phish }) => {
  return (
    <Box>
      <Grid container>
        <Grid
          container
          xs={6}
          sx={{
            display: "flex",
            flexBasis: "100%",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <CardMedia
            component="img"
            alt="phishing photo"
            image={Phish}
            height="100%"
          />
        </Grid>
        <Grid item xs={6} sx={{ alignSelf: "center", justifySelf: "center" }}>
          <Typography align="center" variant="h5" fontFamily="Monospace">
            Phishing
          </Typography>
          <Typography align="center">
            Cyber users are largely ignorant to the dangers posed by phishing
            attacks. This type of cybercrime has become more convincing, with
            people ignorantly clicking malicious links sent through emails or
            messages. Phishing attacks aim to trick people into...
            <Link
              component={RouterLink}
              to={"/phishing"}
              style={{ textDecoration: "none" }}
            >
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export const Card2 = ({ Mitm }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sx={{ alignSelf: "center", justifySelf: "center" }}>
          <Typography align="center" variant="h5" fontFamily="Monospace">
            Man In The Middle Attacks
          </Typography>
          <Typography align="center">
            This form of attack involves the attacker intercepting a connection
            with a fake network. The attack starts when the victims connects to
            an unsecured Wi-Fi (no password required) hotspot that has been
            compromised by the attacker. The man-in-the-middle then gains access
            to...
            <Link
              component={RouterLink}
              to={"/mitm"}
              style={{ textDecoration: "none" }}
            >
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Link>
          </Typography>
        </Grid>
        <Grid
          container
          xs={6}
          sx={{
            display: "flex",
            flexBasis: "100%",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <CardMedia
            component="img"
            alt="man in the middle attack photo"
            image={Mitm}
            height="100%"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const Card3 = () => {
  return (
    <Grid item xs={6}>
      <Typography variant="h5" fontFamily="Monaco">
        continued...
      </Typography>
      <Typography
        color="text.primary"
        variant="body2"
        gutterBottom
        sx={{ padding: 2, fontFamily: "Monospace" }}
      >
        ...any data exchanged on the network. When this attack happens, the
        victim is often unaware of the interception going on as to them a normal
        exchange of information is taking place (for instance, entering your
        login details into paypal). The next phase of a man-in-the-middle attack
        is decryption. This is when the attacker decodes the data stolen during
        interception. This data can then be leveraged for different nefarious
        acts against the owner, their contacts or any other personnel(s).
        <List sx={{ display: "list-item" }}>
          <ListSubheader
            sx={{
              backgroundColor: "inherit",
              color: "black",
              fontVariant: "h2",
            }}
          >
            <Typography variant="h5" fontFamily="Monospace">
              How to prevent this.
            </Typography>
          </ListSubheader>
          <ListItem>
            Use a Virtual Private Network (VPN) when using public Wi-Fi or in
            public. They encrypt your data and help prevent illegal
            interference.
          </ListItem>
          <ListItem>
            Avoid using Wi-Fi networks that are not password protected and
            should you use one, never use it for transactions that are sensitive
            and require you to provide personal details.
          </ListItem>
          <ListItem>
            Other security practices involve using antivirus software, logging
            out of your sensitive accounts when your session ends, using strong
            unique password on your accounts, making use of multi-factor
            authentication.
          </ListItem>
          <ListSubheader
            sx={{
              backgroundColor: "inherit",
              color: "black",
              fontVariant: "h2",
            }}
          >
            <Typography variant="h5" fontFamily="Monospace">
              To further secure yourself.
            </Typography>
          </ListSubheader>
          <ListItem>
            Use multi-factor authentication whenever possible: this adds an
            extra layer of security to your accounts.
          </ListItem>
          <ListItem>
            Make sure to use different passwords for different accounts: if one
            account gets compromised, the others are still safe.
          </ListItem>
          <ListItem>
            Do not reveal your passwords to others: never do this no matter how
            much you trust them.
          </ListItem>
          <ListItem>
            Make your passwords easy to remember but hard to guess. Do not use
            details that people might know about you in your password. Avoid
            using popular quotes.
          </ListItem>
        </List>
      </Typography>
    </Grid>
  );
};

export const Card4 = () => {
  return (
    <Grid item xs={6}>
      <Typography variant="h5" fontFamily="Monaco">
        continued...
      </Typography>
      <Typography
        color="text.primary"
        variant="body2"
        gutterBottom
        sx={{ ml: 1, padding: 2, fontFamily: "Monospace" }}
      >
        ...providing sensitive data such as passwords, bank account details and
        information about the network. This attack begin as the victim clicks on
        a link sent by a "trusted" organization but unbeknownst to the victim
        they have just been taken to a website that looks legitimate. These
        phishing attackers employ social engineering tricks to hurry the victim
        into action without considering the risks that could be involved.
        <List sx={{ display: "list-item" }}>
          <ListSubheader
            sx={{
              backgroundColor: "inherit",
              color: "black",
              fontVariant: "h2",
            }}
          >
            <Typography variant="h5" fontFamily="Monospace">
              How to identify a phishing scam.
            </Typography>
          </ListSubheader>
          <ListItem>
            Companies seldom ask for personal details through email or messages.
          </ListItem>
          <ListItem>
            Check the logo or the usual format of previous correspondence with
            the company to confirm the legitimacy of a message.
          </ListItem>
          <ListSubheader
            sx={{
              backgroundColor: "inherit",
              color: "black",
              fontWeight: "200",
            }}
          >
            <Typography variant="h5" fontFamily="Monospace">
              How to prevent this.
            </Typography>
          </ListSubheader>
          <ListItem>
            Check the URL address on the link. You can then google the company
            website to compare. Make sure the address starts with a "https://"
            and has a closed padlock symbol next to it in the browser.
          </ListItem>
          <ListItem>
            Add an extra layer of security by getting an antivirus software.
          </ListItem>
          <ListItem>
            Do not click the links in the email/message, instead open a separate
            window and go to the website manually.
          </ListItem>
          <ListItem>
            Always update your operating system whenever an update is made
            available.
          </ListItem>
        </List>
      </Typography>
    </Grid>
  );
};
