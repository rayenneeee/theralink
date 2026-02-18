"use client";

export default function CoachProfilePage() {
  return (
    <main className="min-h-screen w-full px-6 py-16 bg-[#F6F8F7]">
      <div className="max-w-3xl mx-auto bg-white/70 rounded-3xl p-10 shadow-lg">
        <h1 className="text-3xl font-medium text-[#2E6F6A] mb-6">
          Créer votre profil coach de vie
        </h1>

        <p className="text-[#5A6F6C] mb-10">
          Présentez votre approche et la manière dont vous accompagnez vos clients.
        </p>

        <form className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Nom complet
            </label>
            <input
              type="text"
              placeholder="Ex : Karim Mansour"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
            />
          </div>

          {/* Approche */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Votre approche
            </label>
            <textarea
              rows={4}
              placeholder="Décrivez votre méthode d’accompagnement..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
            />
          </div>

          {/* Domaines */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-1">
              Domaines d’accompagnement
            </label>
            <input
              type="text"
              placeholder="Confiance en soi, motivation, stress..."
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
              placeholder="Ex : 60"
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
        </form>
      </div>
    </main>
  );
}
