import { useState } from "react";

const COURTS = [
  { id: 1, name: "Ellis Park Courts", area: "Johannesburg East", type: "Outdoor", lights: true, hoops: 4, surface: "Asphalt", distance: "0.8 km", rating: 4.7, reviews: 83, active: 12, tags: ["Full court", "Floodlights", "Parking"] },
  { id: 2, name: "Soweto Arena", area: "Orlando West", type: "Indoor", lights: true, hoops: 6, surface: "Hardwood", distance: "3.2 km", rating: 4.9, reviews: 142, active: 24, tags: ["Pro floor", "Bleachers", "AC"] },
  { id: 3, name: "Sandton Heights Court", area: "Sandton", type: "Outdoor", lights: false, hoops: 2, surface: "Concrete", distance: "5.1 km", rating: 4.1, reviews: 31, active: 3, tags: ["Half court", "Street ball"] },
  { id: 4, name: "Alexandra Community Hoops", area: "Alexandra", type: "Outdoor", lights: true, hoops: 4, surface: "Asphalt", distance: "6.4 km", rating: 4.5, reviews: 67, active: 8, tags: ["Full court", "Floodlights"] },
  { id: 5, name: "Rosebank Rec Centre", area: "Rosebank", type: "Indoor", lights: true, hoops: 2, surface: "Vinyl", distance: "7.9 km", rating: 4.3, reviews: 44, active: 5, tags: ["Half court", "AC", "Gym access"] },
  { id: 6, name: "Diepkloof Sports Hub", area: "Diepkloof", type: "Outdoor", lights: false, hoops: 6, surface: "Asphalt", distance: "11.2 km", rating: 4.6, reviews: 109, active: 19, tags: ["Full court", "Tournaments"] },
];

const COURT_TYPES = ["All", "Indoor", "Outdoor"];

function Stars({ n }) {
  return <span style={{ color: "#f5a623", fontSize: 12 }}>{"★".repeat(Math.floor(n))}{"☆".repeat(5 - Math.floor(n))}</span>;
}

function FilterPill({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{ border: active ? "1px solid rgba(29,158,117,0.55)" : "1px solid rgba(255,255,255,0.09)", background: active ? "rgba(29,158,117,0.15)" : "rgba(255,255,255,0.04)", color: active ? "#5DCAA5" : "rgba(255,255,255,0.45)", borderRadius: 99, padding: "7px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.18s", whiteSpace: "nowrap" }}>
      {children}
    </button>
  );
}

function ActionBtn({ children, primary }) {
  return (
    <button
      style={{ border: primary ? "none" : "1px solid rgba(255,255,255,0.1)", background: primary ? "#1D9E75" : "rgba(255,255,255,0.05)", color: primary ? "#fff" : "rgba(255,255,255,0.6)", borderRadius: 12, padding: "10px 18px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.18s" }}
      onMouseOver={e => { e.currentTarget.style.transform = "translateY(-1px)"; if (primary) e.currentTarget.style.background = "#22b887"; }}
      onMouseOut={e => { e.currentTarget.style.transform = ""; if (primary) e.currentTarget.style.background = "#1D9E75"; }}>
      {children}
    </button>
  );
}

export default function Courts() {
  const [courtType, setCourtType] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = COURTS.filter(c =>
    (courtType === "All" || c.type === courtType) &&
    (search === "" || c.name.toLowerCase().includes(search.toLowerCase()) || c.area.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#0e1210", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        * { box-sizing:border-box; margin:0; padding:0; }
        input::placeholder { color:rgba(255,255,255,0.22); }
        input:focus { outline:none; }
        ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-thumb { background:rgba(29,158,117,0.3); border-radius:99px; }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(14,18,16,0.95)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50, padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#1D9E75", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 24, letterSpacing: "0.05em" }}>HOOPSA</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["Courts", "Players", "Games", "Profile"].map(n => (
            <button key={n} style={{ background: n === "Courts" ? "rgba(29,158,117,0.12)" : "none", border: "none", color: n === "Courts" ? "#5DCAA5" : "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 500, cursor: "pointer", padding: "7px 12px", fontFamily: "'DM Sans'", borderRadius: 9, transition: "color 0.2s" }}>
              {n}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "36px 24px" }}>

        {/* HERO */}
        <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", marginBottom: 36, padding: "40px 44px", background: "linear-gradient(135deg,#0a1a14 0%,#0f2018 55%,#0a1a14 100%)", border: "1px solid rgba(29,158,117,0.18)", animation: "fadeUp 0.45s ease both" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 110% at 90% 50%,rgba(29,158,117,0.2) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 40px)" }} />
          <div style={{ position: "absolute", right: 52, top: "50%", transform: "translateY(-50%)", fontSize: 110, opacity: 0.06, userSelect: "none" }}>📍</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "'Barlow Condensed'", fontSize: 11, letterSpacing: "0.16em", color: "#5DCAA5", marginBottom: 10, textTransform: "uppercase" }}>180+ Courts Mapped</p>
            <h1 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: "clamp(40px,5.5vw,66px)", lineHeight: 0.93, marginBottom: 14 }}>
              Find your<br /><span style={{ color: "#1D9E75" }}>next court.</span>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 360, lineHeight: 1.7 }}>
              Every court in Johannesburg, rated and mapped in real time. Filter by type, lights, and surface.
            </p>
            <div style={{ display: "flex", gap: 32, marginTop: 28 }}>
              {[["180+", "Courts"], ["6", "Areas covered"], ["24/7", "Live status"]].map(([v, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 28, color: "#1D9E75", lineHeight: 1 }}>{v}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", marginTop: 3 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH + FILTERS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28, alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 240px", maxWidth: 340 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.3, fontSize: 15 }}>🔍</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search courts or areas…"
              style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "11px 14px 11px 40px", color: "#fff", fontSize: 14, fontFamily: "'DM Sans'" }}
            />
          </div>
          {COURT_TYPES.map(t => (
            <FilterPill key={t} active={courtType === t} onClick={() => setCourtType(t)}>
              {t === "All" ? "All types" : t}
            </FilterPill>
          ))}
        </div>

        {/* COUNT */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 22, letterSpacing: "0.02em" }}>
          {filtered.length} court{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: 16 }}>
          {filtered.map((c, i) => (
            <CourtCard key={c.id} court={c} i={i} selected={selected?.id === c.id} onClick={() => setSelected(selected?.id === c.id ? null : c)} />
          ))}
        </div>
      </div>

      {/* DETAIL DRAWER */}
      {selected && <CourtDetail court={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function CourtCard({ court: c, i, selected, onClick }) {
  const activeColor = c.active > 10 ? "#1D9E75" : c.active > 4 ? "#f5a623" : "rgba(255,255,255,0.3)";
  return (
    <div
      onClick={onClick}
      style={{ borderRadius: 18, border: selected ? "1px solid rgba(29,158,117,0.6)" : "1px solid rgba(255,255,255,0.07)", background: selected ? "rgba(29,158,117,0.07)" : "rgba(255,255,255,0.03)", padding: 24, cursor: "pointer", transition: "all 0.22s", animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}
      onMouseOver={e => { if (!selected) { e.currentTarget.style.border = "1px solid rgba(29,158,117,0.3)"; e.currentTarget.style.background = "rgba(29,158,117,0.04)"; } }}
      onMouseOut={e => { if (!selected) { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; } }}>

      {/* Top */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: c.type === "Indoor" ? "#5DCAA5" : "rgba(255,255,255,0.45)", background: c.type === "Indoor" ? "rgba(93,202,165,0.12)" : "rgba(255,255,255,0.07)", borderRadius: 7, padding: "3px 9px" }}>{c.type}</span>
            {c.lights && <span style={{ fontSize: 11, color: "#f5a623", background: "rgba(245,166,35,0.1)", borderRadius: 7, padding: "3px 9px", fontWeight: 600 }}>💡 Lights</span>}
          </div>
          <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 24, lineHeight: 1, color: "#fff", marginBottom: 5 }}>{c.name}</h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>📍 {c.area} · {c.distance}</p>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 14 }}>
          <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 28, color: "#fff", lineHeight: 1 }}>{c.rating}</p>
          <Stars n={c.rating} />
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 3 }}>{c.reviews} reviews</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 20, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[["Hoops", c.hoops], ["Surface", c.surface]].map(([l, v]) => (
          <div key={l}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>{l}</p>
            <p style={{ fontSize: 18, fontFamily: "'Barlow Condensed'", fontWeight: 800, color: "#fff" }}>{v}</p>
          </div>
        ))}
        <div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>Active now</p>
          <p style={{ fontSize: 18, fontFamily: "'Barlow Condensed'", fontWeight: 800, color: activeColor }}>{c.active} players</p>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {c.tags.map(t => (
          <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.05)", borderRadius: 7, padding: "3px 10px", border: "1px solid rgba(255,255,255,0.07)" }}>{t}</span>
        ))}
      </div>

      <p style={{ marginTop: 14, fontSize: 12, color: selected ? "#5DCAA5" : "rgba(255,255,255,0.2)", textAlign: "right" }}>
        {selected ? "▲ Less info" : "▼ More info"}
      </p>
    </div>
  );
}

function CourtDetail({ court: c, onClose }) {
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,15,13,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(29,158,117,0.25)", padding: "30px 28px 40px", animation: "fadeIn 0.3s ease both" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", color: "#5DCAA5", marginBottom: 7 }}>Court detail</p>
            <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 36, color: "#fff", lineHeight: 1 }}>{c.name}</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginTop: 5 }}>📍 {c.area} · {c.distance} away</p>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "rgba(255,255,255,0.5)", fontSize: 20, width: 38, height: 38, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>×</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginBottom: 24 }}>
          {[["Type", c.type], ["Surface", c.surface], ["Hoops", c.hoops], ["Floodlights", c.lights ? "Yes ✓" : "No"], ["Rating", `${c.rating} ★`], ["Reviews", c.reviews], ["Active now", `${c.active} players`]].map(([l, v]) => (
            <div key={l}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>{l}</p>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 22, color: l === "Active now" ? "#1D9E75" : "#fff" }}>{v}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <ActionBtn primary>Get directions</ActionBtn>
          <ActionBtn>Check in</ActionBtn>
          <ActionBtn>Start a game</ActionBtn>
        </div>
      </div>
    </div>
  );
}

function ActionBtn({ children, primary }) {
  return (
    <button
      style={{ border: primary ? "none" : "1px solid rgba(255,255,255,0.1)", background: primary ? "#1D9E75" : "rgba(255,255,255,0.05)", color: primary ? "#fff" : "rgba(255,255,255,0.6)", borderRadius: 12, padding: "11px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.18s" }}
      onMouseOver={e => { e.currentTarget.style.transform = "translateY(-1px)"; if (primary) e.currentTarget.style.background = "#22b887"; }}
      onMouseOut={e => { e.currentTarget.style.transform = ""; if (primary) e.currentTarget.style.background = "#1D9E75"; }}>
      {children}
    </button>
  );
}