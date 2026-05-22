import { getDocuments, getDocumentBySlug } from "outstatic/server";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerGrid,
  StaggerItem,
  HeroReveal,
  ScaleIn,
} from "./components/FadeIn";
import ParallaxHero from "./components/ParallaxHero";
import HomeHeroParallax from "./components/HomeHeroParallax";

const featuredMembers = [
  { name: "Δήμος Κόνιτσας",  river: "Αώος / Βοϊδομάτης", region: "Ήπειρος",      img: "https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg" },
  { name: "Δήμος Ζαγορίου",  river: "Αώος / Βοϊδομάτης", region: "Ήπειρος",      img: "https://rivers.gr/wp-content/uploads/2017/09/Pili.jpg" },
  { name: "Δήμος Ξάνθης",    river: "Νέστος ποταμός",    region: "Θράκη",         img: "https://rivers.gr/wp-content/uploads/2017/09/Nestos.jpg" },
  { name: "Δήμος Σπάρτης",   river: "Ευρώτας ποταμός",  region: "Πελοπόννησος",  img: "https://rivers.gr/wp-content/uploads/2017/09/arta.jpg" },
];

const riverGallery = [
  { label: "Νάουσα", img: "https://rivers.gr/wp-content/uploads/2017/09/naousa.jpg" },
  { label: "Βέροια", img: "https://rivers.gr/wp-content/uploads/2017/09/veroia-1.jpg" },
  { label: "Τρίκαλα", img: "https://rivers.gr/wp-content/uploads/2017/09/trikala-2.jpg" },
  { label: "Πύλη", img: "https://rivers.gr/wp-content/uploads/2017/09/Pili.jpg" },
  { label: "Νέστος", img: "https://rivers.gr/wp-content/uploads/2017/09/Nestos.jpg" },
  { label: "Άρτα", img: "https://rivers.gr/wp-content/uploads/2017/09/arta.jpg" },
];

export default async function HomePage() {
  // ── CMS: home page content ─────────────────────────────────
  const homePage = getDocumentBySlug("pages", "home", [
    "title", "slug", "status",
    "heroTitle", "heroHighlight", "description",
    "heroImage", "aboutTitle", "ctaTitle", "ctaDescription",
    "content",
  ]);

  const heroTitle     = (homePage?.heroTitle      as string) || "Προστατεύουμε";
  const heroHighlight = (homePage?.heroHighlight  as string) || "τα Ποτάμια μας";
  const heroDesc      = (homePage?.description    as string) || "Ένας θεσμικός φορέας που ενώνει 32 δήμους της Ελλάδας για την αειφόρο διαχείριση και προστασία των ποταμών.";
  const heroImage     = (homePage?.heroImage      as string) || "https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg";
  const aboutTitle    = (homePage?.aboutTitle     as string) || "Μαζί για τα ποτάμια της Ελλάδας";
  const ctaTitle      = (homePage?.ctaTitle       as string) || "Επικοινωνήστε μαζί μας";
  const ctaDesc       = (homePage?.ctaDescription as string) || "Για πληροφορίες σχετικά με το δίκτυο, τα μέλη ή τις δραστηριότητές μας, είμαστε στη διάθεσή σας.";
  const aboutHtml     = homePage?.content ? String(await marked(homePage.content as string)) : "";

  // ── CMS: latest news ──────────────────────────────────────
  const latestNews = getDocuments("news", ["title", "publishedAt", "description", "slug", "status"])
    .filter((p) => p.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <div>
      {/* ── Hero (parallax + entrance animations) ─────────── */}
      <HomeHeroParallax src={heroImage}>
        {/* Badge */}
        <HeroReveal delay={0.1}>
          <div className="flex justify-end mb-8">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-200 text-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Ελληνικό Δίκτυο Δήμων με Ποτάμια
            </div>
          </div>
        </HeroReveal>

        {/* Logo + heading row */}
        <HeroReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <Image
              src="/new-rivers-logo-transparent.png"
              alt="Ελληνικό Δίκτυο Δήμων με Ποτάμια"
              width={180}
              height={54}
              className="shrink-0"
            />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight sm:text-left">
              {heroTitle}{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
                {heroHighlight}
              </span>
            </h1>
          </div>
        </HeroReveal>

        {/* Description */}
        <HeroReveal delay={0.4}>
          <p className="text-lg sm:text-xl text-sky-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroDesc}
          </p>
        </HeroReveal>

        {/* CTAs */}
        <HeroReveal delay={0.55}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/to-diktyo"
              className="bg-white text-sky-950 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors shadow-lg shadow-sky-900/40"
            >
              Μάθετε Περισσότερα
            </Link>
            <Link
              href="/nea"
              className="border border-sky-500/60 text-sky-100 font-semibold px-8 py-3.5 rounded-xl hover:bg-sky-400/15 transition-colors"
            >
              Τελευταία Νέα
            </Link>
          </div>
        </HeroReveal>
      </HomeHeroParallax>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
            {[
              { value: "32",  label: "Δήμοι-Μέλη" },
              { value: "20+", label: "Χρόνια δράσης" },
              { value: "75+", label: "Νέα & Άρθρα" },
              { value: "15+", label: "Δραστηριότητες" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <dt className="text-4xl font-black text-sky-700 mb-1">{stat.value}</dt>
                <dd className="text-slate-500 text-sm font-medium">{stat.label}</dd>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── About section ───────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeInLeft>
              <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest">
                Το Δίκτυο
              </span>
              <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-5 leading-snug">
                <span className="text-sky-700">{aboutTitle}</span>
              </h2>
              {aboutHtml ? (
                <div
                  className="prose prose-slate prose-sm max-w-none mb-8 text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: aboutHtml }}
                />
              ) : null}
              <Link
                href="/to-diktyo"
                className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-900 transition-colors group"
              >
                Διαβάστε Περισσότερα
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeInLeft>

            {/* River photo grid */}
            <FadeInRight delay={0.1}>
              <StaggerGrid className="grid grid-cols-3 gap-2" staggerDelay={0.07}>
                {riverGallery.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="relative aspect-square overflow-hidden rounded-xl group">
                      <Image
                        src={item.img}
                        alt={item.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-sky-950/30 group-hover:bg-sky-950/10 transition-colors" />
                      <span className="absolute bottom-2 left-2 text-white text-xs font-semibold drop-shadow">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ── Latest News ─────────────────────────────────────── */}
      {latestNews.length > 0 && (
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest">
                    Ενημέρωση
                  </span>
                  <h2 className="text-3xl font-bold text-slate-800 mt-1">
                    Τελευταία Νέα
                  </h2>
                </div>
                <Link href="/nea" className="text-sky-700 font-semibold text-sm hover:text-sky-900 transition-colors hidden sm:block">
                  Όλα τα νέα →
                </Link>
              </div>
            </FadeInUp>

            <StaggerGrid className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {latestNews.map((post, i) => {
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
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                    <div className="relative h-44 overflow-hidden">
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
                      <h3 className="font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-sky-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                          {post.description}
                        </p>
                      )}
                      <Link href={`/nea/${post.slug}`} className="text-sky-700 text-sm font-semibold hover:text-sky-900 transition-colors mt-auto">
                        Διαβάστε →
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </section>
      )}

      {/* ── Featured Members ────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest">
                Δήμοι-Μέλη
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mt-1">
                32 Δήμοι σε όλη την Ελλάδα
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Από τον Αλιάκμονα έως τον Ευρώτα, από τον Αώο έως τον Νέστο
              </p>
            </div>
          </FadeInUp>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10" staggerDelay={0.08}>
            {featuredMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white font-bold text-sm leading-tight">{member.name}</div>
                      <div className="text-cyan-300 text-xs mt-0.5">{member.river}</div>
                      <div className="text-sky-200/70 text-xs">{member.region}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <ScaleIn>
            <div className="text-center">
              <Link
                href="/meli"
                className="inline-flex items-center gap-2 bg-sky-700 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-sky-800 transition-colors shadow-sm"
              >
                Όλα τα Μέλη
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── CTA (parallax) ──────────────────────────────────── */}
      <ParallaxHero
        src="https://rivers.gr/wp-content/uploads/2017/09/trikala-2.jpg"
        alt="Τρίκαλα"
        className="relative py-20 sm:py-24 overflow-hidden"
        overlay="absolute inset-0 bg-sky-950/80"
      >
        <FadeInUp>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{ctaTitle}</h2>
            <p className="text-sky-200 text-lg mb-8 leading-relaxed">{ctaDesc}</p>
            <Link
              href="/epikoinonia"
              className="inline-block bg-white text-sky-900 font-bold px-10 py-4 rounded-xl hover:bg-sky-50 transition-colors text-lg shadow-lg"
            >
              Επικοινωνία
            </Link>
          </div>
        </FadeInUp>
      </ParallaxHero>
    </div>
  );
}
