import { Component } from "react";
import "./GameCard.scss";

class GameCard extends Component {

  render() {
    return (
      <div className={this.props.isFlipped ? "game-card" : "game-card makesItFlipping"}>
        <div class="game-card__face game-card__face--back">
          <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" />
        </div>
        <div className="game-card__face game-card__face--front">{this.props.text}</div>
      </div>
    );
  }
}

export default GameCard;
