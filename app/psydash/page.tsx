"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 800 },
  { month: "Feb", revenue: 1200 },
  { month: "Mar", revenue: 950 },
  { month: "Apr", revenue: 1600 },
  { month: "May", revenue: 2000 },
  { month: "Jun", revenue: 2300 },
];

export default function PsyDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#020617] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-white/5 backdrop-blur-2xl border-r border-white/10 p-8 flex flex-col justify-between">

        <div>
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Theraling Pro
          </h2>

          <nav className="space-y-6 text-gray-400 text-lg">
            <p className="hover:text-white transition cursor-pointer">📊 Dashboard</p>
            <p className="hover:text-white transition cursor-pointer">👥 Patients</p>
            <p className="hover:text-white transition cursor-pointer">💰 Revenus</p>
            <p className="hover:text-white transition cursor-pointer">⚙ Paramètres</p>
          </nav>
        </div>

        <button className="bg-red-500/20 text-red-400 py-3 rounded-xl hover:bg-red-500/30 transition">
          Déconnexion
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-14">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-14"
        >
          Dashboard Professionnel 👑
        </motion.h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-8 mb-16">

          <motion.div whileHover={{ scale: 1.05 }} className="glass-card">
            <p className="subtitle">Revenus totaux</p>
            <h2 className="stat text-emerald-400">8 850 TND</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="glass-card">
            <p className="subtitle">Patients actifs</p>
            <h2 className="stat">24</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="glass-card">
            <p className="subtitle">Sessions ce mois</p>
            <h2 className="stat text-cyan-400">18</h2>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="glass-card">
            <p className="subtitle">Note moyenne</p>
            <h2 className="stat text-yellow-400">4.9 ⭐</h2>
          </motion.div>

        </div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-10"
        >
          <h2 className="text-2xl font-bold mb-8">Évolution des revenus</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

      </main>
    </div>
  );
}
