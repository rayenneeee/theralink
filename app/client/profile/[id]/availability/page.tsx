"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AvailabilityPage() {
  const router = useRouter();
  const params = useParams();

  const professionalId = params.id as string;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Vous devez être connecté.");
      return;
    }

    // 🔥 Récupérer le nom du professionnel
    const { data: professionalData, error: proError } = await supabase
      .from("professionals")
      .select("name")
      .eq("id", professionalId)
      .single();

    if (proError || !professionalData) {
      alert("Professionnel introuvable");
      return;
    }

    const professionalName = professionalData.name;

    // 🔥 Insérer booking
    const { error } = await supabase.from("bookings").insert({
      client_id: user.id,
      professional_id: professionalId,
      date,
      time,
      status: "confirmé",
    });

    if (error) {
      alert(error.message);
      return;
    }

    // 🔥 Envoyer email
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        professionalName,
        date,
        time,
      }),
    });

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#064e3b]">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md border border-white/20">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Choisir un rendez-vous
        </h2>

        <input
          type="date"
          className="w-full p-3 mb-4 rounded-xl bg-white/20 text-white"
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="w-full p-3 mb-6 rounded-xl bg-white/20 text-white"
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Choisir l'heure</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="16:00">16:00</option>
          <option value="18:00">18:00</option>
        </select>

        <button
          onClick={handleBooking}
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold transition"
        >
          Réserver
        </button>
      </div>
    </div>
  );
}
