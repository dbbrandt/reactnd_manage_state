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
    // Pre-calculate the result of pressing true or false
    const trueValue = proposedAnswer === correctAnswer;
    return(
      <div>
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">
            {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
          </p>
        </div>
        <button onClick={() => this.props.handleAnswer(trueValue)}>True</button>
        <button onClick={() => this.props.handleAnswer(!trueValue)}>False</button>
      </div>
    );
  }
}