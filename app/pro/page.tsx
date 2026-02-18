"use client";

import { useRouter } from "next/navigation";

export default function ProPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#F6F8F7]">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-[#2E6F6A] mb-4">
          Quel type de professionnel êtes-vous ?
        </h1>

        <p className="text-[#5A6F6C]">
          Cette information nous permet d’adapter votre parcours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        {/* Carte Psychologue */}
        <div
          onClick={() => router.push("/pro/psy")}
          className="cursor-pointer bg-white/70 rounded-3xl p-8 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
        >
          <h2 className="text-2xl font-medium text-[#2E6F6A] mb-3">
            Psychologue
          </h2>

          <p className="text-[#5A6F6C] leading-relaxed">
            Professionnel de la santé mentale,  
            formé à l’accompagnement psychologique.
          </p>
        </div>

        {/* Carte Coach */}
        <div
          onClick={() => router.push("/pro/coach")}
          className="cursor-pointer bg-white/70 rounded-3xl p-8 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
        >
          <h2 className="text-2xl font-medium text-[#2E6F6A] mb-3">
            Coach de vie
          </h2>

          <p className="text-[#5A6F6C] leading-relaxed">
            Accompagnement orienté solutions,  
            objectifs et développement personnel.
          </p>
        </div>
      </div>
    </main>
  );
}
