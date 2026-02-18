import "./globals.css";
import Navbar from "./components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheraLink - Mental Health Platform",
  description: "Connectez-vous avec des psychologues et coachs en ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1f3a] to-[#0a1120] text-white overflow-x-hidden">

        {/* Glow Background Effects */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl animate-pulse -z-10"></div>

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          {children}
        </main>

      </body>
    </html>
  );
}
