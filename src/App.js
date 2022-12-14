import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Appbar from "./components/Appbar/appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./containers/quiz/quiz";
import Register from "./containers/quiz/Register";
import { PlayerContext } from "./containers/quiz/PlayerContext";
import MainRoutes from "./MainRoutes";

function App() {
  useEffect(() => {
    document.title = "CyberSecurity Training - Home";
  }, []);

  //sets timer and score to each player
  const [counter, setCounter] = useState(1800);

  // this maintains player context on page refresh
  const [name, setName] = useState(localStorage.getItem("name"));

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <Box>
      <Router>
        <Appbar />
        <Routes>
          <Route path="*" element={<MainRoutes />} />
          <Route
            path="/register"
            element={
              <PlayerContext.Provider
                value={{ name, setName, counter, setCounter }}
              >
                <Register />
              </PlayerContext.Provider>
            }
          />
          <Route
            path="/quiz"
            element={
              <PlayerContext.Provider
                value={{ name, setName, counter, setCounter }}
              >
                <Quiz />
              </PlayerContext.Provider>
            }
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
