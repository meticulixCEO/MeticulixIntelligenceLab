import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import PaperLayout from "@/components/research/PaperLayout";


import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({
    slug: p.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <PaperLayout meta={post}>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </PaperLayout>
  );
}