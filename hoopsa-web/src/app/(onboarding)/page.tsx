"use client";

import { useState } from "react";
import Link from "next/link";

const TOTAL_STEPS = 4;

const POSITIONS = ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center", "Any position"];

const SKILL_LEVELS = [
  { id: "beginner", label: "Beginner", desc: "Just starting out, learning the game" },
  { id: "casual", label: "Casual", desc: "Play for fun, know the basics" },
  { id: "intermediate", label: "Intermediate", desc: "Regular player, solid fundamentals" },
  { id: "competitive", label: "Competitive", desc: "Serious about winning and improving" },
];

const INTERESTS = [
  { id: "pickup", label: "🏀 Pickup games" },
  { id: "leagues", label: "🏆 Local leagues" },
  { id: "tournaments", label: "🥇 Tournaments" },
  { id: "scores", label: "📊 Live scores" },
  { id: "courts", label: "📍 Find courts" },
  { id: "crew", label: "🤝 Build a crew" },
];

const AVATARS = ["🏀", "🔥", "⚡", "🦁", "🐺", "👑", "🎯", "💪"];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [position, setPosition] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [avatar, setAvatar] = useState("");

  const progress = (step / TOTAL_STEPS) * 100;

  const toggleInterest = (id: string) =>
    setInterests((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const canAdvance =
    (step === 1 && position !== "") ||
    (step === 2 && skillLevel !== "") ||
    (step === 3 && interests.length > 0) ||
    step === 4;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0e1210] font-sans text-white">

      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_-10%,rgba(29,158,117,0.18)_0%,transparent_65%)]" />
      <div
        className="fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,1) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,1) 60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6 pt-10">

        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline">
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>
          <span className="text-sm text-white/30">Step {step} of {TOTAL_STEPS}</span>
        </div>

        {/* Progress bar */}
        <div className="mb-10 h-[3px] w-full overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-[#1D9E75] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ── STEP 1: Position ── */}
        {step === 1 && (
          <div className="animate-[fadeUp_0.4s_ease_both]">
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Step 1 — Your game</p>
            <h1 className="mb-2 font-['Barlow_Condensed'] text-[clamp(36px,6vw,52px)] font-extrabold leading-none text-white">
              What's your position?
            </h1>
            <p className="mb-8 text-[15px] text-white/40">Pick the spot where you run the floor.</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {POSITIONS.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setPosition(pos)}
                  className={`rounded-[14px] border px-5 py-4 text-left text-sm font-medium transition ${
                    position === pos
                      ? "border-[#1D9E75] bg-[#1D9E75]/15 text-white"
                      : "border-white/9 bg-white/[0.03] text-white/55 hover:border-white/20 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Skill level ── */}
        {step === 2 && (
          <div className="animate-[fadeUp_0.4s_ease_both]">
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Step 2 — Your level</p>
            <h1 className="mb-2 font-['Barlow_Condensed'] text-[clamp(36px,6vw,52px)] font-extrabold leading-none text-white">
              How do you rate yourself?
            </h1>
            <p className="mb-8 text-[15px] text-white/40">Be honest — we'll match you with the right games.</p>
            <div className="space-y-3">
              {SKILL_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSkillLevel(level.id)}
                  className={`flex w-full items-center justify-between rounded-[16px] border px-5 py-4 text-left transition ${
                    skillLevel === level.id
                      ? "border-[#1D9E75] bg-[#1D9E75]/12"
                      : "border-white/9 bg-white/[0.03] hover:border-white/20 hover:bg-white/6"
                  }`}
                >
                  <div>
                    <p className={`text-[15px] font-medium ${skillLevel === level.id ? "text-white" : "text-white/75"}`}>
                      {level.label}
                    </p>
                    <p className="mt-0.5 text-[13px] text-white/35">{level.desc}</p>
                  </div>
                  <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                    skillLevel === level.id ? "border-[#1D9E75] bg-[#1D9E75]" : "border-white/20"
                  }`}>
                    {skillLevel === level.id && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 3: Interests ── */}
        {step === 3 && (
          <div className="animate-[fadeUp_0.4s_ease_both]">
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Step 3 — Your vibe</p>
            <h1 className="mb-2 font-['Barlow_Condensed'] text-[clamp(36px,6vw,52px)] font-extrabold leading-none text-white">
              What are you here for?
            </h1>
            <p className="mb-8 text-[15px] text-white/40">Pick as many as you like.</p>
            <div className="grid grid-cols-2 gap-3">
              {INTERESTS.map((item) => {
                const selected = interests.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleInterest(item.id)}
                    className={`rounded-[14px] border px-5 py-4 text-left text-sm font-medium transition ${
                      selected
                        ? "border-[#1D9E75] bg-[#1D9E75]/15 text-white"
                        : "border-white/9 bg-white/[0.03] text-white/55 hover:border-white/20 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── STEP 4: Avatar ── */}
        {step === 4 && (
          <div className="animate-[fadeUp_0.4s_ease_both]">
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Step 4 — Your look</p>
            <h1 className="mb-2 font-['Barlow_Condensed'] text-[clamp(36px,6vw,52px)] font-extrabold leading-none text-white">
              Pick your avatar.
            </h1>
            <p className="mb-8 text-[15px] text-white/40">Choose how you show up on the court.</p>

            <div className="grid grid-cols-4 gap-3">
              {AVATARS.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setAvatar(emoji)}
                  className={`flex aspect-square items-center justify-center rounded-[16px] border text-3xl transition ${
                    avatar === emoji
                      ? "scale-105 border-[#1D9E75] bg-[#1D9E75]/15"
                      : "border-white/9 bg-white/[0.03] hover:border-white/20 hover:bg-white/6"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>

            {/* Profile summary */}
            <div className="mt-8 rounded-[18px] border border-white/8 bg-white/[0.04] p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.1em] text-white/35">Your profile summary</p>
              <div className="space-y-0">
                <SummaryRow label="Position" value={position} />
                <SummaryRow label="Level" value={SKILL_LEVELS.find((l) => l.id === skillLevel)?.label ?? ""} />
                <SummaryRow
                  label="Interests"
                  value={interests.map((id) => INTERESTS.find((i) => i.id === id)?.label.split(" ").slice(1).join(" ") ?? "").join(", ")}
                />
                <SummaryRow label="Avatar" value={avatar || "Not chosen"} />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between pb-8">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-6 py-3 text-sm font-medium text-white/50 transition hover:border-white/25 hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : (
            <Link href="/signup" className="flex items-center gap-1.5 text-sm text-white/28 transition hover:text-[#5DCAA5]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>
          )}

          {step < TOTAL_STEPS ? (
            <button
              onClick={() => canAdvance && setStep((s) => s + 1)}
              disabled={!canAdvance}
              className={`rounded-full px-8 py-3 text-sm font-medium transition ${
                canAdvance
                  ? "bg-[#1D9E75] text-white hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(29,158,117,0.38)]"
                  : "cursor-not-allowed bg-white/8 text-white/25"
              }`}
            >
              Continue
            </button>
          ) : (
            <Link
              href="/dashboard"
              className={`rounded-full px-8 py-3 text-sm font-medium transition ${
                avatar
                  ? "bg-[#1D9E75] text-white hover:bg-[#22b887] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(29,158,117,0.38)]"
                  : "pointer-events-none bg-white/8 text-white/25"
              }`}
            >
              {"Let's ball 🏀"}
            </Link>
          )}
        </div>

        {step < TOTAL_STEPS && (
          <p className="pb-12 text-center text-sm">
            <button
              onClick={() => setStep(TOTAL_STEPS)}
              className="cursor-pointer border-none bg-transparent text-sm text-white/22 transition hover:text-white/45"
            >
              Skip setup for now
            </button>
          </p>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-white/6 py-3 first:border-t-0 first:pt-0">
      <span className="shrink-0 text-xs uppercase tracking-[0.08em] text-white/30">{label}</span>
      <span className="text-right text-[13px] text-white/65">{value || "—"}</span>
    </div>
  );
}