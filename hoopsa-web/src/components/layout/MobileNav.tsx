"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Rss, Calendar, MapPin, Trophy, Settings, X, Plus, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUI } from "@/context/UIContext";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { href: "/feed",     label: "Feed",    icon: Rss },
  { href: "/events",   label: "Events",  icon: Calendar },
  { href: "/courts",   label: "Courts",  icon: MapPin },
  { href: "/scores",   label: "Scores",  icon: Trophy },
  { href: "/settings", label: "Settings",icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobileNavOpen, closeMobileNav, openPostGame } = useUI();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    closeMobileNav();
    await logout();
    router.push("/");
  };

  return (
    <>
      {/* Backdrop */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={closeMobileNav}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-72 flex-col border-r border-white/8 bg-[#0a0f0d] transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <Link
            href="/"
            onClick={closeMobileNav}
            className="flex items-center gap-2 font-['Barlow_Condensed'] text-[24px] font-extrabold tracking-[0.05em] text-white no-underline"
          >
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>
          <button
            onClick={closeMobileNav}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Main nav */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">

          {/* Post game CTA */}
          <button
            onClick={() => { closeMobileNav(); openPostGame?.(); }}
            className="mb-3 flex w-full items-center gap-2 rounded-[12px] bg-[#1D9E75] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#22b887]"
          >
            <Plus className="h-4 w-4" />
            Post a game update
          </button>

          <div className="mb-2 h-px bg-white/7" />

          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileNav}
                className={cn(
                  "flex items-center gap-3 rounded-[12px] px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#1D9E75]/15 text-[#5DCAA5]"
                    : "text-white/45 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-[#1D9E75]" : "")} />
                {item.label}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/8 p-4 space-y-3">
          {/* User pill */}
          <div className="flex items-center gap-3 rounded-[12px] bg-white/[0.04] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/20 font-['Barlow_Condensed'] text-base font-bold text-[#5DCAA5]">
              {user?.username?.charAt(0).toUpperCase() ?? user?.email?.charAt(0).toUpperCase() ?? "B"}
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium text-white">
                {user?.username ?? user?.email?.split("@")[0] ?? "Baller"}
              </span>
              <span className="text-xs text-[#5DCAA5]">
                {user?.position ?? "Player"}
              </span>
            </div>
            <Link
              href="/settings"
              onClick={closeMobileNav}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition hover:text-white"
            >
              <Settings className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Sign out */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-[12px] border border-white/8 bg-transparent px-4 py-3 text-sm font-medium text-white/40 transition hover:bg-white/5 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap');
      `}</style>
    </>
  );
}