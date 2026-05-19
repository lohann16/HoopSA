"use client";
import { useState } from "react";

const PLAYERS = [
  { id: 1, name: "Kabo Dlamini", position: "PG", skill: "Pro", city: "Johannesburg", wins: 87, games: 112, rep: 98, court: "Ellis Park Courts", status: "online" },
  { id: 2, name: "Thabo Mokoena", position: "SF", skill: "Advanced", city: "Soweto", wins: 63, games: 91, rep: 82, court: "Soweto Arena", status: "online" },
  { id: 3, name: "Lerato Sithole", position: "C", skill: "Advanced", city: "Alexandra", wins: 54, games: 78, rep: 74, court: "Alexandra Community Hoops", status: "away" },
  { id: 4, name: "Mpho Nkosi", position: "SG", skill: "Intermediate", city: "Sandton", wins: 29, games: 58, rep: 51, court: "Sandton Heights Court", status: "offline" },
  { id: 5, name: "Sipho Zulu", position: "PF", skill: "Pro", city: "Diepkloof", wins: 101, games: 130, rep: 97, court: "Diepkloof Sports Hub", status: "online" },
  { id: 6, name: "Ayanda Cele", position: "PG", skill: "Intermediate", city: "Rosebank", wins: 18, games: 40, rep: 43, court: "Rosebank Rec Centre", status: "away" },
  { id: 7, name: "Nandi Dube", position: "SG", skill: "Advanced", city: "Johannesburg", wins: 72, games: 100, rep: 86, court: "Ellis Park Courts", status: "online" },
  { id: 8, name: "Bongani Mthembu", position: "SF", skill: "Pro", city: "Soweto", wins: 95, games: 118, rep: 99, court: "Soweto Arena", status: "online" },
];

const POSITIONS = ["All", "PG", "SG", "SF", "PF", "C"];
const SKILLS = ["All", "Beginner", "Intermediate", "Advanced", "Pro"];

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [posFilter, setPosFilter] = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");

  const filtered = PLAYERS.filter((p) =>
    (posFilter === "All" || p.position === posFilter) &&
    (skillFilter === "All" || p.skill === skillFilter) &&
    (search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.city.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Header */}
      <div>
        <h1>Players</h1>
        <p>Find ballers near you</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search players or cities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Position filter */}
      <div>
        <span>Position:</span>
        {POSITIONS.map((p) => (
          <button key={p} onClick={() => setPosFilter(p)}>
            {p}
          </button>
        ))}
      </div>

      {/* Skill filter */}
      <div>
        <span>Skill:</span>
        {SKILLS.map((s) => (
          <button key={s} onClick={() => setSkillFilter(s)}>
            {s}
          </button>
        ))}
      </div>

      {/* Results */}
      <p>{filtered.length} players found</p>

      {/* Grid */}
      <div>
        {filtered.map((player) => (
          <div key={player.id}>
            <h2>{player.name}</h2>
            <p>Position: {player.position}</p>
            <p>Skill: {player.skill}</p>
            <p>City: {player.city}</p>
            <p>Status: {player.status}</p>
            <p>Wins: {player.wins} / {player.games} games</p>
            <p>Win rate: {Math.round((player.wins / player.games) * 100)}%</p>
            <p>Rep: {player.rep}/100</p>
            <p>Runs at: {player.court}</p>
            <div>
              <button>Challenge</button>
              <button>Add to crew</button>
              <button>Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}