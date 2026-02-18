"use client";

import { useRouter } from "next/navigation";

const needs = [
  "Stress / anxiété",
  "Dépression",
  "Confiance en soi",
  "Couple / relations",
  "Addiction",
  "Juste parler",
];

export default function PsyNeedsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#F6F8F7]">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-[#2E6F6A] mb-4">
          De quoi avez-vous besoin aujourd’hui ?
        </h1>

        <p className="text-[#5A6F6C]">
          Prenez votre temps. Choisissez ce qui vous parle le plus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        {needs.map((need) => (
          <div
            key={need}
            onClick={() => router.push(`/client/list?type=psy&need=${encodeURIComponent(need)}`)}
            className="cursor-pointer bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1 text-[#2E6F6A]"
          >
            {need}
          </div>
        ))}
      </div>
    </main>
  );
}
