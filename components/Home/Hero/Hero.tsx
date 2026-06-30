"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Features, heroSlides, HeroSlide, Feature } from "@/constant/constant";

interface HeroProps {
  slides?: HeroSlide[];
  features?: Feature[];
}

const Hero: React.FC<HeroProps> = ({
  slides = heroSlides,
  features = Features,
}) => {
  return (
    <section className="section-padding lg:min-h-screen lg:flex lg:items-center lg:justify-center">
      <div className="container flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-8">
        {/* Left Content */}
        <div data-aos="fade-right" className="space-y-8 mt-12 lg:mt-0 ">
            <div className="text-header text-[#002147] dark:text-white leading-snug max-w-[600px]">            <Typewriter
              options={{
                strings: [
                  "Committee for Community Service Program",
                  "Empowering Communities Through Education",
                  "Creating Positive Impact Together",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="text-[#334155] dark:text-gray-300 subtext leading-relaxed">
            We equip rural students with essential skills and confidence through comprehensive programs in STEM, technology, English, and critical thinking.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature: Feature, idx: number) => (
              <div
                key={idx}
                className="card border border-gray-700/50 flex flex-col items-center p-4"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} mb-2`} />
                <span className="text-sm font-medium text-shadow-amber-50 text-center">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <Link href="/about/about-us">
            <Button
              className="w-40 h-full rounded-full bg-[#B22234] px-4 py-4 text-base text-white hover:bg-[#B22234]/90"
            >
              Learn more<ChevronRightIcon />
            </Button>
          </Link>
        </div>

        {/* Right Content (Swiper) */}
        <div
          data-aos="fade-left"
          className="relative w-full lg:mt-0 md:px-2 lg:px-0 px-0"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "!bg-white",
              bulletClass: "swiper-pagination-bullet !bg-slate-300",
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            className="w-full h-[350px] rounded-2xl shadow-2xl relative z-10 overflow-hidden"
          >
            {slides.map((slide: HeroSlide, idx: number) => (
              <SwiperSlide key={idx}>
                <Link
                  href={slide.href}
                  className="relative block w-full h-[350px]"
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 80vw, 
            1200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-sm opacity-90">{slide.description}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
