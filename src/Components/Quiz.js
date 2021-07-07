import React, { useState } from "react";
import { Alert, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Quiz() {
  const users = useSelector(state => state);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < users.questions.length) {

      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz">

      <div className="quiz-header p-3">
        <h4>{users.users.email}</h4>
        <div className="quiz-timer">
          Time Left <span className="timer-seconds">08</span>
        </div>
      </div>
      <div className="quiz-progress p-3">
        <ProgressBar variant="success" now="100" label={`100%`} />
      </div>
      <div className="quiz-body">
        <div className="question p-3">
          <h3>
            <span className="question-number">
              {`${currentQuestion + 1}.`}{" "}
            </span>
            <span className="question-title">
              {users.users.questions[currentQuestion].questionText}
            </span>
          </h3>
        </div>
        <div className="quiz-options p-3">
          {users.users.questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <Alert
                className="quiz-option"
                variant="dark"
                key={index}
                onClick={() => handleAnswerButtonClick()}
              >
                {answerOption.answerText}
              </Alert>
            )
          )}
        </div>
      </div>

      <div className="quiz-footer">
        <div className="question-status">
          <div className="question-number">{`${currentQuestion + 1}`}</div>
          <div> of </div>
          <div className="total-questions">{users.users.questions.length}</div>
        </div>
        {/* <Button variant="primary" >Next Question</Button> */}
      </div>
    </div>
  );
}
