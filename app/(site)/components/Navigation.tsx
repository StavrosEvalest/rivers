"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/" className="shrink-0 group">
            <div className="bg-white/95 rounded-lg px-2 py-1 group-hover:bg-white transition-colors">
              <Image
                src="https://rivers.gr/wp-content/uploads/2025/05/483596122_988930830035485_1672883815643360044_n-300x90.jpg"
                alt="Ελληνικό Δίκτυο Δήμων με Ποτάμια"
                width={150}
                height={45}
                className="h-9 w-auto"
                priority
              />
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
