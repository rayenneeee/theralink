"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { id } = useParams();
  const router = useRouter();
  const [professional, setProfessional] = useState<any>(null);

  useEffect(() => {
    const fetchProfessional = async () => {
      const { data } = await supabase
        .from("professionals")
        .select("*")
        .eq("id", id)
        .single();

      setProfessional(data);
    };

    fetchProfessional();
  }, [id]);

  if (!professional)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b1120]">
        Chargement...
      </div>
    );

  const specialties = Array.isArray(professional.specialties)
    ? professional.specialties
    : [];

  const languages = Array.isArray(professional.languages)
    ? professional.languages
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] text-white p-10">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto glass-profile"
      >

        {/* HEADER */}
        <div className="flex items-center gap-10 mb-12">

          {/* Avatar */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl">
            {professional.name?.charAt(0)}
          </div>

          {/* Infos */}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {professional.name}
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              {professional.title}
            </p>

            <div className="flex gap-6 text-gray-400">
              <span>⭐ 4.9 (128 avis)</span>
              <span>✔ Vérifié</span>
              <span>🟢 Disponible</span>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-10">

            {/* Bio */}
            <div className="glass-card p-8">
              <h2 className="section-title">À propos</h2>
              <p className="text-gray-300 leading-relaxed mt-4">
                Psychologue clinicien expérimenté spécialisé en thérapie
                cognitive et comportementale. Approche centrée sur
                l'humain et l'écoute active.
              </p>
            </div>

            {/* Specialties */}
            <div className="glass-card p-8">
              <h2 className="section-title">Spécialités</h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {specialties.map((spec: string, i: number) => (
                  <span
                    key={i}
                    className="badge"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-8">
              <h2 className="section-title">Langues</h2>
              <p className="text-gray-300 mt-4">
                {languages.join(", ")}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="glass-card p-8 flex flex-col justify-between">

            <div>
              <p className="text-gray-400 mb-2">Tarif par séance</p>
              <h2 className="text-4xl font-bold text-emerald-400 mb-6">
                {professional.price} TND
              </h2>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✔ Consultation 50 min</li>
                <li>✔ 100% confidentiel</li>
                <li>✔ Paiement sécurisé</li>
                <li>✔ Remboursement possible</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                router.push(`/client/profile/${id}/availability`)
              }
              className="premium-btn"
            >
              Prendre rendez-vous
            </motion.button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
