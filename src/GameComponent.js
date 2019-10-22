import React, { Component } from 'react';

export class GameComponent extends Component {
   constructor(props) {
     super(props);
     this.state = this.newGame();
   }

   newGame() {
     return {
       value1: this.randomValue(),
       value2: this.randomValue(),
       value3: this.randomValue(),
       adjustment: Math.floor(Math.random() * 3),
     }
   }

  randomValue() {
    return  Math.floor(Math.random() * 100);
  }

  // Return if the proposed answer is correct based on the fact that only a 0 adjustment results in the correct answer.
  isCorrectAnswer() {
     return this.state.adjustment === 0;
  }

  // Refresh the state and handle the parent call back when question answered
  handleClick = (event) => {
    this.setState(this.newGame());
    this.props.handleAnswer(event.target.name === 'true');
  }

  render()  {
    const { value1, value2, value3, adjustment } = this.state;
    const proposedAnswer = value1 + value2 + value3 + adjustment;
    // The value returned if true is selected (i.e. if true is the correct selection)
    const trueValue = this.isCorrectAnswer();
    const falseValue = !trueValue;
    return(
      <div>
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">
            {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
          </p>
        </div>
        <button onClick={this.handleClick} name={trueValue.toString()}>True</button>
        <button onClick={this.handleClick} name={falseValue.toString()}>False</button>
      </div>
    );
  }
}