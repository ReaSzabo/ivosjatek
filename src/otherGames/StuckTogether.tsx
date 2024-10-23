import { Component } from "react";
import OtherGame from "./OtherGame";

class StuckTogether extends Component {
  render() {
    return (
      <OtherGame
        title="Összeragadva"
        subtitle="Ez a játék szó szerint közelebb hoz titeket."
        text="Kettesével vagytok párban, és úgy kell végrehajtanotok bizonyos feladatokat, 
        hogy egy-egy testrészetek össze van kötve. Ha ez nem sikerül, akkor bizony mindketten isztok."
      ></OtherGame>
    );
  }
}

export default StuckTogether;
