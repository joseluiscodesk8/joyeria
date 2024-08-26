
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';


import { EffectCreative, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import styles from "../styles/index.module.scss";
import { useMenu } from "../context/MenuContext";
import slides from "../data/slides.json";

const Slider: React.FC = () => {
  const { menuOpen } = useMenu();
  return (
    <>
      <section className={`${styles.mySwiper} ${menuOpen ? styles.menuAbierto : ""}`}>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 2500, // Adjust the delay as needed
          disableOnInteraction: false, // Keeps autoplay active after interactions
        }}
        loop={true} // Enables infinite looping
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture className={styles.imageSlider}>
            <Image src={slide.src} alt={slide.alt}  layout="fill" 
    objectFit="cover"  />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
      </section>
      
    </>
  );
};

export default Slider;
