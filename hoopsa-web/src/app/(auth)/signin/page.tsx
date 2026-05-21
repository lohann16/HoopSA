import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex min-h-screen bg-[#0e1210] font-sans text-white lg:grid lg:grid-cols-2">

      {/* ── LEFT PANEL ── */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0a0f0d] p-10 lg:flex lg:px-12 lg:py-10">

        {/* Glows */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_65%_at_20%_105%,rgba(29,158,117,0.30)_0%,transparent_60%),radial-gradient(ellipse_55%_45%_at_90%_-10%,rgba(29,158,117,0.13)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)",
          }}
        />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[28px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[10px] w-[10px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        {/* Body */}
        <div className="relative z-10 pb-6">
          <p className="mb-5 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Welcome back</p>
          <h2 className="mb-6 font-['Barlow_Condensed'] text-[clamp(44px,4.5vw,64px)] font-extrabold leading-[0.93] text-white">
            Back on<br />
            <span className="text-[#1D9E75]">the court.</span>
          </h2>
          <p className="mb-8 max-w-[320px] text-[15px] leading-[1.7] text-white/45">
            Games are happening right now. Sign in and get back in the mix — your crew is waiting.
          </p>

          {/* Perks */}
          <div className="space-y-4">
            {[
              { icon: "🏀", title: "Live scores everywhere", sub: "Follow games across your city in real time" },
              { icon: "📍", title: "180+ courts mapped", sub: "Find the best spot near you, any time of day" },
              { icon: "🤝", title: "Build your crew", sub: "Connect with players and form squads" },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#1D9E75]/15 text-base mt-[1px]">
                  {p.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/85">{p.title}</p>
                  <p className="text-[13px] text-white/35">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10" />
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex flex-1 flex-col justify-center px-7 py-12 lg:px-14 animate-[fadeIn_0.45s_ease_both]">

        <div className="mx-auto w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="mb-8 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline lg:hidden">
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>

          <h1 className="mb-2 font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
            Sign in
          </h1>
          <p className="mb-8 text-[15px] text-white/40">
            No account?{" "}
            <Link href="/signup" className="font-medium text-[#5DCAA5] no-underline hover:underline">
              Create one free
            </Link>
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-[9px] block text-xs font-medium uppercase tracking-[0.07em] text-white/38">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-[14px] border border-white/9 bg-white/5 px-[18px] py-[14px] text-[15px] text-white outline-none placeholder:text-white/18 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-[9px] flex items-center justify-between">
                <label className="text-xs font-medium uppercase tracking-[0.07em] text-white/38">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-white/35 hover:text-[#5DCAA5] transition">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="Your password"
                autoComplete="current-password"
                className="w-full rounded-[14px] border border-white/9 bg-white/5 px-[18px] py-[14px] text-[15px] text-white outline-none placeholder:text-white/18 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="mt-6 w-full rounded-[14px] bg-[#1D9E75] py-[15px] text-[15px] font-medium text-white transition hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]">
            Sign in
          </button>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3 text-xs tracking-[0.06em] text-white/20">
            <span className="flex-1 border-t border-white/7" />
            or continue with
            <span className="flex-1 border-t border-white/7" />
          </div>

          {/* Google */}
          <button className="flex w-full items-center justify-center gap-[10px] rounded-[14px] border border-white/10 bg-white/5 py-[14px] text-sm font-medium text-white/75 transition hover:bg-white/9 hover:text-white">
            <GoogleIcon />
            Google
          </button>

          <p className="mt-5 text-center text-sm text-white/30">
            New to HoopSA?{" "}
            <Link href="/signup" className="font-medium text-[#5DCAA5] no-underline hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}