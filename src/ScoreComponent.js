import React from 'react';

export const ScoreComponent = (props) => {
  return (
    <p className="text">
      Your Score: {props.correct}/{props.questions}
    </p>
  )
}