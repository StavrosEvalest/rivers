import { getDocumentBySlug, getDocumentPaths } from "outstatic/server";
import { marked } from "marked";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getDocumentPaths("news").map(({ params }) => params);
}

export default async function NewsPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getDocumentBySlug("news", slug, [
    "title",
    "publishedAt",
    "content",
    "description",
  ]);

  if (!post) notFound();

  const content = post.content ? await marked(post.content) : "";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/news"
        className="text-sm text-blue-700 hover:underline mb-8 inline-block"
      >
        ← Back to News
      </Link>

      <article>
        <time className="text-sm text-slate-400">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <h1 className="text-4xl font-bold text-blue-900 mt-1 mb-8">
          {post.title}
        </h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
}
