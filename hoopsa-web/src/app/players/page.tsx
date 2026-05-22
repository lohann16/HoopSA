"use client";
import { useState } from "react";

const PLAYERS = [
  { id: 1, name: "Kabo Dlamini", position: "PG", skill: "Pro", city: "Johannesburg", wins: 87, games: 112, rep: 98, court: "Ellis Park Courts", status: "online" },
  { id: 2, name: "Thabo Mokoena", position: "SF", skill: "Advanced", city: "Soweto", wins: 63, games: 91, rep: 82, court: "Soweto Arena", status: "online" },
  { id: 3, name: "Lerato Sithole", position: "C", skill: "Advanced", city: "Alexandra", wins: 54, games: 78, rep: 74, court: "Alexandra Community Hoops", status: "away" },
  { id: 4, name: "Mpho Nkosi", position: "SG", skill: "Intermediate", city: "Sandton", wins: 29, games: 58, rep: 51, court: "Sandton Heights Court", status: "offline" },
  { id: 5, name: "Sipho Zulu", position: "PF", skill: "Pro", city: "Diepkloof", wins: 101, games: 130, rep: 97, court: "Diepkloof Sports Hub", status: "online" },
  { id: 6, name: "Ayanda Cele", position: "PG", skill: "Intermediate", city: "Rosebank", wins: 18, games: 40, rep: 43, court: "Rosebank Rec Centre", status: "away" },
  { id: 7, name: "Nandi Dube", position: "SG", skill: "Advanced", city: "Johannesburg", wins: 72, games: 100, rep: 86, court: "Ellis Park Courts", status: "online" },
  { id: 8, name: "Bongani Mthembu", position: "SF", skill: "Pro", city: "Soweto", wins: 95, games: 118, rep: 99, court: "Soweto Arena", status: "online" },
];

const POSITIONS = ["All", "PG", "SG", "SF", "PF", "C"];
const SKILLS = ["All", "Beginner", "Intermediate", "Advanced", "Pro"];

const STATUS_STYLES: Record<string, string> = {
  online:  "bg-[#1D9E75]/20 text-[#5DCAA5]",
  away:    "bg-orange-500/15 text-orange-400",
  offline: "bg-white/8 text-white/30",
};

const SKILL_STYLES: Record<string, string> = {
  Pro:          "bg-[#1D9E75]/20 text-[#5DCAA5]",
  Advanced:     "bg-blue-500/15 text-blue-400",
  Intermediate: "bg-purple-500/15 text-purple-400",
  Beginner:     "bg-white/8 text-white/35",
};

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [posFilter, setPosFilter] = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");

  const filtered = PLAYERS.filter((p) =>
    (posFilter === "All" || p.position === posFilter) &&
    (skillFilter === "All" || p.skill === skillFilter) &&
    (search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 lg:px-10">

      {/* ── Header ── */}
      <div className="mb-8">
        <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Community</p>
        <h1 className="font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white lg:text-[52px]">
          Players
        </h1>
        <p className="mt-1 text-[15px] text-white/40">Find ballers near you</p>
      </div>

      {/* ── Search ── */}
      <div className="relative mb-5">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/25">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search players or cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-[14px] border border-white/9 bg-white/5 py-[14px] pl-11 pr-5 text-[15px] text-white outline-none placeholder:text-white/20 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5"
        />
      </div>

      {/* ── Filters ── */}
      <div className="mb-6 flex flex-wrap gap-4">
        <FilterGroup label="Position" options={POSITIONS} active={posFilter} onChange={setPosFilter} />
        <FilterGroup label="Skill" options={SKILLS} active={skillFilter} onChange={setSkillFilter} />
      </div>

      {/* ── Count ── */}
      <p className="mb-5 text-[13px] text-white/30">
        <span className="font-semibold text-white/60">{filtered.length}</span> players found
      </p>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[20px] border border-white/[0.07] bg-white/[0.02] py-16 text-center">
          <p className="font-['Barlow_Condensed'] text-[28px] font-extrabold text-white/20">No players found</p>
          <p className="mt-1 text-[14px] text-white/20">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {filtered.map((player) => {
            const winRate = Math.round((player.wins / player.games) * 100);
            return (
              <div
                key={player.id}
                className="group flex flex-col rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-5 transition hover:border-[#1D9E75]/30 hover:bg-[#1D9E75]/[0.04]"
              >
                {/* Top row */}
                <div className="mb-4 flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D9E75]/20 font-['Barlow_Condensed'] text-[18px] font-extrabold text-[#5DCAA5]">
                      {initials(player.name)}
                    </div>
                    {/* Status dot */}
                    <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0a0f0d] ${
                      player.status === "online" ? "bg-[#1D9E75]" : player.status === "away" ? "bg-orange-400" : "bg-white/20"
                    }`} />
                  </div>

                  {/* Name + location */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-['Barlow_Condensed'] text-[20px] font-extrabold leading-none text-white">
                      {player.name}
                    </p>
                    <p className="mt-[3px] truncate text-[12px] text-white/35">
                      📍 {player.city} · {player.court}
                    </p>
                  </div>

                  {/* Status badge */}
                  <span className={`shrink-0 rounded-full px-2 py-[3px] text-[11px] font-medium capitalize ${STATUS_STYLES[player.status]}`}>
                    {player.status}
                  </span>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-[8px] bg-white/8 px-2 py-[3px] text-[12px] font-semibold text-white/60">
                    {player.position}
                  </span>
                  <span className={`rounded-[8px] px-2 py-[3px] text-[12px] font-semibold ${SKILL_STYLES[player.skill]}`}>
                    {player.skill}
                  </span>
                </div>

                {/* Stats row */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <Stat label="Win rate" value={`${winRate}%`} />
                  <Stat label="Games" value={player.games} />
                  <Stat label="Rep" value={`${player.rep}`} highlight={player.rep >= 90} />
                </div>

                {/* Rep bar */}
                <div className="mb-4">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-[#1D9E75] transition-all"
                      style={{ width: `${player.rep}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-2">
                  <ActionBtn variant="primary">Challenge</ActionBtn>
                  <ActionBtn variant="ghost">+ Crew</ActionBtn>
                  <ActionBtn variant="ghost">
                    <MessageIcon />
                  </ActionBtn>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

/* ── Helpers ── */
function FilterGroup({ label, options, active, onChange }: {
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

function Stat({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="rounded-[10px] bg-white/[0.04] px-3 py-2 text-center">
      <p className={`font-['Barlow_Condensed'] text-[20px] font-extrabold leading-none ${highlight ? "text-[#5DCAA5]" : "text-white"}`}>
        {value}
      </p>
      <p className="mt-[2px] text-[10px] uppercase tracking-[0.08em] text-white/25">{label}</p>
    </div>
  );
}

function ActionBtn({ children, variant }: { children: React.ReactNode; variant: "primary" | "ghost" }) {
  return (
    <button className={`flex flex-1 items-center justify-center gap-1 rounded-[10px] py-[10px] text-[13px] font-medium transition ${
      variant === "primary"
        ? "bg-[#1D9E75] text-white hover:bg-[#22b887] hover:shadow-[0_6px_18px_rgba(29,158,117,0.35)]"
        : "border border-white/9 bg-white/5 text-white/50 hover:border-[#1D9E75]/35 hover:text-white/80"
    }`}>
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}