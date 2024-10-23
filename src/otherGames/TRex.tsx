import { Component } from "react";
import OtherGame from "./OtherGame";

class TRex extends Component {
  render() {
    return (
      <OtherGame
        title="T-Rex"
        subtitle="Egy egész éjszakán át tartó, nagyon idegesítő játék"
        text="Mindig amikor iszol, a könyöködet az oldaladhoz kell szorítanod, 
        mint egy T-Rex, ha ezt elfelejted és nem tudod (vagy akarod) elsunnyogni, újra innod kell."
      ></OtherGame>
    );
  }
}

export default TRex;
