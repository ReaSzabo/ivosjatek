import { Component } from "react";
import "./GameCard.scss";

interface IProps {
  text: string,
  isFlipped: boolean,
  image: any
}

class GameCard extends Component<IProps> {

  render() {
    return (
      <div className={this.props.isFlipped ? "game-card" : "game-card makesItFlipping"}>
        <div className="game-card__face game-card__face--back">
          <img src={this.props.image} alt="backface" />
        </div>
        <div className="game-card__face game-card__face--front">{this.props.text}</div>
        <button className="next-button" type="button">
          <span className="button-text"> új </span>
          <span className="button-blob"></span>
          <span className="button-blob"></span>
          <span className="button-blob"></span>
          <span className="button-blob"></span>
        </button>
      </div>
    );
  }
}

export default GameCard;
