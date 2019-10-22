import React, { Component } from 'react';

export class GameComponent extends Component {

  randomValue() {
    return  Math.floor(Math.random() * 100);
  }

  render()  {
    const value1 = this.randomValue();
    const value2 = this.randomValue();
    const value3 = this.randomValue();
    const correctAnswer = value1 + value2 + value3;
    const proposedAnswer = Math.floor(Math.random() * 3) + correctAnswer;
    const correct = proposedAnswer === correctAnswer;
    const trueValue = correct ? 1 : 0;
    const falseValue = correct ? 0 : 1;
    return(
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">
          {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
        </p>
      </div>
      <button onClick={() => this.props.onButtonClick(trueValue)}>True</button>
      <button onClick={() => this.props.onButtonClick(falseValue)}>False</button>
      <p className="text">
        Your Score: {this.props.correct}/{this.props.questions}
      </p>
    </div>
    )}
}