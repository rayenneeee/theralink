export default function RolePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#F6F8F7]">
      <div className="bg-white rounded-3xl p-10 shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-medium text-[#2E6F6A] mb-4">
          Rejoindre TheraLink
        </h1>

        <p className="text-sm text-[#5A6F6C] mb-8">
          Choisissez comment vous souhaitez utiliser la plateforme.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/auth/register?role=client"
            className="px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
          >
            Je suis un client
          </a>

          <a
            href="/auth/register?role=pro"
            className="px-6 py-3 rounded-full bg-[#EAF5F3] text-[#2E6F6A] hover:bg-[#DCEEEB] transition"
          >
            Je suis un professionnel
          </a>
        </div>
      </div>
    </main>
  );
}
