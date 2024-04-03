import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class BeerPong extends Component {
  render() {
    return (
      <OtherGame
        title="BeerPong"
        subtitle="Egyszerűek a szabályok és a játék is"
        text="Két csapat játszik egymás ellen. 
        A lényeg, hogy az ellenfél poharába beledobj egy pingponglabdát, és ha ez sikerült, meg kell inniuk a pohár tartalmát. Ha a labda visszapattan a ti térfeletekre, 
        újra dobhattok, viszont arra ügyeljetek, 
        hogy mindig legyen a közelben egy pohár víz, 
        amit a labda öblítésére használhattok. 
        A játék játszható különböző tartalmú poharakkal is (pl. sör és fröccs). 
        A poharak elrendezése ugyanaz, mint a sörpongnál, 
        viszont a fröccs és a sör aránya csakis rajtatok áll."
      ></OtherGame>
    );
  }
}

export default BeerPong;
