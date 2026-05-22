import { getDocumentBySlug, getDocumentPaths } from "outstatic/server";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getDocumentPaths("news").map(({ params }) => params);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getDocumentBySlug("news", slug, ["title", "description"]);
  return {
    title: post?.title ?? "Άρθρο",
    description: post?.description ?? undefined,
  };
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
    "author",
  ]);

  if (!post) notFound();

  const content = post.content ? await marked(post.content) : "";

  return (
    <div>
      {/* Article hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <Image
          src="https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/92 to-sky-800/85" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/nea"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Πίσω στα Νέα
          </Link>

          <time className="text-sky-300 text-sm font-medium">
            {new Date(post.publishedAt).toLocaleDateString("el-GR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4 leading-tight">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-sky-200 text-lg leading-relaxed max-w-2xl">
              {post.description}
            </p>
          )}
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/nea"
              className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-900 transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Όλα τα Νέα
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
              Δίκτυο Δήμων με Ποτάμια
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
