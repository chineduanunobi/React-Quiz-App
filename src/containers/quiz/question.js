import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import {
  StyledButton1,
  StyledButtonGroup,
  StyledGrid,
  StyledPaper,
} from "../../styles/quiz";
import theme from "../../styles/theme";
import { PlayerContext } from "./PlayerContext";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import "../../styles/theme/styles.css";

const Question = ({ data, currentQuestionIndex, selectAnswer }) => {
  // hooks for selected and disabling choices
  const [selectedChoice, setSelectedChoice] = useState();
  const [disableChoices, setDisableChoices] = useState(false);
  const { counter } = useContext(PlayerContext);

  // maths function to convert seconds to 00:00 format
  function secondsToHms(counter) {
    let d = Number(counter);

    // maths logic that returns minutes and seconds
    if (d <= 0) {
      return "00:00:00";
    } else {
      let m = Math.floor((d % 3600) / 60);
      let s = Math.floor((d % 3600) % 60);

      let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
      let sDisplay = s <= 9 ? "0" + s : s;

      return mDisplay + sDisplay;
    }
  }

  // hook to disable choices when a choice gets selected
  useEffect(() => {
    setSelectedChoice(null);
    setDisableChoices(false);
  }, [data]);

  // this sets the selected choice and answer to choice.id
  const onChoiceSelect = (choice) => {
    setSelectedChoice(choice.id);
    selectAnswer(choice.id);
    setDisableChoices(true);
  };

  // this code block returns the choices
  const renderChoice = (choice, index) => {
    return (
      <StyledButton1
        onClick={() => onChoiceSelect(choice)}
        // this checks selected choice against the correct answer and returns the appropriate value
        className={`choice.id ${
          selectedChoice === choice.id
            ? selectedChoice === data.correctAnswer
              ? "correctAnswer"
              : "wrongAnswer"
            : null
        }`}
        disabled={disableChoices}
        key={choice.id}
        sx={{
          backgroundColor: "rgb(40, 42, 54)",
          textTransform: "none",
          "&$disabled": {
            color: "white",
          },
        }}
      >
        {index + 1}. {choice.text}
      </StyledButton1>
    );
  };

  const renderExplanation = () => {
    if (!selectedChoice || !data.explanation) {
      return null;
    }
    // if choice is selected, explanation executes
    return (
      <Box
        sx={{
          background: "#876b93",
          marginTop: theme.spacing(1),
          padding: theme.spacing(2, 3),
        }}
        borderRadius={2}
      >
        {data.explanation}
      </Box>
    );
  };

  if (!data) {
    return null;
  }

  // player context for player name
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { name } = useContext(PlayerContext);

  return (
    //add this to next line, pushes footer to bottom
    // sx={{ minHeight: "100vh" }}
    <Box>
      <Container maxWidth="sm">
        <StyledPaper elevation={20} justify="center">
          <Grid container spacing={4}>
            <StyledGrid item xs={12}>
              <Button item color="secondary">
                {" "}
                <PersonIcon /> {name}
              </Button>
              <Button item color="secondary">
                {" "}
                <AccessAlarmIcon /> {secondsToHms(counter)}{" "}
              </Button>
            </StyledGrid>
            <Grid item>
              <Avatar sx={{ backgroundColor: "#19857b" }}>
                {currentQuestionIndex}
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontWeight: "bold", color: "white" }}>
                {data.question}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StyledButtonGroup
                orientation="vertical"
                size="large"
                variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {data.choices.map((choice, index) =>
                  renderChoice(choice, index)
                )}
              </StyledButtonGroup>
              {renderExplanation()}
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default Question;
