/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/alt-text */

import { useState, forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay  } from "swiper/modules";

import styles from '../styles/index.module.scss';
import data from '../data/relojesyplata.json';
import { useMenu } from "../context/MenuContext";


const MotionImage = motion(
    forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
      <Image {...props} ref={ref as any} />
    ))
  )

const RelojesYPlata: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { menuOpen } = useMenu();
    return <>
        <main className={`${styles.relojesYPlata} ${menuOpen ? styles.menuAbierto : ""}`}>
        <section className={styles["swiper-container"]}>
        <picture>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
                delay: 2500, // Adjust the delay as needed
                disableOnInteraction: false, // Keeps autoplay active after interactions
              }}
              loop={true} // Enables infinite looping
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[EffectCoverflow, Autoplay]}
          >
            {data.map((data, index) => (
              <SwiperSlide key={index}>
                <picture>
                <MotionImage
                  src={data.src}
                  alt={data.alt}
                  width={200}
                  height={200}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                />
                  </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </picture>
        </section>
        </main>
    </>
}

export default RelojesYPlata;