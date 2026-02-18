export default function ClientPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#F6F8F7]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-[#2E6F6A] mb-4">
          Trouver un professionnel
        </h1>

        <p className="text-[#5A6F6C] mb-10">
          Choisissez le type de professionnel qui correspond à vos besoins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="/client/list?type=psy"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-medium text-[#2E6F6A] mb-2">
              Psychologue
            </h2>
            <p className="text-sm text-[#5A6F6C]">
              Stress, anxiété, dépression, addiction, couple…
            </p>
          </a>

          <a
            href="/client/list?type=coach"
            className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-medium text-[#2E6F6A] mb-2">
              Coach de vie
            </h2>
            <p className="text-sm text-[#5A6F6C]">
              Confiance en soi, motivation, objectifs, équilibre de vie…
            </p>
          </a>
        </div>

        <p className="mt-10 text-xs text-[#7A8F8B]">
          🔒 Vous pouvez consulter de manière anonyme.
        </p>
      </div>
    </main>
  );
}
