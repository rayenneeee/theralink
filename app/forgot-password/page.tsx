"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setErrorMsg("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/update-password",
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setMessage("📩 Email envoyé ! Vérifiez votre boîte mail.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#064e3b]">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full max-w-md shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Mot de passe oublié 🔐
        </h1>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Votre email"
            className="w-full p-4 rounded-xl bg-white/20 text-white"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold"
          >
            Envoyer le lien
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
