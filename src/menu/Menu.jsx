import { Component } from "react";
import "./Menu.scss";
import Card from "./Card.jsx";
import cat from "../assets/images/menu/cat.webp";
import catRemoved from "../assets/images/menu/catRemoved.webp";
import lion from "../assets/images/menu/lion.webp";
import lionRemoved from "../assets/images/menu/lionRemoved.webp";
import dog from "../assets/images/menu/dog.webp";
import dogRemoved from "../assets/images/menu/dogRemoved.webp";
import CookieConsent from "react-cookie-consent";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-container__elements">
          <CookieConsent
            location="bottom"
            buttonText="Hát persze!!"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#ecb603" }}
            buttonStyle={{ background: "#fff1ff", color: "#02a4d1", borderRadius: "4px", fontSize: "13px", fontFamily: "Montserrat, sans-serif", fontVariant: "all-small-caps" }}
            expires={150}
          >
            Sütiket (cookie-kat) használunk a választott nyelv mentéséhez. Hozzájárulsz?
          </CookieConsent>
          <a href="#/OtherGames">
            <Card
              image={cat}
              imageRemoved={catRemoved}
              caption="Más Ivós Játékok"
            ></Card>
          </a>
          <a href="#/Game">
            <Card
              image={lion}
              imageRemoved={lionRemoved}
              caption="A Mi Ivós Játékunk"
            ></Card>
          </a>
          <a href="#/Contact">
            <Card
              image={dog}
              imageRemoved={dogRemoved}
              caption="Kapcsolat"
            ></Card>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
