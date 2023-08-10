import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPopup from "./pages/quizPopupPage/QuizPopup";
import Quiz from "./pages/quiz/Quiz";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/selectQuiz" element={<QuizPopup />} />
          <Route path="/playQuiz" element={<Quiz/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
