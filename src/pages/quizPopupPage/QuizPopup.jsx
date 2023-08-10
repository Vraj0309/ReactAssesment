import React, { useEffect, useState } from "react";
import axios from "axios";
import "./QuizPopup.css";
import { useNavigate } from "react-router-dom";
const QuizPopup = () => {
  // useNavigate
  const navigate = useNavigate();

  // useState
  const [response, setRes] = useState("");

  // onclick when we click submit button
  const handleClick = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res) => setRes(res));
  };

  return (
    <div>
      <div className="mainQuizCard">
        <div className="CardHeading">
          <h2>Please select Quiz type</h2>
        </div>
        <div className="selectButton">
          <button className="selectBtn" onClick={handleClick}>
            Easy
          </button>
          <button className="selectBtn" onClick={handleClick}>
            Medium
          </button>
          <button className="selectBtn" onClick={handleClick}>
            Hard
          </button>
        </div>
        <div className="quizQues">
          {response?.data?.results?.map((item) => {
            console.log("item", item);
            return (
              <>
                <div>
                  <p>{item?.question}</p>
                  {item?.incorrect_answers?.map((data) => {
                    console.log("data", data);
                    return (
                      <>
                      <div className="quizQuestions">

                        <label htmlFor="">
                          {data}
                          <input type="radio" />
                        </label>
                      </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPopup;
