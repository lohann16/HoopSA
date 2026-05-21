"use client";
import { useState } from "react";
import Link from "next/link";

const POSITIONS = ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"];
const SKILLS = ["Beginner", "Intermediate", "Advanced", "Pro"];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", password: "", city: "", position: "", skill: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <div className="flex min-h-screen bg-[#0e1210] font-sans text-white lg:grid lg:grid-cols-2">

      {/* ── LEFT PANEL ── */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0a0f0d] p-10 lg:flex lg:px-12 lg:py-10">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_65%_at_20%_105%,rgba(29,158,117,0.30)_0%,transparent_60%),radial-gradient(ellipse_55%_45%_at_90%_-10%,rgba(29,158,117,0.13)_0%,transparent_60%)]" />
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)" }} />

        <Link href="/" className="relative z-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[28px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[10px] w-[10px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        <div className="relative z-10 pb-6">
          <p className="mb-5 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Free to join</p>
          <h2 className="mb-6 font-['Barlow_Condensed'] text-[clamp(44px,4.5vw,64px)] font-extrabold leading-[0.93] text-white">
            Join the<br /><span className="text-[#1D9E75]">movement.</span>
          </h2>
          <p className="mb-8 max-w-[320px] text-[15px] leading-[1.7] text-white/45">
            Thousands of ballers are already on HoopSA. Find games, build your rep, and never miss a run again.
          </p>
          <div className="space-y-4">
            {[
              { icon: "🏀", title: "Live scores everywhere", sub: "Follow games across your city in real time" },
              { icon: "📍", title: "180+ courts mapped", sub: "Find the best spot near you, any time of day" },
              { icon: "🤝", title: "Build your crew", sub: "Connect with players and form squads" },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <div className="mt-[1px] flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#1D9E75]/15 text-base">{p.icon}</div>
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

          {/* ── Step indicator ── */}
          <div className="mb-8 flex items-center gap-3">
            {[1, 2].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                  step === n ? "bg-[#1D9E75] text-white" : step > n ? "bg-[#1D9E75]/20 text-[#5DCAA5]" : "bg-white/8 text-white/30"
                }`}>
                  {step > n ? "✓" : n}
                </div>
                <span className={`text-xs uppercase tracking-[0.08em] ${step === n ? "text-white/60" : "text-white/25"}`}>
                  {n === 1 ? "Account" : "Profile"}
                </span>
                {n < 2 && <span className="h-px w-6 bg-white/10" />}
              </div>
            ))}
          </div>

          {/* ══ STEP 1 ══ */}
          {step === 1 && (
            <div className="animate-[fadeIn_0.3s_ease_both]">
              <h1 className="mb-2 font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
                Create account
              </h1>
              <p className="mb-8 text-[15px] text-white/40">
                Already have one?{" "}
                <Link href="/signin" className="font-medium text-[#5DCAA5] no-underline hover:underline">Sign in</Link>
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="First name">
                    <input type="text" placeholder="Jordan" autoComplete="given-name" value={form.firstName} onChange={set("firstName")} className={input} />
                  </Field>
                  <Field label="Last name">
                    <input type="text" placeholder="Lee" autoComplete="family-name" value={form.lastName} onChange={set("lastName")} className={input} />
                  </Field>
                </div>
                <Field label="Email address">
                  <input type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={set("email")} className={input} />
                </Field>
                <Field label="Phone (optional)">
                  <input type="tel" placeholder="+27 82 000 0000" autoComplete="tel" value={form.phone} onChange={set("phone")} className={input} />
                </Field>
                <Field label="Password">
                  <input type="password" placeholder="Create a strong password" autoComplete="new-password" value={form.password} onChange={set("password")} className={input} />
                </Field>
              </div>

              <button onClick={() => setStep(2)} className="mt-6 w-full rounded-[14px] bg-[#1D9E75] py-[15px] text-[15px] font-medium text-white transition hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]">
                Continue
              </button>

              <div className="my-5 flex items-center gap-3 text-xs tracking-[0.06em] text-white/20">
                <span className="flex-1 border-t border-white/7" />or sign up with<span className="flex-1 border-t border-white/7" />
              </div>

              <div className="flex gap-3">
                <SocialBtn icon={<GoogleIcon />} label="Google" />
                <SocialBtn icon={<AppleIcon />} label="Apple" />
              </div>

              <p className="mt-4 text-center text-xs leading-[1.6] text-white/22">
                By creating an account you agree to our{" "}
                <Link href="#" className="text-white/40 hover:text-[#5DCAA5]">Terms of Service</Link>{" "}
                and{" "}
                <Link href="#" className="text-white/40 hover:text-[#5DCAA5]">Privacy Policy</Link>
              </p>
            </div>
          )}

          {/* ══ STEP 2 ══ */}
          {step === 2 && (
            <div className="animate-[fadeIn_0.3s_ease_both]">
              <h1 className="mb-2 font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
                Your profile
              </h1>
              <p className="mb-8 text-[15px] text-white/40">Tell us how you play.</p>

              <div className="space-y-6">
                <Field label="Your city">
                  <input type="text" placeholder="e.g. Johannesburg" autoComplete="address-level2" value={form.city} onChange={set("city")} className={input} />
                </Field>

                <div>
                  <label className="mb-3 block text-xs font-medium uppercase tracking-[0.07em] text-white/38">Position</label>
                  <div className="flex flex-wrap gap-2">
                    {POSITIONS.map((p) => (
                      <button key={p} onClick={() => setForm({ ...form, position: p })}
                        className={`rounded-[10px] px-3 py-2 text-[13px] font-medium transition ${
                          form.position === p
                            ? "bg-[#1D9E75] text-white"
                            : "border border-white/9 bg-white/5 text-white/50 hover:border-[#1D9E75]/40 hover:text-white/80"
                        }`}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-medium uppercase tracking-[0.07em] text-white/38">Skill level</label>
                  <div className="grid grid-cols-4 gap-2">
                    {SKILLS.map((s) => (
                      <button key={s} onClick={() => setForm({ ...form, skill: s })}
                        className={`rounded-[10px] py-2 text-[13px] font-medium transition ${
                          form.skill === s
                            ? "bg-[#1D9E75] text-white"
                            : "border border-white/9 bg-white/5 text-white/50 hover:border-[#1D9E75]/40 hover:text-white/80"
                        }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Profile preview card */}
                <div className="rounded-[14px] border border-white/8 bg-white/[0.03] px-5 py-4">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-white/25">Profile preview</p>
                  <p className="font-['Barlow_Condensed'] text-[22px] font-extrabold leading-none text-white">
                    {form.firstName || "—"} {form.lastName}
                  </p>
                  <p className="mt-1 text-[13px] text-white/35">
                    {[form.position, form.skill, form.city].filter(Boolean).join(" · ") || "Fill in your details above"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setStep(1)} className="rounded-[14px] border border-white/10 bg-white/5 px-5 py-[15px] text-[15px] font-medium text-white/60 transition hover:bg-white/9 hover:text-white">
                  Back
                </button>
                <button className="flex-1 rounded-[14px] bg-[#1D9E75] py-[15px] text-[15px] font-medium text-white transition hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]">
                  Join HoopSA
                </button>
              </div>
            </div>
          )}

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

/* ── Helpers ── */
const input = "w-full rounded-[14px] border border-white/9 bg-white/5 px-[18px] py-[14px] text-[15px] text-white outline-none placeholder:text-white/18 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-[9px] block text-xs font-medium uppercase tracking-[0.07em] text-white/38">{label}</label>
      {children}
    </div>
  );
}

function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-1 items-center justify-center gap-[10px] rounded-[14px] border border-white/10 bg-white/5 py-[14px] text-sm font-medium text-white/75 transition hover:bg-white/9 hover:text-white">
      {icon}{label}
    </button>
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

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.35.74 3.15.8.81.06 2.38-.95 3.99-.8 1.68.15 2.94.86 3.72 2.18-3.36 2.04-2.81 6.37.31 7.65-.62 1.69-1.43 3.36-3.17 3.03zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}