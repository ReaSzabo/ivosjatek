import { Component } from "react";
import "./OtherGame.scss";
import image_1 from "../assets/images/otherGames/img_1.webp";
import image_2 from "../assets/images/otherGames/img_2.webp";
import image_3 from "../assets/images/otherGames/img_3.webp";
import image_4 from "../assets/images/otherGames/img_4.webp";
import image_5 from "../assets/images/otherGames/img_5.webp";
import image_6 from "../assets/images/otherGames/img_6.webp";
import image_7 from "../assets/images/otherGames/img_7.webp";
import image_8 from "../assets/images/otherGames/img_8.webp";
import image_9 from "../assets/images/otherGames/img_9.webp";
import image_10 from "../assets/images/otherGames/img_10.webp";
import image_11 from "../assets/images/otherGames/img_11.webp";
import image_12 from "../assets/images/otherGames/img_12.webp";
import image_13 from "../assets/images/otherGames/img_13.webp";
import image_14 from "../assets/images/otherGames/img_14.webp";
import image_15 from "../assets/images/otherGames/img_15.webp";
import image_16 from "../assets/images/otherGames/img_16.webp";
import image_17 from "../assets/images/otherGames/img_17.webp";
import image_18 from "../assets/images/otherGames/img_18.webp";

class OtherGame extends Component {
  getPic() {
    if (this.props.title == "Kings Cup") {
      return image_1;
    } else if (this.props.title === "Thumper") {
      return image_2;
    } else if (this.props.title === "Unflinching Face") {
      return image_3;
    } else if (this.props.title === "Flip Cup") {
      return image_4;
    } else if (this.props.title === "Bumm") {
      return image_5;
    } else if (this.props.title === "Most Likely") {
      return image_6;
    } else if (this.props.title === "Take The Bag") {
      return image_7;
    } else if (this.props.title === "Jenga") {
      return image_8;
    } else if (this.props.title === "Stuck Together") {
      return image_9;
    } else if (this.props.title === "I Never Have Ever") {
      return image_10;
    } else if (this.props.title === "BeerPong") {
      return image_11;
    } else if (this.props.title === "T-Rex") {
      return image_12;
    } else if (this.props.title === "Death Circle") {
      return image_13;
    } else if (this.props.title === "Draw a Card and Hope") {
      return image_14;
    } else if (this.props.title === "Djibouti") {
      return image_15;
    } else if (this.props.title === "One True, One False") {
      return image_16;
    } else if (this.props.title === "Board Games") {
      return image_17;
    } else if (this.props.title === "Russian Roulette") {
      return image_18;
    }
  }

  render() {
    return (
      <container className="other-game">
        <div className="other-game__shadow">
          <div className="other-game__shadow-description">
            <h1 className="other-game__shadow-description-title">{this.props.title}</h1>
            <h2 className="other-game__shadow-description-subtitle">
              {this.props.subtitle}
            </h2>
            <p className="other-game__shadow-description-text">{this.props.text}</p>
            <a href="/#/OtherGames">
              <button className="other-game__shadow-description-button" type="description__submit">
                <span className="other-game__shadow-description-button-text"> back </span>
                <span className="other-game__shadow-description-button-blob"></span>
                <span className="other-game__shadow-description-button-blob"></span>
                <span className="other-game__shadow-description-button-blob"></span>
                <span className="other-game__shadow-description-button-blob"></span>
              </button>
            </a>
          </div>

          <div
            className="other-game__shadow-first-section"
            style={{ backgroundImage: `url('${this.getPic()}')` }}
          ></div>
        </div>
      </container>
    );
  }
}

export default OtherGame;
