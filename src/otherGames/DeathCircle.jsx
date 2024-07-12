import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class DeathCircle extends Component {
  render() {
    return (
      <OtherGame
        title="Death Circle"
        subtitle="A Halálkör az egyik legegyszerűbb itatós kártyajáték. 
        Ami kell hozzá: italok, franciakártyák"
        text="Bizonyos laptípusoknál bizonyos csoportok isznak 
        (pl. pirosnál a lapot húzó, hetesnél a fiúk, nyolcasnál a lányok stb.). 
        Kilencesnél egy szót kell bemondani, és mindenkinek kell rá mondani egy rímet. 
        Aki nem tud, iszik"
      ></OtherGame>
    );
  }
}

export default DeathCircle;
