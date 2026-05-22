import type { Metadata } from "next";
import Image from "next/image";
import { getDocuments } from "outstatic/server";

export const metadata: Metadata = {
  title: "Δραστηριότητες",
  description:
    "Δραστηριότητες, ημερίδες, συνέδρια και εκδηλώσεις του Ελληνικού Δικτύου Δήμων με Ποτάμια.",
};

const tagColors: Record<string, string> = {
  Πολιτισμός: "bg-violet-100 text-violet-700",
  Εκπαίδευση: "bg-sky-100 text-sky-700",
  Περιβάλλον: "bg-emerald-100 text-emerald-700",
  "Κλιματική Κρίση": "bg-orange-100 text-orange-700",
  Δικτύωση: "bg-cyan-100 text-cyan-700",
  Τουρισμός: "bg-yellow-100 text-yellow-700",
  Ευρώπη: "bg-blue-100 text-blue-700",
  Συνέδριο: "bg-rose-100 text-rose-700",
  Ημερίδα: "bg-pink-100 text-pink-700",
  Κρήτη: "bg-teal-100 text-teal-700",
};

export default function DrastiriotitesPage() {
  const raw = getDocuments("activities", [
    "title", "slug", "date", "description", "image",
    "tags", "highlight", "status", "publishedAt",
  ]);

  const activities = raw
    .filter((a) => a.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt as string).getTime() -
        new Date(a.publishedAt as string).getTime()
    )
    .map((a) => ({
      title: a.title,
      date: (a.date as string) ?? "",
      desc: (a.description as string) ?? "",
      img: (a.image as string) ?? "",
      tags: Array.isArray(a.tags) ? (a.tags as string[]) : [],
      highlight: a.highlight === true,
    }));

  const featured = activities.find((a) => a.highlight) ?? activities[0];
  const rest = activities.filter((a) => a !== featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="https://rivers.gr/wp-content/uploads/2025/03/DSC06005-1-735x400.jpg"
          alt="Εκδήλωση Δικτύου"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/90 to-sky-800/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Δράσεις
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Δραστηριότητες
            <br />
            <span className="text-cyan-300">&amp; Εκδηλώσεις</span>
          </h1>
          <p className="text-sky-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Ημερίδες, σεμινάρια, συνέδρια και πολιτιστικές εκδηλώσεις για
            την ανάδειξη και προστασία των ποταμών της Ελλάδας.
          </p>
        </div>
      </section>

      {/* Featured activity */}
      {featured && (
        <section className="py-10 bg-sky-50 border-b border-sky-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-sky-200 shadow-sm flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0 overflow-hidden">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4">
                  <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
                  Επικαιρότητα
                </span>
                <div className="text-sm text-sky-600 font-medium mb-1">
                  {featured.date}
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  {featured.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        tagColors[t] ?? "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-10">
            Χρονολόγιο Δράσεων
          </h2>

          <div className="space-y-4">
            {rest.map((a, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-sm transition-all group flex gap-0"
              >
                <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-lg w-fit mb-2">
                    {a.date}
                  </span>
                  <h3 className="font-bold text-slate-800 mb-1.5 group-hover:text-sky-700 transition-colors leading-snug text-sm sm:text-base">
                    {a.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2 hidden sm:block">
                    {a.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          tagColors[t] ?? "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
