/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/alt-text */
import { useState, forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

import joyas from "../data/jolleria.json";
import styles from "../styles/index.module.scss";
import { useMenu } from "../context/MenuContext";

interface Joya {
  imagen: string;
  nombre: string;
  kilataje: string;
  tipo: string;
  peso: string;
  medidas: string;
}

// Crear un componente MotionImage combinando motion con Image
const MotionImage = motion(
  forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
    <Image {...props} ref={ref as any} />
  ))
);

const Catalogo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { menuOpen } = useMenu();

  return (
    <main
      className={`${styles.catalogo} ${menuOpen ? styles.menuAbierto : ""}`}
    >
      <h1>Cadenas</h1>
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
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[EffectCoverflow]}
          >
            {joyas.map((joya: Joya, index: number) => (
              <SwiperSlide key={index}>
                <picture>
                <MotionImage
                  src={joya.imagen}
                  alt={joya.nombre}
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
      <article className={styles["joya-details"]}>
        <h2>{joyas[activeIndex].nombre}</h2>
        <p>Kilataje: {joyas[activeIndex].kilataje}</p>
        <p>Tipo: {joyas[activeIndex].tipo}</p>
        <p>Peso: {joyas[activeIndex].peso}</p>
        <p>Medidas: {joyas[activeIndex].medidas}</p>
      </article>
    </main>
  );
};

export default Catalogo;
