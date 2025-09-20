"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./OtherGames.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import Image from "next/image";

const slides = [
  { href: "/mas-ivos-jatekok/KingsCup", img: "/assets/images/otherGames/img_1.webp", caption: "Kings Cup" },
  { href: "/mas-ivos-jatekok/Thumper", img: "/assets/images/otherGames/img_2.webp", caption: "Thumper" },
  { href: "/mas-ivos-jatekok/UnflinchingFace", img: "/assets/images/otherGames/img_3.webp", caption: "Rezzenéstelen arc" },
  { href: "/mas-ivos-jatekok/FlipCup", img: "/assets/images/otherGames/img_4.webp", caption: "Pohár fordító" },
  { href: "/mas-ivos-jatekok/MostLikely", img: "/assets/images/otherGames/img_6.webp", caption: "Legvalószínűbb" },
  { href: "/mas-ivos-jatekok/TakeTheBag", img: "/assets/images/otherGames/img_7.webp", caption: "Fogd a táskát" },
  { href: "/mas-ivos-jatekok/Jenga", img: "/assets/images/otherGames/img_8.webp", caption: "Jenga" },
  { href: "/mas-ivos-jatekok/StuckTogether", img: "/assets/images/otherGames/img_9.webp", caption: "Összeragadva" },
  { href: "/mas-ivos-jatekok/INeverHaveEver", img: "/assets/images/otherGames/img_10.webp", caption: "Én még soha..." },
  { href: "/mas-ivos-jatekok/Bumm", img: "/assets/images/otherGames/img_5.webp", caption: "Bumm" },
  { href: "/mas-ivos-jatekok/BeerPong", img: "/assets/images/otherGames/img_11.webp", caption: "Sörpong" },
  { href: "/mas-ivos-jatekok/TRex", img: "/assets/images/otherGames/img_12.webp", caption: "T-Rex" },
  { href: "/mas-ivos-jatekok/DeathCircle", img: "/assets/images/otherGames/img_13.webp", caption: "Halálkör" },
  { href: "/mas-ivos-jatekok/DrawACardAndHope", img: "/assets/images/otherGames/img_14.webp", caption: "Húzz és reménykedj" },
  { href: "/mas-ivos-jatekok/Djibouti", img: "/assets/images/otherGames/img_15.webp", caption: "Djibouti" },
  { href: "/mas-ivos-jatekok/OneTrueOneFalse", img: "/assets/images/otherGames/img_16.webp", caption: "Egy igaz, egy hamis" },
  { href: "/mas-ivos-jatekok/Boardgames", img: "/assets/images/otherGames/img_17.webp", caption: "Társasjátékok" },
  { href: "/mas-ivos-jatekok/RussianRoulette", img: "/assets/images/otherGames/img_18.webp", caption: "Orosz rulett" },
];

const OtherGames: React.FC = () => {
  const [windowSize, setWindowSize] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1400);


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className={styles.backgroundContainer}>
      <Link href="/">
        <button type="button" className={styles.backButton}>
          <span className={styles.backButtonText}>vissza</span>
          <span className={styles.backButtonLayer}></span>
          <span className={styles.backButtonLayer}></span>
          <span className={styles.backButtonLayer}></span>
          <span className={styles.backButtonLayer}></span>
        </button>
      </Link>
      <div className={styles.cardsContainer}>
        {windowSize < 1235 ? (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            direction="vertical"
            slidesPerView={"auto"}
            initialSlide={7}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow]}
            className={styles.swiperContainer}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className={styles.swiperSlide}>
                <Link href={slide.href} className={styles.swiperLink}>
                  <Image
                    src={slide.img}
                    alt="Slide image"
                    width={370}
                    height={560}
                    className={styles.swiperImage}
                  />
                  <div className={styles.swiperCaption}>{slide.caption}</div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            direction="horizontal"
            slidesPerView={"auto"}
            initialSlide={9}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow]}
            className={styles.swiperContainer}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className={styles.swiperSlide}>
                <Link href={slide.href} className={styles.swiperLink}>
                  <Image
                    src={slide.img}
                    alt="Slide image"
                    width={370}
                    height={560}
                    className={styles.swiperImage}
                  />
                  <div className={styles.swiperCaption}>{slide.caption}</div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default OtherGames;
