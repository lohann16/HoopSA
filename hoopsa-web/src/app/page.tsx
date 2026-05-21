import Link from "next/link";

export default function Landing() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0f0d] font-sans text-white">

      {/* ── Background glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_110%,rgba(29,158,117,0.32)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_88%_-5%,rgba(29,158,117,0.14)_0%,transparent_60%),radial-gradient(ellipse_40%_35%_at_60%_50%,rgba(29,158,117,0.06)_0%,transparent_70%)]" />

      {/* ── Grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)",
        }}
      />

      {/* ── Noise grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Logo ── */}
      <Link
        href="/"
        className="absolute left-8 top-8 z-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline lg:left-12 lg:top-10"
      >
        <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
        HOOPSA
      </Link>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center animate-[fadeUp_0.55s_ease_both]">

        <p className="mb-5 text-xs uppercase tracking-[0.16em] text-[#5DCAA5]">
          Free to join · South Africa's #1 basketball platform
        </p>

        <h1 className="mb-6 font-['Barlow_Condensed'] text-[clamp(52px,9vw,110px)] font-extrabold leading-[0.88] tracking-tight text-white">
          Find your<br />
          <span className="text-[#1D9E75]">next run.</span>
        </h1>

        <p className="mb-10 max-w-[380px] text-[16px] leading-[1.75] text-white/40">
          Live scores, 180+ mapped courts, and a community of ballers waiting for you. Step on the court.
        </p>

        {/* ── CTAs ── */}
        <div className="flex w-full max-w-[320px] flex-col gap-3">
          <Link
            href="/signup"
            className="w-full rounded-[14px] bg-[#1D9E75] py-[15px] text-center text-[15px] font-semibold text-white no-underline transition hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_10px_28px_rgba(29,158,117,0.42)]"
          >
            Create my account
          </Link>
          <Link
            href="/signin"
            className="w-full rounded-[14px] border border-white/10 bg-white/5 py-[15px] text-center text-[15px] font-medium text-white/75 no-underline transition hover:bg-white/9 hover:text-white"
          >
            Sign in
          </Link>
        </div>

        {/* ── Perks row ── */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { icon: "🏀", label: "Live scores" },
            { icon: "📍", label: "180+ courts" },
            { icon: "🤝", label: "Build your crew" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-2 text-[13px] text-white/35">
              <span>{p.icon}</span>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}