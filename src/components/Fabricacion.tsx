import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

import styles from "../styles/index.module.scss";
import productsData from "../data/products.json";

interface Product {
  image: string;
  name: string;
  details: {
    weight?: string;
    material?: string;
    length?: string;
    clasp?: string;
    thickness?: string;
    dimensions?: string;
    colors?: string[];
  };
}

const Fabricacion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products: Product[] = productsData.products;

  return (
    <section>
      <main className={styles.fabricacion}>
        <section className={styles.container}>
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
              {products.map((product: Product, index: number) => (
                <SwiperSlide key={index}>
                 <picture>
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                 </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </picture>
        </section>
      </main>

      {/* Aquí usamos el activeIndex para mostrar el producto correspondiente */}
      <menu className={styles.menu}>
      <h2>{products[activeIndex].name}</h2>
      <ul>
        {Object.entries(products[activeIndex].details).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>
            {Array.isArray(value) ? value.join(", ") : value}
          </li>
        ))}
      </ul>
      </menu>
    </section>
  );
};

export default Fabricacion;
