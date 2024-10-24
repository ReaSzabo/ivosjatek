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


interface IProps {
  title: string,
  subtitle: string,
  text: string,
}

class OtherGame extends Component<IProps> {
  getPic() {
    if (this.props.title === "Kings Cup") {
      return image_1;
    } else if (this.props.title === "Thumper") {
      return image_2;
    } else if (this.props.title === "Rezzenéstelen arc") {
      return image_3;
    } else if (this.props.title === "Pohár fordító") {
      return image_4;
    } else if (this.props.title === "Bumm") {
      return image_5;
    } else if (this.props.title === "Legvalószínűbb") {
      return image_6;
    } else if (this.props.title === "Fogd a táskát") {
      return image_7;
    } else if (this.props.title === "Jenga") {
      return image_8;
    } else if (this.props.title === "Összeragadva") {
      return image_9;
    } else if (this.props.title === "Én még soha...") {
      return image_10;
    } else if (this.props.title === "Sörpong") {
      return image_11;
    } else if (this.props.title === "T-Rex") {
      return image_12;
    } else if (this.props.title === "Halálkör") {
      return image_13;
    } else if (this.props.title === "Húzz és reménykedj") {
      return image_14;
    } else if (this.props.title === "Djibouti") {
      return image_15;
    } else if (this.props.title === "Egy igaz, egy hamis") {
      return image_16;
    } else if (this.props.title === "Társasjátékok") {
      return image_17;
    } else if (this.props.title === "Orosz rulett") {
      return image_18;
    }
  }

  render() {
    return (
      <div className="other-game">
        <div className="other-game__shadow">
          <div className="other-game__shadow-description">
            <h1 className="other-game__shadow-description-title">{this.props.title}</h1>
            <h2 className="other-game__shadow-description-subtitle">
              {this.props.subtitle}
            </h2>
            <p className="other-game__shadow-description-text">{this.props.text}</p>
            <a href="#/OtherGames">
              <button className="other-game__shadow-description-button" type="submit">
                <span className="other-game__shadow-description-button-text"> vissza </span>
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
      </div>
    );
  }
}

export default OtherGame;
