import { Component } from "react";
import "./Game.scss";
import GameCard from "./GameCard.jsx";

class Game extends Component {
  state = {
    questions: [
      "Egyes kérdés",
      "Kettes kérdés",
      "Hármas kérdés",
      "Négyes kérdés",
      "Ötös kérdés",
      "Hatos kérdés",
      "Hetes kérdés",
      "Nyolcas kérdés",
      "Kilences kérdés",
      "Tizes kérdés",
    ],
    actualQuestion: "Nulladik kérdés",
  };

  setActualQuestion = () => {
    this.setState({
      questions:
        this.state.questions[
          Math.floor(Math.random() * this.state.questions.length)
        ],
    });

    let tempQuestions = [...this.state.questions];

    const index = tempQuestions.indexOf(this.state.actualQuestion);
    if (index > -1) {
      tempQuestions.splice(index, 1);
    }

    this.setState({
      questions: tempQuestions,
    });
  };

  render() {
    return (
      <div className="gameContainer">
        <GameCard>text={this.state.actualQuestion}</GameCard>
        <GameCard>
          <p>{this.state.actualQuestion}</p>
        </GameCard>
        <GameCard>
          <p>{this.state.actualQuestion}</p>
        </GameCard>
        <button onClick={this.setActualQuestion}> NEXT</button>
      </div>
    );
  }
}

export default Game;
