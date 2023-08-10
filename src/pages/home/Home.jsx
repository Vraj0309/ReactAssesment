import React from "react";
import "./Home.css";
import heritage from "../../component/assest/heriteg.jpg";
import swaraj from "../../component/assest/swaraj.jpg";
import miletry from "../../component/assest/miletry.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // usenavigate
  const navigate = useNavigate();

  // when we can ready for play and then click button
  const handleClick = () => {
    navigate("/selectQuiz");
  };
  return (
    <>
      {/* main container */}
      <div className="container">
        <div>
          {/* heading */}
          <h2 className="quizHeading">Live Quizzes</h2>
          <div className="mainCard">
            <div className="firstCard">
              <div className="imgMain">
                <img src={heritage} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Heritage Quiz</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz{" "}
                </button>
              </div>
            </div>
            <div className="secondCard">
              <div className="imgMain">
                <img src={swaraj} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Swaraj Quiz : Episode 52</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz
                </button>
              </div>
            </div>
            <div className="thirdCard">
              <div className="imgMain">
                <img src={miletry} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Quiz on Indian Military History</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz
                </button>
              </div>
            </div>
            <div className="firstCard">
              <div className="imgMain">
                <img src={miletry} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Quiz on Indian Military History</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz
                </button>
              </div>
            </div>
            <div className="secondCard">
              <div className="imgMain">
                <img src={heritage} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Heritage Quiz</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz
                </button>
              </div>
            </div>
            <div className="thirdCard">
              <div className="imgMain">
                <img src={swaraj} alt="" className="imgQuiz" />
              </div>
              <div className="textAndButton">
                <h2>Swaraj Quiz : Episode 52</h2>
                <button className="playButton" onClick={handleClick}>
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
