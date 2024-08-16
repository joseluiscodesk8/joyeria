

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";


import productsData from '../data/products.json';

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

interface FabricacionProps {
  products: Product[];
}

const Fabricacion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const products: Product[] = productsData.products;

  return (
    <div>
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

{products.map((product, index) => (
        <SwiperSlide key={index}>
                   <Image src={product.image} alt={product.name} width={300} height={300} />
          <h2>{product.name}</h2>
          <ul>
            {Object.entries(product.details).map(([key, value]) => (
              <li key={key}>
                <strong>{key}: </strong>
                {Array.isArray(value) ? value.join(', ') : value}
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
          </Swiper>
    </div>
  );
};

export default Fabricacion;
