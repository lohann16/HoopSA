import { useState } from "react";

const positions = ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"];
const skillLevels = ["Beginner", "Intermediate", "Advanced", "Pro"];

export default function Register() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "",
    city: "", position: "", skill: "", phone: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="flex min-h-screen bg-[#0e1210] text-white lg:grid lg:grid-cols-2">

      {/* ── LEFT PANEL ── */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0a0f0d] p-10 lg:flex lg:px-12 lg:py-10">
        <div className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 65% at 20% 105%, rgba(29,158,117,0.30) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 90% -10%, rgba(29,158,117,0.13) 0%, transparent 60%)"
          }} />
        <div className="absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)"
          }} />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "0.05em" }}>
          <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#1D9E75]" style={{ animation: "pulse 2s infinite" }} />
          HOOPSA
        </div>

        {/* Left body */}
        <div className="relative z-10 pb-6">
          <p className="mb-5 text-xs uppercase text-[#5DCAA5]" style={{ letterSpacing: "0.12em" }}>Player Registration</p>
          <h2 className="mb-6 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(44px,4.5vw,64px)", fontWeight: 800, lineHeight: 0.93 }}>
            Your court.<br />
            <span style={{ color: "#1D9E75" }}>Your rules.</span>
          </h2>
          <p className="mb-10 text-[15px] text-white/45" style={{ maxWidth: 320, lineHeight: 1.7 }}>
            Set up your player profile in two quick steps and get on the court today.
          </p>

          {/* Step tracker */}
          <div className="space-y-5">
            {[
              { n: 1, label: "Account details", sub: "Name, email & password" },
              { n: 2, label: "Player profile", sub: "Position, skill level & city" },
            ].map((s) => {
              const done = step > s.n;
              const active = step === s.n;
              return (
                <div key={s.n} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold mt-[1px] transition-all duration-300"
                    style={{
                      background: done ? "#1D9E75" : active ? "rgba(29,158,117,0.18)" : "rgba(255,255,255,0.06)",
                      border: active ? "1px solid rgba(29,158,117,0.5)" : "1px solid transparent",
                      color: done || active ? "#fff" : "rgba(255,255,255,0.3)"
                    }}>
                    {done ? "✓" : s.n}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: active ? "#fff" : done ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)" }}>{s.label}</p>
                    <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.22)" }}>{s.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10" />
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex flex-1 flex-col justify-center px-7 py-12 lg:px-14"
        style={{ animation: "fadeIn 0.45s ease both" }}>
        <div className="mx-auto w-full" style={{ maxWidth: 380 }}>

          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-2 text-white lg:hidden" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: "0.05em" }}>
            <span className="inline-block h-[9px] w-[9px] rounded-full bg-[#1D9E75]" style={{ animation: "pulse 2s infinite" }} />
            HOOPSA
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <p className="text-xs uppercase text-[#5DCAA5]" style={{ letterSpacing: "0.1em" }}>Step {step} of 2</p>
              <div className="flex gap-1">
                {[1, 2].map(n => (
                  <div key={n} className="h-[3px] rounded-full transition-all duration-500"
                    style={{ width: 24, background: step >= n ? "#1D9E75" : "rgba(255,255,255,0.12)" }} />
                ))}
              </div>
            </div>
            <h1 className="mb-1 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.01em" }}>
              {step === 1 ? "Create account" : "Your player profile"}
            </h1>
            <p className="text-[15px] text-white/40">
              {step === 1
                ? <>Already have one? <a href="/signin" className="font-medium text-[#5DCAA5]" style={{ textDecoration: "none" }}>Sign in</a></>
                : "Tell us how you play."}
            </p>
          </div>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <div key="step1" style={{ animation: "fadeIn 0.3s ease both" }}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="First name" type="text" placeholder="Jordan" autoComplete="given-name" value={form.firstName} onChange={set("firstName")} />
                  <Field label="Last name" type="text" placeholder="Lee" autoComplete="family-name" value={form.lastName} onChange={set("lastName")} />
                </div>
                <Field label="Email address" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={set("email")} />
                <Field label="Phone (optional)" type="tel" placeholder="+27 82 000 0000" autoComplete="tel" value={form.phone} onChange={set("phone")} />
                <Field label="Password" type="password" placeholder="Create a strong password" autoComplete="new-password" value={form.password} onChange={set("password")} />
              </div>

              <button onClick={() => setStep(2)} className="mt-6 w-full rounded-[14px] text-[15px] font-medium text-white transition-all"
                style={{ background: "#1D9E75", padding: "15px 0", border: "none", cursor: "pointer" }}
                onMouseOver={e => { e.currentTarget.style.background = "#22b887"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,158,117,0.38)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "#1D9E75"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                Continue →
              </button>

              <Divider />

              <SocialBtn label="Google" icon={<GoogleIcon />} />
              <SocialBtn label="Apple" icon={<AppleIcon />} />

              <p className="mt-4 text-center text-xs text-white/22" style={{ lineHeight: 1.6 }}>
                By creating an account you agree to our{" "}
                <a href="#" className="text-white/40" style={{ color: "rgba(255,255,255,0.4)" }}>Terms of Service</a>{" "}
                and <a href="#" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy Policy</a>
              </p>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <div key="step2" style={{ animation: "fadeIn 0.3s ease both" }}>
              <div className="space-y-4">
                <Field label="Your city" type="text" placeholder="e.g. Johannesburg" autoComplete="address-level2" value={form.city} onChange={set("city")} />

                {/* Position picker */}
                <div>
                  <label className="mb-[9px] block text-xs font-medium uppercase text-white/38" style={{ letterSpacing: "0.07em" }}>
                    Position
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {positions.map(p => (
                      <button key={p} onClick={() => setForm({ ...form, position: p })}
                        className="rounded-[12px] py-[11px] px-3 text-[13px] font-medium transition-all"
                        style={{
                          background: form.position === p ? "rgba(29,158,117,0.18)" : "rgba(255,255,255,0.04)",
                          border: form.position === p ? "1px solid rgba(29,158,117,0.55)" : "1px solid rgba(255,255,255,0.09)",
                          color: form.position === p ? "#5DCAA5" : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                        }}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Skill level */}
                <div>
                  <label className="mb-[9px] block text-xs font-medium uppercase text-white/38" style={{ letterSpacing: "0.07em" }}>
                    Skill level
                  </label>
                  <div className="flex gap-2">
                    {skillLevels.map(s => (
                      <button key={s} onClick={() => setForm({ ...form, skill: s })}
                        className="flex-1 rounded-[12px] py-[11px] text-[13px] font-medium transition-all"
                        style={{
                          background: form.skill === s ? "rgba(29,158,117,0.18)" : "rgba(255,255,255,0.04)",
                          border: form.skill === s ? "1px solid rgba(29,158,117,0.55)" : "1px solid rgba(255,255,255,0.09)",
                          color: form.skill === s ? "#5DCAA5" : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                        }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Court avatar preview card */}
                <div className="rounded-[14px] p-4" style={{ background: "rgba(29,158,117,0.06)", border: "1px solid rgba(29,158,117,0.15)" }}>
                  <p className="mb-1 text-xs uppercase text-[#5DCAA5]" style={{ letterSpacing: "0.08em" }}>Your profile preview</p>
                  <p className="text-[15px] font-medium text-white/80">
                    {form.firstName || "—"} {form.lastName || ""}
                  </p>
                  <p className="text-[13px] text-white/35">
                    {[form.position, form.skill, form.city].filter(Boolean).join(" · ") || "Fill in your details above"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setStep(1)}
                  className="rounded-[14px] px-5 py-[15px] text-[15px] font-medium text-white/50 transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", cursor: "pointer", flex: "0 0 auto" }}
                  onMouseOver={e => e.currentTarget.style.color = "#fff"}
                  onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                  ← Back
                </button>
                <button className="flex-1 rounded-[14px] text-[15px] font-medium text-white transition-all"
                  style={{ background: "#1D9E75", border: "none", cursor: "pointer", padding: "15px 0" }}
                  onMouseOver={e => { e.currentTarget.style.background = "#22b887"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(29,158,117,0.38)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#1D9E75"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                  Join HoopSA 🏀
                </button>
              </div>

              <p className="mt-5 text-center text-sm text-white/30">
                Already a baller?{" "}
                <a href="/signin" className="font-medium text-[#5DCAA5]" style={{ textDecoration: "none" }}>Sign in</a>
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }
        input:focus { outline: none; }
      `}</style>
    </div>
  );
}

/* ── Sub-components ── */

function Field({ label, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="mb-[9px] block text-xs font-medium uppercase text-white/38" style={{ letterSpacing: "0.07em" }}>
        {label}
      </label>
      <input
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          borderRadius: 14,
          border: focused ? "1px solid rgba(29,158,117,0.55)" : "1px solid rgba(255,255,255,0.09)",
          background: focused ? "rgba(29,158,117,0.05)" : "rgba(255,255,255,0.05)",
          padding: "14px 18px",
          fontSize: 15,
          color: "#fff",
          transition: "all 0.18s ease",
        }}
        placeholder={props.placeholder}
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="my-5 flex items-center gap-3 text-xs text-white/20" style={{ letterSpacing: "0.06em" }}>
      <span className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
      or sign up with
      <span className="flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
    </div>
  );
}

function SocialBtn({ label, icon }) {
  return (
    <button className="mb-3 flex w-full items-center justify-center gap-[10px] rounded-[14px] text-sm font-medium text-white/75 transition-all"
      style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.05)", padding: "14px 0", cursor: "pointer" }}
      onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#fff"; }}
      onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
      {icon}
      {label}
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
    <svg width="18" height="18" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" fill="rgba(255,255,255,0.8)">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.1-57.6-155.3-127.4C46 790.8 0 663.5 0 541.4c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  );
}