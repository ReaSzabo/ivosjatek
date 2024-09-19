import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class FlipCup extends Component {
  render() {
    return (
      <OtherGame
        title="Pohár fordító"
        subtitle="Ami kell hozzá: italok, fél literes műanyagpoharak"
        text="A pohár fordító az egyik legjobb ivós játék kezdőknek. 
        Két csapat versenyzik egymás ellen. 
        A két csapat egymásnak ellentétes oldalon áll és 
        a poharakat az italokkal az asztal szélén tartja. 
        Amelyik csapat előbb issza ki a poharak tartalmát és 
        pöccinti fejtetőre a poharakat, az nyer."
        picture="../assets/images/otherGames/img_4.webp"
      ></OtherGame>
    );
  }
}

export default FlipCup;
