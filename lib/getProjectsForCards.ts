import { getAllProjects, Blog } from "./posts";

export interface CardData {
  src: string;
  tag: string;
  readableDate: string;
  title: string;
  description: string;
  href: string;
}

// helpers
function getImage(post: Blog): string {
  return post.featuredImage || `/images/logo/${post.slug}.png`;
}

function getDescription(content: string): string {
  if (!content) return "";
  return content.length > 200 ? content.slice(0, 200) + "..." : content;
}

// main mapper (NO locale)
export function getProjectsForCards(): CardData[] {
  const posts: Blog[] = getAllProjects();

  return posts.map((post) => ({
    src: getImage(post),
    tag: post.slug,
    readableDate: post.date,
    title: post.title,
    description: getDescription(post.content),
    href: `/projects/${post.slug}`,
  }));
}