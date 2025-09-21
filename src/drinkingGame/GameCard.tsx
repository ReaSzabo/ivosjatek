import { Component } from "react";
import styles from "./GameCard.module.scss";

interface IProps {
  text: string,
  isFlipped: boolean,
  image: any
}

class GameCard extends Component<IProps> {

  render() {
    return (
      <div className={this.props.isFlipped ? styles["game-card"] : `${styles["game-card"]} ${styles["makesItFlipping"]}`}>
        <div className={`${styles["game-card__face"]} ${styles["game-card__face--back"]}`}>
          <img src={this.props.image} alt="A kártya hátsó lapján lévő izgalmas kép" />
        </div>
        <h1 className={`${styles["game-card__face"]} ${styles["game-card__face--front"]}`}>{this.props.text}</h1>
        <button className={styles["next-button"]} type="button">
          <span className={styles["button-text"]}> új </span>
          <span className={styles["button-blob"]}></span>
          <span className={styles["button-blob"]}></span>
          <span className={styles["button-blob"]}></span>
          <span className={styles["button-blob"]}></span>
        </button>
      </div>
    );
  }
}

export default GameCard;
