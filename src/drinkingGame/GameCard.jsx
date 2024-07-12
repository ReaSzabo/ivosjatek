import { Component } from "react";
import "./GameCard.scss";

class GameCard extends Component {
  render() {
    return (
      <div className="GameCard">
        <div className="text">{this.props.text}</div>
      </div>
    );
  }
}

export default GameCard;
