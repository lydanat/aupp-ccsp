"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TeamMember } from "@/constant/constant";
import { Facebook, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge"; 

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <section>
    <Card className="bg-[#0f142ed9] border  rounded-sm overflow-hidden p-0 relative gap-0">
      {/* Image container */}
      <div className="relative">
        <Image
          src ={member.image}
          alt={member.name}
          width={350}
          height={350}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Role badge (top-left) */}
        <Badge className="absolute top-3 left-3 bg-[#B22234]/90 text-white shadow-lg">
          {member.role}
        </Badge>

        {/* Social icons (top-right) */}
        <div className="absolute top-3 right-3 flex gap-2 flex-col">
          {member.social?.facebook && (
            <Link href={member.social.facebook} target="_blank" className="text-white rounded-full border-0 bg-gray-600 p-2">
              <Facebook size={18} />
            </Link>
          )}
          {member.social?.instagram && (
            <Link href={member.social.instagram} target="_blank" className="text-white rounded-full border-0 bg-gray-600 p-2">
              <Instagram size={18} />
            </Link>
          )}
        </div>
      </div>
    </Card>
          
      <div className="p-6 text-center space-y-1">
        <h4 className="text-xl font-semibold text-foreground whitespace-nowrap">{member.name}</h4>
        <p className="text-base text-foreground/80">{member.major}</p>
      </div>
    </section>
  );
};

export default TeamCard;
