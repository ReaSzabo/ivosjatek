import { Component } from "react";
import "./Game.scss";
import GameCard from "./GameCard.jsx";
import questionArray from "./questions.json";

class Game extends Component {
  state = {
    questions: questionArray,
    currentQuestion: null,
    isFlipped: false,
  };

  setOnCardClick = () => {

    // Exit function if there is no more question
    if (this.state.questions.length === 0) {
      return;
    }

    // Get a random question and store it in a variable
    let tempCurrentQuestion = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ].hu;

    // Put the random question to the "this.state.currentQuestion"
    setTimeout(
      () => this.setState({
        currentQuestion: tempCurrentQuestion
      }), 500
    );

    if (this.state.isFlipped) {
      this.setState({
        isFlipped: false
      })
    } else {
      this.setState({
        isFlipped: true
      })
    }

  }


  render() {
    return (
      <div className="gameContainer">
        <div
          onClick={this.setOnCardClick}
        >
          <GameCard
            text={this.state.currentQuestion}
            isFlipped={this.state.isFlipped}
          >
          </GameCard>
        </div>
      </div>
    );
  }
}

export default Game;
