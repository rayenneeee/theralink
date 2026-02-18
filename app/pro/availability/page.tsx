"use client";

export default function AvailabilityPage() {
  return (
    <main className="min-h-screen w-full px-6 py-16 bg-[#F6F8F7]">
      <div className="max-w-3xl mx-auto bg-white/70 rounded-3xl p-10 shadow-lg">
        <h1 className="text-3xl font-medium text-[#2E6F6A] mb-6">
          Vos disponibilités & séances
        </h1>

        <p className="text-[#5A6F6C] mb-10">
          Indiquez simplement quand et comment vous êtes disponible.
          Vous pourrez modifier ces informations à tout moment.
        </p>

        <form className="space-y-8">
          {/* Dates disponibles */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-2">
              Dates disponibles
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
              />
            </div>

            <p className="text-xs text-[#7A8F8B] mt-2">
              Sélectionnez une ou plusieurs dates.
            </p>
          </div>

          {/* Horaires */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-2">
              Horaires disponibles
            </label>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6BAFA8]"
              />

              
            </div>

            <p className="text-xs text-[#7A8F8B] mt-2">
              Exemple : de 18h à 22h
            </p>
          </div>

          {/* Types de séances */}
          <div>
            <label className="block text-sm text-[#5A6F6C] mb-3">
              Types de séances proposées
            </label>

            <div className="flex flex-wrap gap-6 text-sm text-[#5A6F6C]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6BAFA8]" />
                Visio
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6BAFA8]" />
                Audio
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6BAFA8]" />
                Chat
              </label>
            </div>
          </div>

          {/* Estimation revenus */}
          <div className="bg-[#F0F7F6] rounded-xl p-4 text-sm text-[#2E6F6A]">
            💡 <strong>Estimation :</strong>
            <br />
            Environ 8 à 12 séances par semaine permettent
            des revenus mensuels réguliers.
          </div>

          {/* Bouton */}
          <button
            type="button"
            className="w-full mt-6 px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
          >
            Enregistrer mes disponibilités
          </button>
        </form>
      </div>
    </main>
  );
}
