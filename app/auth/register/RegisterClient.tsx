"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegisterClient() {
  const params = useSearchParams();
  const role = params.get("role");

  const [anonymous, setAnonymous] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#F6F8F7]">
      <div className="bg-white rounded-3xl p-10 shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-medium text-[#2E6F6A] mb-6 text-center">
          Inscription {role === "pro" ? "professionnel" : "client"}
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200"
          />

          {role !== "pro" && (
            <>
              <input
                type="text"
                placeholder="Pseudo (ex: SoleilCalme)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
              />

              <label className="flex items-center gap-2 text-sm text-[#5A6F6C]">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={() => setAnonymous(!anonymous)}
                />
                Je souhaite rester anonyme
              </label>

              {anonymous && (
                <p className="text-xs text-[#7A8F8B]">
                  Votre vrai nom ne sera jamais visible par le professionnel.
                </p>
              )}
            </>
          )}

          <button
            type="button"
            className="w-full mt-4 px-6 py-3 rounded-full bg-[#6BAFA8] text-white hover:bg-[#5A9E98] transition"
          >
            Créer mon compte
          </button>
        </form>
      </div>
    </main>
  );
}
