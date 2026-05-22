import type { Metadata } from "next";
import Image from "next/image";
import { getDocuments } from "outstatic/server";

export const metadata: Metadata = {
  title: "Διοικητικό Συμβούλιο",
  description: "Τα μέλη του Διοικητικού Συμβουλίου του Ελληνικού Δικτύου Δήμων με Ποτάμια.",
};

const roleBadge: Record<string, string> = {
  Πρόεδρος: "bg-sky-700 text-white",
  Αντιπρόεδρος: "bg-sky-600 text-white",
  Γραμματέας: "bg-sky-500 text-white",
  Ταμίας: "bg-cyan-600 text-white",
  Μέλος: "bg-slate-200 text-slate-700",
  "Διευθυντής Συντονισμού": "bg-emerald-100 text-emerald-700",
};

export default function DioikitikoSymvoulioPage() {
  const raw = getDocuments("board", [
    "title", "slug", "role", "position", "municipality",
    "email", "order", "status",
  ]);

  const allMembers = raw
    .filter((b) => b.status === "published")
    .sort(
      (a, b) =>
        ((a.order as number) ?? 99) - ((b.order as number) ?? 99)
    )
    .map((b) => ({
      name: b.title,
      slug: b.slug,
      role: (b.role as string) ?? "",
      title: (b.position as string) ?? "",
      municipality: (b.municipality as string) ?? "",
      email: (b.email as string) ?? "",
    }));

  const coordinator = allMembers.find(
    (m) => m.role === "Διευθυντής Συντονισμού"
  );
  const boardMembers = allMembers.filter(
    (m) => m.role !== "Διευθυντής Συντονισμού"
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="https://rivers.gr/wp-content/uploads/2017/09/trikala-2-2-300x200.jpg"
          alt="Τρίκαλα"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/92 to-sky-800/85" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Διοίκηση
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Διοικητικό Συμβούλιο
          </h1>
          <p className="text-sky-200 text-lg leading-relaxed max-w-xl mx-auto">
            Το εκλεγμένο Διοικητικό Συμβούλιο του Ελληνικού Δικτύου Δήμων με
            Ποτάμια αποτελείται από{" "}
            <strong className="text-white">{boardMembers.length} μέλη</strong>{" "}
            που εκπροσωπούν δήμους από διαφορετικές περιφέρειες της χώρας.
          </p>
        </div>
      </section>

      {/* Board grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((m) => (
              <div
                key={m.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 border-2 border-sky-200 flex items-center justify-center mb-4 text-2xl font-bold text-sky-700 select-none">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <span
                  className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                    roleBadge[m.role] ?? "bg-slate-100 text-slate-600"
                  }`}
                >
                  {m.role}
                </span>

                <h2 className="font-bold text-slate-800 text-lg leading-snug mb-1">
                  {m.name}
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed mb-3 flex-1">
                  {m.title}
                </p>

                <div className="border-t border-slate-100 pt-3 mt-auto space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <svg
                      className="w-3.5 h-3.5 text-sky-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {m.municipality}
                  </div>
                  {m.email && (
                    <div className="flex items-center gap-2 text-xs">
                      <svg
                        className="w-3.5 h-3.5 text-sky-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href={`mailto:${m.email}`}
                        className="text-sky-600 hover:text-sky-800 transition-colors break-all"
                      >
                        {m.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordinator */}
      {coordinator && (
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-slate-700 mb-6 text-center">
              Γραμματεία &amp; Συντονισμός
            </h2>
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-200 flex items-center justify-center mb-4 text-2xl font-bold text-emerald-700 mx-auto">
                  {coordinator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                  {coordinator.role}
                </span>
                <h3 className="font-bold text-slate-800 text-lg mt-3">
                  {coordinator.name}
                </h3>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Previous board note */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <details className="group">
            <summary className="cursor-pointer flex items-center gap-2 text-slate-600 font-semibold hover:text-sky-700 transition-colors">
              <svg
                className="w-5 h-5 group-open:rotate-90 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Προηγούμενο Διοικητικό Συμβούλιο (2021–2024)
            </summary>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { role: "Πρόεδρος", name: "Ιωάννης Ταγκαλέγκας", title: "Δήμαρχος Λεβαδιάς" },
                { role: "Αντιπρόεδρος", name: "Ιωάννης Ιωαννίδης", title: "Δήμαρχος Δήμου Δέλτα" },
                { role: "Γεν. Γραμματέας", name: "Βασίλειος Γιαννάκης", title: "Δήμαρχος Φλώρινας" },
                { role: "Ταμίας", name: "Σάββας Μελισσόπουλος", title: "Δημοτικός Σύμβουλος Δήμου Ξάνθης" },
                { role: "Μέλος", name: "Νικόλαος Καρανικόλας", title: "Δήμαρχος Νάουσας" },
                { role: "Μέλος", name: "Παρασκευή Καραλή", title: "Δήμαρχος Ορχομενού" },
                { role: "Μέλος", name: "Θωμαή Καφάση", title: "Αντιδήμαρχος Δήμου Σοφάδων" },
              ].map((m) => (
                <div
                  key={m.name}
                  className="flex gap-3 items-start bg-slate-50 rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{m.role}</div>
                    <div className="font-semibold text-slate-700 text-sm">{m.name}</div>
                    <div className="text-slate-500 text-xs">{m.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
