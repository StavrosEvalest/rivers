import { getDocuments } from "outstatic/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ParallaxHero from "../components/ParallaxHero";
import { StaggerGrid, StaggerItem, HeroReveal } from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Νέα",
  description:
    "Τελευταία νέα, ανακοινώσεις και άρθρα του Ελληνικού Δικτύου Δήμων με Ποτάμια.",
};

export default async function NeaPage() {
  const allPosts = getDocuments("news", [
    "title",
    "publishedAt",
    "description",
    "slug",
    "status",
  ]);

  const posts = allPosts
    .filter((p) => p.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <div>
      {/* Hero */}
      <ParallaxHero
        src="https://rivers.gr/wp-content/uploads/2017/09/veroia-1.jpg"
        alt="Βέροια — Αλιάκμονας"
        priority
      >
        <HeroReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Ενημέρωση
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Νέα &amp; Ανακοινώσεις
            </h1>
            <p className="text-sky-200 text-lg">
              Ενημερωθείτε για τις τελευταίες εξελίξεις και δράσεις του Δικτύου
            </p>
          </div>
        </HeroReveal>
      </ParallaxHero>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📰</div>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">
                Δεν υπάρχουν νέα ακόμη
              </h2>
              <p className="text-slate-400">Ελέγξτε ξανά σύντομα.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-500 text-sm">
                  {posts.length} άρθρ{posts.length === 1 ? "ο" : "α"}
                </p>
              </div>

              <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
                {posts.map((post, i) => {
                  const cardImages = [
                    "https://rivers.gr/wp-content/uploads/2025/07/Festival-logo-Word-file-2-348x215.jpg",
                    "https://rivers.gr/wp-content/uploads/2025/10/557544520_122148157016876205_5850090124308851342_n.jpg",
                    "https://rivers.gr/wp-content/uploads/2025/10/IMG_4159.jpeg",
                    "https://rivers.gr/wp-content/uploads/2025/03/DSC06005-1-735x400.jpg",
                    "https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg",
                    "https://rivers.gr/wp-content/uploads/2017/09/Nestos.jpg",
                  ];
                  const cardImg = cardImages[i % cardImages.length];
                  return (
                  <StaggerItem key={post.slug}>
                  <article
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col h-full"
                  >
                    {/* Card photo */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={cardImg}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 to-transparent" />
                      <time className="absolute bottom-3 left-4 text-xs text-white/90 font-medium">
                        {new Date(post.publishedAt).toLocaleDateString("el-GR", {
                          day: "numeric", month: "long", year: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="font-bold text-slate-800 text-lg leading-snug mb-3 group-hover:text-sky-700 transition-colors">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {post.description}
                        </p>
                      )}
                      <Link
                        href={`/nea/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sky-700 text-sm font-semibold hover:text-sky-900 transition-colors mt-auto group/link"
                      >
                        Διαβάστε Περισσότερα
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </article>
                  </StaggerItem>
                  );
                })}
              </StaggerGrid>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
