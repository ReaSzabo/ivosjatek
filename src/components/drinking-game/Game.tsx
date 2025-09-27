import { Component } from "react";
import Link from "next/link";
import styles from "./Game.module.scss";
import GameCard from "../drinking-game-card/GameCard";
import questionArray from "./questions.json";


// Use public asset paths for Next.js
const backfaceImages = Array.from({ length: 98 }, (_, i) => `/assets/images/game/backfaces/backface-${i + 1}.webp`);


class Game extends Component {
  state = {
    questions: questionArray,
    currentQuestion: "",
    isFlipped: false,
    backfaceImages: backfaceImages,
    currentBackfaceImage: backfaceImages[0],
  };

  counter = 0;

  setOnCardClick = () => {

    // Exit function if there is no more question
    if (this.state.questions.length === 0) {
      return;
    }

    // Get a random index and question
    const randomIndex = Math.floor(Math.random() * this.state.questions.length);
    const tempCurrentQuestion = this.state.questions[randomIndex].hu;

    let tempCurrentBackfaceImage = this.state.backfaceImages[
      Math.floor(Math.random() * this.state.backfaceImages.length)
    ];

    // Remove the used question from the questions array
    const newQuestions = [...this.state.questions];
    newQuestions.splice(randomIndex, 1);

    // Put the random question to the "this.state.currentQuestion"
    if (this.state.isFlipped) {
      this.setState({
        isFlipped: false,
        currentBackfaceImage: tempCurrentBackfaceImage,
        questions: newQuestions,
      })
    } else {
      this.setState({
        isFlipped: true,
        currentQuestion: tempCurrentQuestion,
        questions: newQuestions,
      });
    }

    this.counter++;

  }




  render() {
    return (
      <div className={styles["game-container"]}>
        <Link href="/" passHref >
          <button className={styles["game-container__back-button"]}>
            <span className={styles["game-container__back-button-text"]}> vissza </span>
            <span className={styles["game-container__back-button-blob"]}></span>
            <span className={styles["game-container__back-button-blob"]}></span>
            <span className={styles["game-container__back-button-blob"]}></span>
            <span className={styles["game-container__back-button-blob"]}></span>
          </button>
        </Link>
        <div
          onClick={this.setOnCardClick}
          className={styles["game-card-animated"]}
        >
          <GameCard
            text={this.state.currentQuestion}
            isFlipped={this.state.isFlipped}
            image={this.state.currentBackfaceImage}
          ></GameCard>
        </div>
      </div>
    );
  }
}

export default Game;
