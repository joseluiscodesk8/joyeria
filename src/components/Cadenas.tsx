import { useState } from "react";
import Image from "next/image";
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

const Catalogo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { menuOpen } = useMenu();

  return (
    <section className={menuOpen ? styles.menuOpen : ""}>
      <main className={styles.catalogo} style={{ opacity: menuOpen ? 0 : 1 }}>
        <h1>Cadenas</h1>
        <div className={styles["swiper-container"]}>
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
                <motion.picture
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={joya.imagen}
                    alt={joya.nombre}
                    width={200}
                    height={200}
                  />
                </motion.picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <article className={styles["joya-details"]}>
          <h2>{joyas[activeIndex].nombre}</h2>
          <p>Kilataje: {joyas[activeIndex].kilataje}</p>
          <p>Tipo: {joyas[activeIndex].tipo}</p>
          <p>Peso: {joyas[activeIndex].peso}</p>
          <p>Medidas: {joyas[activeIndex].medidas}</p>
        </article>
      </main>
    </section>
  );
};

export default Catalogo;
