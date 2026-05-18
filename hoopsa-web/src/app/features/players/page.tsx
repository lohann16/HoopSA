import { useState } from "react";

const PLAYERS = [
  { id: 1, name: "Kabo Dlamini", position: "PG", skill: "Pro", city: "Johannesburg", wins: 87, games: 112, avatar: "KD", rep: 98, court: "Ellis Park Courts", status: "online", badges: ["🏆", "🎯"] },
  { id: 2, name: "Thabo Mokoena", position: "SF", skill: "Advanced", city: "Soweto", wins: 63, games: 91, avatar: "TM", rep: 82, court: "Soweto Arena", status: "online", badges: ["🔥"] },
  { id: 3, name: "Lerato Sithole", position: "C", skill: "Advanced", city: "Alexandra", wins: 54, games: 78, avatar: "LS", rep: 74, court: "Alexandra Community Hoops", status: "away", badges: ["💪"] },
  { id: 4, name: "Mpho Nkosi", position: "SG", skill: "Intermediate", city: "Sandton", wins: 29, games: 58, avatar: "MN", rep: 51, court: "Sandton Heights Court", status: "offline", badges: [] },
  { id: 5, name: "Sipho Zulu", position: "PF", skill: "Pro", city: "Diepkloof", wins: 101, games: 130, avatar: "SZ", rep: 97, court: "Diepkloof Sports Hub", status: "online", badges: ["🏆", "👑", "🔥"] },
  { id: 6, name: "Ayanda Cele", position: "PG", skill: "Intermediate", city: "Rosebank", wins: 18, games: 40, avatar: "AC", rep: 43, court: "Rosebank Rec Centre", status: "away", badges: [] },
  { id: 7, name: "Nandi Dube", position: "SG", skill: "Advanced", city: "Johannesburg", wins: 72, games: 100, avatar: "ND", rep: 86, court: "Ellis Park Courts", status: "online", badges: ["🎯", "🔥"] },
  { id: 8, name: "Bongani Mthembu", position: "SF", skill: "Pro", city: "Soweto", wins: 95, games: 118, avatar: "BM", rep: 99, court: "Soweto Arena", status: "online", badges: ["🏆", "👑"] },
];

const POSITIONS = ["All", "PG", "SG", "SF", "PF", "C"];
const SKILLS    = ["All", "Beginner", "Intermediate", "Advanced", "Pro"];

const STATUS_COLOR = { online: "#1D9E75", away: "#f5a623", offline: "rgba(255,255,255,0.2)" };
const STATUS_LABEL = { online: "Online", away: "Away", offline: "Offline" };
const SKILL_COLOR  = { Pro: "#1D9E75", Advanced: "#5DCAA5", Intermediate: "#f5a623", Beginner: "rgba(255,255,255,0.35)" };

function FilterPill({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{ border: active ? "1px solid rgba(29,158,117,0.55)" : "1px solid rgba(255,255,255,0.09)", background: active ? "rgba(29,158,117,0.15)" : "rgba(255,255,255,0.04)", color: active ? "#5DCAA5" : "rgba(255,255,255,0.45)", borderRadius: 99, padding: "7px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.18s", whiteSpace: "nowrap" }}>
      {children}
    </button>
  );
}

function RepBar({ value }) {
  return (
    <div style={{ height: 3, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden", marginTop: 5 }}>
      <div style={{ height: "100%", width: `${value}%`, borderRadius: 99, background: "linear-gradient(90deg,#1D9E75,#5DCAA5)", transition: "width 0.9s ease" }} />
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

export default function Players() {
  const [posFilter,   setPosFilter]   = useState("All");
  const [skillFilter, setSkillFilter] = useState("All");
  const [search,      setSearch]      = useState("");
  const [selected,    setSelected]    = useState(null);

  const onlineCount = PLAYERS.filter(p => p.status === "online").length;

  const filtered = PLAYERS.filter(p =>
    (posFilter   === "All" || p.position === posFilter) &&
    (skillFilter === "All" || p.skill    === skillFilter) &&
    (search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.city.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#0e1210", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeUp  { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.4} }
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
            <button key={n} style={{ background: n === "Players" ? "rgba(29,158,117,0.12)" : "none", border: "none", color: n === "Players" ? "#5DCAA5" : "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 500, cursor: "pointer", padding: "7px 12px", fontFamily: "'DM Sans'", borderRadius: 9, transition: "color 0.2s" }}>
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
          <div style={{ position: "absolute", right: 52, top: "50%", transform: "translateY(-50%)", fontSize: 110, opacity: 0.06, userSelect: "none" }}>🏀</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "'Barlow Condensed'", fontSize: 11, letterSpacing: "0.16em", color: "#5DCAA5", marginBottom: 10, textTransform: "uppercase" }}>Active community</p>
            <h1 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: "clamp(40px,5.5vw,66px)", lineHeight: 0.93, marginBottom: 14 }}>
              Meet the<br /><span style={{ color: "#1D9E75" }}>ballers.</span>
            </h1>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", maxWidth: 360, lineHeight: 1.7 }}>
              Browse players in your area. Find your squad, challenge a rival, or build your crew from scratch.
            </p>
            <div style={{ display: "flex", gap: 32, marginTop: 28 }}>
              {[[`${onlineCount} online`, "Right now"], ["All levels", "Beg → Pro"], ["6 cities", "Represented"]].map(([v, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 28, color: "#1D9E75", lineHeight: 1 }}>{v}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", marginTop: 3 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH + FILTERS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16, alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 240px", maxWidth: 340 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.3, fontSize: 15 }}>🔍</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search players or cities…"
              style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "11px 14px 11px 40px", color: "#fff", fontSize: 14, fontFamily: "'DM Sans'" }}
            />
          </div>
        </div>

        {/* POSITION FILTERS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: 4 }}>Position</span>
          {POSITIONS.map(p => <FilterPill key={p} active={posFilter === p} onClick={() => setPosFilter(p)}>{p}</FilterPill>)}
        </div>

        {/* SKILL FILTERS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28, alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.08em", marginRight: 4 }}>Skill</span>
          {SKILLS.map(s => <FilterPill key={s} active={skillFilter === s} onClick={() => setSkillFilter(s)}>{s}</FilterPill>)}
        </div>

        {/* COUNT */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", marginBottom: 22, letterSpacing: "0.02em" }}>
          {filtered.length} player{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 16 }}>
          {filtered.map((p, i) => (
            <PlayerCard key={p.id} player={p} i={i} selected={selected?.id === p.id} onClick={() => setSelected(selected?.id === p.id ? null : p)} />
          ))}
        </div>
      </div>

      {/* DETAIL DRAWER */}
      {selected && <PlayerDetail player={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function PlayerCard({ player: p, i, selected, onClick }) {
  const winPct = Math.round((p.wins / p.games) * 100);
  return (
    <div
      onClick={onClick}
      style={{ borderRadius: 18, border: selected ? "1px solid rgba(29,158,117,0.6)" : "1px solid rgba(255,255,255,0.07)", background: selected ? "rgba(29,158,117,0.07)" : "rgba(255,255,255,0.03)", padding: 24, cursor: "pointer", transition: "all 0.22s", animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}
      onMouseOver={e => { if (!selected) { e.currentTarget.style.border = "1px solid rgba(29,158,117,0.3)"; e.currentTarget.style.background = "rgba(29,158,117,0.04)"; } }}
      onMouseOut={e => { if (!selected) { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; } }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        {/* Avatar */}
        <div style={{ width: 52, height: 52, borderRadius: 15, background: "linear-gradient(135deg,rgba(29,158,117,0.35),rgba(29,158,117,0.08))", border: "1px solid rgba(29,158,117,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 19, color: "#5DCAA5", flexShrink: 0, position: "relative" }}>
          {p.avatar}
          <span style={{ position: "absolute", bottom: -2, right: -2, width: 11, height: 11, borderRadius: "50%", background: STATUS_COLOR[p.status], border: "2px solid #0e1210" }} title={STATUS_LABEL[p.status]} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3, flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 21, color: "#fff", lineHeight: 1 }}>{p.name}</h3>
            {p.badges.map(b => <span key={b} style={{ fontSize: 13 }}>{b}</span>)}
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.32)" }}>📍 {p.city}</p>
        </div>

        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 22, color: "#fff", lineHeight: 1 }}>{p.position}</p>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: SKILL_COLOR[p.skill], background: `${SKILL_COLOR[p.skill]}22`, borderRadius: 6, padding: "2px 7px", display: "inline-block", marginTop: 4 }}>{p.skill}</span>
        </div>
      </div>

      {/* Stat strip */}
      <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 16 }}>
        {[["Wins", p.wins], ["Games", p.games], ["Win%", `${winPct}%`]].map(([l, v], idx) => (
          <div key={l} style={{ flex: 1, padding: "11px 0", textAlign: "center", borderRight: idx < 2 ? "1px solid rgba(255,255,255,0.07)" : "none", background: "rgba(255,255,255,0.02)" }}>
            <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 21, color: l === "Win%" && winPct >= 60 ? "#1D9E75" : "#fff", lineHeight: 1 }}>{v}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", marginTop: 3 }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Rep */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Rep score</p>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#5DCAA5" }}>{p.rep}/100</p>
        </div>
        <RepBar value={p.rep} />
      </div>

      {/* Court */}
      <p style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>🏀 Runs at <span style={{ color: "rgba(255,255,255,0.45)" }}>{p.court}</span></p>

      <p style={{ marginTop: 10, fontSize: 12, color: selected ? "#5DCAA5" : "rgba(255,255,255,0.2)", textAlign: "right" }}>
        {selected ? "▲ Close" : "▼ View profile"}
      </p>
    </div>
  );
}

function PlayerDetail({ player: p, onClose }) {
  const winPct = Math.round((p.wins / p.games) * 100);
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,15,13,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(29,158,117,0.25)", padding: "30px 28px 40px", animation: "fadeIn 0.3s ease both" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: 17, background: "linear-gradient(135deg,rgba(29,158,117,0.45),rgba(29,158,117,0.08))", border: "1px solid rgba(29,158,117,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 24, color: "#5DCAA5", flexShrink: 0, position: "relative" }}>
              {p.avatar}
              <span style={{ position: "absolute", bottom: -2, right: -2, width: 13, height: 13, borderRadius: "50%", background: STATUS_COLOR[p.status], border: "2px solid #0a0f0d" }} />
            </div>
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                <p style={{ fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", color: "#5DCAA5" }}>Player profile</p>
                <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: SKILL_COLOR[p.skill], background: `${SKILL_COLOR[p.skill]}22`, borderRadius: 7, padding: "2px 9px" }}>{p.skill}</span>
                <span style={{ fontSize: 11, color: STATUS_COLOR[p.status], background: `${STATUS_COLOR[p.status]}22`, borderRadius: 7, padding: "2px 9px" }}>{STATUS_LABEL[p.status]}</span>
              </div>
              <h2 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: 32, color: "#fff", lineHeight: 1 }}>
                {p.name} <span style={{ color: "rgba(255,255,255,0.3)" }}>#{p.position}</span>
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>📍 {p.city} · Runs at {p.court}</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "rgba(255,255,255,0.5)", fontSize: 20, width: 38, height: 38, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>×</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginBottom: 24 }}>
          {[["Wins", p.wins, false], ["Games", p.games, false], ["Win rate", `${winPct}%`, true], ["Rep score", `${p.rep}/100`, true]].map(([l, v, green]) => (
            <div key={l}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>{l}</p>
              <p style={{ fontFamily: "'Barlow Condensed'", fontWeight: 700, fontSize: 26, color: green ? "#1D9E75" : "#fff" }}>{v}</p>
            </div>
          ))}
          {p.badges.length > 0 && (
            <div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 }}>Badges</p>
              <p style={{ fontSize: 24 }}>{p.badges.join(" ")}</p>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <ActionBtn primary>Challenge to a game</ActionBtn>
          <ActionBtn>Add to crew</ActionBtn>
          <ActionBtn>Message</ActionBtn>
        </div>
      </div>
    </div>
  );
}

function RepBar({ value }) {
  return (
    <div style={{ height: 3, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden", marginTop: 5 }}>
      <div style={{ height: "100%", width: `${value}%`, borderRadius: 99, background: "linear-gradient(90deg,#1D9E75,#5DCAA5)", transition: "width 0.9s ease" }} />
    </div>
  );
}