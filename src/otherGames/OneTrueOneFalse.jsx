import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class OneTrueOneFalse extends Component {
  render() {
    return (
      <OtherGame
        title="One True, One False"
        subtitle="Nagy társasággal érdemes játszani ezt a számolós játékot."
        text="Ezt a régi, jól bevált játékot olyan társaságoknak ajánljuk, akik még kevéssé ismerik egymást – 
        tehát lehet egy randi is. A játék menete nagyon egyszerű: valaki elmesél két történetet. Ezek közül az egyik igaz, 
        a másik pedig hamis. Miután meghallgattátok a két történetet, tippelnetek kell, vajon melyik igaz, és melyik kamu. 
        A rosszul tippelőknek le kell húzniuk, ami előttük van (lehet sör, bor, tömény is). 
        Ha azonban mindenki rájött az igazságra, akkor a bénán kamuzó mesélőnek kell a pohara fenekére néznie."
      ></OtherGame>
    );
  }
}

export default OneTrueOneFalse;
