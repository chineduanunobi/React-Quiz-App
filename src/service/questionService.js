import firebase from "./../firebaseApp";
import { sampleSize, shuffle } from "lodash";

let cachedQuestions;

const transformToArray = (questions) =>
  Object.keys(questions).map((key) => ({
    id: key,
    ...questions[key],
  }));

const getAllQuestions = async () => {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  const database = firebase.database();
  const snapshot = await database.ref("/quiz/questions").once("value");
  const questions = transformToArray(snapshot.val());
  cachedQuestions = questions;
  return questions;
};

const getRandomQuestions = async () => {
  const questions = await getAllQuestions();
  const randomQuestions = sampleSize(questions, 5);

  return randomQuestions.map((question) => ({
    ...question,
    choices: shuffle(question.choices),
  }));
};

export { getRandomQuestions };
