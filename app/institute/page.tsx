import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function InstituteIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl mb-10">Meticulix Institute</h1>

      <div className="space-y-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/institute/${p.slug}`}>
            <div className="p-4 border border-white/10 hover:bg-white/5">
              <h2>{p.title}</h2>
              <p className="text-zinc-500 text-sm">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}