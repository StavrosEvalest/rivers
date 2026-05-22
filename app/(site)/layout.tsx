import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ελληνικό Δίκτυο Δήμων με Ποτάμια",
    template: "%s | Δίκτυο Δήμων με Ποτάμια",
  },
  description:
    "Το Ελληνικό Δίκτυο Δήμων με Ποτάμια εκπροσωπεί δήμους με σημαντικά ποτάμια και εργάζεται για την αειφόρο διαχείρισή τους.",
};

const footerLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Το Δίκτυο", href: "/to-diktyo" },
  { label: "Τα Μέλη", href: "/meli" },
  { label: "Διοικητικό Συμβούλιο", href: "/dioikitiko-symvoulio" },
  { label: "Δραστηριότητες", href: "/drastiriotites" },
  { label: "Νέα", href: "/nea" },
  { label: "Επικοινωνία", href: "/epikoinonia" },
];

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-full flex flex-col antialiased bg-white text-slate-800">
      <Navigation />

      {/* Offset for fixed header (h-16 = 64px) */}
      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <div className="inline-block rounded-lg px-2 py-1">
                  <Image
                    src="/new-rivers-logo-transparent.png"
                    alt="Ελληνικό Δίκτυο Δήμων με Ποτάμια"
                    width={180}
                    height={54}
                  />
                </div>
              </div>
              <p className="text-sky-300 text-sm leading-relaxed">
                Θεσμικός φορέας για την αειφόρο διαχείριση των ποταμών
                και υδάτινων πόρων της χώρας.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
                Πλοήγηση
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sky-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
                Επικοινωνία
              </h3>
              <address className="not-italic text-sm text-sky-300 space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Βενιζέλου &amp; Καρδίτσης 1<br />Τρίκαλα, 42131</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:2431077977" className="hover:text-white transition-colors">2431077977</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:inforiversgr@gmail.com" className="hover:text-white transition-colors break-all">
                    inforiversgr@gmail.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="border-t border-sky-800/60 pt-6 text-center text-xs text-sky-600">
            © {new Date().getFullYear()} Ελληνικό Δίκτυο Δήμων με Ποτάμια. Με την επιφύλαξη παντός δικαιώματος.
          </div>
        </div>
      </footer>
    </div>
  );
}
