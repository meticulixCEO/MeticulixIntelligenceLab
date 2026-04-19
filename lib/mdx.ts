import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content/institute");

// ✅ put logs here (top-level)
console.log("POSTS PATH:", POSTS_PATH);

export function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH);

  // ✅ log here
  console.log("FILES:", files);

  return files.map((file) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8");
    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      ...data,
    };
  });
}

export function getPostBySlug(slug) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

  console.log("LOOKING FOR:", filePath);

  if (!fs.existsSync(filePath)) {
    console.log("❌ FILE NOT FOUND");
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    ...data,
  };
}