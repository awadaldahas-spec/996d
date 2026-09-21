"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setError("Identifiants incorrects / Incorrect credentials");
        return;
      }
      router.push("/admin");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-bn-forest-dark flex items-center justify-center px-6">
      {/* Base gradient depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #1d3e13 0%, #12280c 55%, #060e04 100%)",
        }}
      />

      {/* Layer 2 — slow amber light sweep */}
      <div className="absolute inset-0 opacity-40 admin-login-sweep" />

      {/* Layer 1 — background botanical silhouettes (far, large, very slow) */}
      <svg
        className="absolute -left-24 -top-16 w-[520px] h-[520px] opacity-[0.07] admin-login-drift-slow"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 20c15 20 15 45 0 65-15-20-15-45 0-65z M100 85c25 10 45 30 50 55-28-2-52-20-60-45z M100 85c-25 10-45 30-50 55 28-2 52-20 60-45z"
          stroke="#fed850"
          strokeWidth="0.6"
        />
        <path d="M100 140v50" stroke="#fed850" strokeWidth="0.6" />
      </svg>

      <svg
        className="absolute -right-32 -bottom-24 w-[600px] h-[600px] opacity-[0.06] admin-login-drift-slow-reverse"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="14" stroke="#e6dec5" strokeWidth="0.5" />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x1 = 100 + Math.cos(angle) * 16;
          const y1 = 100 + Math.sin(angle) * 16;
          const x2 = 100 + Math.cos(angle) * 60;
          const y2 = 100 + Math.sin(angle) * 60;
          return (
            <path
              key={i}
              d={`M${x1} ${y1} Q ${100 + Math.cos(angle) * 40} ${100 + Math.sin(angle) * 20}, ${x2} ${y2}`}
              stroke="#e6dec5"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      {/* Layer 4 — middle botanical branches (foreground silhouettes) */}
      <svg
        className="absolute left-10 bottom-0 w-64 h-96 opacity-[0.09] admin-login-drift-mid"
        viewBox="0 0 100 300"
        fill="none"
      >
        <path d="M50 300V60" stroke="#1d3e13" strokeWidth="1" />
        <path d="M50 260 Q20 240 15 200" stroke="#1d3e13" strokeWidth="1" />
        <path d="M50 220 Q80 200 85 160" stroke="#1d3e13" strokeWidth="1" />
        <path d="M50 180 Q25 165 20 130" stroke="#1d3e13" strokeWidth="1" />
        <ellipse cx="15" cy="196" rx="10" ry="5" stroke="#1d3e13" strokeWidth="0.8" />
        <ellipse cx="85" cy="156" rx="10" ry="5" stroke="#1d3e13" strokeWidth="0.8" />
        <ellipse cx="20" cy="126" rx="9" ry="4.5" stroke="#1d3e13" strokeWidth="0.8" />
      </svg>

      <svg
        className="absolute right-16 top-10 w-48 h-72 opacity-[0.08] admin-login-drift-mid-reverse"
        viewBox="0 0 100 300"
        fill="none"
      >
        <path d="M50 0v240" stroke="#fed850" strokeWidth="0.8" />
        <path d="M50 60 Q75 50 82 20" stroke="#fed850" strokeWidth="0.8" />
        <path d="M50 110 Q25 100 18 70" stroke="#fed850" strokeWidth="0.8" />
        <ellipse cx="82" cy="18" rx="8" ry="4" stroke="#fed850" strokeWidth="0.6" />
        <ellipse cx="18" cy="68" rx="8" ry="4" stroke="#fed850" strokeWidth="0.6" />
      </svg>

      {/* Subtle glass bottle silhouette */}
      <svg
        className="absolute right-[8%] bottom-[6%] w-40 h-56 opacity-[0.06] admin-login-drift-slow"
        viewBox="0 0 100 160"
        fill="none"
      >
        <path
          d="M40 10h20v18l10 12v100a8 8 0 01-8 8H38a8 8 0 01-8-8V40l10-12V10z"
          stroke="#e6dec5"
          strokeWidth="1"
        />
        <path d="M35 5h30v8H35z" stroke="#e6dec5" strokeWidth="1" />
      </svg>

      {/* Layer 3 — floating dust particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-bn-gold admin-login-particle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: i % 3 === 0 ? "3px" : "2px",
              height: i % 3 === 0 ? "3px" : "2px",
              opacity: 0.15 + (i % 4) * 0.04,
              animationDuration: `${14 + (i % 7)}s`,
              animationDelay: `${-(i * 1.7)}s`,
            }}
          />
        ))}
      </div>

      {/* Login panel */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-[420px] rounded-[22px] px-9 py-10 sm:px-10 sm:py-12"
        style={{
          background: "rgba(18, 40, 12, 0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(254, 216, 80, 0.18)",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(230,222,197,0.03)",
        }}
      >
        <div className="flex flex-col items-center mb-9">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg mb-5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpeg" alt="Bostan Naturals" className="w-full h-full object-cover" />
          </span>
          <p className="text-[10px] tracking-[0.35em] text-bn-gold/80 uppercase mb-2">
            Bostan Naturals
          </p>
          <h1 className="font-serif text-2xl text-bn-cream text-center">
            Espace Administrateur
          </h1>
        </div>

        <div className="mb-5">
          <label className="block text-[11px] tracking-[0.15em] uppercase text-bn-cream/50 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
            className="w-full bg-bn-cream/5 border border-bn-cream/15 rounded-lg px-4 py-3 text-bn-cream placeholder:text-bn-cream/30 focus:outline-none focus:border-bn-gold/60 focus:bg-bn-cream/10 transition-colors"
          />
        </div>

        <div className="mb-7">
          <label className="block text-[11px] tracking-[0.15em] uppercase text-bn-cream/50 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-bn-cream/5 border border-bn-cream/15 rounded-lg px-4 py-3 text-bn-cream placeholder:text-bn-cream/30 focus:outline-none focus:border-bn-gold/60 focus:bg-bn-cream/10 transition-colors"
          />
        </div>

        {error && (
          <p className="text-red-300 text-sm mb-5 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-bn-gold text-bn-forest-dark font-medium tracking-wide py-3 rounded-lg hover:bg-bn-cream transition-colors disabled:opacity-60"
        >
          {loading ? "..." : "Se connecter"}
        </button>

        <p className="text-center text-[10px] tracking-[0.2em] uppercase text-bn-cream/25 mt-8">
          Accès Réservé — Bostan Naturals
        </p>
      </form>

      <style>{`
        @keyframes admin-login-sweep-move {
          0% { transform: translate(-15%, -10%) rotate(0deg); }
          50% { transform: translate(15%, 8%) rotate(3deg); }
          100% { transform: translate(-15%, -10%) rotate(0deg); }
        }
        .admin-login-sweep {
          background: radial-gradient(600px 300px at 30% 20%, rgba(254, 216, 80, 0.10), transparent 70%);
          animation: admin-login-sweep-move 16s ease-in-out infinite;
        }
        @keyframes admin-login-drift-slow-kf {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(14px, 18px) rotate(1.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes admin-login-drift-slow-reverse-kf {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-16px, -12px) rotate(-1.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes admin-login-drift-mid-kf {
          0% { transform: translate(0, 0); }
          50% { transform: translate(8px, -10px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes admin-login-drift-mid-reverse-kf {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
          100% { transform: translate(0, 0); }
        }
        .admin-login-drift-slow { animation: admin-login-drift-slow-kf 22s ease-in-out infinite; }
        .admin-login-drift-slow-reverse { animation: admin-login-drift-slow-reverse-kf 25s ease-in-out infinite; }
        .admin-login-drift-mid { animation: admin-login-drift-mid-kf 18s ease-in-out infinite; }
        .admin-login-drift-mid-reverse { animation: admin-login-drift-mid-reverse-kf 20s ease-in-out infinite; }
        @keyframes admin-login-particle-kf {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-22px) translateX(6px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .admin-login-particle { animation-name: admin-login-particle-kf; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        @media (prefers-reduced-motion: reduce) {
          .admin-login-sweep, .admin-login-drift-slow, .admin-login-drift-slow-reverse,
          .admin-login-drift-mid, .admin-login-drift-mid-reverse, .admin-login-particle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
