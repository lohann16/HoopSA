import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen bg-[#0e1210] font-sans text-white lg:grid lg:grid-cols-2">

      {/* ── LEFT PANEL ── */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0a0f0d] p-10 lg:flex lg:px-12 lg:py-10">

        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(29,158,117,0.26)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_85%_-5%,rgba(29,158,117,0.11)_0%,transparent_60%)]" />
        <div
          className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)",
          }}
        />

        <Link href="/" className="relative z-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[28px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[10px] w-[10px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        <div className="relative z-10 pb-6">
          <p className="mb-5 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">No stress</p>
          <h2 className="mb-6 font-['Barlow_Condensed'] text-[clamp(44px,4.5vw,64px)] font-extrabold leading-[0.93] text-white">
            Back in the<br />
            <span className="text-[#1D9E75]">game</span><br />
            in seconds.
          </h2>
          <p className="max-w-[300px] text-[15px] leading-[1.7] text-white/45">
            Enter your email and we'll send you a secure link to reset your password. Check your inbox and you'll be back on the court in no time.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#1D9E75]/15 text-3xl">
            🔐
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">Secure reset link</p>
            <p className="text-xs text-white/35">Valid for 15 minutes</p>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex flex-1 flex-col justify-center px-7 py-14 lg:px-14 animate-[fadeIn_0.45s_ease_both]">
        <div className="mx-auto w-full max-w-sm">

          {/* Mobile logo */}
          <Link href="/" className="mb-8 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline lg:hidden">
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>

          {/* Step indicator */}
          <div className="mb-8 flex items-center gap-2">
            <StepDot active />
            <StepLine active />
            <StepDot />
            <StepLine />
            <StepDot />
          </div>

          <h1 className="mb-2 font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
            Reset password
          </h1>
          <p className="mb-9 text-[15px] text-white/40">
            We'll email you a secure link to reset your password.
          </p>

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

          <button className="mt-5 w-full rounded-[14px] bg-[#1D9E75] py-[15px] text-[15px] font-medium text-white transition hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]">
            Send reset link
          </button>

          <div className="mt-5 rounded-[14px] border border-[#1D9E75]/20 bg-[#1D9E75]/7 px-5 py-4">
            <p className="text-[13px] leading-[1.6] text-white/50">
              Didn't receive the email? Check your spam folder or{" "}
              <button className="cursor-pointer border-none bg-transparent p-0 font-medium text-[#5DCAA5] hover:underline">
                resend the link
              </button>
              .
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/30">
            <Link href="/signin" className="flex items-center gap-1.5 transition hover:text-[#5DCAA5]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to sign in
            </Link>
            <span className="h-4 w-px bg-white/10" />
            <Link href="/signup" className="transition hover:text-[#5DCAA5]">
              Create account
            </Link>
          </div>
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

function StepDot({ active = false }: { active?: boolean }) {
  return (
    <div className={`h-2 w-2 rounded-full transition-all ${active ? "scale-125 bg-[#1D9E75]" : "bg-white/15"}`} />
  );
}

function StepLine({ active = false }: { active?: boolean }) {
  return <div className={`h-px flex-1 ${active ? "bg-[#1D9E75]/50" : "bg-white/10"}`} />;
}