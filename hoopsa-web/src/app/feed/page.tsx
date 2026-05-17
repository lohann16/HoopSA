import Link from "next/link";

const feedItems = [
  {
    id: 1,
    type: "game",
    user: "Mia Carter",
    avatar: "🔥",
    time: "2m ago",
    content: "Just dropped 27 at Riverside Courts. Who's running next? 🏀",
    court: "Riverside Courts",
    likes: 14,
    comments: 3,
  },
  {
    id: 2,
    type: "score",
    time: "18m ago",
    team1: "Eastside Rims",
    team2: "Turf Titans",
    score1: 54,
    score2: 49,
    court: "Court 1",
    status: "Final",
  },
  {
    id: 3,
    type: "game",
    user: "Jalen Cruz",
    avatar: "👑",
    time: "34m ago",
    content: "Need 2 more for a full court run at Downtown this evening. 5PM. Come through.",
    court: "Downtown Court",
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
    type: "game",
    user: "Trey Morgan",
    avatar: "⚡",
    time: "2h ago",
    content: "Back-to-back double doubles this week. Feeling locked in 💪",
    court: "Westview Arena",
    likes: 41,
    comments: 9,
  },
  {
    id: 6,
    type: "score",
    time: "3h ago",
    team1: "City Hoops",
    team2: "Jersey Jumpers",
    score1: 61,
    score2: 58,
    court: "Court 3",
    status: "Final",
  },
];

export default function Feed() {
  return (
    <div className="min-h-screen bg-[#0e1210] font-sans text-white">

      {/* Nav */}
      <nav className="sticky top-0 z-20 border-b border-white/6 bg-[#0e1210]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[24px] font-extrabold tracking-[0.05em] text-white no-underline">
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>
          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base transition hover:bg-white/10">
              🔔
            </button>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1D9E75]/20 text-base">
              🔥
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-5 py-6">

        {/* Compose box */}
        <div className="mb-6 flex items-center gap-3 rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/20 text-base">
            🔥
          </div>
          <p className="flex-1 text-sm text-white/25">What's happening on the court?</p>
          <button className="rounded-full bg-[#1D9E75] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#22b887]">
            Post
          </button>
        </div>

        {/* Feed */}
        <div className="space-y-3">
          {feedItems.map((item) => {
            if (item.type === "game") return <PostCard key={item.id} item={item} />;
            if (item.type === "score") return <ScoreCard key={item.id} item={item} />;
            if (item.type === "event") return <EventCard key={item.id} item={item} />;
            return null;
          })}
        </div>

        <p className="mt-8 pb-12 text-center text-xs text-white/20">You're all caught up 🏀</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </div>
  );
}

/* ── Post card ── */
function PostCard({ item }: { item: any }) {
  return (
    <article className="rounded-[18px] border border-white/7 bg-white/[0.03] p-5 transition hover:border-white/12">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1D9E75]/15 text-base">
          {item.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white">{item.user}</p>
          <p className="text-xs text-white/30">{item.court} · {item.time}</p>
        </div>
      </div>
      <p className="mb-4 text-[15px] leading-[1.6] text-white/80">{item.content}</p>
      <div className="flex items-center gap-5 text-sm text-white/30">
        <button className="flex items-center gap-1.5 transition hover:text-[#5DCAA5]">
          <HeartIcon /> {item.likes}
        </button>
        <button className="flex items-center gap-1.5 transition hover:text-white/60">
          <CommentIcon /> {item.comments}
        </button>
        <button className="ml-auto transition hover:text-white/60">
          <ShareIcon />
        </button>
      </div>
    </article>
  );
}

/* ── Score card ── */
function ScoreCard({ item }: { item: any }) {
  return (
    <article className="rounded-[18px] border border-white/7 bg-white/[0.03] p-5 transition hover:border-white/12">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.1em] text-[#5DCAA5]">Score update</span>
        <span className="text-xs text-white/28">{item.court} · {item.time}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-white/70">{item.team1}</p>
          <p className="font-['Barlow_Condensed'] text-[38px] font-extrabold leading-none text-white">{item.score1}</p>
        </div>
        <div className="text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
            {item.status}
          </span>
        </div>
        <div className="flex-1 text-right">
          <p className="text-sm font-medium text-white/70">{item.team2}</p>
          <p className="font-['Barlow_Condensed'] text-[38px] font-extrabold leading-none text-white">{item.score2}</p>
        </div>
      </div>
    </article>
  );
}

/* ── Event card ── */
function EventCard({ item }: { item: any }) {
  return (
    <article className="rounded-[18px] border border-[#1D9E75]/20 bg-[#1D9E75]/5 p-5 transition hover:border-[#1D9E75]/35">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.1em] text-[#5DCAA5]">Upcoming event</span>
        <span className="text-xs text-white/28">{item.time}</span>
      </div>
      <p className="mb-1 text-base font-medium text-white">{item.title}</p>
      <p className="mb-4 text-sm text-white/40">{item.date} · {item.location}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/30">{item.spots} spots left</span>
        <button className="rounded-full border border-[#1D9E75]/40 bg-transparent px-4 py-1.5 text-xs font-medium text-[#5DCAA5] transition hover:bg-[#1D9E75]/15">
          Join
        </button>
      </div>
    </article>
  );
}

/* ── Icons ── */
function HeartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}