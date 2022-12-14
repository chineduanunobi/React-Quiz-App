import React from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Link as RouterLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import phish from "../../Images/Home-bg/Identity theft PNG.png";
import phish1 from "../../Images/Phishing/Phish1.jpg";
import phish2 from "../../Images/Phishing/Phish2.png";
import phish3 from "../../Images/Phishing/Phish3.jpg";
import phish4 from "../../Images/Phishing/Phish4.png";
import phish5 from "../../Images/Phishing/Phish5.png";
import { HeroBox, StyledCard, StyledGridButton } from "../../styles/pages";
import { Card4 } from "../../components/Cards/Cards";

const Phishing = () => {
  return (
    <Card>
      <Grid>
        <HeroBox>
          <StyledCard component="img" alt="phishing-fishing" image={phish} />
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
            Phishing Attacks
          </Typography>
        </HeroBox>
      </Grid>
      <CardContent>
        <Grid>
          <Card4 />
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={phish1}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={phish2}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={phish3}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={phish4}
            />
          </Grid>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              alt="phishing-fishing"
              height="100%"
              image={phish5}
            />
          </Grid>
          <StyledGridButton item xs={12}>
            <Link
              component={RouterLink}
              to={"/mitm"}
              style={{ textDecoration: "none" }}
            >
              <Button item color="inherit">
                <ArrowBackIosNewIcon fontSize="extra-small" /> Previous
              </Button>
            </Link>
            <Link
              component={RouterLink}
              to={"/register"}
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

export default Phishing;
