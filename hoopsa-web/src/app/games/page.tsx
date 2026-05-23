"use client";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const games = [
  {
    id: 1,
    title: "Sunday Morning Run",
    type: "Pickup",
    status: "open",
    date: "Sun 25 May",
    time: "08:00",
    court: "Ellis Park Courts",
    city: "Johannesburg",
    players: 7,
    maxPlayers: 10,
    skill: "All levels",
    host: "Kabo D.",
    hostAvatar: "🔥",
  },
  {
    id: 2,
    title: "Friday Night League — Week 4",
    type: "League",
    status: "open",
    date: "Fri 30 May",
    time: "18:30",
    court: "Sandton Rec Centre",
    city: "Sandton",
    players: 14,
    maxPlayers: 20,
    skill: "Advanced",
    host: "HoopSA Official",
    hostAvatar: "🏀",
  },
  {
    id: 3,
    title: "3v3 Bracket — Soweto",
    type: "Tournament",
    status: "full",
    date: "Sat 31 May",
    time: "10:00",
    court: "Soweto Arena",
    city: "Soweto",
    players: 24,
    maxPlayers: 24,
    skill: "Pro / Advanced",
    host: "Sipho Z.",
    hostAvatar: "⚡",
  },
  {
    id: 4,
    title: "Midweek Casual Run",
    type: "Pickup",
    status: "open",
    date: "Wed 28 May",
    time: "17:00",
    court: "Alexandra Community Hoops",
    city: "Alexandra",
    players: 4,
    maxPlayers: 10,
    skill: "Intermediate",
    host: "Lerato S.",
    hostAvatar: "👑",
  },
  {
    id: 5,
    title: "Alley-Oop Invitational",
    type: "Tournament",
    status: "open",
    date: "Sat 7 Jun",
    time: "09:00",
    court: "Diepkloof Sports Hub",
    city: "Diepkloof",
    players: 18,
    maxPlayers: 32,
    skill: "All levels",
    host: "HoopSA Official",
    hostAvatar: "🏀",
  },
  {
    id: 6,
    title: "Evening 5v5 — Rosebank",
    type: "Pickup",
    status: "open",
    date: "Thu 29 May",
    time: "19:00",
    court: "Rosebank Rec Centre",
    city: "Rosebank",
    players: 6,
    maxPlayers: 10,
    skill: "Beginner friendly",
    host: "Ayanda C.",
    hostAvatar: "💫",
  },
];

const TYPES = ["All", "Pickup", "League", "Tournament"];
const CITIES = ["All", "Johannesburg", "Soweto", "Sandton", "Alexandra", "Diepkloof", "Rosebank"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filtered = games.filter((g) => {
    const matchesType = typeFilter === "All" || g.type === typeFilter;
    const matchesCity = cityFilter === "All" || g.city === cityFilter;
    const matchesSearch = search === "" ||
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.court.toLowerCase().includes(search.toLowerCase()) ||
      g.city.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesCity && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 lg:px-10">

      {/* ── Header ── */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">What's running</p>
          <h1 className="font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white lg:text-[52px]">
            Games
          </h1>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="rounded-[12px] bg-[#1D9E75] px-5 py-[11px] text-[14px] font-semibold text-white transition hover:bg-[#22b887] hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]"
        >
          + Create run
        </button>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-5">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/25">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search games, courts or cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-[14px] border border-white/9 bg-white/5 py-[13px] pl-11 pr-5 text-[14px] text-white outline-none placeholder:text-white/20 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5"
        />
      </div>

      {/* ── Filters ── */}
      <div className="mb-6 flex flex-wrap gap-4">
        <FilterRow label="Type" options={TYPES} active={typeFilter} onChange={setTypeFilter} />
        <FilterRow label="City" options={CITIES} active={cityFilter} onChange={setCityFilter} />
      </div>

      {/* ── Count ── */}
      <p className="mb-5 text-[13px] text-white/30">
        <span className="font-semibold text-white/60">{filtered.length}</span> games found
      </p>

      {/* ── Game cards ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[20px] border border-white/[0.07] bg-white/[0.02] py-16 text-center">
          <p className="font-['Barlow_Condensed'] text-[28px] font-extrabold text-white/20">No games found</p>
          <p className="mt-1 text-[14px] text-white/20">Try adjusting your filters or create a run</p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* ── Create modal ── */}
      {showCreateModal && <CreateRunModal onClose={() => setShowCreateModal(false)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

// ─── Game card ────────────────────────────────────────────────────────────────

function GameCard({ game }: { game: typeof games[number] }) {
  const [joined, setJoined] = useState(false);
  const spotsLeft = game.maxPlayers - game.players;
  const isFull = game.status === "full";
  const fillPercent = Math.round((game.players / game.maxPlayers) * 100);

  return (
    <article className="flex flex-col rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-5 transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/[0.03]">

      {/* Top row — type badge + status */}
      <div className="mb-3 flex items-center justify-between">
        <span className={`rounded-full px-2 py-[3px] text-[11px] font-semibold uppercase tracking-[0.07em] ${
          game.type === "Tournament" ? "bg-orange-500/15 text-orange-400" :
          game.type === "League"     ? "bg-blue-500/15 text-blue-400" :
                                       "bg-[#1D9E75]/15 text-[#5DCAA5]"
        }`}>
          {game.type}
        </span>
        <span className={`text-[12px] font-medium ${isFull ? "text-red-400/70" : "text-[#5DCAA5]/70"}`}>
          {isFull ? "Full" : `${spotsLeft} spots left`}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-1 font-['Barlow_Condensed'] text-[22px] font-extrabold leading-tight text-white">
        {game.title}
      </h2>

      {/* Meta */}
      <div className="mb-4 space-y-[5px]">
        <p className="text-[13px] text-white/40">
          📅 {game.date} · {game.time}
        </p>
        <p className="text-[13px] text-white/40">
          📍 {game.court}, {game.city}
        </p>
        <p className="text-[13px] text-white/40">
          ⚡ {game.skill}
        </p>
      </div>

      {/* Player fill bar */}
      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[11px] text-white/25">{game.players} / {game.maxPlayers} players</span>
          <span className="text-[11px] text-white/25">{fillPercent}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className={`h-full rounded-full transition-all ${isFull ? "bg-red-400/60" : "bg-[#1D9E75]"}`}
            style={{ width: `${fillPercent}%` }}
          />
        </div>
      </div>

      {/* Host + CTA */}
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D9E75]/15 text-[14px]">
            {game.hostAvatar}
          </div>
          <p className="text-[12px] text-white/35">Hosted by {game.host}</p>
        </div>

        <button
          disabled={isFull && !joined}
          onClick={() => setJoined(!joined)}
          className={`rounded-[10px] px-4 py-[8px] text-[13px] font-semibold transition ${
            joined
              ? "border border-[#1D9E75]/40 bg-[#1D9E75]/10 text-[#5DCAA5]"
              : isFull
              ? "cursor-not-allowed border border-white/8 bg-white/5 text-white/25"
              : "bg-[#1D9E75] text-white hover:bg-[#22b887] hover:shadow-[0_6px_18px_rgba(29,158,117,0.32)]"
          }`}
        >
          {joined ? "✓ Joined" : isFull ? "Full" : "Join"}
        </button>
      </div>
    </article>
  );
}

// ─── Create run modal ─────────────────────────────────────────────────────────

function CreateRunModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    title: "", type: "Pickup", date: "", time: "", court: "", city: "", maxPlayers: "10", skill: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value });

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm lg:items-center" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-t-[24px] border border-white/[0.08] bg-[#0e1210] p-6 lg:rounded-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-['Barlow_Condensed'] text-[28px] font-extrabold text-white">Create a run</h2>
          <button onClick={onClose} className="text-white/30 transition hover:text-white">✕</button>
        </div>

        <div className="space-y-4">
          <Field label="Title">
            <input type="text" placeholder="e.g. Sunday Morning Run" value={form.title} onChange={set("title")} className={input} />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Date">
              <input type="date" value={form.date} onChange={set("date")} className={input} />
            </Field>
            <Field label="Time">
              <input type="time" value={form.time} onChange={set("time")} className={input} />
            </Field>
          </div>

          <Field label="Court">
            <input type="text" placeholder="e.g. Ellis Park Courts" value={form.court} onChange={set("court")} className={input} />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Type">
              <select value={form.type} onChange={set("type")} className={input}>
                {["Pickup", "League", "Tournament"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Max players">
              <input type="number" min={2} max={50} value={form.maxPlayers} onChange={set("maxPlayers")} className={input} />
            </Field>
          </div>

          <Field label="Skill level">
            <input type="text" placeholder="e.g. All levels, Advanced..." value={form.skill} onChange={set("skill")} className={input} />
          </Field>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="rounded-[12px] border border-white/10 bg-white/5 px-5 py-[13px] text-[14px] font-medium text-white/50 transition hover:text-white">
            Cancel
          </button>
          <button className="flex-1 rounded-[12px] bg-[#1D9E75] py-[13px] text-[14px] font-semibold text-white transition hover:bg-[#22b887] hover:shadow-[0_8px_24px_rgba(29,158,117,0.38)]">
            Post run
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Tiny shared bits ─────────────────────────────────────────────────────────

function FilterRow({ label, options, active, onChange }: {
  label: string;
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11px] uppercase tracking-[0.1em] text-white/25">{label}:</span>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-[9px] px-3 py-[6px] text-[12px] font-medium transition ${
            active === o
              ? "bg-[#1D9E75] text-white"
              : "border border-white/9 bg-white/5 text-white/45 hover:border-[#1D9E75]/40 hover:text-white/80"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-[9px] block text-xs font-medium uppercase tracking-[0.07em] text-white/38">{label}</label>
      {children}
    </div>
  );
}

const input = "w-full rounded-[12px] border border-white/9 bg-white/5 px-4 py-[12px] text-[14px] text-white outline-none placeholder:text-white/20 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5";