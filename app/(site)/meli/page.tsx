import type { Metadata } from "next";
import Image from "next/image";
import { getDocuments } from "outstatic/server";
import ParallaxHero from "../components/ParallaxHero";
import { FadeInUp, StaggerGrid, StaggerItem, HeroReveal } from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Τα Μέλη",
  description: "Τα μέλη-δήμοι του Ελληνικού Δικτύου Δήμων με Ποτάμια από όλη την Ελλάδα.",
};

const regions = [
  "Θεσσαλία",
  "Ήπειρος",
  "Κεντρική Μακεδονία",
  "Δυτική Μακεδονία",
  "Ανατολική Μακεδονία & Θράκη",
  "Στερεά Ελλάδα",
  "Πελοπόννησος",
  "Αττική",
  "Κρήτη",
];

const regionColors: Record<string, string> = {
  "Θεσσαλία": "bg-sky-100 text-sky-700 border-sky-200",
  "Ήπειρος": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Κεντρική Μακεδονία": "bg-violet-100 text-violet-700 border-violet-200",
  "Δυτική Μακεδονία": "bg-purple-100 text-purple-700 border-purple-200",
  "Ανατολική Μακεδονία & Θράκη": "bg-rose-100 text-rose-700 border-rose-200",
  "Στερεά Ελλάδα": "bg-amber-100 text-amber-700 border-amber-200",
  "Πελοπόννησος": "bg-orange-100 text-orange-700 border-orange-200",
  "Αττική": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Κρήτη": "bg-teal-100 text-teal-700 border-teal-200",
};

const highlightedSlugs = ["konitsas", "zagoriou", "didymoteicho", "spartis"];

export default function MeliPage() {
  const raw = getDocuments("members", [
    "title", "slug", "river", "region", "image", "status",
  ]);

  const members = raw
    .filter((m) => m.status === "published")
    .map((m) => ({
      name: m.title,
      slug: m.slug,
      river: (m.river as string) ?? "",
      region: (m.region as string) ?? "",
      img: (m.image as string) ?? "",
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "el"));

  const byRegion = regions
    .map((r) => ({ region: r, members: members.filter((m) => m.region === r) }))
    .filter((r) => r.members.length > 0);

  const highlighted = highlightedSlugs
    .map((s) => members.find((m) => m.slug === s))
    .filter(Boolean) as typeof members;

  const highlightDetails: Record<string, { rivers: string[]; text: string }> = {
    konitsas: {
      rivers: ["Αώος", "Βοϊδομάτης"],
      text: "Ο Βοϊδομάτης είναι ένας από τους καθαρότερους ποταμούς της Ευρώπης. Το περίφημο Γεφύρι Κόνιτσας (1870) είναι η μεγαλύτερη μονότοξη γέφυρα στα Βαλκάνια.",
    },
    zagoriou: {
      rivers: ["Αώος", "Βοϊδομάτης", "Ζαγορίτικος", "Βίκος"],
      text: "Η περιοχή διασχίζεται από τέσσερα ποτάμια. Ο Βοϊδομάτης αναδεικνύεται για κανό και ράφτινγκ. Εντάσσεται στον Εθνικό Δρυμό Βίκου-Αώου.",
    },
    didymoteicho: {
      rivers: ["Έβρος", "Ερυθροπόταμος"],
      text: "Πόλη με 7.000 χρόνια συνεχούς κατοίκησης. Ο Έβρος είναι ο μεγαλύτερος ποταμός των Βαλκανίων και φυσικό σύνορο Ελλάδας-Τουρκίας.",
    },
    spartis: {
      rivers: ["Ευρώτας", "Οινούντας"],
      text: "Ο Ευρώτας είναι σύμβολο και ιστορικό μνημείο της Λακωνίας. Το δέλτα του (Δίβαρη) φιλοξενεί 210+ σπάνια είδη πουλιών — εντάσσεται στο NATURA 2000.",
    },
  };

  return (
    <div>
      {/* Hero */}
      <ParallaxHero
        src="https://rivers.gr/wp-content/uploads/2017/09/Nestos.jpg"
        alt="Νέστος ποταμός"
        priority
      >
        <HeroReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Τα Μέλη
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              {members.length} Δήμοι-Μέλη
              <br />
              <span className="text-cyan-300">από όλη την Ελλάδα</span>
            </h1>
            <p className="text-sky-200 text-lg leading-relaxed max-w-2xl mx-auto">
              Από τον Βοϊδομάτη της Ηπείρου ως τον Ευρώτα της Λακωνίας, από
              τον Νέστο της Θράκης ως τον Αλιάκμονα της Μακεδονίας.
            </p>
          </div>
        </HeroReveal>
      </ParallaxHero>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <dl className="flex flex-wrap justify-center gap-10 text-center">
            <div>
              <dt className="text-3xl font-black text-sky-700">{members.length}</dt>
              <dd className="text-slate-500 text-sm">Δήμοι-Μέλη</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-sky-700">{regions.length}</dt>
              <dd className="text-slate-500 text-sm">Περιφέρειες</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-sky-700">20+</dt>
              <dd className="text-slate-500 text-sm">Ποτάμια</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Members by region */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {byRegion.map(({ region, members: regionMembers }) => (
            <div key={region}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-slate-700">{region}</h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    regionColors[region] ?? "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  {regionMembers.length} δήμοι
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" staggerDelay={0.05}>
                {regionMembers.map((m) => (
                  <StaggerItem key={m.slug}>
                  <div
                    className="rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group bg-white"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <div className="font-semibold text-slate-800 text-sm leading-snug">
                        {m.name}
                      </div>
                      <div className="text-sky-600 text-xs mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {m.river}
                      </div>
                    </div>
                  </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted members */}
      {highlighted.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Προβεβλημένα Μέλη
              </h2>
              <p className="text-slate-500 text-sm">
                Μέλη με αξιόλογα ποτάμια και πλούσια παραποτάμια κληρονομιά
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlighted.map((m) => {
                const detail = highlightDetails[m.slug];
                return (
                  <div
                    key={m.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <h3 className="font-bold text-white text-lg">{m.name}</h3>
                        <span className="text-sky-200 text-sm">{m.region}</span>
                      </div>
                    </div>
                    {detail && (
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {detail.rivers.map((r) => (
                            <span
                              key={r}
                              className="bg-sky-50 border border-sky-100 text-sky-700 text-xs px-2.5 py-1 rounded-full font-medium"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {detail.text}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
