"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Αρχική", href: "/" },
  { label: "Το Δίκτυο", href: "/to-diktyo" },
  { label: "Τα Μέλη", href: "/meli" },
  { label: "Δ.Σ.", href: "/dioikitiko-symvoulio", fullLabel: "Διοικητικό Συμβούλιο" },
  { label: "Δραστηριότητες", href: "/drastiriotites" },
  { label: "Νέα", href: "/nea" },
  { label: "Επικοινωνία", href: "/epikoinonia" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sky-950/95 backdrop-blur-md shadow-xl shadow-sky-950/20"
          : "bg-sky-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full bg-sky-400/20 flex items-center justify-center group-hover:bg-sky-400/30 transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-cyan-300"
                fill="currentColor"
              >
                <path d="M12 2a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm">Δίκτυο Δήμων</div>
              <div className="text-cyan-300 text-[11px] font-medium">με Ποτάμια</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all ${
                    isActive
                      ? "bg-sky-400/25 text-white"
                      : "text-sky-200 hover:bg-sky-400/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-sky-200 hover:bg-sky-400/20 hover:text-white transition-colors"
            aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-sky-800 bg-sky-950 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sky-400/20 text-white"
                    : "text-sky-200 hover:bg-sky-400/10 hover:text-white"
                }`}
              >
                {item.fullLabel ?? item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
