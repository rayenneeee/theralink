"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        email,
        role,
        phone,
      });

      setMessage("Compte créé avec succès 🎉");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1f3a] to-[#064e3b]">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Créer un compte ✨
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="Mot de passe"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="w-full p-4 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="client">Client</option>
            <option value="psy">Psychologue</option>
            <option value="coach">Coach</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            {loading ? "Création..." : "S'inscrire"}
          </button>

          {message && (
            <p className="text-center text-sm mt-3 text-red-400">
              {message}
            </p>
          )}
        </form>

        <p className="text-center text-white/60 mt-6 text-sm">
          Déjà un compte ?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-emerald-400 cursor-pointer hover:underline"
          >
            Se connecter
          </span>
        </p>
      </motion.div>
    </div>
  );
}
