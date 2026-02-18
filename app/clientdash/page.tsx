"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ClientDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login"); // redirection si pas connecté
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Vérification de session...
      </div>
    );
  }

  return (
    <div>
      {/* TON DASHBOARD ICI */}
      <h1 className="text-white text-3xl">Dashboard Client</h1>
    </div>
  );
  
}
