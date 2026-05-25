const TEAMS = [
  { name: "Sandton Storm", city: "Sandton", record: "12-3", rank: 1, members: 9 },
  { name: "North Hawks", city: "Alexandra", record: "10-5", rank: 2, members: 11 },
  { name: "City Sparks", city: "Johannesburg", record: "9-6", rank: 3, members: 10 },
  { name: "Durban Heat", city: "Durban", record: "8-7", rank: 4, members: 12 },
  { name: "Eastside Rims", city: "Eastside", record: "7-8", rank: 5, members: 8 },
  { name: "Valley Vipers", city: "Rosebank", record: "6-9", rank: 6, members: 10 },
];

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-8 lg:px-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs uppercase tracking-[0.12em] text-[#5DCAA5]">Crew building</p>
          <h1 className="font-['Barlow_Condensed'] text-[42px] font-extrabold leading-none tracking-tight text-white lg:text-[52px]">Teams</h1>
        </div>
        <button className="rounded-[14px] bg-[#1D9E75] px-5 py-[11px] text-[14px] font-semibold text-white transition hover:bg-[#22b887]">
          + Create team
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {TEAMS.map((team) => (
          <div key={team.name} className="rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-5 transition hover:border-[#1D9E75]/25 hover:bg-[#1D9E75]/[0.03]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[13px] uppercase tracking-[0.18em] text-[#5DCAA5]">#{team.rank}</p>
                <h2 className="font-['Barlow_Condensed'] text-[24px] font-extrabold text-white">{team.name}</h2>
              </div>
              <span className="rounded-full bg-white/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">{team.city}</span>
            </div>
            <div className="mb-4 flex items-center gap-4 text-sm text-white/50">
              <span>{team.record} record</span>
              <span>•</span>
              <span>{team.members} members</span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-[12px] bg-[#1D9E75] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#22b887]">View roster</button>
              <button className="rounded-[12px] border border-white/10 bg-transparent px-4 py-2 text-sm text-white/50 transition hover:border-[#1D9E75]/40 hover:text-white">Matchup</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[24px] border border-white/[0.07] bg-white/[0.03] p-6 text-white/70">
        <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[#5DCAA5]">Team highlights</p>
        <p className="max-w-2xl text-sm leading-7 text-white/60">
          Build your squad with Hustle-ready crews, compare nearby teams, and join the courts that fit your style. Teams on HoopSA come ready with practice plans, matchups, and social momentum.
        </p>
      </div>
    </div>
  );
}
