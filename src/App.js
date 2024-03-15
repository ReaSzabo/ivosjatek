import './App.css';
import Menu from "./Menu.jsx";
import OtherGames from "./OtherGames.jsx";
import Game from "./Game.jsx";
import Contact from "./Contact.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

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
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
