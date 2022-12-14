import React, { useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { useNavigate } from "react-router-dom";
import { Container, FormControl, Grid } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  StyledAvatar,
  StyledButton,
  StyledInput,
  StyledInputLabel,
  StyledPaper,
} from "../../styles/register";

const Register = () => {
  // hook to set name of players
  const { setName } = useContext(PlayerContext);

  // when user clicks on start button they get directed to quiz page
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/quiz");
  };

  return (
    <Container maxWidth="xs" sx={{ minHeight: "100vh" }}>
      <StyledPaper>
        <StyledAvatar>
          <PersonOutlineIcon />
        </StyledAvatar>
        <Grid sx={{ textAlign: "center" }}>
          <FormControl fullWidth margin="normal">
            <StyledInputLabel htmlFor="name">Enter a name</StyledInputLabel>
            <StyledInput
              id="name"
              type="text"
              required={true}
              autoComplete="off"
              disableUnderline={true}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </FormControl>
          <StyledButton
            endIcon={<ArrowForwardIcon />}
            disableRipple
            fullWidth
            variant="outlined"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Start
          </StyledButton>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default Register;
