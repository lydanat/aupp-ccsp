// components/ProjectCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projects, Projects } from "@/constant/projects";

const ProjectCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-2 lg:px-0">
      {projects.map((project: Projects, idx: number) => (
        <Card
          data-aos="zoom-in-up"
          key={idx}
          className="border border-border rounded-sm overflow-hidden p-0 gap-0"
        >
          
          <div className="relative overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={500}
              className="w-full h-52 object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Badge className="absolute top-3 left-3 bg-[#B22234]/90 backdrop-blur-sm border-0 text-white shadow-lg">
              {project.tag}
            </Badge>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar size={14} className="transition-colors" />
              <time className="text-xs font-medium tracking-wide">
                {project.readableDate}
              </time>
            </div>

            <h4 className="text-lg font-semibold text-foreground leading-relaxed group-hover:text-[#002147] transition-colors duration-200 line-clamp-2">
               {project.title}
            </h4>

            <Button 
              asChild 
              className="
              w-full
              bg-gradient-to-r from-gray-700 to-gray-600
              text-white
              border-0
              rounded-lg
              py-3
              font-medium
              transition-all duration-300
              hover:from-gray-600 hover:to-gray-500
              hover:text-[#002147]
              hover:shadow-lg
              group/btn
              "            >
              <Link href={project.href} className="flex items-center justify-center gap-2">
                <span>Read more</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover/btn:translate-x-1" 
                />
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;