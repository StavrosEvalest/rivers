import { getDocuments } from "outstatic/server";
import Link from "next/link";
import Image from "next/image";

const featuredMembers = [
  {
    name: "Δήμος Κόνιτσας",
    river: "Αώος / Βοϊδομάτης",
    region: "Ήπειρος",
    img: "https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg",
  },
  {
    name: "Δήμος Ζαγορίου",
    river: "Αώος / Βοϊδομάτης",
    region: "Ήπειρος",
    img: "https://rivers.gr/wp-content/uploads/2017/09/Pili.jpg",
  },
  {
    name: "Δήμος Ξάνθης",
    river: "Νέστος ποταμός",
    region: "Θράκη",
    img: "https://rivers.gr/wp-content/uploads/2017/09/Nestos.jpg",
  },
  {
    name: "Δήμος Σπάρτης",
    river: "Ευρώτας ποταμός",
    region: "Πελοπόννησος",
    img: "https://rivers.gr/wp-content/uploads/2017/09/arta.jpg",
  },
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
  const allNews = getDocuments("news", [
    "title",
    "publishedAt",
    "description",
    "slug",
    "status",
  ]);
  const latestNews = allNews
    .filter((p) => p.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <div>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background photo */}
        <Image
          src="https://rivers.gr/wp-content/uploads/2017/09/Konitsa.jpg"
          alt="Κόνιτσα — Αώος ποταμός"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/88 via-sky-900/80 to-cyan-900/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-200 text-sm mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Ελληνικό Δίκτυο Δήμων με Ποτάμια
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            Προστατεύουμε{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              τα Ποτάμια μας
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-sky-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ένας θεσμικός φορέας που ενώνει{" "}
            <strong className="text-white font-semibold">32 δήμους</strong> της
            Ελλάδας για την αειφόρο διαχείριση και προστασία των ποταμών.
          </p>

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
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,28 1440,28 L1440,56 L0,56 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "32", label: "Δήμοι-Μέλη" },
              { value: "20+", label: "Χρόνια δράσης" },
              { value: "75+", label: "Νέα & Άρθρα" },
              { value: "15+", label: "Δραστηριότητες" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl font-black text-sky-700 mb-1">{stat.value}</dt>
                <dd className="text-slate-500 text-sm font-medium">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── About section ───────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest">
                Το Δίκτυο
              </span>
              <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-5 leading-snug">
                Μαζί για τα
                <br />
                <span className="text-sky-700">ποτάμια της Ελλάδας</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Το Ελληνικό Δίκτυο Δήμων με Ποτάμια ιδρύθηκε με στόχο την
                ενδυνάμωση της τοπικής αυτοδιοίκησης και την αειφόρο ανάπτυξη
                των περιοχών που διαρρέονται από σημαντικά ποτάμια.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Μέσα από τη συνεργασία και τη συλλογική δράση, εργαζόμαστε για
                την προστασία των υδάτινων πόρων, την ανάδειξη της φυσικής και
                πολιτιστικής κληρονομιάς και την προώθηση βιώσιμων πολιτικών
                διαχείρισης.
              </p>
              <Link
                href="/to-diktyo"
                className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-900 transition-colors group"
              >
                Διαβάστε Περισσότερα
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* River photo grid */}
            <div className="grid grid-cols-3 gap-2">
              {riverGallery.map((item) => (
                <div key={item.label} className="relative aspect-square overflow-hidden rounded-xl group">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest News ─────────────────────────────────────── */}
      {latestNews.length > 0 && (
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest">
                  Ενημέρωση
                </span>
                <h2 className="text-3xl font-bold text-slate-800 mt-1">
                  Τελευταία Νέα
                </h2>
              </div>
              <Link
                href="/nea"
                className="text-sky-700 font-semibold text-sm hover:text-sky-900 transition-colors hidden sm:block"
              >
                Όλα τα νέα →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {latestNews.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                >
                  {/* Card image */}
                  <div className="relative h-44 bg-sky-100 overflow-hidden">
                    <Image
                      src="https://rivers.gr/wp-content/uploads/2021/11/RIVERS-logo-150.jpg"
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
                    <time className="absolute bottom-3 left-4 text-xs text-white/90 font-medium">
                      {new Date(post.publishedAt).toLocaleDateString("el-GR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
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
                    <Link
                      href={`/nea/${post.slug}`}
                      className="text-sky-700 text-sm font-semibold hover:text-sky-900 transition-colors mt-auto"
                    >
                      Διαβάστε →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured Members ────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {featuredMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
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
            ))}
          </div>

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
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <Image
          src="https://rivers.gr/wp-content/uploads/2017/09/trikala-2.jpg"
          alt="Τρίκαλα"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sky-950/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Επικοινωνήστε μαζί μας
          </h2>
          <p className="text-sky-200 text-lg mb-8 leading-relaxed">
            Για πληροφορίες σχετικά με το δίκτυο, τα μέλη ή τις
            δραστηριότητές μας, είμαστε στη διάθεσή σας.
          </p>
          <Link
            href="/epikoinonia"
            className="inline-block bg-white text-sky-900 font-bold px-10 py-4 rounded-xl hover:bg-sky-50 transition-colors text-lg shadow-lg"
          >
            Επικοινωνία
          </Link>
        </div>
      </section>
    </div>
  );
}
