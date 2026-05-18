import Link from "next/link";

const featured = {
  title: "Alley-Oop Tournament",
  date: "Saturday, May 22",
  time: "5:30 PM",
  location: "Central Gym, Johannesburg",
  spots: 6,
  totalSpots: 32,
  tags: ["Tournament", "Full court", "Cash prize"],
};

const events = [
  {
    id: 1,
    title: "Sunday Park Jam",
    date: "May 18",
    time: "10:00 AM",
    location: "Riverside Courts",
    type: "Pickup",
    spots: 4,
    joined: false,
  },
  {
    id: 2,
    title: "Citywide Pickup",
    date: "May 25",
    time: "8:00 PM",
    location: "North Community Center",
    type: "Pickup",
    spots: 10,
    joined: false,
  },
  {
    id: 3,
    title: "3-on-3 Friday Blitz",
    date: "May 30",
    time: "6:00 PM",
    location: "Harbor Park",
    type: "Tournament",
    spots: 2,
    joined: false,
  },
  {
    id: 4,
    title: "Evening Run — Westview",
    date: "Jun 1",
    time: "7:30 PM",
    location: "Westview Arena",
    type: "Pickup",
    spots: 8,
    joined: true,
  },
  {
    id: 5,
    title: "Charity Hoops Day",
    date: "Jun 7",
    time: "9:00 AM",
    location: "Eastside Rims Court",
    type: "Community",
    spots: 20,
    joined: false,
  },
  // {
  //   id: 6,
  //   title: "Summer League Opener",
  //   date: "Jun 14",
  //   time: "4:00 PM",
  //   location: "Central Gym",
  //   type: "League",
  //   spots: 0,
  //   joined: false,
  // },
];

const typeColors: Record<string, string> = {
  Pickup: "bg-[#1D9E75]/12 text-[#5DCAA5] border-[#1D9E75]/25",
  Tournament: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  Community: "bg-blue-500/10 text-blue-400 border-blue-500/25",
  League: "bg-purple-500/10 text-purple-400 border-purple-500/25",
};

export default function Events() {
  return (
    <div className="min-h-screen bg-[#0e1210] font-sans text-white">

      {/* Nav */}
      <nav className="sticky top-0 z-20 border-b border-white/6 bg-[#0e1210]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2 font-['Barlow_Condensed'] text-[24px] font-extrabold tracking-[0.05em] text-white no-underline">
            <span className="inline-block h-[9px] w-[9px] animate-pulse rounded-full bg-[#1D9E75]" />
            HOOPSA
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#1D9E75] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#22b887]">
            + Create event
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-5 py-8">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">What's on</p>
          <h1 className="font-['Barlow_Condensed'] text-[clamp(38px,6vw,56px)] font-extrabold leading-none text-white">
            Upcoming Events
          </h1>
        </div>

        {/* Featured */}
        <div className="mb-8 overflow-hidden rounded-[22px] border border-[#1D9E75]/25 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(29,158,117,0.18)_0%,transparent_70%)] p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
              🏆 Featured
            </span>
            <span className="text-xs text-white/30">{featured.spots} spots left</span>
          </div>
          <h2 className="mb-1 font-['Barlow_Condensed'] text-[32px] font-extrabold leading-none text-white">
            {featured.title}
          </h2>
          <p className="mb-4 text-sm text-white/45">
            {featured.date} · {featured.time} · {featured.location}
          </p>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="mb-1.5 flex justify-between text-xs text-white/30">
              <span>{featured.totalSpots - featured.spots} registered</span>
              <span>{featured.totalSpots} total</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-[#1D9E75] transition-all"
                style={{ width: `${((featured.totalSpots - featured.spots) / featured.totalSpots) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                {tag}
              </span>
            ))}
          </div>

          <button className="w-full rounded-[12px] bg-[#1D9E75] py-3 text-sm font-medium text-white transition hover:bg-[#22b887] hover:shadow-[0_6px_20px_rgba(29,158,117,0.35)] sm:w-auto sm:px-8">
            Register now
          </button>
        </div>

        {/* Filter tabs */}
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {["All", "Pickup", "Tournament", "League", "Community"].map((f, i) => (
            <button
              key={f}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                i === 0
                  ? "border-[#1D9E75] bg-[#1D9E75]/15 text-[#5DCAA5]"
                  : "border-white/10 bg-transparent text-white/40 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Events list */}
        <div className="space-y-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="flex items-center gap-4 rounded-[18px] border border-white/7 bg-white/[0.03] px-5 py-4 transition hover:border-white/14"
            >
              {/* Date block */}
              <div className="flex w-12 shrink-0 flex-col items-center rounded-[10px] bg-white/5 py-2 text-center">
                <span className="text-[10px] uppercase tracking-widest text-white/35">
                  {event.date.split(" ")[0]}
                </span>
                <span className="font-['Barlow_Condensed'] text-[22px] font-extrabold leading-none text-white">
                  {event.date.split(" ")[1]}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <p className="truncate text-[15px] font-medium text-white">{event.title}</p>
                  <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
                <p className="truncate text-xs text-white/35">{event.time} · {event.location}</p>
              </div>

              {/* Action */}
              <div className="shrink-0 text-right">
                {event.spots === 0 ? (
                  <span className="rounded-full border border-white/10 bg-transparent px-3 py-1.5 text-xs text-white/25">
                    Full
                  </span>
                ) : event.joined ? (
                  <span className="rounded-full border border-[#1D9E75]/30 bg-[#1D9E75]/10 px-3 py-1.5 text-xs text-[#5DCAA5]">
                    Joined ✓
                  </span>
                ) : (
                  <button className="rounded-full border border-white/15 bg-transparent px-3 py-1.5 text-xs font-medium text-white/60 transition hover:border-[#1D9E75]/40 hover:bg-[#1D9E75]/10 hover:text-[#5DCAA5]">
                    Join
                  </button>
                )}
                {event.spots > 0 && !event.joined && (
                  <p className="mt-1 text-[10px] text-white/25">{event.spots} left</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 pb-12 text-center text-xs text-white/20">More events coming soon 🏀</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}