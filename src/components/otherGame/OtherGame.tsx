import { Component } from "react";
import Link from "next/link";
import styles from "./OtherGame.module.scss";
const images = [
  "/assets/images/otherGames/img_1.webp",
  "/assets/images/otherGames/img_2.webp",
  "/assets/images/otherGames/img_3.webp",
  "/assets/images/otherGames/img_4.webp",
  "/assets/images/otherGames/img_5.webp",
  "/assets/images/otherGames/img_6.webp",
  "/assets/images/otherGames/img_7.webp",
  "/assets/images/otherGames/img_8.webp",
  "/assets/images/otherGames/img_9.webp",
  "/assets/images/otherGames/img_10.webp",
  "/assets/images/otherGames/img_11.webp",
  "/assets/images/otherGames/img_12.webp",
  "/assets/images/otherGames/img_13.webp",
  "/assets/images/otherGames/img_14.webp",
  "/assets/images/otherGames/img_15.webp",
  "/assets/images/otherGames/img_16.webp",
  "/assets/images/otherGames/img_17.webp",
  "/assets/images/otherGames/img_18.webp",
];



interface GameProps {
  title: string;
  subtitle: string;
  text: string;
}

class OtherGame extends Component<GameProps> {

  getPic(): string {
    // Map titles to image indices
    const titleMap: { [key: string]: number } = {
      "Kings Cup": 0,
      "Thumper": 1,
      "Rezzenéstelen arc": 2,
      "Pohár fordító": 3,
      "Bumm": 4,
      "Legvalószínűbb": 5,
      "Jenga": 6,
      "Összeragadtak": 7,
      "Soha nem ever": 8,
      "Beer Pong": 9,
      "T-Rex": 10,
      "Halál kör": 11,
      "Húzz egy lapot és reménykedj": 12,
      "Dzsibuti": 13,
      "Egy igaz egy hamis": 14,
      "Társasjátékok": 15,
      "Orosz rulett": 16,
    };
    const idx = titleMap[this.props.title] ?? 17;
    return images[idx];
  }

  render() {
    return (
      <div className={styles["other-game"]}>
        <div className={styles["other-game__container"]}>
          <div className={styles["other-game__container-description"]}>
            <h1 className={styles["other-game__container-description-title"]}>{this.props.title}</h1>
            <h2 className={styles["other-game__container-description-subtitle"]}>
              {this.props.subtitle}
            </h2>
            <p className={styles["other-game__container-description-text"]}>{this.props.text}</p>
            <Link href="/mas-ivos-jatekok" passHref >
              <button className={styles["other-game__container-description-button"]}>
                <span className={styles["other-game__container-description-button-text"]}> vissza </span>
                <span className={styles["other-game__container-description-button-layer"]}></span>
                <span className={styles["other-game__container-description-button-layer"]}></span>
                <span className={styles["other-game__container-description-button-layer"]}></span>
                <span className={styles["other-game__container-description-button-layer"]}></span>
              </button>
            </Link>
          </div>

          <div
            className={styles["other-game__container-image"]}
            style={{ backgroundImage: `url('${this.getPic()}')` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default OtherGame;
