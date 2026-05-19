"use client";
import { useState } from "react";
import Link from "next/link";

const POSITIONS = ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"];
const SKILLS = ["Beginner", "Intermediate", "Advanced", "Pro"];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    position: "",
    skill: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <div>
      {/* Step indicator */}
      <p>Step {step} of 2</p>

      {step === 1 && (
        <div>
          <h1>Create account</h1>
          <p>
            Already have one? <Link href="/signin">Sign in</Link>
          </p>

          <div>
            <label>First name</label>
            <input
              type="text"
              placeholder="Jordan"
              autoComplete="given-name"
              value={form.firstName}
              onChange={set("firstName")}
            />
          </div>

          <div>
            <label>Last name</label>
            <input
              type="text"
              placeholder="Lee"
              autoComplete="family-name"
              value={form.lastName}
              onChange={set("lastName")}
            />
          </div>

          <div>
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
            />
          </div>

          <div>
            <label>Phone (optional)</label>
            <input
              type="tel"
              placeholder="+27 82 000 0000"
              autoComplete="tel"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
              value={form.password}
              onChange={set("password")}
            />
          </div>

          <button onClick={() => setStep(2)}>Continue</button>

          <p>or sign up with</p>
          <button type="button">Google</button>
          <button type="button">Apple</button>

          <p>
            By creating an account you agree to our{" "}
            <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>
          </p>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Your player profile</h1>
          <p>Tell us how you play.</p>

          <div>
            <label>Your city</label>
            <input
              type="text"
              placeholder="e.g. Johannesburg"
              autoComplete="address-level2"
              value={form.city}
              onChange={set("city")}
            />
          </div>

          <div>
            <label>Position</label>
            <div>
              {POSITIONS.map((p) => (
                <button
                  key={p}
                  onClick={() => setForm({ ...form, position: p })}
                >
                  {p} {form.position === p ? "✓" : ""}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label>Skill level</label>
            <div>
              {SKILLS.map((s) => (
                <button
                  key={s}
                  onClick={() => setForm({ ...form, skill: s })}
                >
                  {s} {form.skill === s ? "✓" : ""}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div>
            <p>Profile preview</p>
            <p>{form.firstName || "—"} {form.lastName}</p>
            <p>{[form.position, form.skill, form.city].filter(Boolean).join(" · ") || "Fill in your details above"}</p>
          </div>

          <div>
            <button onClick={() => setStep(1)}>Back</button>
            <button>Join HoopSA</button>
          </div>
        </div>
      )}
    </div>
  );
}