export default function HomePage() {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/bg-calm.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl max-w-xl text-center">
        <h1 className="text-4xl font-semibold text-[#2E6F6A] mb-4">
          TheraLink
        </h1>

        <p className="text-[#5A6F6C] mb-6">
          Un espace calme, humain et confidentiel.
          <br />
          Parlez librement, avancez à votre rythme.
        </p>

        <p className="text-sm text-[#7A8F8B] italic mb-8">
          Vous n’êtes pas seul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/client"
            className="px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
          >
            Parler à un professionnel
          </a>

          <a
            href="/pro/psy"
            className="px-6 py-3 rounded-full bg-[#EAF5F3] text-[#2E6F6A] hover:bg-[#DCEEEB] transition"
          >
            Je suis psychologue / coach
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
  <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
    <p className="text-xs text-white font-medium drop-shadow">
      🔒 Vos échanges sont confidentiels. Vous pouvez rester anonyme.
    </p>
  </div>

  <a
    href="/legal"
    className="px-4 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white font-medium drop-shadow hover:underline transition"
  >
    Mentions légales & conditions
  </a>
</div>


      </div>
    </main>
  );
}
