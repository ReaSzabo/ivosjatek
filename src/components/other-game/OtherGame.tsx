import { Component } from "react";
import Link from "next/link";
import styles from "./OtherGame.module.scss";
const images = [
  "/assets/images/other-games/img-1.webp",
  "/assets/images/other-games/img-2.webp",
  "/assets/images/other-games/img-3.webp",
  "/assets/images/other-games/img-4.webp",
  "/assets/images/other-games/img-5.webp",
  "/assets/images/other-games/img-6.webp",
  "/assets/images/other-games/img-7.webp",
  "/assets/images/other-games/img-8.webp",
  "/assets/images/other-games/img-9.webp",
  "/assets/images/other-games/img-10.webp",
  "/assets/images/other-games/img-11.webp",
  "/assets/images/other-games/img-12.webp",
  "/assets/images/other-games/img-13.webp",
  "/assets/images/other-games/img-14.webp",
  "/assets/images/other-games/img-15.webp",
  "/assets/images/other-games/img-16.webp",
  "/assets/images/other-games/img-17.webp",
  "/assets/images/other-games/img-18.webp",
];



interface GameProps {
  title: string;
  subtitle: string;
  text: string;
}


class OtherGame extends Component<GameProps> {
  getPicIndex(): number {
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
    return titleMap[this.props.title] ?? 17;
  }

  render() {
    const imageIndex = this.getPicIndex();
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
            className={
              styles["other-game__container-image"] +
              " " +
              styles[`other-game__container-image--${imageIndex}`]
            }
          ></div>
        </div>
      </div>
    );
  }
}

export default OtherGame;
