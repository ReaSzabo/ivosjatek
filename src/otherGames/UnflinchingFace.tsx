import { Component } from "react";
import OtherGame from "./OtherGame";

class UnflinchingFace extends Component {
  render() {
    return (
      <OtherGame
        title="Rezzenéstelen arc"
        subtitle="Ami kell hozzá: italok, papír, toll"
        text="Amikor isztok, nehéz rezzenéstelen arccal ülni, így ez a játék remek kihívás. 
      Egyikőtök vicces vagy figyelemfelkeltő mondatokat ír papírcetlikre, miközben mindenki rezzenéstelen arccal ül. 
      Ezután minden játékos felvesz egy papírt és megpróbálja megőrizni rezzenéstelen arckifejezését. 
      Akinek nem sikerül vagy bármilyen reakciót mutat, innia kell."
      ></OtherGame>
    );
  }
}

export default UnflinchingFace;
