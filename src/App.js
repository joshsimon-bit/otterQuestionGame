import "./styles.css";
import React, { useState } from "react";
import Icon from "../components/images/icon.png";
import CuteOtter from "../components/images/cuteOtter.png";

export default function App() {
  const questions = [
    {
      questionText: "Have you ever told a white lie?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true }
      ]
    },
    {
      questionText:
        "Have you ever gotten caught dancing in front of the mirror? ",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Have you ever felt unheard?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true }
      ]
    },
    {
      questionText:
        "Have you ever forgotten someone's name even though you’ve spent time with them in the past?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Have you ever gotten locked out of your own house?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever had an imaginary friend?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Do you struggle with apologizing?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Do you think you would be a good ninja?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText:
        "Have you ever “sharted”? As in farted, but pooped yourself a little?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Have you ever made a ridiculous impulse purchase?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText:
        "Have you ever slept in until 3 in the afternoon or later? ",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever broken up over text?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Do you like horror movies?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Do you like to excercise?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true }
      ]
    },
    {
      questionText: "DO you consider yourself controversial?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Do you like piña coladas?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Do your parents ever embarrass you?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true }
      ]
    },
    {
      questionText: "Do you think you will have any regrets when you’re 90?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Do you believe in ghosts?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Do you sing in the shower?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true }
      ]
    }
  ];

  /* reference:https://www.buzzfeed.com/jamedjackson/these-yes-or-no-relationship-questions-will-reveal-if-youre */

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <h1> Honest Otter Question Game</h1>
      <h5> |Conversation starters for you & your significant Otter|</h5>
      {showScore ? (
        <div className="question-section">
          {" "}
          You scored {score} integrity points out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-count">
            <span className="question__number">
              {" "}
              Question{" "}
              <span className="current-question">{currentQuestion + 1}</span>
            </span>
            /{questions.length}
          </div>
          <div className="question-text">
            {" "}
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
