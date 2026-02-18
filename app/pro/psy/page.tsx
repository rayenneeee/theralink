"use client";
import { useRouter } from "next/navigation";


export default function PsyProfilePage() {
     const router = useRouter();
  return (

    <main className="min-h-screen w-full px-6 py-16 bg-[#F6F8F7]">
      <div className="max-w-3xl mx-auto bg-white/70 rounded-3xl p-10 shadow-lg">
        <h1 className="text-3xl font-medium text-[#2E6F6A] mb-6">
          Créer votre profil psychologue
        </h1>

        <p className="text-[#5A6F6C] mb-10">
          Ces informations seront visibles par les clients.
          Vous pourrez les modifier à tout moment.
        </p>

        <form className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Nom complet
            </label>
            <input
              type="text"
              placeholder="Ex : Dr ......"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Présentation
            </label>
            <textarea
              rows={4}
              placeholder="Parlez brièvement de votre approche..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
            />
          </div>

          {/* Spécialités */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Spécialités
            </label>
            <input
              type="text"
              placeholder="Stress, anxiété, dépression, couple..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200"
            />
          </div>

          {/* Langues */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Langues parlées
            </label>
            <input
              type="text"
              placeholder="Arabe, Français, Anglais"
              className="w-full px-4 py-3 rounded-xl border border-gray-200"
            />
          </div>

          {/* Prix */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Prix par séance (TND)
            </label>
            <input
              type="number"
              placeholder="Ex : 70"
              className="w-full px-4 py-3 rounded-xl border border-gray-200"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
          >
            Enregistrer mon profil
          </button>
          <button
  type="button"
  onClick={() => router.push("/pro/availability")}
  className="w-full mt-6 px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
>
  Continuer
</button>

        </form>
      </div>
    </main>
  );
}
