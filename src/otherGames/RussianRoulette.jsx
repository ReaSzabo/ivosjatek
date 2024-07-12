import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class RussianRoulette extends Component {
  render() {
    return (
      <OtherGame
        title="Russian Roulette"
        subtitle="Kell hozzá: felespoharak, ital"
        text="Ahányan vagytok, annyi feleses pohárra és valamilyen átlátszó röviditalra (eredetileg vodkára, de lehet gin, 
            fehérrum vagy pálinka) lesz szükségetek. Minden poharat megtöltötök vízzel, kivéve egyet, amibe az említett röviditalt töltitek. 
            A poharakat összekeveritek, majd mindenki lehúz egyet, és nézitek, vajon ki kapta a golyót."
      ></OtherGame>
    );
  }
}

export default RussianRoulette;
