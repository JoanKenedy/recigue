import React, { useRef, useState } from "react";
import "../components/herodesktop.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import Slider1 from "../imagenes/slider1.jpg";
import Slider2 from "../imagenes/slider2.jpg";
import Slider3 from "../imagenes/concepto-reciclaje-plano-laico.jpg";

const HeroDesktop = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} className="img-slider" />
          <div className="container-text-slider">
            <div className="text-slider uno">
              <h2>Reciclaje Guerrero</h2>
              <p>27 años de experiencia nos respaldan</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" />
          <div className="container-text-slider ">
            <div className="text-slider dos">
              <h2>¿A qué nos dedicamos?</h2>
              <p>
                Recicladora de chatarra, metales industriales y destrucción de
                maquinaria obsoleta
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <div className="container-text-slider">
            <div className="text-slider tres">
              <h2>Cuidamos nuestro planeta</h2>
              <p>Contribuimos al medio ambiente reciclando</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroDesktop;
