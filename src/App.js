import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GameComponent } from  './GameComponent';
import { ScoreComponent} from "./ScoreComponent";

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }

  handleAnswer = (correct) =>  {
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: prevState.numCorrect + correct,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <GameComponent handleAnswer={this.handleAnswer}/>
          <ScoreComponent questions={this.state.numQuestions}
                          correct={this.state.numCorrect}/>
        </div>
      </div>
    );
  }
}

export default App;
