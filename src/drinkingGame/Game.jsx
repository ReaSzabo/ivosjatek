import { Component } from "react";
import "./Game.scss";
import GameCard from "./GameCard.jsx";
import questionArray from "./questions.json";

import bf1 from "../assets/images/game/backface_images/backface_1.png";
import bf2 from "../assets/images/game/backface_images/backface_2.png";
import bf3 from "../assets/images/game/backface_images/backface_3.png";
import bf4 from "../assets/images/game/backface_images/backface_4.png";
import bf5 from "../assets/images/game/backface_images/backface_5.png";
import bf6 from "../assets/images/game/backface_images/backface_6.png";
import bf7 from "../assets/images/game/backface_images/backface_7.png";
import bf8 from "../assets/images/game/backface_images/backface_8.png";
import bf9 from "../assets/images/game/backface_images/backface_9.png";
import bf10 from "../assets/images/game/backface_images/backface_10.png";
import bf11 from "../assets/images/game/backface_images/backface_11.png";
import bf12 from "../assets/images/game/backface_images/backface_12.png";
import bf13 from "../assets/images/game/backface_images/backface_13.png";
import bf14 from "../assets/images/game/backface_images/backface_14.png";
import bf15 from "../assets/images/game/backface_images/backface_15.png";
import bf16 from "../assets/images/game/backface_images/backface_16.png";
import bf17 from "../assets/images/game/backface_images/backface_17.png";
import bf18 from "../assets/images/game/backface_images/backface_18.png";
import bf19 from "../assets/images/game/backface_images/backface_19.png";
import bf20 from "../assets/images/game/backface_images/backface_20.png";
import bf21 from "../assets/images/game/backface_images/backface_21.png";
import bf22 from "../assets/images/game/backface_images/backface_22.png";
import bf23 from "../assets/images/game/backface_images/backface_23.png";
import bf24 from "../assets/images/game/backface_images/backface_24.png";
import bf25 from "../assets/images/game/backface_images/backface_25.png";
import bf26 from "../assets/images/game/backface_images/backface_26.png";
import bf27 from "../assets/images/game/backface_images/backface_27.png";
import bf28 from "../assets/images/game/backface_images/backface_28.png";
import bf29 from "../assets/images/game/backface_images/backface_29.png";
import bf30 from "../assets/images/game/backface_images/backface_30.png";
import bf31 from "../assets/images/game/backface_images/backface_31.png";
import bf32 from "../assets/images/game/backface_images/backface_32.png";
import bf33 from "../assets/images/game/backface_images/backface_33.png";
import bf34 from "../assets/images/game/backface_images/backface_34.png";
import bf35 from "../assets/images/game/backface_images/backface_35.png";
import bf36 from "../assets/images/game/backface_images/backface_36.png";
import bf37 from "../assets/images/game/backface_images/backface_37.png";
import bf38 from "../assets/images/game/backface_images/backface_38.png";
import bf39 from "../assets/images/game/backface_images/backface_39.png";
import bf40 from "../assets/images/game/backface_images/backface_40.png";
import bf41 from "../assets/images/game/backface_images/backface_41.png";
import bf42 from "../assets/images/game/backface_images/backface_42.png";
import bf43 from "../assets/images/game/backface_images/backface_43.png";
import bf44 from "../assets/images/game/backface_images/backface_44.png";
import bf45 from "../assets/images/game/backface_images/backface_45.png";
import bf46 from "../assets/images/game/backface_images/backface_46.png";
import bf47 from "../assets/images/game/backface_images/backface_47.png";
import bf48 from "../assets/images/game/backface_images/backface_48.png";
import bf49 from "../assets/images/game/backface_images/backface_49.png";
import bf50 from "../assets/images/game/backface_images/backface_50.png";
import bf51 from "../assets/images/game/backface_images/backface_51.png";
import bf52 from "../assets/images/game/backface_images/backface_52.png";
import bf53 from "../assets/images/game/backface_images/backface_53.png";
import bf54 from "../assets/images/game/backface_images/backface_54.png";
import bf55 from "../assets/images/game/backface_images/backface_55.png";
import bf56 from "../assets/images/game/backface_images/backface_56.png";
import bf57 from "../assets/images/game/backface_images/backface_57.png";
import bf58 from "../assets/images/game/backface_images/backface_58.png";
import bf59 from "../assets/images/game/backface_images/backface_59.png";
import bf60 from "../assets/images/game/backface_images/backface_60.png";
import bf61 from "../assets/images/game/backface_images/backface_61.png";
import bf62 from "../assets/images/game/backface_images/backface_62.png";
import bf63 from "../assets/images/game/backface_images/backface_63.png";
import bf64 from "../assets/images/game/backface_images/backface_64.png";
import bf65 from "../assets/images/game/backface_images/backface_65.png";
import bf66 from "../assets/images/game/backface_images/backface_66.png";
import bf67 from "../assets/images/game/backface_images/backface_67.png";
import bf68 from "../assets/images/game/backface_images/backface_68.png";
import bf69 from "../assets/images/game/backface_images/backface_69.png";
import bf70 from "../assets/images/game/backface_images/backface_70.png";
import bf71 from "../assets/images/game/backface_images/backface_71.png";
import bf72 from "../assets/images/game/backface_images/backface_72.png";
import bf73 from "../assets/images/game/backface_images/backface_73.png";
import bf74 from "../assets/images/game/backface_images/backface_74.png";
import bf75 from "../assets/images/game/backface_images/backface_75.png";
import bf76 from "../assets/images/game/backface_images/backface_76.png";
import bf77 from "../assets/images/game/backface_images/backface_77.png";
import bf78 from "../assets/images/game/backface_images/backface_78.png";
import bf79 from "../assets/images/game/backface_images/backface_79.png";
import bf80 from "../assets/images/game/backface_images/backface_80.png";
import bf81 from "../assets/images/game/backface_images/backface_81.png";
import bf82 from "../assets/images/game/backface_images/backface_82.png";
import bf83 from "../assets/images/game/backface_images/backface_83.png";
import bf84 from "../assets/images/game/backface_images/backface_84.png";
import bf85 from "../assets/images/game/backface_images/backface_85.png";
import bf86 from "../assets/images/game/backface_images/backface_86.png";
import bf87 from "../assets/images/game/backface_images/backface_87.png";
import bf88 from "../assets/images/game/backface_images/backface_88.png";
import bf89 from "../assets/images/game/backface_images/backface_89.png";
import bf90 from "../assets/images/game/backface_images/backface_90.png";
import bf91 from "../assets/images/game/backface_images/backface_91.png";
import bf92 from "../assets/images/game/backface_images/backface_92.png";
import bf93 from "../assets/images/game/backface_images/backface_93.png";
import bf94 from "../assets/images/game/backface_images/backface_94.png";
import bf95 from "../assets/images/game/backface_images/backface_95.png";
import bf96 from "../assets/images/game/backface_images/backface_96.png";
import bf97 from "../assets/images/game/backface_images/backface_97.png";
import bf98 from "../assets/images/game/backface_images/backface_98.png";








// importáljuk a képeket
// a kérdések mintájára létrehozunk egy images tömböt a stateben, amiben az összes kép benne van
// az importált képeket változókként kezeljük
// a currentQuestion mintájára létrehozunk egy currentImage state-t
// mindig a kártyakattintás során akarjuk kicserélni a képeket
// mindig egy random képet szeretnénk a currentQuestion helyére
// nem szükséges a képek tömbből kivenni a már felhasznált képeket
// a currentImage-t átadjuk a GameCard componentnek - valahogy ;)
// a GameCard componentben felhasználjuk a megkapott currentImaget

class Game extends Component {
  state = {
    questions: questionArray,
    currentQuestion: null,
    isFlipped: false,
    backfaceImages: [bf1, bf2, bf3, bf4, bf5, bf6, bf7, bf8, bf9, bf10,
      bf11, bf12, bf13, bf14, bf15, bf16, bf17, bf18, bf19, bf20,
      bf21, bf22, bf23, bf24, bf25, bf26, bf27, bf28, bf29, bf30,
      bf31, bf32, bf33, bf34, bf35, bf36, bf37, bf38, bf39, bf40,
      bf41, bf42, bf43, bf44, bf45, bf46, bf47, bf48, bf49, bf50,
      bf51, bf52, bf53, bf54, bf55, bf56, bf57, bf58, bf59, bf60,
      bf61, bf62, bf63, bf64, bf65, bf66, bf67, bf68, bf69, bf70,
      bf71, bf72, bf73, bf74, bf75, bf76, bf77, bf78, bf79, bf80,
      bf81, bf82, bf83, bf84, bf85, bf86, bf87, bf88, bf89, bf90,
      bf91, bf92, bf93, bf94, bf95, bf96, bf97, bf98],
    currentBackfaceImage: bf1,
  };

  counter = 0;

  setOnCardClick = () => {

    // Exit function if there is no more question
    if (this.state.questions.length === 0) {
      return;
    }

    // Get a random question and store it in a variable
    let tempCurrentQuestion = this.state.questions[
      Math.floor(Math.random() * this.state.questions.length)
    ].hu;

    let tempCurrentBackfaceImage = this.state.backfaceImages[
      Math.floor(Math.random() * this.state.backfaceImages.length)
    ];

    // Put the random question to the "this.state.currentQuestion"
    if (this.state.isFlipped) {
      this.setState({
        isFlipped: false,
        currentBackfaceImage: tempCurrentBackfaceImage,
      })
    } else {
      this.setState({
        isFlipped: true,
        currentQuestion: tempCurrentQuestion,
      });
    }

    this.counter++;

  }


  render() {
    return (
      <div className="gameContainer">
        <div
          onClick={this.setOnCardClick}
        >
          <GameCard
            text={this.state.currentQuestion}
            isFlipped={this.state.isFlipped}
            image={this.state.currentBackfaceImage}
          >
          </GameCard>
        </div>
      </div>
    );
  }
}

export default Game;
