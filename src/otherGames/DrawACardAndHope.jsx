import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class DrawACardAndHope extends Component {
  render() {
    return (
      <OtherGame
        title="Draw a Card and Hope"
        subtitle="Ami kell hozzá: italok, franciakártyák"
        text="Ehhez a játékhoz nem kell más, csak egy pakli kártya, 
        haverok és pia. Keverjétek meg a paklit alaposan, és már kezdődhet is a játék. 
        Minden körben sorban húztok egy-egy lapot, és a lapnak tulajdonított feladat érvényesül: 
        (A játékban szereplő lapok: 7, 8, 9, 10, J, Q, K, A)

        7: Csak te iszol
        
        8: Csak a fiúk isznak
        
        9: Csak a lányok isznak
        
        10: Mindenki iszik
        
        J: Akik melletted ülnek, isznak
        
        Q: Kijelölhetsz valakit, aki igyon
        
        K: Ez a legizgalmasabb lap. Kijelölhetsz valakit, hogy minden alkalommal, amikor neked innod kell, ő is igyon. Ez az áldás (vagy átok) addig tart, amíg a pakli összes lapját el nem használjátok.
        
        A: Válassz egyet a lapok funkciói közül (kivéve: K)"
      ></OtherGame>
    );
  }
}

export default DrawACardAndHope;
