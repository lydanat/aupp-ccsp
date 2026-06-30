"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CardData } from "@/lib/getProjectsForCards";

interface ProjectCardProps {
  projects: CardData[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:px-8 lg:px-0">
      {projects.map((project, idx) => (
        <Card
          key={idx}
          className="bg-background border border-border rounded-sm overflow-hidden p-0 gap-4 flex flex-col md:flex-row"
        >
          <div className="relative md:w-80 md:flex-shrink-0 ">
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={500}
              className="w-full h-52 md:h-full md:min-h-[250px] object-cover block"
            />
            <Badge className="absolute top-3 left-3 bg-[#B22234]/90 backdrop-blur-sm border-0 text-white shadow-lg">
              {project.tag}
            </Badge>
          </div>

          <div className="p-4 space-y-4 mt-0 md:mt-4">
            <div className="flex items-center gap-2 justify-start">
              <Calendar size={14} className="text-foreground/70" />
              <time className="text-xs text-foreground/70 font-medium">
                {project.readableDate}
              </time>
            </div>

            <h4 className="lg:text-xl md:text-base text-foreground leading-relaxed">{project.title}</h4>
            <p className="text-md text-foreground/80 line-clamp-2">{project.description}</p>
            <Link
              href={project.href}
              className="group inline-flex items-center text-[#B22234] hover:underline font-medium"
            >See more
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
