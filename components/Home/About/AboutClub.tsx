import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutClub = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-2 lg:px-0 items-center">
          <div className="space-y-6">
            <div className="relative">
              <h1 data-aos="fade-up" className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground bg-clip-text ">About</span>
                <br />
                <span className="text-foreground bg-clip-text">AUPP CCSP</span>
              </h1>
            </div>
          </div>

          <div className="space-y-8">
            {/* Modern content card */}
            <div data-aos="fade-up" className="relative ">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-card/60 backdrop-blur-sm rounded-lg border border-border"></div>
              <div className="relative p-8 space-y-6">
                <p className="text-foreground text-lg leading-relaxed font-light">
                  The Committee for Community Service Program{" "}
<span className="font-bold text-[#B22234] bg-background/40 px-2 py-1 rounded-md border border-[#B22234]/30">                    (CCSP)
                  </span>{" "}
                 at the American University of Phnom Penh (AUPP) is a student-led initiative committed to fostering social responsibility and community engagement. Our mission is to bridge academic learning with real-world impact, empowering students to make meaningful contributions to Cambodian society through a range of community-driven projects.
                </p>

                <Link href="/about/about-us">
                  <Button
                    className="w-38 h-full rounded-full bg-[#B22234] px-4 py-4 text-base text-white hover:bg-[#B22234]/90"
                  >
                    See more
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="absolute -right-4 top-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce delay-700"></div>
            <div className="absolute -left-2 bottom-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-40 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
