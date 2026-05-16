import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0e1210] text-white font-sans">

      {/* Background layers */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_-5%,rgba(29,158,117,0.22)_0%,transparent_65%),radial-gradient(ellipse_45%_35%_at_10%_90%,rgba(29,158,117,0.10)_0%,transparent_65%)]" />
      <div
        className="fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-7">

        {/* NAV */}
        <nav className="flex items-center justify-between pt-8">
          <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[28px] font-extrabold tracking-[0.05em] text-white no-underline">
            <span className="inline-block h-[11px] w-[11px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>
          <div className="flex gap-3">
            <Link
              href="/signin"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-transparent px-6 text-sm font-medium text-white/60 transition hover:border-white/30 hover:bg-white/7 hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#1D9E75] px-6 text-sm font-medium text-white transition hover:bg-[#22b887] hover:shadow-[0_6px_22px_rgba(29,158,117,0.4)] hover:-translate-y-px"
            >
              Get started
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div className="grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div className="animate-[fadeUp_0.6s_ease_0.1s_both]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5DCAA5]/30 bg-[#1D9E75]/12 px-4 py-[6px] text-xs font-medium uppercase tracking-[0.09em] text-[#5DCAA5]">
              <span className="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-[#5DCAA5]" />
              12 courts active now
            </div>
            <h1 className="mb-6 font-['Barlow_Condensed'] text-[clamp(58px,7vw,86px)] font-extrabold leading-[0.93] tracking-tight text-white">
              Your city.<br />
              <span className="text-[#1D9E75]">Your game.</span><br />
              Your crew.
            </h1>
            <p className="mb-11 max-w-[380px] text-base leading-[1.7] text-white/50">
              Find pickup games, follow live scores, and discover the best courts near you — all in one app.
            </p>
            <p className="mb-3 text-xs uppercase tracking-[0.08em] text-white/30">Join the community</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full bg-[#1D9E75] px-9 py-[15px] text-[15px] font-medium text-white transition hover:bg-[#22b887] hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(29,158,117,0.4)]"
              >
                Create account
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center rounded-full border border-white/15 bg-transparent px-9 py-[15px] text-[15px] font-medium text-white/70 transition hover:border-white/32 hover:bg-white/5 hover:text-white"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Right panel */}
          <div className="animate-[fadeUp_0.6s_ease_0.25s_both] rounded-[28px] border border-white/9 bg-white/[0.035] p-8 backdrop-blur-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Today's top match</p>
            <div className="mb-4 rounded-[20px] border border-white/8 bg-white/5 p-5">
              <p className="mb-2 font-['Barlow_Condensed'] text-[22px] font-semibold leading-[1.1]">
                Northside Knights vs Downtown Ballers
              </p>
              <p className="text-[13px] text-white/40">3:15 PM · Court 7 · 8 spots remaining</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[16px] bg-black/30 p-[18px]">
                <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-white/35">Win streak</p>
                <p className="font-['Barlow_Condensed'] text-[36px] font-extrabold leading-none">7</p>
              </div>
              <div className="rounded-[16px] bg-black/30 p-[18px]">
                <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-white/35">Courts live</p>
                <p className="font-['Barlow_Condensed'] text-[36px] font-extrabold leading-none">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="animate-[fadeUp_0.6s_ease_0.4s_both] grid grid-cols-3 border-t border-white/6 py-12">
          {[
            { num: "2.4K", label: "Active players" },
            { num: "180+", label: "Courts mapped" },
            { num: "1.2K", label: "Games played" },
          ].map((s, i) => (
            <div key={s.label} className={`text-center px-5 ${i > 0 ? "border-l border-white/6" : ""}`}>
              <p className="font-['Barlow_Condensed'] text-[44px] font-extrabold leading-none text-white">{s.num}</p>
              <p className="mt-[7px] text-xs uppercase tracking-[0.1em] text-white/32">{s.label}</p>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="animate-[fadeUp_0.6s_ease_0.5s_both] grid grid-cols-1 gap-4 pb-20 md:grid-cols-3">
          {[
            { icon: "🏀", title: "Live Scores", desc: "Follow pickup games, local leagues, and weekend tournaments in real time." },
            { icon: "📍", title: "Court Discovery", desc: "Find the best courts near you with hours, features, and live availability." },
            { icon: "🤝", title: "Build Your Crew", desc: "Connect with players, form teams, and organise games in your neighbourhood." },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-[22px] border border-white/7 bg-white/[0.03] p-7 transition hover:border-[#1D9E75]/30 hover:bg-[#1D9E75]/5"
            >
              <div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#1D9E75]/14 text-[22px]">
                {f.icon}
              </div>
              <p className="mb-2 text-base font-medium text-white">{f.title}</p>
              <p className="text-sm leading-[1.6] text-white/40">{f.desc}</p>
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