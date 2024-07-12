import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class Thumper extends Component {
  render() {
    return (
      <OtherGame
        title="Thumper"
        subtitle="Ez egy gyors és egyszerű, hangos és csapkodós játék"
        text="Körbeültök egy asztalt, ezután pedig mindenki elkezd lassan tapsolni: 
        kettőt az asztalra csaptok, kettőt tapsoltok. 
        Az asztalra csapásokat és a tapsolást is hanggal nyomatékosítjátok. 
        Ezután mindenki mutat egy egyéni jelet, mondjuk meghúzza a fülét vagy betakarja a szemét. 
        Miközben mindenki tapsol a ritmus szerint, az első játékos mutatja a saját jelét, 
        majd egy másikét. Ezt a másiknak észre kell vennie, majd ugyanúgy mutatnia a saját, 
        majd egy harmadik játékos jelét, és így tovább. 
        Aki nem reagál gyorsan és helyesen, annak meg kell innia a pohara teljes tartalmát."
      ></OtherGame>
    );
  }
}

export default Thumper;
