"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./OtherGames.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import Image from "next/image";

const slides = [
  { href: "/mas-ivos-jatekok/kings-cup", img: "/assets/images/other-games/img-1.webp", caption: "Kings Cup" },
  { href: "/mas-ivos-jatekok/thumper", img: "/assets/images/other-games/img-2.webp", caption: "Thumper" },
  { href: "/mas-ivos-jatekok/rezzenestelen-arc", img: "/assets/images/other-games/img-3.webp", caption: "Rezzenéstelen arc" },
  { href: "/mas-ivos-jatekok/pohar-fordito", img: "/assets/images/other-games/img-4.webp", caption: "Pohár fordító" },
  { href: "/mas-ivos-jatekok/legvaloszinubb", img: "/assets/images/other-games/img-6.webp", caption: "Legvalószínűbb" },
  { href: "/mas-ivos-jatekok/fogd-a-taskat", img: "/assets/images/other-games/img-7.webp", caption: "Fogd a táskát" },
  { href: "/mas-ivos-jatekok/jenga", img: "/assets/images/other-games/img-8.webp", caption: "Jenga" },
  { href: "/mas-ivos-jatekok/osszeragadva", img: "/assets/images/other-games/img-9.webp", caption: "Összeragadva" },
  { href: "/mas-ivos-jatekok/en-meg-soha", img: "/assets/images/other-games/img-10.webp", caption: "Én még soha..." },
  { href: "/mas-ivos-jatekok/bumm", img: "/assets/images/other-games/img-5.webp", caption: "Bumm" },
  { href: "/mas-ivos-jatekok/sorpong", img: "/assets/images/other-games/img-11.webp", caption: "Sörpong" },
  { href: "/mas-ivos-jatekok/t-rex", img: "/assets/images/other-games/img-12.webp", caption: "T-Rex" },
  { href: "/mas-ivos-jatekok/halalkor", img: "/assets/images/other-games/img-13.webp", caption: "Halálkör" },
  { href: "/mas-ivos-jatekok/huzz-es-remenykedj", img: "/assets/images/other-games/img-14.webp", caption: "Húzz és reménykedj" },
  { href: "/mas-ivos-jatekok/dzsibuti", img: "/assets/images/other-games/img-15.webp", caption: "Djibouti" },
  { href: "/mas-ivos-jatekok/egy-igaz-egy-hamis", img: "/assets/images/other-games/img-16.webp", caption: "Egy igaz, egy hamis" },
  { href: "/mas-ivos-jatekok/tarsas-jatekok", img: "/assets/images/other-games/img-17.webp", caption: "Társasjátékok" },
  { href: "/mas-ivos-jatekok/orosz-rulett", img: "/assets/images/other-games/img-18.webp", caption: "Orosz rulett" },
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
    <div className={styles["background-container"]}>
      <Link href="/">
        <button type="button" className={styles["back-button"]}>
          <span className={styles["back-button__text"]}>vissza</span>
          <span className={styles["back-button__layer"]}></span>
          <span className={styles["back-button__layer"]}></span>
          <span className={styles["back-button__layer"]}></span>
          <span className={styles["back-button__layer"]}></span>
        </button>
      </Link>
      <div className={styles["cards-container"]}>
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
            className={styles["swiper-container"]}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className={styles["swiper-slide"]}>
                <Link href={slide.href} className={styles["swiper-link"]}>
                  <Image
                    src={slide.img}
                    alt={slide.caption}
                    width={370}
                    height={560}
                    className={styles["swiper-image"]}
                  />
                  <h1 className={styles["swiper-caption"]}>{slide.caption}</h1>
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
            className={styles["swiper-container"]}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className={styles["swiper-slide"]}>
                <Link href={slide.href} className={styles["swiper-link"]}>
                  <Image
                    src={slide.img}
                    alt={slide.caption}
                    width={370}
                    height={560}
                    className={styles["swiper-image"]}
                  />
                  <h1 className={styles["swiper-caption"]}>{slide.caption}</h1>
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
