"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user) {
      // Vérifier rôle
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profile?.role === "psy" || profile?.role === "coach") {
        router.push("/psydash");
      } else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-96 text-white"
      >
        <h1 className="text-2xl mb-6 text-center">Connexion</h1>

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 bg-white/20 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          required
          className="w-full p-3 mb-4 bg-white/20 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center mt-4">
  <a
    href="/forgot-password"
    className="text-emerald-300 hover:underline text-sm"
  >
    Mot de passe oublié ?
  </a>
</div>


        <button className="w-full bg-teal-500 py-3 rounded">
          Se connecter
        </button>

        {error && (
          <p className="text-red-400 mt-4 text-sm text-center">{error}</p>
        )}
      </form>
    </div>
  );
}
