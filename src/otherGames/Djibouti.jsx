import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class Djibouti extends Component {
  render() {
    return (
      <OtherGame
        title="Djibouti"
        subtitle="Nagy társasággal érdemes játszani ezt a számolós játékot."
        text="A szabály a következő: minden játékos az óramutató 
        járásával megegyező irányban elkezd felfele számolni: 
        egy, kettő, három, négy... azonban a hetes szám helyett a 'Dzsibuti' szót kell mondani. 
        A hetet tartalmazó és 7-tel osztható számok helyett mindig 'Dzsibutit' mondunk: 
        7.14,17,21,27,28,stb

        Na de! A hetesnél, azaz a dzsibutinál megfordul a kör, 
        és az óramutató járásával ellentétesen kell folytatni tovább.
        
        Nagyon egyszerű elrontani: hetest mondasz, túl sokáig gondolkozol, 
        elfelejted, hogy megfordult a sorrend. 
        Aki hibázik, annak le kell húznia egy pohár előre kitöltött italt, 
        ami lehet rövid is..."
      ></OtherGame>
    );
  }
}

export default Djibouti;
