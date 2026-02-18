"use client";

import { useSearchParams } from "next/navigation";

export default function ClientListClient() {
  const params = useSearchParams();
  const filter = params.get("filter");

  return (
    <main className="min-h-screen p-10 bg-[#F6F8F7]">
      <h1 className="text-2xl font-semibold text-[#2E6F6A] mb-6">
        Liste des clients
      </h1>

      {filter && (
        <p className="mb-4 text-sm text-gray-600">
          Filtre actif : <strong>{filter}</strong>
        </p>
      )}

      <div className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">
          Ici apparaîtra la liste des clients.
        </p>
      </div>
    </main>
  );
}
