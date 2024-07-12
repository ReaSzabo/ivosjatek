import { Component } from "react";
import OtherGame from "./OtherGame.jsx";

class Boardgames extends Component {
  render() {
    return (
      <OtherGame
        title="Board Games"
        subtitle="Alkoholi és Részegedj Okosan!"
        text="A két legismertebb ivós társasjáték, amelyeket meg is vásárolhatsz, de elkészítheted magad is. Ha jól megnézed a képet, 
        minden magyarázat feleslegessé válik a játék brutalitását illetően."
      ></OtherGame>
    );
  }
}

export default Boardgames;
