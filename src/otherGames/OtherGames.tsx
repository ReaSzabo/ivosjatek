import { Component } from "react";
import { useRouter } from 'next/router';
import styles from "./OtherGames.module.scss";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slide_images = [
  "/assets/images/otherGames/img_1.webp",
  "/assets/images/otherGames/img_2.webp",
  "/assets/images/otherGames/img_3.webp",
  "/assets/images/otherGames/img_4.webp",
  "/assets/images/otherGames/img_5.webp",
  "/assets/images/otherGames/img_6.webp",
  "/assets/images/otherGames/img_7.webp",
  "/assets/images/otherGames/img_8.webp",
  "/assets/images/otherGames/img_9.webp",
  "/assets/images/otherGames/img_10.webp",
  "/assets/images/otherGames/img_11.webp",
  "/assets/images/otherGames/img_12.webp",
  "/assets/images/otherGames/img_13.webp",
  "/assets/images/otherGames/img_14.webp",
  "/assets/images/otherGames/img_15.webp",
  "/assets/images/otherGames/img_16.webp",
  "/assets/images/otherGames/img_17.webp",
  "/assets/images/otherGames/img_18.webp",
];

class OtherGames extends Component {

  state = {
    windowSize: 0
  }


  componentDidMount() {
    this.setState({ windowSize: window.innerWidth });
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowSize: window.innerWidth
    })
  }
  handleBack = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div className={styles['othergames-background']}>
        <button type="button" className={styles['othergames-back-btn']} onClick={this.handleBack}>
          <span className={styles['othergames-back-btn-text']}> vissza </span>
          <span className={styles['othergames-back-btn-blob'] + ' ' + styles['othergames-back-btn-blob2']}></span>
          <span className={styles['othergames-back-btn-blob'] + ' ' + styles['othergames-back-btn-blob3']}></span>
          <span className={styles['othergames-back-btn-blob'] + ' ' + styles['othergames-back-btn-blob4']}></span>
          <span className={styles['othergames-back-btn-blob'] + ' ' + styles['othergames-back-btn-blob5']}></span>
        </button>
        <div className={styles['othergames-container']}>
          {this.state.windowSize < 1235 ?
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              direction={'vertical'}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles['othergames-swiper-container']}
            >
              {[
                { href: "/OtherGames/KingsCup", caption: "Kings Cup" },
                { href: "/OtherGames/Thumper", caption: "Thumper" },
                { href: "/OtherGames/UnflinchingFace", caption: "Rezzenéstelen arc" },
                { href: "/OtherGames/FlipCup", caption: "Pohár fordító" },
                { href: "/OtherGames/Bumm", caption: "Bumm" },
                { href: "/OtherGames/MostLikely", caption: "Legvalószínűbb" },
                { href: "/OtherGames/TakeTheBag", caption: "Fogd a táskát" },
                { href: "/OtherGames/Jenga", caption: "Jenga" },
                { href: "/OtherGames/StuckTogether", caption: "Összeragadva" },
                { href: "/OtherGames/INeverHaveEver", caption: "Én még soha..." },
                { href: "/OtherGames/BeerPong", caption: "Sörpong" },
                { href: "/OtherGames/TRex", caption: "T-Rex" },
                { href: "/OtherGames/DeathCircle", caption: "Halálkör" },
                { href: "/OtherGames/DrawACardAndHope", caption: "Húzz és reménykedj" },
                { href: "/OtherGames/Djibouti", caption: "Djibouti" },
                { href: "/OtherGames/OneTrueOneFalse", caption: "Egy igaz, egy hamis" },
                { href: "/OtherGames/Boardgames", caption: "Társasjátékok" },
                { href: "/OtherGames/RussianRoulette", caption: "Orosz rulett" },
              ].map((slide, idx) => (
                <SwiperSlide key={slide.href} className={styles['othergames-swiper-slide']}>
                  <a href={slide.href} className={styles['othergames-slide-link']}>
                    <img src={slide_images[idx]} alt="slide_image" className={styles['othergames-swiper-slide-img']} />
                    <div className={styles['othergames-caption']}> {slide.caption} </div>
                  </a>
                </SwiperSlide>
              ))}

              <div className={styles['othergames-slider-controler']}></div>
            </Swiper> :
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              direction={'horizontal'}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles['othergames-swiper-container']}
            >
              {[
                { href: "/OtherGames/KingsCup", caption: "Kings Cup" },
                { href: "/OtherGames/Thumper", caption: "Thumper" },
                { href: "/OtherGames/UnflinchingFace", caption: "Rezzenéstelen arc" },
                { href: "/OtherGames/FlipCup", caption: "Pohár fordító" },
                { href: "/OtherGames/Bumm", caption: "Bumm" },
                { href: "/OtherGames/MostLikely", caption: "Legvalószínűbb" },
                { href: "/OtherGames/TakeTheBag", caption: "Fogd a táskát" },
                { href: "/OtherGames/Jenga", caption: "Jenga" },
                { href: "/OtherGames/StuckTogether", caption: "Összeragadva" },
                { href: "/OtherGames/INeverHaveEver", caption: "Én még soha..." },
                { href: "/OtherGames/BeerPong", caption: "Sörpong" },
                { href: "/OtherGames/TRex", caption: "T-Rex" },
                { href: "/OtherGames/DeathCircle", caption: "Halálkör" },
                { href: "/OtherGames/DrawACardAndHope", caption: "Húzz és reménykedj" },
                { href: "/OtherGames/Djibouti", caption: "Djibouti" },
                { href: "/OtherGames/OneTrueOneFalse", caption: "Egy igaz, egy hamis" },
                { href: "/OtherGames/Boardgames", caption: "Társasjátékok" },
                { href: "/OtherGames/RussianRoulette", caption: "Orosz rulett" },
              ].map((slide, idx) => (
                <SwiperSlide key={slide.href} className={styles['othergames-swiper-slide']}>
                  <a href={slide.href} className={styles['othergames-slide-link']}>
                    <img src={slide_images[idx]} alt="slide_image" className={styles['othergames-swiper-slide-img']} />
                    <div className={styles['othergames-caption']}> {slide.caption} </div>
                  </a>
                </SwiperSlide>
              ))}

              <div className={styles['othergames-slider-controler']}></div>
            </Swiper>
          }
        </div>
      </div>
    );
  }
}

export default OtherGames;
