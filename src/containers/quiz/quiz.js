import { Box, Container, Grid } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { getRandomQuestions } from "../../service/questionService";
import Question from "./question";
import Button from "@mui/material/Button";
import theme from "../../styles/theme";
import {
  StyledButton,
  StyledGridButton,
  StyledPaper2,
  StyledTypography,
} from "../../styles/quiz";
import { PlayerContext } from "./PlayerContext";
import { Link as RouterLink, Link } from "react-router-dom";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Skeleton from "@mui/material/Skeleton";

const Quiz = () => {
  //hooks for questions, results, scores and counter
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionVisible, setNextQuestionVisible] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [score, setScore] = useState(0);
  const { counter, setCounter } = useContext(PlayerContext);

  // function that converts the seconds to 00:00 format
  function secondsToHms(time) {
    let d = Number(time);

    if (d <= 0) {
      return "00:00:00";
    } else {
      let m = Math.floor((d % 3600) / 60);
      let s = Math.floor((d % 3600) % 60);

      if (s < 2) {
        let mDisplay = m <= 9 ? "" + m + " minutes " : m + ":";
        let sDisplay = s <= 9 ? "" + s : s + " seconds";
        return mDisplay + sDisplay;
      } else if (m < 10 || s < 10) {
        let mDisplay = m <= 9 ? "" + m + " minutes " : m + ":";
        let sDisplay = s <= 9 ? "" + s : s + " seconds";
        return mDisplay + sDisplay;
      } else {
        let mDisplay = m <= 9 ? "0" + m + " minutes " : m + ":";
        let sDisplay = s <= 9 ? "0" + s : s + " seconds";
        return mDisplay + sDisplay;
      }
    }
  }

  // subtracts current time on counter from target time
  const time = 1800 - counter;

  // starts the counter and stops it end of quiz
  React.useEffect(() => {
    if (!resultsVisible) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if (timer === 0 || resultsVisible) {
        clearInterval(timer);
        return;
      }
      return () => clearInterval(timer);
    }
  }, [counter]);

  // gets random questions from the database
  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getRandomQuestions();
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  const selectAnswer = (choiceId) => {
    // if selected choice is correct, increment score by 1
    if (currentQuestion.correctAnswer === choiceId) {
      setScore(score + 1);
    }
    // if more questions left, show next question
    if (currentQuestionIndex + 1 !== questions.length) {
      setNextQuestionVisible(true);
    } else {
      // if no questions left, show result
      setResultsVisible(true);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { name } = useContext(PlayerContext);

  const renderQuizResults = () => {
    if (resultsVisible) {
      // converts score to percentage
      const percentage = ((score / questions.length) * 100).toFixed(1);

      return (
        <div>
          <Container maxWidth="sm">
            <StyledPaper2 justify="center" elevation={0}>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <CelebrationIcon />
                <Skeleton sx={{ width: 350 }} />
                <CelebrationIcon />
              </Grid>
              <StyledTypography variant="h5" component="h1">
                Not quite there yet {name}
              </StyledTypography>
              <StyledTypography variant="h5" component="h1">
                You have come to the end of the quiz. In {secondsToHms(time)}{" "}
                you got {score} out of {questions.length} questions correct.
              </StyledTypography>
              <StyledTypography variant="h5" component="h1">
                Your score is {percentage}%!
              </StyledTypography>
              <StyledTypography variant="h5" component="h1">
                You need to brush up on your cybersecurity knowledge. Would you
                like to go through the training materials again or retake the
                quiz?
              </StyledTypography>
              <StyledGridButton sx={{ p: 1, m: 1 }}>
                <Link
                  component={RouterLink}
                  to={"/"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    item
                    color="primary"
                    sx={{ border: "1px solid", mr: 3 }}
                  >
                    {" "}
                    Back to Homepage{" "}
                  </Button>
                </Link>
                <Link
                  component={RouterLink}
                  style={{ textDecoration: "none" }}
                  onClick={() => window.location.navigate()}
                  to={"/quiz"}
                >
                  <Button item color="primary" sx={{ border: "1px solid" }}>
                    Retake quiz{" "}
                  </Button>
                </Link>
              </StyledGridButton>
            </StyledPaper2>
          </Container>
        </div>
      );
    }
  };

  // makes next question available
  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setNextQuestionVisible(false);
  };

  // makes next button available if result is not visible (quiz still going)
  const renderNextQuestionButton = () => {
    if (!nextQuestionVisible) {
      return null;
    }
    return (
      <StyledButton
        variant="contained"
        onClick={nextQuestion}
        sx={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(10),
          background: "#876b93",
        }}
      >
        Next Question
      </StyledButton>
    );
  };

  // sets current question to the current question index
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box>
      <Question
        data={currentQuestion}
        selectAnswer={selectAnswer}
        currentQuestionIndex={currentQuestionIndex + 1}
      />
      {renderNextQuestionButton()}
      {renderQuizResults()}
    </Box>
  );
};

export default Quiz;
