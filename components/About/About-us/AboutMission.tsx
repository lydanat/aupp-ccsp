import React from "react";
import Image from "next/image";

const AboutMission = () => {
  return (
    <section data-aos="fade-up" className="my-16">
      <div className="container relative text-center mx-auto w-max">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
            <h1
              className="relative text-header text-foreground font-bold leading-snug bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
              Our Mission
            </h1>
          </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8">
        <div className="my-16 text-center md:text-left">
          <p className="subtext text-foreground">
            At AUPP CCSP, we are passionate about empowering underprivileged communities, especially children, by providing access to quality education in STEM and digital literacy. We believe that education has the power to transform lives, and we&apos;re committed to giving back to those who need it the most. Our goal is to create lasting change, helping individuals and communities grow and succeed in the future.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/about/mission.png"
            alt="Mission illustration"
            width={350}
            height={350}
            style={{ width: "auto", height: "auto" }}
            className="transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
