import React from "react";
import ProjectBlog from "./ProjectBlog";
import Image from "next/image";
import { Blog } from "@/lib/posts";
import { socialLink } from "@/constant/constant";

interface ProjectDetailProps {
  post: Blog;
  project: string;
}

export default function ProjectDetail({ post }: ProjectDetailProps) {
  return (
<div className="container my-20">
  <div className="lg:flex lg:items-start lg:gap-8">
  {/* Main content */}
  <div className="flex-1 lg:max-w-4xl">
    <ProjectBlog post={post} />
  </div>

  {/* Sidebar */}
  <aside className="hidden lg:block lg:sticky lg:top-24 self-start h-fit">    
    <Image
      src="/images/logo/official-logo.png"
      alt="main-logo"
      width={320}
      height={320}
      className="object-cover rounded-sm border-2"
    />

    <div className="mt-8 rounded-xl justify-center flex flex-col items-center">
      <h4 className="w-80 text-2xl font-bold mb-6 text-center text-foreground">To receive the latest news</h4>
      <div className="flex gap-6">
        {socialLink.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Image
              src={social.src}
              alt={social.label}
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        ))}
      </div>
    </div>
  </aside>
</div>
</div>
  );
}