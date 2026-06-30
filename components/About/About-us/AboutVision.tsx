import React from "react";
import VisionCard from "./VisionCard";

const AboutVision = () => {
  return (
    <section className="my-16">
      <div data-aos="fade-up" className="relative text-center mx-auto w-max">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
        <h1 className="relative text-header text-foreground font-bold leading-snug bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
         Our Vision
        </h1>
      </div>
      <VisionCard/>
    </section>
  );
};

export default AboutVision;
