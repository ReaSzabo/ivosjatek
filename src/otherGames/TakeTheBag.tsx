import { Component } from "react";
import OtherGame from "./OtherGame";

class TakeTheBag extends Component {
  render() {
    return (
      <OtherGame
        title="Fogd a táskát"
        subtitle="Ami kell hozzá: italok, papírtáska"
        text="Ez egy nagyon szórakoztató játék, akár már ezen a hétvégén kipróbálhatjátok. 
            Tegyetek egy papírtáskát a földre, majd próbáljátok felvenni. Na de hol a csavar? 
            Csak a szátokat használhatjátok hozzá, semmi mást. Akinek nem sikerül felvenni a táskát, iszik."
      ></OtherGame>
    );
  }
}

export default TakeTheBag;
