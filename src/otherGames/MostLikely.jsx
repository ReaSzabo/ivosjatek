import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class MostLikely extends Component {
  render() {
    return (
      <OtherGame
        title="Most Likely"
        subtitle="Ami kell hozzá: italok"
        text="A játékosok körben ülnek és feltesznek egy 
        'legvalószínűbb' kérdést. 
        Például: 'Kinél a legvalószínűbb, hogy dugította már el a WC-t?' 
        Ezután háromra mindenki arra a személyre mutat, 
        aki szerinte a legvalószínűbb. Akire a legtöbben mutatnak, 
        az iszik és annyit, ahányan mutattak rá."
      ></OtherGame>
    );
  }
}

export default MostLikely;
