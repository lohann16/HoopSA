"use client";
import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type FeedItem =
  | { id: number; type: "game";  user: string; avatar: string; time: string; content: string; court: string; likes: number; comments: number }
  | { id: number; type: "score"; time: string; team1: string; team2: string; score1: number; score2: number; court: string; status: string }
  | { id: number; type: "event"; time: string; title: string; date: string; location: string; spots: number };

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const FEED_ITEMS: FeedItem[] = [
  { id: 1, type: "game",  user: "Mia Carter",   avatar: "🔥", time: "2m ago",  content: "Just dropped 27 at Riverside Courts. Who's running next? 🏀", court: "Riverside Courts",  likes: 14, comments: 3 },
  { id: 2, type: "score", time: "18m ago", team1: "Eastside Rims",  team2: "Turf Titans",     score1: 54, score2: 49, court: "Court 1", status: "Final" },
  { id: 3, type: "game",  user: "Jalen Cruz",   avatar: "👑", time: "34m ago", content: "Need 2 more for a full court run at Downtown this evening. 5PM. Come through.", court: "Downtown Court",    likes: 22, comments: 7 },
  { id: 4, type: "event", time: "1h ago",  title: "Alley-Oop Tournament", date: "May 22 · 5:30 PM", location: "Central Gym", spots: 6 },
  { id: 5, type: "game",  user: "Trey Morgan",  avatar: "⚡", time: "2h ago",  content: "Back-to-back double doubles this week. Feeling locked in 💪", court: "Westview Arena",   likes: 41, comments: 9 },
  { id: 6, type: "score", time: "3h ago",  team1: "City Hoops",    team2: "Jersey Jumpers",  score1: 61, score2: 58, court: "Court 3", status: "Final" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function FeedPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-24 pt-8 lg:pb-10">

      {/* ── Header ── */}
      <div className="mb-6">
        <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Live feed</p>
        <h1 className="font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
          Court Talk
        </h1>
      </div>

      {/* ── Compose ── */}
      <ComposeBox />

      {/* ── Feed ── */}
      <div className="mt-5 space-y-3">
        {FEED_ITEMS.map((item) => {
          if (item.type === "game")  return <PostCard  key={item.id} item={item} />;
          if (item.type === "score") return <ScoreCard key={item.id} item={item} />;
          if (item.type === "event") return <EventCard key={item.id} item={item} />;
          return null;
        })}
      </div>

      {/* ── End of feed ── */}
      <p className="mt-8 text-center text-[13px] text-white/20">
        You're all caught up 🏀
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPOSE BOX
───────────────────────────────────────────── */
function ComposeBox() {
  const [text, setText] = useState("");
  return (
    <div className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <Avatar emoji="🔥" />
        <textarea
          rows={2}
          placeholder="What's happening on the court?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 resize-none rounded-[12px] border border-white/9 bg-white/5 px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/20 transition focus:border-[#1D9E75]/55 focus:bg-[#1D9E75]/5"
        />
      </div>
      <div className="mt-3 flex justify-end">
        <button
          disabled={!text.trim()}
          className="rounded-[10px] bg-[#1D9E75] px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#22b887] hover:shadow-[0_6px_18px_rgba(29,158,117,0.35)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          Post
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   POST CARD  (type: "game")
───────────────────────────────────────────── */
function PostCard({ item }: { item: Extract<FeedItem, { type: "game" }> }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(item.likes);

  function toggleLike() {
    setLiked((l) => !l);
    setCount((c) => (liked ? c - 1 : c + 1));
  }

  return (
    <Card>
      {/* Author row */}
      <div className="mb-3 flex items-center gap-3">
        <Avatar emoji={item.avatar} />
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-semibold text-white/90">{item.user}</p>
          <p className="text-[12px] text-white/30">{item.court} · {item.time}</p>
        </div>
        <TypeBadge label="Post" color="green" />
      </div>

      {/* Content */}
      <p className="mb-4 text-[14px] leading-[1.65] text-white/70">{item.content}</p>

      {/* Actions */}
      <div className="flex gap-1 border-t border-white/[0.06] pt-3">
        <ActionBtn onClick={toggleLike} active={liked}>
          <HeartIcon filled={liked} /> {count}
        </ActionBtn>
        <ActionBtn>
          <CommentIcon /> {item.comments}
        </ActionBtn>
        <ActionBtn>
          <ShareIcon /> Share
        </ActionBtn>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   SCORE CARD  (type: "score")
───────────────────────────────────────────── */
function ScoreCard({ item }: { item: Extract<FeedItem, { type: "score" }> }) {
  const winner = item.score1 > item.score2 ? 1 : 2;
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <TypeBadge label="Score update" color="default" />
        <span className="text-[12px] text-white/25">{item.court} · {item.time}</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        {/* Team 1 */}
        <div className="flex-1 text-left">
          <p className={`font-['Barlow_Condensed'] text-[16px] font-extrabold ${winner === 1 ? "text-white" : "text-white/40"}`}>
            {item.team1}
          </p>
        </div>

        {/* Scores */}
        <div className="flex items-center gap-3 rounded-[14px] border border-white/[0.07] bg-white/[0.04] px-5 py-3">
          <span className={`font-['Barlow_Condensed'] text-[34px] font-extrabold leading-none ${winner === 1 ? "text-white" : "text-white/40"}`}>
            {item.score1}
          </span>
          <span className="text-[18px] font-light text-white/15">–</span>
          <span className={`font-['Barlow_Condensed'] text-[34px] font-extrabold leading-none ${winner === 2 ? "text-white" : "text-white/40"}`}>
            {item.score2}
          </span>
        </div>

        {/* Team 2 */}
        <div className="flex-1 text-right">
          <p className={`font-['Barlow_Condensed'] text-[16px] font-extrabold ${winner === 2 ? "text-white" : "text-white/40"}`}>
            {item.team2}
          </p>
        </div>
      </div>

      <p className="mt-3 text-center text-[11px] uppercase tracking-[0.1em] text-[#5DCAA5]/60">{item.status}</p>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   EVENT CARD  (type: "event")
───────────────────────────────────────────── */
function EventCard({ item }: { item: Extract<FeedItem, { type: "event" }> }) {
  const [joined, setJoined] = useState(false);
  return (
    <Card glow>
      <div className="mb-3 flex items-center justify-between">
        <TypeBadge label="Event" color="green" />
        <span className="text-[12px] text-white/25">{item.time}</span>
      </div>

      <p className="mb-1 font-['Barlow_Condensed'] text-[24px] font-extrabold leading-none text-white">
        {item.title}
      </p>
      <p className="mb-4 text-[13px] text-white/35">
        📅 {item.date} &nbsp;·&nbsp; 📍 {item.location}
      </p>

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#1D9E75]/15 px-3 py-[4px] text-[12px] font-medium text-[#5DCAA5]">
          {item.spots} spots left
        </span>
        <button
          onClick={() => setJoined((j) => !j)}
          className={`rounded-[10px] px-5 py-[9px] text-[13px] font-semibold transition ${
            joined
              ? "border border-[#1D9E75]/40 bg-[#1D9E75]/10 text-[#5DCAA5]"
              : "bg-[#1D9E75] text-white hover:bg-[#22b887] hover:shadow-[0_6px_18px_rgba(29,158,117,0.35)]"
          }`}
        >
          {joined ? "✓ Joined" : "Join"}
        </button>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────────── */
function Card({ children, glow = false }: { children: React.ReactNode; glow?: boolean }) {
  return (
    <article className={`rounded-[18px] border bg-white/[0.03] p-4 transition hover:bg-white/[0.05] ${
      glow ? "border-[#1D9E75]/20 shadow-[0_0_24px_rgba(29,158,117,0.07)]" : "border-white/[0.07]"
    }`}>
      {children}
    </article>
  );
}

function Avatar({ emoji }: { emoji: string }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/15 text-[18px]">
      {emoji}
    </div>
  );
}

function TypeBadge({ label, color }: { label: string; color: "green" | "default" }) {
  return (
    <span className={`rounded-full px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.08em] ${
      color === "green" ? "bg-[#1D9E75]/15 text-[#5DCAA5]" : "bg-white/8 text-white/35"
    }`}>
      {label}
    </span>
  );
}

function ActionBtn({ children, onClick, active = false }: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-[6px] rounded-[9px] py-[7px] text-[12px] font-medium transition ${
        active ? "text-[#5DCAA5]" : "text-white/30 hover:bg-white/5 hover:text-white/60"
      }`}
    >
      {children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function HeartIcon({ filled }: { filled: boolean }) {
  return filled
    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="#5DCAA5" stroke="#5DCAA5" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>;
}
function CommentIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
}
function ShareIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>;
}