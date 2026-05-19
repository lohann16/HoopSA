"use client";
import { useState } from "react";

const COURTS = [
  { id: 1, name: "Ellis Park Courts", area: "Johannesburg East", type: "Outdoor", lights: true, hoops: 4, surface: "Asphalt", distance: "0.8 km", rating: 4.7, active: 12 },
  { id: 2, name: "Soweto Arena", area: "Orlando West", type: "Indoor", lights: true, hoops: 6, surface: "Hardwood", distance: "3.2 km", rating: 4.9, active: 24 },
  { id: 3, name: "Sandton Heights Court", area: "Sandton", type: "Outdoor", lights: false, hoops: 2, surface: "Concrete", distance: "5.1 km", rating: 4.1, active: 3 },
  { id: 4, name: "Alexandra Community Hoops", area: "Alexandra", type: "Outdoor", lights: true, hoops: 4, surface: "Asphalt", distance: "6.4 km", rating: 4.5, active: 8 },
  { id: 5, name: "Rosebank Rec Centre", area: "Rosebank", type: "Indoor", lights: true, hoops: 2, surface: "Vinyl", distance: "7.9 km", rating: 4.3, active: 5 },
  { id: 6, name: "Diepkloof Sports Hub", area: "Diepkloof", type: "Outdoor", lights: false, hoops: 6, surface: "Asphalt", distance: "11.2 km", rating: 4.6, active: 19 },
];

export default function CourtsPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = COURTS.filter((c) =>
    (typeFilter === "All" || c.type === typeFilter) &&
    (search === "" || c.name.toLowerCase().includes(search.toLowerCase()) || c.area.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Header */}
      <div>
        <h1>Courts</h1>
        <p>Find a court near you</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search courts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div>
        {["All", "Indoor", "Outdoor"].map((t) => (
          <button key={t} onClick={() => setTypeFilter(t)}>
            {t}
          </button>
        ))}
      </div>

      {/* Results */}
      <p>{filtered.length} courts found</p>

      {/* Grid */}
      <div>
        {filtered.map((court) => (
          <div key={court.id}>
            <h2>{court.name}</h2>
            <p>{court.area} — {court.distance}</p>
            <p>Type: {court.type}</p>
            <p>Surface: {court.surface}</p>
            <p>Hoops: {court.hoops}</p>
            <p>Lights: {court.lights ? "Yes" : "No"}</p>
            <p>Rating: {court.rating}</p>
            <p>Active now: {court.active} players</p>
            <div>
              <button>Get directions</button>
              <button>Check in</button>
              <button>Start a game</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}