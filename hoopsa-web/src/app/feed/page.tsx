"use client";
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

export default function FeedPage() {
  return (
    <div>
      {/* Nav */}
      <nav>
        <Link href="/">HOOPSA</Link>
        <div>
          <button>🔔</button>
          <span>🔥</span>
        </div>
      </nav>

      <div>
        {/* Compose box */}
        <div>
          <span>🔥</span>
          <p>What's happening on the court?</p>
          <button>Post</button>
        </div>

        {/* Feed */}
        <div>
          {feedItems.map((item) => {
            if (item.type === "game") return <PostCard key={item.id} item={item} />;
            if (item.type === "score") return <ScoreCard key={item.id} item={item} />;
            if (item.type === "event") return <EventCard key={item.id} item={item} />;
            return null;
          })}
        </div>

        <p>You're all caught up 🏀</p>
      </div>
    </div>
  );
}

function PostCard({ item }: { item: any }) {
  return (
    <article>
      <div>
        <span>{item.avatar}</span>
        <div>
          <p>{item.user}</p>
          <p>{item.court} · {item.time}</p>
        </div>
      </div>
      <p>{item.content}</p>
      <div>
        <button>♥ {item.likes}</button>
        <button>💬 {item.comments}</button>
        <button>↗ Share</button>
      </div>
    </article>
  );
}

function ScoreCard({ item }: { item: any }) {
  return (
    <article>
      <div>
        <span>Score update</span>
        <span>{item.court} · {item.time}</span>
      </div>
      <div>
        <div>
          <p>{item.team1}</p>
          <p>{item.score1}</p>
        </div>
        <span>{item.status}</span>
        <div>
          <p>{item.team2}</p>
          <p>{item.score2}</p>
        </div>
      </div>
    </article>
  );
}

function EventCard({ item }: { item: any }) {
  return (
    <article>
      <div>
        <span>Upcoming event</span>
        <span>{item.time}</span>
      </div>
      <p>{item.title}</p>
      <p>{item.date} · {item.location}</p>
      <div>
        <span>{item.spots} spots left</span>
        <button>Join</button>
      </div>
    </article>
  );
}