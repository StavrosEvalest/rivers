import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "Rivers",
  description: "Celebrating the world's rivers",
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-full flex flex-col antialiased bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-700 tracking-tight">
            Rivers
          </Link>
          <nav className="flex gap-8 text-sm font-medium">
            <Link href="/" className="text-slate-600 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link href="/news" className="text-slate-600 hover:text-blue-700 transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-700 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rivers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
