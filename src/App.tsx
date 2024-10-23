import Menu from "./menu/Menu";
import OtherGames from "./otherGames/OtherGames";
import Game from "./drinkingGame/Game";
import Contact from "./contact/Contact";
import BeerPong from "./otherGames/BeerPong";
import Boardgames from "./otherGames/Boardgames";
import Bumm from "./otherGames/Bumm";
import DeathCircle from "./otherGames/DeathCircle";
import Djibouti from "./otherGames/Djibouti";
import DrawACardAndHope from "./otherGames/DrawACardAndHope";
import FlipCup from "./otherGames/FlipCup";
import INeverHaveEver from "./otherGames/INeverHaveEver";
import Jenga from "./otherGames/Jenga";
import KingsCup from "./otherGames/KingsCup";
import MostLikely from "./otherGames/MostLikely";
import OneTrueOneFalse from "./otherGames/OneTrueOneFalse";
import RussianRoulette from "./otherGames/RussianRoulette";
import StuckTogether from "./otherGames/StuckTogether";
import TakeTheBag from "./otherGames/TakeTheBag";
import Thumper from "./otherGames/Thumper";
import TRex from "./otherGames/TRex";
import UnflinchingFace from "./otherGames/UnflinchingFace";

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
