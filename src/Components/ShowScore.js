import React from "react";
import { CheckCircle } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

export default function ShowScore() {
  return (
    <div className="score">
      <CheckCircle className="check-circle" color="green" />
      <div className="score-message">Congratulations, you passed</div>
      <div>
        <span>Your Score: </span>
        <span className="bold-text">100% (20 points)</span>
      </div>
      <div>
        <span>Passing Score: </span>
        <span className="bold-text">80% (16 points)</span>
      </div>
      <div className="review-btn">
        <Button variant="primary" size="sm">
          Review Quiz
        </Button>
      </div>
    </div>
  );
}
