export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-slate-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-10 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                Live hoops action, all in one place
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-5xl">
                Find your next pickup game, follow live scores, and discover the best courts nearby.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-400">
                HoopSA brings players, events, teams, and courts together so you can stay connected to the community and always know what’s happening on the court.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#live-scores" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800">
                  See Live Scores
                </a>
                <a href="#court-discovery" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500">
                  Explore Courts
                </a>
              </div>
            </div>
            <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-lg sm:p-8">
              <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Today’s Top Match</p>
                <h2 className="mt-4 text-2xl font-semibold">Northside Knights vs Downtown Ballers</h2>
                <p className="mt-2 text-sm text-zinc-300">3:15 PM · Court 7 · 8 players remaining</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-zinc-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Win Streak</p>
                  <p className="mt-3 text-3xl font-semibold">7</p>
                </div>
                <div className="rounded-3xl bg-zinc-900/80 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Courts Active</p>
                  <p className="mt-3 text-3xl font-semibold">12</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Scores Preview */}
        <section id="live-scores" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">Live Scores Preview</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-zinc-50">Real-time game updates</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
              Follow current scores from pickup games, local leagues, and weekend tournaments across your city.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Court 1", teams: "Eastside Rims vs Turf Titans", score: "48 - 42", status: "Q4 · 6:12" },
              { title: "Court 3", teams: "City Hoops vs Jersey Jumpers", score: "61 - 61", status: "OT · 1:24" },
              { title: "Court 5", teams: "Skyline Crew vs River Shooters", score: "29 - 37", status: "Halftime" },
              { title: "Court 8", teams: "Westside Wolves vs Harbor Heat", score: "82 - 77", status: "Final" },
            ].map((item) => (
              <article key={item.title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">{item.title}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-zinc-100">{item.teams}</h3>
                <p className="mt-3 text-4xl font-semibold text-emerald-600 dark:text-emerald-400">{item.score}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">{item.status}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Trending Players */}
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-400">Trending Players</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-zinc-50">Players making moves this week</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Mia Carter", description: "27 PPG · 9 AST · 6 REB", badge: "Hot streak" },
              { name: "Jalen Cruz", description: "18 PPG · 4 STL · 3 BLK", badge: "Defense leader" },
              { name: "Trey Morgan", description: "15 PPG · 12 REB · 5 BLK", badge: "Double-double" },
            ].map((player) => (
              <div key={player.name} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-950 dark:text-zinc-50">{player.name}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">{player.description}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">{player.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-400">Upcoming Events</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-zinc-50">Mark your calendar</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { title: "Sunday Park Jam", date: "May 18 · 10:00 AM", location: "Riverside Courts" },
              { title: "Alley-Oop Tournament", date: "May 22 · 5:30 PM", location: "Central Gym" },
              { title: "Citywide Pickup", date: "May 25 · 8:00 PM", location: "North Community Center" },
            ].map((event) => (
              <article key={event.title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">{event.title}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400">{event.date}</p>
                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-zinc-200">{event.location}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Court Discovery */}
        <section id="court-discovery" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-400">Court Discovery</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-zinc-50">Find courts near you</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { name: "Downtown Court", distance: "0.8 mi", features: "Indoor, lights, 3 hoops" },
              { name: "Harbor Park", distance: "1.6 mi", features: "Outdoor, full court, bleachers" },
              { name: "Westview Arena", distance: "2.3 mi", features: "Covered court, trainers, night sessions" },
            ].map((court) => (
              <div key={court.name} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">{court.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">{court.features}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-zinc-800 dark:text-zinc-200">{court.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Highlights */}
        <section className="rounded-[32px] border border-zinc-200 bg-white/90 p-8 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-400">Community Highlights</p>
              <h2 className="text-3xl font-semibold text-slate-950 dark:text-zinc-50">See how the local basketball community is thriving.</h2>
              <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-zinc-400">
                From new player connections to community tournaments and charity pick-up sessions, HoopSA helps every player stay involved and inspired.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-slate-100 p-6 dark:bg-zinc-900">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">New Crews</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-zinc-50">42+</p>
              </div>
              <div className="rounded-[28px] bg-slate-100 p-6 dark:bg-zinc-900">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-zinc-400">Matches Shared</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-zinc-50">1.2K</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-[32px] bg-slate-950 px-8 py-10 text-white shadow-xl sm:px-12">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Ready to play?</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Jump into your next game and keep the whole crew in the loop.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Discover courts, join games, and follow live scores so every pickup feels organized and exciting.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#court-discovery" className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Explore Courts
              </a>
              <a href="#upcoming-events" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15">
                View Events
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
