"use client";

import { useRouter } from "next/navigation";

const goals = [
  "Confiance en soi",
  "Motivation / objectifs de vie",
  "Gestion du stress",
  "Équilibre vie personnelle / travail",
  "Prise de décision",
  "Développement personnel",
];

export default function CoachGoalsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 bg-[#F6F8F7]">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-[#2E6F6A] mb-4">
          Sur quoi souhaitez-vous travailler ?
        </h1>

        <p className="text-[#5A6F6C]">
          Choisissez ce qui correspond le mieux à vos objectifs actuels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
        {goals.map((goal) => (
          <div
            key={goal}
            onClick={() =>
              router.push(
                `/client/list?type=coach&goal=${encodeURIComponent(goal)}`
              )
            }
            className="cursor-pointer bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-lg transition hover:-translate-y-1 text-[#2E6F6A]"
          >
            {goal}
          </div>
        ))}
      </div>
    </main>
  );
}
