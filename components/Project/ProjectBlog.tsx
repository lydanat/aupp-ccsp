"use client";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Blog } from "@/lib/posts";
import remarkGfm from "remark-gfm";

interface ProjectBlogProps {
  post: Blog;
}

export default function ProjectBlog({ post }: ProjectBlogProps) {
  return (
    <div className="rounded-xl  text-foreground">
      <h1 className="text-3xl font-bold mb-2 leading-tight">{post.title}</h1>
      <p className="text-foreground text-sm mb-6">
        By {post.author} | {post.date}
      </p>

      {post.featuredImage && (
        <div className="mb-8">
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-sm object-cover w-full"
          />
        </div>
      )}

<ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    p: ({ children }) => <p className="mb-4 text-lg">{children}</p>,
  }}
>
  {post.content}
</ReactMarkdown>


      {post.galleryImages && post.galleryImages.length > 0 && (
        <div className="space-y-4">
          {post.galleryImages.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`extra-${idx}`}
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
}
