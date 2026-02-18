export default function LegalPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#F6F8F7]">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 className="text-2xl font-medium text-[#2E6F6A] mb-6">
          Mentions légales & Conditions
        </h1>

        <div className="space-y-4 text-sm text-[#5A6F6C]">
          <p>
            TheraLink est une plateforme de mise en relation entre utilisateurs
            et professionnels indépendants (psychologues et coachs).
          </p>

          <p>
            Les consultations ne remplacent pas un suivi médical en présentiel.
          </p>

          <p>
            En cas d’urgence, veuillez contacter les services d’urgence (190 en
            Tunisie).
          </p>

          <p>
            Chaque professionnel est responsable de sa pratique.
          </p>
        </div>
      </div>
    </main>
  );
}
