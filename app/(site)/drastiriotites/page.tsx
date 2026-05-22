import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Δραστηριότητες",
  description:
    "Δραστηριότητες, ημερίδες, συνέδρια και εκδηλώσεις του Ελληνικού Δικτύου Δήμων με Ποτάμια.",
};

const B = "https://rivers.gr/wp-content/uploads";

const activities = [
  {
    date: "Νοέμβριος 2025",
    title: "Φεστιβάλ Ταινιών Μικρού Μήκους — «Ποτάμια: Ζωής Ευεργέτες»",
    desc: "Ευρωπαϊκό Φεστιβάλ Ταινιών Μικρού Μήκους, 20–23 Νοεμβρίου 2025 στα Τρίκαλα. Εκπαιδευτικές προβολές για ηλικίες 8–12 ετών.",
    tags: ["Πολιτισμός", "Εκπαίδευση", "Τρίκαλα"],
    img: `${B}/2025/07/Festival-logo-Word-file-2-348x215.jpg`,
    highlight: true,
  },
  {
    date: "Οκτώβριος 2025",
    title: "Διήμερο Κινηματογραφικό Εργαστήριο — «Κινηματογραφώντας τον Υδάτινο Κόσμο»",
    desc: "Εργαστήριο κινηματογράφου αφιερωμένο στην ανάδειξη υδάτινων οικοσυστημάτων, 15–18 Οκτωβρίου 2025.",
    tags: ["Εκπαίδευση", "Πολιτισμός"],
    img: `${B}/2025/10/IMG_4159.jpeg`,
    highlight: false,
  },
  {
    date: "Σεπτέμβριος 2025",
    title: "Τριήμερο Διδυμοτείχου — «Υδάτινα Οικοσυστήματα & Βιώσιμη Διαχείριση»",
    desc: "Τριήμερη εκδήλωση «Υδάτινα Οικοσυστήματα – Βιώσιμη Διαχείριση υπό Συνθήκες Κλιματικής Κρίσης», 26–28 Σεπτεμβρίου 2025.",
    tags: ["Περιβάλλον", "Κλιματική Κρίση", "Διδυμότειχο"],
    img: `${B}/2025/10/557544520_122148157016876205_5850090124308851342_n.jpg`,
    highlight: false,
  },
  {
    date: "Ιούλιος 2025",
    title: "Συνέργεια Δικτύων & Συνεργασία με Δήμο Σοφάδων",
    desc: "Συνάντηση δικτύωσης και συνεργασίας με τον Δήμο Σοφάδων για την ανάπτυξη κοινών δράσεων.",
    tags: ["Δικτύωση"],
    img: `${B}/2025/07/Picture1-735x400.png`,
    highlight: false,
  },
  {
    date: "Ιούλιος 2025",
    title: "Συνάντηση Εργασίας Λάρισα",
    desc: "Συνάντηση εργασίας με φορείς της Λάρισας για την προώθηση κοινών δράσεων προστασίας του Πηνειού.",
    tags: ["Δικτύωση", "Λάρισα"],
    img: `${B}/2025/07/20250708_135330_11.thumbnail-348x215.jpg`,
    highlight: false,
  },
  {
    date: "Μάιος–Ιούλιος 2025",
    title: "Εκδηλώσεις Κρήτη",
    desc: "Σειρά εκδηλώσεων στην Κρήτη για την ανάδειξη των υδάτινων πόρων του νησιού.",
    tags: ["Κρήτη", "Δικτύωση"],
    img: `${B}/2025/05/495583659_10229066281350293_3468080634054292198_n-735x400.jpg`,
    highlight: false,
  },
  {
    date: "Μάρτιος 2025",
    title: "Ημερίδα Χαλκηδόνας",
    desc: "Ημερίδα στην Χαλκηδόνα με θέμα τη βιώσιμη διαχείριση του Αξιού ποταμού.",
    tags: ["Ημερίδα", "Χαλκηδόνα"],
    img: `${B}/2025/03/DSC06005-1-735x400.jpg`,
    highlight: false,
  },
  {
    date: "Ιανουάριος 2025",
    title: "Διεθνής Έκθεση Τουρισμού Philoxenia Hotelia HELEXPO 2024",
    desc: "Συμμετοχή στη Διεθνή Έκθεση Τουρισμού HELEXPO για την ανάδειξη του ποτάμιου τουρισμού.",
    tags: ["Τουρισμός"],
    img: `${B}/2025/01/DSC05314-735x400.jpg`,
    highlight: false,
  },
  {
    date: "Σεπτέμβριος 2023",
    title: "Σεμινάριο Βέροιας — «Ορθολογική Διαχείριση Ποτάμιων Οικοσυστημάτων»",
    desc: "Εκπαιδευτικό σεμινάριο για στελέχη δήμων με επίκεντρο τη διαχείριση ποτάμιων οικοσυστημάτων.",
    tags: ["Εκπαίδευση", "Βέροια"],
    img: `${B}/2023/09/2-735x400.jpg`,
    highlight: false,
  },
  {
    date: "Οκτώβριος 2022",
    title: "Συνέδριο Σίνδου",
    desc: "Συνέδριο στον Σίνδο με επίκεντρο τη διαχείριση του Αξιού ποταμού και τις τοπικές προκλήσεις.",
    tags: ["Συνέδριο"],
    img: `${B}/2022/10/309032046_411486941166887_7485289064683508497_n-1024x575-735x400.jpeg`,
    highlight: false,
  },
  {
    date: "Δεκέμβριος 2022",
    title: "Ενημερωτική Επίσκεψη στις Βρυξέλλες",
    desc: "Επίσκεψη σε ευρωπαϊκά θεσμικά όργανα στις Βρυξέλλες για ενημέρωση και δικτύωση.",
    tags: ["Ευρώπη", "Δικτύωση"],
    img: `${B}/2022/12/IMG_20221129_164157-348x215.jpg`,
    highlight: false,
  },
  {
    date: "Σεπτέμβριος 2021",
    title: "Διημερίδα Κόνιτσας",
    desc: "Διήμερη εκδήλωση στην Κόνιτσα για την ανάδειξη του Αώου και Βοϊδομάτη.",
    tags: ["Ήπειρος", "Κόνιτσα"],
    img: `${B}/2021/06/195939938-393067532045850-6887142619163917172-n-1-735x400.jpg`,
    highlight: false,
  },
  {
    date: "Μάρτιος 2018",
    title: "Σεμινάριο Λιβαδειάς",
    desc: "Εκπαιδευτικό σεμινάριο στη Λειβαδιά για στελέχη και αιρετούς δήμων-μελών.",
    tags: ["Εκπαίδευση"],
    img: `${B}/2017/09/livadia.jpg`,
    highlight: false,
  },
];

const tagColors: Record<string, string> = {
  "Πολιτισμός": "bg-violet-100 text-violet-700",
  "Εκπαίδευση": "bg-sky-100 text-sky-700",
  "Περιβάλλον": "bg-emerald-100 text-emerald-700",
  "Κλιματική Κρίση": "bg-orange-100 text-orange-700",
  "Δικτύωση": "bg-cyan-100 text-cyan-700",
  "Τουρισμός": "bg-yellow-100 text-yellow-700",
  "Ευρώπη": "bg-blue-100 text-blue-700",
  "Συνέδριο": "bg-rose-100 text-rose-700",
  "Ημερίδα": "bg-pink-100 text-pink-700",
  "Κρήτη": "bg-teal-100 text-teal-700",
};

export default function DrastiriotitesPage() {
  const [featured, ...rest] = activities;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src={`${B}/2025/03/DSC06005-1-735x400.jpg`}
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
              <div className="text-sm text-sky-600 font-medium mb-1">{featured.date}</div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">{featured.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">{featured.desc}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColors[t] ?? "bg-slate-100 text-slate-600"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline with photos */}
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
                {/* Thumbnail */}
                <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                {/* Content */}
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
                      <span key={t} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[t] ?? "bg-slate-100 text-slate-600"}`}>
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
