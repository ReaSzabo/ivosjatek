import Menu from "./menu/Menu.jsx";
import OtherGames from "./otherGames/OtherGames.jsx";
import Game from "./drinkingGame/Game.jsx";
import Contact from "./contact/Contact.jsx";
import BeerPong from "./otherGames/BeerPong.jsx";
import Boardgames from "./otherGames/Boardgames.jsx";
import Bumm from "./otherGames/Bumm.jsx";
import DeathCircle from "./otherGames/DeathCircle.jsx";
import Djibouti from "./otherGames/Djibouti.jsx";
import DrawACardAndHope from "./otherGames/DrawACardAndHope.jsx";
import FlipCup from "./otherGames/FlipCup.jsx";
import INeverHaveEver from "./otherGames/INeverHaveEver.jsx";
import Jenga from "./otherGames/Jenga.jsx";
import KingsCup from "./otherGames/KingsCup.jsx";
import MostLikely from "./otherGames/MostLikely.jsx";
import OneTrueOneFalse from "./otherGames/OneTrueOneFalse.jsx";
import RussianRoulette from "./otherGames/RussianRoulette.jsx";
import StuckTogether from "./otherGames/StuckTogether.jsx";
import TakeTheBag from "./otherGames/TakeTheBag.jsx";
import Thumper from "./otherGames/Thumper.jsx";
import TRex from "./otherGames/TRex.jsx";
import UnflinchingFace from "./otherGames/UnflinchingFace.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Menu></Menu>,
  },
  {
    path: "/OtherGames",
    element: <OtherGames></OtherGames>,
  },
  {
    path: "/Game",
    element: <Game></Game>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/OtherGames/KingsCup",
    element: <KingsCup></KingsCup>,
  },
  {
    path: "/OtherGames/Thumper",
    element: <Thumper></Thumper>,
  },
  {
    path: "/OtherGames/UnflinchingFace",
    element: <UnflinchingFace></UnflinchingFace>,
  },
  {
    path: "/OtherGames/FlipCup",
    element: <FlipCup></FlipCup>,
  },
  {
    path: "/OtherGames/Bumm",
    element: <Bumm></Bumm>,
  },
  {
    path: "/OtherGames/MostLikely",
    element: <MostLikely></MostLikely>,
  },
  {
    path: "/OtherGames/TakeTheBag",
    element: <TakeTheBag></TakeTheBag>,
  },
  {
    path: "/OtherGames/Jenga",
    element: <Jenga></Jenga>,
  },
  {
    path: "/OtherGames/StuckTogether",
    element: <StuckTogether></StuckTogether>,
  },
  {
    path: "/OtherGames/INeverHaveEver",
    element: <INeverHaveEver></INeverHaveEver>,
  },
  {
    path: "/OtherGames/BeerPong",
    element: <BeerPong></BeerPong>,
  },
  {
    path: "/OtherGames/TRex",
    element: <TRex></TRex>,
  },
  {
    path: "/OtherGames/DeathCircle",
    element: <DeathCircle></DeathCircle>,
  },
  {
    path: "/OtherGames/DrawACardAndHope",
    element: <DrawACardAndHope></DrawACardAndHope>,
  },
  {
    path: "/OtherGames/Djibouti",
    element: <Djibouti></Djibouti>,
  },
  {
    path: "/OtherGames/OneTrueOneFalse",
    element: <OneTrueOneFalse></OneTrueOneFalse>,
  },
  {
    path: "/OtherGames/Boardgames",
    element: <Boardgames></Boardgames>,
  },
  {
    path: "/OtherGames/RussianRoulette",
    element: <RussianRoulette></RussianRoulette>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
