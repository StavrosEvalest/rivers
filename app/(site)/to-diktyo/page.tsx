import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ParallaxHero from "../components/ParallaxHero";
import { FadeInUp, FadeInLeft, StaggerGrid, StaggerItem, HeroReveal } from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Το Δίκτυο",
  description:
    "Ιστορία και αποστολή του Ελληνικού Δικτύου Δήμων με Ποτάμια — θεσμικός φορέας για την αειφόρο διαχείριση των ποταμών.",
};

const milestones = [
  {
    year: "2006",
    title: "Ίδρυση",
    desc: "Ίδρυση του Δικτύου στις 13 Ιουνίου 2006 με την επωνυμία «Ελληνικό Δίκτυο Πόλεων με Ποτάμια».",
  },
  {
    year: "2016",
    title: "Επανενεργοποίηση",
    desc: "Επανενεργοποίηση στην 1η Οκτωβρίου 2016 στα Τρίκαλα, με 12 ιδρυτικούς δήμους. Μετονομασία σε «Ελληνικό Δίκτυο Δήμων με Ποτάμια».",
  },
  {
    year: "2021",
    title: "Ανανέωση Καταστατικού",
    desc: "Έκτακτη Γενική Συνέλευση (19 Μαρτίου 2021) για ενημέρωση του καταστατικού — απλούστευση διαδικασιών, αποτελεσματικότερη λειτουργία.",
  },
  {
    year: "Σήμερα",
    title: "Ανάπτυξη",
    desc: "32 δήμοι-μέλη και συνεχής επέκταση δράσεων σε εθνικό και ευρωπαϊκό επίπεδο.",
  },
];

const goals = [
  {
    icon: "🌊",
    title: "Προστασία Υδάτινων Πόρων",
    desc: "Ανάληψη και υλοποίηση πολιτικών για την περιβαλλοντική προστασία των ποτάμιων οικοσυστημάτων.",
  },
  {
    icon: "🤝",
    title: "Δικτύωση Δήμων",
    desc: "Ενδυνάμωση της τοπικής αυτοδιοίκησης μέσα από τη συνεργασία και τη συλλογική δράση.",
  },
  {
    icon: "🌿",
    title: "Βιώσιμη Ανάπτυξη",
    desc: "Αισθητική, πολιτιστική και οικονομική ανάπτυξη των περιοχών που διαρρέονται από ποτάμια.",
  },
  {
    icon: "📋",
    title: "Θεσμικό Πλαίσιο",
    desc: "Προώθηση βέλτιστων πρακτικών και θεσμικών πλαισίων για τη διαχείριση ποτάμιων οικοσυστημάτων.",
  },
  {
    icon: "🎓",
    title: "Εκπαίδευση & Κατάρτιση",
    desc: "Εκπαίδευση στελεχών δήμων, σεμινάρια, ημερίδες και ευρωπαϊκές συνεργασίες.",
  },
  {
    icon: "🌍",
    title: "Ευρωπαϊκή Δικτύωση",
    desc: "Συμμετοχή σε ευρωπαϊκά δίκτυα και εκπροσώπηση σε ευρωπαϊκά θεσμικά όργανα.",
  },
];

export default function ToDiktyoPage() {
  return (
    <div>
      {/* Hero */}
      <ParallaxHero
        src="https://rivers.gr/wp-content/uploads/2017/09/trikala-2.jpg"
        alt="Τρίκαλα — έδρα του Δικτύου"
        priority
      >
        <HeroReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Το Δίκτυο
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Ελληνικό Δίκτυο Δήμων
              <br />
              <span className="text-cyan-300">με Ποτάμια</span>
            </h1>
            <p className="text-sky-200 text-lg leading-relaxed max-w-2xl mx-auto">
              Αστική μη Κερδοσκοπική Εταιρεία που εκπροσωπεί δήμους της χώρας
              με σημαντικά ποτάμια, με έδρα τον Δήμο Τρικκαίων.
            </p>
          </div>
        </HeroReveal>
      </ParallaxHero>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Αποστολή & Σκοπός
              </h2>
              <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 sm:p-10 mb-10">
            <blockquote className="text-slate-700 text-lg leading-relaxed italic text-center">
              «Με το νερό των ποταμών τους ενώνονται πλέον οι Δήμοι που
              επανενεργοποίησαν το Ελληνικό Δίκτυο Δήμων με Ποτάμια.»
            </blockquote>
            <p className="text-center text-sm text-slate-400 mt-4 not-italic">
              — Δημήτρης Παπαστεργίου, κατά την επανενεργοποίηση (2016)
            </p>
          </div>
          </FadeInUp>

          <FadeInLeft delay={0.15}>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Το Ελληνικό Δίκτυο Δήμων με Ποτάμια είναι ένας θεσμικός φορέας
            που αποτελείται από δήμους της Ελλάδας και άλλους συνεργαζόμενους
            φορείς. Η δραστηριότητά του εκτείνεται σε ολόκληρη την ελληνική
            Επικράτεια.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Σκοπός του δικτύου είναι η ανάληψη και υλοποίηση πολιτικών για
            την περιβαλλοντική, πολιτιστική, αισθητική και οικονομική
            ανάπτυξη των ποτάμιων οικοσυστημάτων, με κεντρικό άξονα την
            αειφόρο διαχείριση των υδάτινων πόρων.
          </p>
          </FadeInLeft>
        </div>
      </section>

      {/* Goals grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Στόχοι & Δράσεις
            </h2>
            <p className="text-slate-500">
              Τομείς στους οποίους επικεντρώνεται η δράση μας
            </p>
          </div>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {goals.map((goal) => (
              <StaggerItem key={goal.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                  <div className="text-3xl mb-4">{goal.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{goal.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Ιστορική Πορεία
            </h2>
            <p className="text-slate-500">
              Οι σταθμοί της εξέλιξης του Δικτύου
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-sky-200 hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-sky-700 text-white flex flex-col items-center justify-center text-xs font-bold leading-tight relative z-10">
                    {m.year.length > 4 ? (
                      <span className="text-[10px] text-center leading-tight px-1">{m.year}</span>
                    ) : (
                      m.year
                    )}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-slate-100">
                    <h3 className="font-bold text-sky-800 mb-1">{m.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Δείτε τα Μέλη μας</h2>
          <p className="text-sky-200 mb-8">
            32 δήμοι σε όλη την Ελλάδα, ενωμένοι γύρω από τα ποτάμια τους
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/meli"
              className="bg-white text-sky-900 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors"
            >
              Τα Μέλη
            </Link>
            <Link
              href="/epikoinonia"
              className="border border-sky-500 text-sky-100 font-semibold px-8 py-3.5 rounded-xl hover:bg-sky-400/15 transition-colors"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
