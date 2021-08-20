import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Have you ever told a white lie?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever dated a friends ex? ",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever felt unheard?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Would you ever stay friends with an ex?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText:
        "Would you tell a lie to keep from hurting your significant Otter's feelings?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Would you share your phone password?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you struggle with apologizing?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Would you get a tattoo of your significant Otter's name?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever told a white lie?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever done something you regret in life?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you completely trust your significant Otter?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever broken up over text?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you like horror movies?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you like to excercise?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "DO you consider yourself controversial?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you believe in a higher being?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText:
        "Do you have a bias towards any racial, religious or political group?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText:
        "Have you ever crushed on someome other than your Otter while in a relationship?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Would you leave your significant Otter for $1million?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you believe in love at first sight?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
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
      {/* replace "false" logic to display the score when the user has answered all the questions*/}
      {showScore ? (
        <div className="question-section">
          {" "}
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-count">
            <span> Question {currentQuestion + 1}</span>/{questions.length}
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
