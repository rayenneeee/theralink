"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const date = searchParams.get("date");
  const time = searchParams.get("time");

  const [show, setShow] = useState(false);
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);

    // Confetti animation
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });

    // Auto redirect
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f4ef] via-[#eef6f4] to-[#e8dfd5] flex items-center justify-center p-6">

      <div
        className={`backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >

        {/* Animated Check */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 shadow-lg animate-bounce">
            <span className="text-4xl text-white">✓</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-teal-800 mb-4">
          Réservation confirmée
        </h1>

        <p className="text-gray-600 mb-6">
          Votre séance a été planifiée avec succès.
        </p>

        {/* Info Card */}
        <div className="bg-white/60 rounded-2xl p-6 mb-6 shadow-inner">
          <p className="text-lg font-semibold text-teal-700">
            📅 {date}
          </p>
          <p className="text-lg font-semibold text-teal-700">
            ⏰ {time}
          </p>
        </div>

        {/* Add to calendar */}
        <button
          className="mb-4 text-sm text-teal-600 hover:underline"
          onClick={() =>
            alert("Fonction calendrier à connecter plus tard")
          }
        >
          📅 Ajouter au calendrier
        </button>

        {/* Modern Button */}
        <button
          onClick={() => router.push("/")}
          className="
            relative w-full py-3 rounded-full text-lg font-semibold
            bg-gradient-to-r from-teal-600 to-emerald-500
            text-white
            transition-all duration-300
            hover:scale-105
            hover:shadow-2xl
          "
        >
          Retour à l'accueil
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Redirection automatique dans {countdown}s...
        </p>

      </div>
    </div>
  );
}
