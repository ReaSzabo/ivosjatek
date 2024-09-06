import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class KingsCup extends Component {
  render() {
    return (
      <OtherGame
        title="Kings Cup"
        subtitle="Ami kell hozzá: italok, franciakártyák"
        text="A Kings Cupot bármennyien játszhatjátok. 
            A lényeg, hogy készítetek egy listát, hogy milyen kártyához
             milyen ivós feladatot rendeltek, majd húztok a kártyapakliból. 
             Minden alkalommal azt kell tenned, ami a listán az adott kártya mellett szerepel. 
             Minél jobban belebonyolódtok a játékba, annál izgalmasabb. 
             Léteznek Kings Cup nevű, angol nyelvű applikációk is. 
             Ezekben a kártyák felett megjelennek a szabályok is, 
             így nem kell neked kitalálnod őket."
        picture="../assets/images/otherGames/img_1.webp"
      ></OtherGame>
    );
  }
}

export default KingsCup;
