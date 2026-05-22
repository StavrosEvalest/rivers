import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με το Ελληνικό Δίκτυο Δήμων με Ποτάμια — Τρίκαλα, Θεσσαλία.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Διεύθυνση",
    value: "Βενιζέλου & Καρδίτσης 1\nΤρίκαλα, ΤΚ 42131",
    href: "https://maps.google.com/?q=Βενιζέλου+Καρδίτσης+1+Τρίκαλα",
    linkLabel: "Προβολή στο χάρτη",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Τηλέφωνο",
    value: "2431077977\n6944527438",
    href: "tel:2431077977",
    linkLabel: "Κλήση",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "inforiversgr@gmail.com",
    href: "mailto:inforiversgr@gmail.com",
    linkLabel: "Αποστολή Email",
  },
];

export default function EpikoinoniaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="https://rivers.gr/wp-content/uploads/2017/09/trikala-2.jpg"
          alt="Τρίκαλα"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/90 to-sky-800/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Επικοινωνία
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Επικοινωνήστε
            <br />
            <span className="text-cyan-300">μαζί μας</span>
          </h1>
          <p className="text-sky-200 text-lg leading-relaxed max-w-xl mx-auto">
            Για πληροφορίες σχετικά με το Δίκτυο, τα μέλη ή τις
            δραστηριότητές μας, είμαστε στη διάθεσή σας.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact cards */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Στοιχεία Επικοινωνίας
              </h2>

              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                        {item.label}
                      </div>
                      <div className="text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                        {item.value}
                      </div>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1 text-sky-600 text-sm hover:text-sky-800 transition-colors mt-2 font-medium"
                        {...(item.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.linkLabel}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social media */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  Κοινωνικά Δίκτυα
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61576582977687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors px-4 py-2.5 rounded-xl text-sm font-semibold"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Φόρμα Επικοινωνίας
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <form
                  action={`mailto:inforiversgr@gmail.com`}
                  method="get"
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Το Όνομά σας <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="π.χ. Γιώργος Παπαδόπουλος"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Email σας <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Θέμα
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Θέμα μηνύματος"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="body"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Μήνυμα <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="body"
                      name="body"
                      rows={5}
                      required
                      placeholder="Γράψτε το μήνυμά σας εδώ..."
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-700 text-white font-bold py-3.5 rounded-xl hover:bg-sky-800 transition-colors shadow-sm"
                  >
                    Αποστολή Μηνύματος
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Θα ανοίξει ο email client σας. Εναλλακτικά, επικοινωνήστε
                    απευθείας στο{" "}
                    <a
                      href="mailto:inforiversgr@gmail.com"
                      className="text-sky-600 hover:underline"
                    >
                      inforiversgr@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="Χάρτης — Δίκτυο Δήμων με Ποτάμια"
              src="https://www.openstreetmap.org/export/embed.html?bbox=21.745%2C39.548%2C21.775%2C39.558&amp;layer=mapnik&amp;marker=39.553%2C21.760"
              className="w-full h-64 sm:h-80"
              loading="lazy"
            />
          </div>
          <p className="text-center text-xs text-slate-400 mt-3">
            Βενιζέλου &amp; Καρδίτσης 1, Τρίκαλα — &copy;{" "}
            <a
              href="https://www.openstreetmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600"
            >
              OpenStreetMap contributors
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
