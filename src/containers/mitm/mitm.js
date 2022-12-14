import React from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import mitm from "../../Images/Home-bg/mitm-bg.png";
import mitm1 from "../../Images/Mitm/mitm1.png";
import mitm2 from "../../Images/Mitm/mitm2.png";
import mitm3 from "../../Images/Mitm/mitm3.png";
import mitm4 from "../../Images/Mitm/mitm4.png";
import mitm5 from "../../Images/Mitm/mitm5.png";
import { HeroBox, StyledCard, StyledGridButton } from "../../styles/pages";
import { Card3 } from "../../components/Cards/Cards";

const Mitm = () => {
  return (
    <Card>
      <Grid>
        <HeroBox>
          <StyledCard component="img" alt="phishing-fishing" image={mitm} />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "Monospace",
              fontWeight: "bold",
            }}
            gutterBottom
            variant="h4"
          >
            Man In The Middle Attacks
          </Typography>
        </HeroBox>
      </Grid>
      <CardContent>
        <Grid>
          <Card3 />
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={mitm1}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={mitm2}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={mitm3}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={mitm4}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={mitm5}
            />
          </Grid>
          <StyledGridButton item xs={12}>
            <Link
              component={RouterLink}
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              <Button item color="inherit">
                <ArrowBackIosNewIcon fontSize="extra-small" /> Previous
              </Button>
            </Link>
            <Link
              component={RouterLink}
              to={"/phishing"}
              style={{ textDecoration: "none" }}
            >
              <Button item color="inherit">
                Next <ArrowForwardIosIcon fontSize="extra-small" />{" "}
              </Button>
            </Link>
          </StyledGridButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Mitm;
