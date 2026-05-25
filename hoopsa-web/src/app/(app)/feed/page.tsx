"use client";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const feedItems = [
  {
    id: 1,
    type: "post",
    user: "Mia Carter",
    avatar: "🔥",
    court: "Riverside Courts",
    time: "2m ago",
    content: "Just dropped 27 at Riverside Courts. Who's running next? 🏀",
    likes: 14,
    comments: 3,
  },
  {
    id: 2,
    type: "score",
    time: "18m ago",
    court: "Court 1",
    team1: "Eastside Rims",
    team2: "Turf Titans",
    score1: 54,
    score2: 49,
    status: "Final",
  },
  {
    id: 3,
    type: "post",
    user: "Jalen Cruz",
    avatar: "👑",
    court: "Downtown Court",
    time: "34m ago",
    content: "Need 2 more for a full court run at Downtown this evening. 5PM. Come through.",
    likes: 22,
    comments: 7,
  },
  {
    id: 4,
    type: "event",
    time: "1h ago",
    title: "Alley-Oop Tournament",
    date: "May 22 · 5:30 PM",
    location: "Central Gym",
    spots: 6,
  },
  {
    id: 5,
    type: "post",
    user: "Trey Morgan",
    avatar: "⚡",
    court: "Westview Arena",
    time: "2h ago",
    content: "Back-to-back double doubles this week. Feeling locked in 💪",
    likes: 41,
    comments: 9,
  },
  {
    id: 6,
    type: "score",
    time: "3h ago",
    court: "Court 3",
    team1: "City Hoops",
    team2: "Jersey Jumpers",
    score1: 61,
    score2: 58,
    status: "Final",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FeedPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-24 pt-8 lg:pb-10">

      <header className="mb-6">
        <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Live feed</p>
        <h1 className="font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white">
          Court Talk
        </h1>
      </header>

      <ComposeBox />

      <div className="mt-5 space-y-3">
        {feedItems.map((item) => {
          if (item.type === "post")  return <PostCard  key={item.id} {...item} />;
          if (item.type === "score") return <ScoreCard key={item.id} {...item} />;
          if (item.type === "event") return <EventCard key={item.id} {...item} />;
        })}
      </div>

      <p className="mt-8 text-center text-[13px] text-white/20">
        You're all caught up 🏀
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

// ─── Compose ──────────────────────────────────────────────────────────────────

function ComposeBox() {
  const [text, setText] = useState("");

  return (
    <div className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4">
      <div className="flex items-start gap-3">
        <Emoji>🔥</Emoji>
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
          className="rounded-[10px] bg-[#1D9E75] px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#22b887] disabled:opacity-30"
        >
          Post
        </button>
      </div>
    </div>
  );
}

// ─── Post card ────────────────────────────────────────────────────────────────

function PostCard({ user, avatar, court, time, content, likes, comments }: {
  user: string;
  avatar: string;
  court: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
}) {
  const [liked, setLiked] = useState(false);
  const likeCount = liked ? likes + 1 : likes;

  return (
    <article className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">

      <div className="mb-3 flex items-center gap-3">
        <Emoji>{avatar}</Emoji>
        <div>
          <p className="text-[14px] font-semibold text-white/90">{user}</p>
          <p className="text-[12px] text-white/30">{court} · {time}</p>
        </div>
      </div>

      <p className="mb-4 text-[14px] leading-[1.65] text-white/70">{content}</p>

      <div className="flex gap-1 border-t border-white/[0.06] pt-3">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-[9px] py-[7px] text-[12px] font-medium transition hover:bg-white/5 ${liked ? "text-[#5DCAA5]" : "text-white/30 hover:text-white/60"}`}
        >
          {liked ? "♥" : "♡"} {likeCount}
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-[9px] py-[7px] text-[12px] font-medium text-white/30 transition hover:bg-white/5 hover:text-white/60">
          💬 {comments}
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-[9px] py-[7px] text-[12px] font-medium text-white/30 transition hover:bg-white/5 hover:text-white/60">
          ↗ Share
        </button>
      </div>
    </article>
  );
}

// ─── Score card ───────────────────────────────────────────────────────────────

function ScoreCard({ team1, team2, score1, score2, court, time, status }: {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  court: string;
  time: string;
  status: string;
}) {
  const team1Won = score1 > score2;

  return (
    <article className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">

      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-white/8 px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.08em] text-white/35">
          Score update
        </span>
        <span className="text-[12px] text-white/25">{court} · {time}</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className={`flex-1 font-['Barlow_Condensed'] text-[16px] font-extrabold ${team1Won ? "text-white" : "text-white/35"}`}>
          {team1}
        </p>

        <div className="flex items-center gap-3 rounded-[14px] border border-white/[0.07] bg-white/[0.04] px-5 py-3">
          <span className={`font-['Barlow_Condensed'] text-[34px] font-extrabold leading-none ${team1Won ? "text-white" : "text-white/35"}`}>
            {score1}
          </span>
          <span className="text-[18px] font-light text-white/15">–</span>
          <span className={`font-['Barlow_Condensed'] text-[34px] font-extrabold leading-none ${!team1Won ? "text-white" : "text-white/35"}`}>
            {score2}
          </span>
        </div>

        <p className={`flex-1 text-right font-['Barlow_Condensed'] text-[16px] font-extrabold ${!team1Won ? "text-white" : "text-white/35"}`}>
          {team2}
        </p>
      </div>

      <p className="mt-3 text-center text-[11px] uppercase tracking-[0.1em] text-[#5DCAA5]/60">
        {status}
      </p>
    </article>
  );
}

// ─── Event card ───────────────────────────────────────────────────────────────

function EventCard({ title, date, location, spots, time }: {
  title: string;
  date: string;
  location: string;
  spots: number;
  time: string;
}) {
  const [joined, setJoined] = useState(false);

  return (
    <article className="rounded-[18px] border border-[#1D9E75]/20 bg-white/[0.03] p-4 shadow-[0_0_24px_rgba(29,158,117,0.07)] transition hover:bg-white/[0.05]">

      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-[#1D9E75]/15 px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5DCAA5]">
          Event
        </span>
        <span className="text-[12px] text-white/25">{time}</span>
      </div>

      <p className="mb-1 font-['Barlow_Condensed'] text-[24px] font-extrabold leading-none text-white">
        {title}
      </p>
      <p className="mb-4 text-[13px] text-white/35">
        📅 {date} &nbsp;·&nbsp; 📍 {location}
      </p>

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#1D9E75]/15 px-3 py-[4px] text-[12px] font-medium text-[#5DCAA5]">
          {spots} spots left
        </span>
        <button
          onClick={() => setJoined(!joined)}
          className={`rounded-[10px] px-5 py-[9px] text-[13px] font-semibold transition ${
            joined
              ? "border border-[#1D9E75]/40 bg-[#1D9E75]/10 text-[#5DCAA5]"
              : "bg-[#1D9E75] text-white hover:bg-[#22b887]"
          }`}
        >
          {joined ? "✓ Joined" : "Join"}
        </button>
      </div>
    </article>
  );
}

// ─── Tiny shared bits ─────────────────────────────────────────────────────────

function Emoji({ children }: { children: string }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/15 text-[18px]">
      {children}
    </div>
  );
}