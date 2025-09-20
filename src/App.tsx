import Menu from "./menu/Menu";
import OtherGames from "./components/otherGames/OtherGames";
import Game from "./drinkingGame/Game";
import Contact from "./contact/Contact";
import BeerPong from "./components/otherGame/BeerPong";
import Boardgames from "./components/otherGame/Boardgames";
import Bumm from "./components/otherGame/Bumm";
import DeathCircle from "./components/otherGame/DeathCircle";
import Djibouti from "./components/otherGame/Djibouti";
import DrawACardAndHope from "./components/otherGame/DrawACardAndHope";
import FlipCup from "./components/otherGame/FlipCup";
import INeverHaveEver from "./components/otherGame/INeverHaveEver";
import Jenga from "./components/otherGame/Jenga";
import KingsCup from "./components/otherGame/KingsCup";
import MostLikely from "./components/otherGame/MostLikely";
import OneTrueOneFalse from "./components/otherGame/OneTrueOneFalse";
import RussianRoulette from "./components/otherGame/RussianRoulette";
import StuckTogether from "./components/otherGame/StuckTogether";
import TakeTheBag from "./components/otherGame/TakeTheBag";
import Thumper from "./components/otherGame/Thumper";
import TRex from "./components/otherGame/TRex";
import UnflinchingFace from "./components/otherGame/UnflinchingFace";

import { createHashRouter, RouterProvider } from "react-router-dom";

import "../styles/globals.scss";

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
