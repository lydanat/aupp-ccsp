"use client";

import React from "react";
import Image from "next/image";
import { slide as defaultSlide, AboutCarousel } from "@/constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface CarouselProp {
  slide?: AboutCarousel[];
  title?: string;   
}

const CarouselSlide: React.FC<CarouselProp> = ({ slide = defaultSlide, title = [] }) => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slide.map((s, idx) => (
          <SwiperSlide key={idx} className="w-full h-full relative">
            {/* Background Image */}
            <Image
              src={s.src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black text-center px-4">
                {title}  
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlide;
