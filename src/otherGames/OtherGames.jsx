import { Component } from "react";
import "./OtherGames.scss";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide_image_1 from "../assets/images/otherGames/img_1.png";
import slide_image_2 from "../assets/images/otherGames/img_2.png";
import slide_image_3 from "../assets/images/otherGames/img_3.png";
import slide_image_4 from "../assets/images/otherGames/img_4.png";
import slide_image_5 from "../assets/images/otherGames/img_5.png";
import slide_image_6 from "../assets/images/otherGames/img_6.png";
import slide_image_7 from "../assets/images/otherGames/img_7.png";
import slide_image_8 from "../assets/images/otherGames/img_8.png";
import slide_image_9 from "../assets/images/otherGames/img_9.png";
import slide_image_10 from "../assets/images/otherGames/img_10.png";
import slide_image_11 from "../assets/images/otherGames/img_11.png";
import slide_image_12 from "../assets/images/otherGames/img_12.png";
import slide_image_13 from "../assets/images/otherGames/img_13.png";
import slide_image_14 from "../assets/images/otherGames/img_14.png";
import slide_image_15 from "../assets/images/otherGames/img_15.png";
import slide_image_16 from "../assets/images/otherGames/img_16.png";
import slide_image_17 from "../assets/images/otherGames/img_17.png";
import slide_image_18 from "../assets/images/otherGames/img_18.png";

class OtherGames extends Component {
  render() {
    return (
      <div className="background">
        <a href="/#/#Menu">
          <button type="description__submit">
            <span class="text"> back </span>
            <span class="blob"></span>
            <span class="blob"></span>
            <span class="blob"></span>
            <span class="blob"></span>
          </button>
        </a>
        <div className="container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <a href="#/OtherGames/KingsCup">
                <img src={slide_image_1} alt="slide_image" />
                <div className="caption"> Kings Cup </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/Thumper">
                <img src={slide_image_2} alt="slide_image" />
                <div className="caption"> Thumper </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/UnflinchingFace">
                <img src={slide_image_3} alt="slide_image" />
                <div className="caption"> Unflinching Face </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/FlipCup">
                <img src={slide_image_4} alt="slide_image" />
                <div className="caption"> Flip Cup </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/Bumm">
                <img src={slide_image_5} alt="slide_image" />
                <div className="caption"> Bumm </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/MostLikely">
                <img src={slide_image_6} alt="slide_image" />
                <div className="caption"> Most Likely </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/TakeTheBag">
                <img src={slide_image_7} alt="slide_image" />
                <div className="caption"> Take The Bag </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/Jenga">
                <img src={slide_image_8} alt="slide_image" />
                <div className="caption"> Jenga </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/StuckTogether">
                <img src={slide_image_9} alt="slide_image" />
                <div className="caption"> Stuck Together </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/INeverHaveEver">
                <img src={slide_image_10} alt="slide_image" />
                <div className="caption"> I Never Have Ever </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/BeerPong">
                <img src={slide_image_11} alt="slide_image" />
                <div className="caption"> Beer Pong </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/TRex">
                <img src={slide_image_12} alt="slide_image" />
                <div className="caption"> T-Rex </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/DeathCircle">
                <img src={slide_image_13} alt="slide_image" />
                <div className="caption"> Death Circle </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/DrawACardAndHope">
                <img src={slide_image_14} alt="slide_image" />
                <div className="caption"> Draw A Card And Hope </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/Djibouti">
                <img src={slide_image_15} alt="slide_image" />
                <div className="caption"> Djibouti </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/OneTrueOneFalse">
                <img src={slide_image_16} alt="slide_image" />
                <div className="caption"> One True, One False </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/Boardgames">
                <img src={slide_image_17} alt="slide_image" />
                <div className="caption"> Boardgames </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#/OtherGames/RussianRoulette">
                <img src={slide_image_18} alt="slide_image" />
                <div className="caption"> Russian Roulette </div>
              </a>
            </SwiperSlide>

            <div className="slider-controler"></div>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default OtherGames;
