export default function PaperLayout({ meta, children }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-light mb-2">
            {meta.title}
          </h1>

          <p className="text-zinc-500 text-sm">
            {meta.date} • {meta.domain}
          </p>

          <p className="mt-4 text-zinc-400">
            {meta.summary}
          </p>
        </div>

        {/* CONTENT */}
        <article className="prose prose-invert max-w-none prose-headings:font-light prose-p:text-zinc-300">
          {children}
        </article>

      </div>
    </div>
  );
}