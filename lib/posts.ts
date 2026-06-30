import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Blog {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  featuredImage?: string;
  galleryImages?: string[];
}

// helper
function readMarkdownFile(filePath: string, slug: string): Blog {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    author: data.author || "Unknown",
    content,
    featuredImage: data.featuredImage || "",
    galleryImages: data.galleryImages || [],
  };
}

// Get all projects (NO locale)
export function getAllProjects(): Blog[] {
  const dirPath = path.join(process.cwd(), "content");

  if (!fs.existsSync(dirPath)) {
    throw new Error(`Content folder not found: ${dirPath}`);
  }

  const files = fs.readdirSync(dirPath);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(dirPath, file);

    return readMarkdownFile(filePath, slug);
  });
}

// Get single project (NO locale)
export function getProject(project: string): Blog {
  if (!project) {
    throw new Error("Missing project slug");
  }

  const filePath = path.join(
    process.cwd(),
    "content",
    `${project}.md`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file not found: ${filePath}`);
  }

  return readMarkdownFile(filePath, project);
}