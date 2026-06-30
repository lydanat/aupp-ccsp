import React from "react";
import TeamCard from "./TeamCard";
import { advisor, leaders, member } from "@/constant/constant"; 

const AboutTeam = () => {
  return (
    <section className="my-24">
      <div className="container relative z-10 grid grid-cols-1 md:px-2 lg:px-0 items-center">
        <div className="space-y-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
          <div className="relative">
            <h1 className="text-header text-foreground text-center font-black leading-tight mb-2">
              Our Team
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-lg leading-relaxed text-center max-w-5xl text-foreground">
              Meet the passionate students and advisors behind Aupp CCSP.
            </p>
          </div>
        </div>
      </div>
      <div 
      data-aos="fade-up"
      
      className="container mb-6 mt-16 flex justify-center gap-4 flex-wrap">
        {advisor.map((ad, idx) => (
          <TeamCard key={idx} member={ad} />
        ))}
      </div>

      <div 
      data-aos="fade-up"
      
      className="container my-6 flex justify-center gap-4 flex-wrap">
        {leaders.map((lead, idx) => (
          <TeamCard key={idx} member={lead} />
        ))}
      </div>

      <div 
      data-aos="fade-up"
      
      className="container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {member.map((mem, idx) => (
          <TeamCard key={idx} member={mem} />
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
