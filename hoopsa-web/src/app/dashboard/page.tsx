"use client";
import { useState } from "react";
import Link from "next/link";

const NAV = [
  { icon: <HomeIcon />, label: "Home", href: "/dashboard", active: true },
  { icon: <CourtIcon />, label: "Courts", href: "/courts" },
  { icon: <ScoreIcon />, label: "Scores", href: "/scores" },
  { icon: <CrewIcon />, label: "My Crew", href: "/crew" },
  { icon: <ProfileIcon />, label: "Profile", href: "/profile" },
];

const LIVE_GAMES = [
  { home: "Soweto Ballers", away: "JHB North", homeScore: 54, awayScore: 49, quarter: "Q3", time: "4:22", court: "Orlando Stadium Court 2" },
  { home: "CT Wave", away: "Durban Heat", homeScore: 38, awayScore: 41, quarter: "Q2", time: "1:05", court: "GreenPoint Outdoor" },
];

const NEARBY_COURTS = [
  { name: "Ellis Park Court", distance: "0.8 km", status: "busy", players: 10 },
  { name: "Sandton Rec Centre", distance: "2.1 km", status: "open", players: 3 },
  { name: "Soweto Indoor Arena", distance: "4.5 km", status: "open", players: 0 },
];

const UPCOMING = [
  { title: "3v3 Sunday Run", date: "Sun 25 May", time: "09:00", court: "Ellis Park", spots: 2 },
  { title: "Friday Night League", date: "Fri 30 May", time: "18:30", court: "Sandton Rec", spots: 5 },
];

const CREW = [
  { name: "Thabo M.", pos: "PG", skill: "Advanced", initials: "TM" },
  { name: "Lebo K.", pos: "SF", skill: "Pro", initials: "LK" },
  { name: "Siya N.", pos: "C", skill: "Intermediate", initials: "SN" },
  { name: "Ruan P.", pos: "SG", skill: "Advanced", initials: "RP" },
];

export default function Dashboard() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f0d] font-sans text-white">

      {/* ── Background glow ── */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,rgba(29,158,117,0.18)_0%,transparent_60%)]" />

      {/* ── Sidebar ── */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] flex-col border-r border-white/[0.06] bg-[#080d0b] px-4 py-8 lg:flex">
        <Link href="/" className="mb-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href}
              className={`flex items-center gap-3 rounded-[12px] px-3 py-[10px] text-[14px] font-medium no-underline transition ${
                n.active ? "bg-[#1D9E75]/15 text-[#5DCAA5]" : "text-white/40 hover:bg-white/5 hover:text-white/80"
              }`}>
              <span className="w-[18px] shrink-0">{n.icon}</span>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* User chip */}
        <div className="mt-6 flex items-center gap-3 rounded-[12px] border border-white/7 bg-white/[0.03] px-3 py-3">
          <Avatar initials="JL" size="sm" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-white/85">Jordan Lee</p>
            <p className="text-[11px] text-white/30">Point Guard · JHB</p>
          </div>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/[0.06] bg-[#080d0b]/90 px-5 py-4 backdrop-blur-md lg:hidden">
        <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[22px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[8px] w-[8px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>
        <Avatar initials="JL" size="sm" />
      </header>

      {/* ── Main content ── */}
      <main className="relative z-10 min-h-screen pb-24 pt-6 lg:ml-[220px] lg:pb-10 lg:pt-10">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">

          {/* Greeting */}
          <div className="mb-8 mt-14 lg:mt-0">
            <p className="text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Friday, 23 May</p>
            <h1 className="font-['Barlow_Condensed'] text-[38px] font-extrabold leading-none tracking-tight text-white lg:text-[48px]">
              What's good, <span className="text-[#1D9E75]">Jordan.</span>
            </h1>
          </div>

          {/* ── Stat cards ── */}
          <div className="mb-8 grid grid-cols-3 gap-3">
            {[
              { label: "Games played", value: "24", delta: "+3 this month" },
              { label: "Win rate", value: "67%", delta: "↑ 4% vs last month" },
              { label: "Crew size", value: "12", delta: "4 active this week" },
            ].map((s) => (
              <div key={s.label} className="rounded-[16px] border border-white/[0.07] bg-white/[0.03] px-4 py-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-white/30">{s.label}</p>
                <p className="font-['Barlow_Condensed'] text-[32px] font-extrabold leading-none text-white">{s.value}</p>
                <p className="mt-1 text-[11px] text-[#5DCAA5]/70">{s.delta}</p>
              </div>
            ))}
          </div>

          {/* ── Live games ── */}
          <Section title="Live now" badge={`${LIVE_GAMES.length} games`} badgeColor="green">
            <div className="space-y-3">
              {LIVE_GAMES.map((g, i) => (
                <div key={i} className="flex items-center justify-between rounded-[16px] border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/5">
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-white/60">{g.home}</p>
                      <p className="truncate text-[13px] font-medium text-white/60">{g.away}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-['Barlow_Condensed'] text-[28px] font-extrabold leading-none text-white">
                        {g.homeScore}<span className="mx-1 text-white/20">–</span>{g.awayScore}
                      </p>
                      <div className="mt-1 flex items-center justify-center gap-1">
                        <span className="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-[#1D9E75]" />
                        <span className="text-[11px] text-[#5DCAA5]">{g.quarter} · {g.time}</span>
                      </div>
                    </div>
                    <div className="hidden min-w-0 text-right sm:block">
                      <p className="truncate text-[12px] text-white/30">{g.court}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            {/* ── Nearby courts ── */}
            <Section title="Courts near you" action={{ label: "View all", href: "/courts" }}>
              <div className="space-y-2">
                {NEARBY_COURTS.map((c) => (
                  <div key={c.name} className="flex items-center justify-between rounded-[14px] border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/5">
                    <div>
                      <p className="text-[14px] font-medium text-white/80">{c.name}</p>
                      <p className="text-[12px] text-white/30">{c.distance} away · {c.players} players</p>
                    </div>
                    <span className={`rounded-full px-2 py-[3px] text-[11px] font-medium ${
                      c.status === "open" ? "bg-[#1D9E75]/15 text-[#5DCAA5]" : "bg-orange-500/15 text-orange-400"
                    }`}>
                      {c.status === "open" ? "Open" : "Busy"}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Upcoming games ── */}
            <Section title="Upcoming runs" action={{ label: "Browse all", href: "/games" }}>
              <div className="space-y-2">
                {UPCOMING.map((u) => (
                  <div key={u.title} className="rounded-[14px] border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/5">
                    <div className="flex items-start justify-between">
                      <p className="text-[14px] font-medium text-white/85">{u.title}</p>
                      <span className="rounded-full bg-[#1D9E75]/15 px-2 py-[3px] text-[11px] font-medium text-[#5DCAA5]">
                        {u.spots} spots left
                      </span>
                    </div>
                    <p className="mt-[3px] text-[12px] text-white/30">{u.date} · {u.time} · {u.court}</p>
                  </div>
                ))}
                <button className="w-full rounded-[14px] border border-dashed border-white/10 py-3 text-[13px] text-white/30 transition hover:border-[#1D9E75]/30 hover:text-[#5DCAA5]">
                  + Create a run
                </button>
              </div>
            </Section>
          </div>

          {/* ── My crew ── */}
          <div className="mt-8">
            <Section title="My crew" action={{ label: "Manage", href: "/crew" }}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CREW.map((c) => (
                  <div key={c.name} className="flex flex-col items-center rounded-[16px] border border-white/[0.07] bg-white/[0.03] px-3 py-4 text-center transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/5">
                    <Avatar initials={c.initials} size="md" />
                    <p className="mt-3 text-[13px] font-medium text-white/80">{c.name}</p>
                    <p className="text-[11px] text-white/30">{c.pos} · {c.skill}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

        </div>
      </main>

      {/* ── Mobile bottom nav ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-white/[0.06] bg-[#080d0b]/95 px-2 py-3 backdrop-blur-md lg:hidden">
        {NAV.map((n) => (
          <Link key={n.label} href={n.href}
            className={`flex flex-col items-center gap-1 no-underline transition ${n.active ? "text-[#5DCAA5]" : "text-white/30 hover:text-white/60"}`}>
            <span className="w-5">{n.icon}</span>
            <span className="text-[10px] font-medium">{n.label}</span>
          </Link>
        ))}
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

/* ── Helpers ── */
function Section({ title, badge, badgeColor, action, children }: {
  title: string;
  badge?: string;
  badgeColor?: string;
  action?: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-['Barlow_Condensed'] text-[20px] font-extrabold tracking-tight text-white">{title}</h2>
          {badge && (
            <span className={`rounded-full px-2 py-[2px] text-[11px] font-medium ${
              badgeColor === "green" ? "bg-[#1D9E75]/20 text-[#5DCAA5]" : "bg-white/8 text-white/40"
            }`}>{badge}</span>
          )}
        </div>
        {action && (
          <Link href={action.href} className="text-[12px] text-white/30 no-underline transition hover:text-[#5DCAA5]">
            {action.label} →
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

function Avatar({ initials, size }: { initials: string; size: "sm" | "md" }) {
  return (
    <div className={`flex shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/20 font-semibold text-[#5DCAA5] ${
      size === "sm" ? "h-8 w-8 text-[12px]" : "h-10 w-10 text-[13px]"
    }`}>
      {initials}
    </div>
  );
}

/* ── Icons ── */
function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function CourtIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><path d="M9 12a3 3 0 006 0"/></svg>;
}
function ScoreIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function CrewIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
}
function ProfileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}