import { Component } from "react";
import "./Menu.scss";
import Card from "./Card.jsx";
import cat from "../assets/images/menu/cat.png";
import catRemoved from "../assets/images/menu/catRemoved.png";
import lion from "../assets/images/menu/lion.png";
import lionRemoved from "../assets/images/menu/lionRemoved.png";
import dog from "../assets/images/menu/dog.png";
import dogRemoved from "../assets/images/menu/dogRemoved.png";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-container__elements">
          <a href="/#/OtherGames">
            <Card
              image={cat}
              imageRemoved={catRemoved}
              caption="Other Drinking Games"
            ></Card>
          </a>
          <a href="/#/Game">
            <Card
              image={lion}
              imageRemoved={lionRemoved}
              caption="Our Drinking Game"
            ></Card>
          </a>
          <a href="/#/Contact">
            <Card
              image={dog}
              imageRemoved={dogRemoved}
              caption="Contact Us"
            ></Card>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
