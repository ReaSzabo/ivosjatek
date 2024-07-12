import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class INeverHaveEver extends Component {
  render() {
    return (
      <OtherGame
        title="I Never Have Ever"
        subtitle="Ami kell hozzá: italok"
        text="Az 'Én még soha' játék nagyszerű lehetőség arra, 
        hogy megismerhesd a barátaid titkait. 
        Ossz meg valamit a többiekkel, amit még soha nem tettél meg. 
        Ha valaki megtette a jelen lévők közül, neki innia kell. 
        Például, ha azt mondod: 'engem még soha nem igazoltattak', 
        akkor mindazok, akiket már igen, isznak. A legfontosabb, hogy 
        a barátaid elismerjék a ciki sztorikat is, így gondold meg, 
        mit mondasz."
      ></OtherGame>
    );
  }
}

export default INeverHaveEver;
