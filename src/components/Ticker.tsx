import { useState } from "react";
import { tickerWords } from "@/data/site";

function Bean() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden className="mx-8 shrink-0 text-caramel">
      <ellipse cx="12" cy="12" rx="7" ry="10" fill="currentColor" transform="rotate(30 12 12)" />
      <path d="M8 5c4 4 4 10 8 14" stroke="var(--espresso)" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function Ticker() {
  const [paused, setPaused] = useState(false);
  const group = (k: string) => (
    <div className="flex shrink-0 items-center" aria-hidden={k === "b"} key={k}>
      {tickerWords.map((w) => (
        <span key={w} className="flex items-center">
          <span className="h3 whitespace-nowrap">{w}</span>
          <Bean />
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker relative overflow-hidden border-y border-espresso/20 bg-ivory py-5 text-espresso" data-paused={paused}>
      <div className="ticker-track">{[group("a"), group("b")]}</div>
      <button
        onClick={() => setPaused((p) => !p)}
        className="btn btn-espresso absolute right-3 top-1/2 -translate-y-1/2 !px-3 !py-2 text-sm"
        aria-label={paused ? "Play moving text" : "Pause moving text"}
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
