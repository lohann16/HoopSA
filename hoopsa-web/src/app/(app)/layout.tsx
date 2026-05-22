import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HoopSA",
  description: "South Africa's #1 basketball platform",
};

const NAV = [
  { icon: <HomeIcon />, label: "Home", href: "/dashboard" },
  { icon: <CourtIcon />, label: "Courts", href: "/courts" },
  { icon: <ScoreIcon />, label: "Scores", href: "/scores" },
  { icon: <CrewIcon />, label: "My Crew", href: "/crew" },
  { icon: <ProfileIcon />, label: "Profile", href: "/profile" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0f0d] font-sans text-white">

      {/* ── Background glow ── */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,rgba(29,158,117,0.18)_0%,transparent_60%)]" />

      {/* ── Sidebar (desktop) ── */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] flex-col border-r border-white/[0.06] bg-[#080d0b] px-4 py-8 lg:flex">

        {/* Logo */}
        <Link href="/" className="mb-10 flex items-center gap-2 font-['Barlow_Condensed'] text-[26px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((n) => (
            <NavLink key={n.label} href={n.href} icon={n.icon} label={n.label} />
          ))}
        </nav>

        {/* Divider */}
        <div className="mb-4 border-t border-white/[0.06]" />

        {/* Settings */}
        <NavLink href="/settings" icon={<SettingsIcon />} label="Settings" />

        {/* User chip */}
        <div className="mt-3 flex items-center gap-3 rounded-[12px] border border-white/7 bg-white/[0.03] px-3 py-3">
          <Avatar initials="JL" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-white/85">Jordan Lee</p>
            <p className="text-[11px] text-white/30">Point Guard · JHB</p>
          </div>
        </div>
      </aside>

      {/* ── Top bar (mobile) ── */}
      <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/[0.06] bg-[#080d0b]/90 px-5 py-4 backdrop-blur-md lg:hidden">
        <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[22px] font-extrabold tracking-[0.05em] text-white no-underline">
          <span className="inline-block h-[8px] w-[8px] animate-pulse rounded-full bg-[#1D9E75]" />
          HOOPSA
        </Link>
        <Link href="/profile">
          <Avatar initials="JL" />
        </Link>
      </header>

      {/* ── Page content ── */}
      <main className="relative z-10 min-h-screen pb-24 pt-20 lg:ml-[220px] lg:pb-10 lg:pt-10">
        {children}
      </main>

      {/* ── Bottom nav (mobile) ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-white/[0.06] bg-[#080d0b]/95 px-2 py-3 backdrop-blur-md lg:hidden">
        {NAV.map((n) => (
          <Link
            key={n.label}
            href={n.href}
            className="flex flex-col items-center gap-1 text-white/30 no-underline transition hover:text-white/60"
          >
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

/* ── Nav link ── 
   Active state: add [aria-current="page"] styling via a client wrapper 
   or use next/navigation's usePathname in a separate Client Component.
   For now, base styling is provided — swap in your active detection logic. */
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

/* ── Icons ── */
function HomeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}
function CourtIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /><path d="M9 12a3 3 0 006 0" /></svg>;
}
function ScoreIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
}
function CrewIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
}
function ProfileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
}
function SettingsIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
}