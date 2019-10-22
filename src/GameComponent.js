import React, { Component } from 'react';

export class GameComponent extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    correct: false,
  }

  // constructor(props) {
  //   super(props);
  //   this.handleTrueClick =  this.handleTrueClick.bind(this);
  //   this.handleFalseClick =  this.handleFalseClick.bind(this);
  // }

  proposedAnswer = (value1, value2, value3) => {
    return Math.floor(Math.random() * 3) + value1 + value2 + value3;
  }

  randomValue() {
    return  Math.floor(Math.random() * 100);
  }

  checkAnswer(answer) {

  }

  handleClick = (answer) =>  {
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: prevState.numCorrect +  1,
    }));
  }

  render()  {
    const value1 = this.randomValue();
    const value2 = this.randomValue();
    const value3 = this.randomValue();
    return(
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">
          {`${value1} + ${value2} + ${value3} = ${this.proposedAnswer(value1,value2,value3)}`}
        </p>
      </div>
      <button onClick={() => this.handleClick(true)}>True</button>
      <button onClick={() => this.handleClick(false)}>False</button>
      <p className="text">
        Your Score: {this.state.numCorrect}/{this.state.numQuestions}
      </p>
    </div>
    )}
}