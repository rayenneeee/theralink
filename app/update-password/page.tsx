"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setErrorMsg("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setMessage("✅ Mot de passe mis à jour !");
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#064e3b]">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full max-w-md shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Nouveau mot de passe 🔑
        </h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="password"
            required
            placeholder="Nouveau mot de passe"
            className="w-full p-4 rounded-xl bg-white/20 text-white"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold"
          >
            Mettre à jour
          </button>
        </form>

        {message && (
          <p className="text-green-400 mt-4 text-center">{message}</p>
        )}
        {errorMsg && (
          <p className="text-red-400 mt-4 text-center">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}
