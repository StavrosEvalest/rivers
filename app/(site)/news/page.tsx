import { getDocuments } from "outstatic/server";
import Link from "next/link";

export default function NewsPage() {
  const posts = getDocuments("news", [
    "title",
    "slug",
    "publishedAt",
    "description",
  ]);

  const sorted = [...posts]
    .filter((p) => p.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-12">News</h1>

      {sorted.length === 0 ? (
        <p className="text-slate-500">No posts published yet.</p>
      ) : (
        <div className="flex flex-col gap-10">
          {sorted.map((post) => (
            <article key={post.slug} className="border-b border-slate-100 pb-10">
              <time className="text-sm text-slate-400">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h2 className="text-2xl font-semibold text-slate-800 mt-1 mb-2">
                <Link
                  href={`/news/${post.slug}`}
                  className="hover:text-blue-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-slate-600 leading-relaxed">{post.description}</p>
              )}
              <Link
                href={`/news/${post.slug}`}
                className="inline-block mt-4 text-sm font-medium text-blue-700 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
