import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HoopSA",
  description: "South Africa's #1 basketball platform",
};

const NAV = [
  { icon: <HomeIcon />, label: "Dashboard", href: "/dashboard" },
  { icon: <CourtIcon />, label: "Courts", href: "/courts" },
  { icon: <FeedIcon />, label: "Feed", href: "/feed" },
  { icon: <ScoreIcon />, label: "Games", href: "/games" },
  { icon: <EventIcon />, label: "Events", href: "/events" },
  { icon: <PlayersIcon />, label: "Players", href: "/players" },
  { icon: <TeamIcon />, label: "Teams", href: "/teams" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0f0d] font-sans text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,rgba(29,158,117,0.18)_0%,transparent_60%)]" />

      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] flex-col border-r border-white/[0.06] bg-[#080d0b] px-4 py-8 lg:flex">
        <Link href="/dashboard" className="mb-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <NavLink key={n.label} href={n.href} icon={n.icon} label={n.label} />
          ))}
        </nav>

        <div className="mb-4 border-t border-white/[0.06]" />

        <div className="mt-3 flex items-center gap-3 rounded-[12px] border border-white/7 bg-white/[0.03] px-3 py-3">
          <Avatar initials="JL" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-white/85">Jordan Lee</p>
            <p className="text-[11px] text-white/30">Point Guard · JHB</p>
          </div>
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/[0.06] bg-[#080d0b]/90 px-5 py-4 backdrop-blur-md lg:hidden">
        <Link href="/dashboard" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[22px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[8px] w-[8px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>
        <Link href="/dashboard">
          <Avatar initials="JL" />
        </Link>
      </header>

      <main className="relative z-10 min-h-screen pb-24 pt-20 lg:ml-[220px] lg:pb-10 lg:pt-10">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-30 flex flex-wrap justify-center gap-1 border-t border-white/[0.06] bg-[#080d0b]/95 px-2 py-3 backdrop-blur-md lg:hidden">
        {NAV.map((n) => (
          <Link
            key={n.label}
            href={n.href}
            className="flex min-w-[72px] flex-col items-center gap-1 rounded-[12px] px-2 py-2 text-[10px] font-medium text-white/30 no-underline transition hover:bg-white/5 hover:text-white/80"
          >
            <span className="w-5">{n.icon}</span>
            {n.label}
          </Link>
        ))}
      </nav>

      <style>{
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      }</style>
    </div>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-[12px] px-3 py-[10px] text-[14px] font-medium text-white/40 no-underline transition hover:bg-white/5 hover:text-white/80"
    >
      <span className="w-[18px] shrink-0">{icon}</span>
      {label}
    </Link>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/20 text-[12px] font-semibold text-[#5DCAA5]">
      {initials}
    </div>
  );
}

function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}
function CourtIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /><path d="M9 12a3 3 0 006 0" /></svg>;
}
function FeedIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h10M4 18h7" /></svg>;
}
function ScoreIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
}
function EventIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function PlayersIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
}
function TeamIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 20h14" /><path d="M4 15.5a5 5 0 0110 0M14 15.5a5 5 0 0110 0" transform="translate(-4 -5)" /></svg>;
}
