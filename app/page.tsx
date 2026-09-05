"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-04-15T18:00:00");

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function calculateTimeLeft(): TimeLeft {
  const difference = Math.max(weddingDate.getTime() - Date.now(), 0);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function pad(number: number) {
  return String(number).padStart(2, "0");
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 260" fill="none" aria-hidden="true">
      <path d="M26 229C61 190 72 144 70 49c53 39 74 101 51 166M71 145c42-11 80-39 106-82M70 177c43-2 82-24 115-61" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M70 83c-19-19-32-39-35-61M74 111c-24-13-43-18-62-16M154 85c13-24 27-39 47-51M130 109c24-7 43-8 62-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="185" cy="61" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="35" cy="22" r="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = window.setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: String(timeLeft.days).padStart(3, "0") },
    { label: "Hours", value: pad(timeLeft.hours) },
    { label: "Minutes", value: pad(timeLeft.minutes) },
    { label: "Seconds", value: pad(timeLeft.seconds) },
  ];

  return (
    <main>
      <div className="paper-grain" />
      <Leaf className="leaf leaf-top" />
      <Leaf className="leaf leaf-bottom" />

      <nav className="topbar" aria-label="Main navigation">
        <span className="monogram">A <i>&</i> O</span>
        <span className="location"><span className="pin">◇</span> Tunisia</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">WE ARE GETTING MARRIED</p>
        <div className="names-wrap">
          <h1>Amine <em>&amp;</em> Oumayma</h1>
          <span className="gold-line" />
        </div>
        <p className="intro">A beautiful new chapter begins in</p>

        <div className="countdown" aria-label="Countdown to 15 April 2027">
          {units.map((unit, index) => (
            <div className="time-unit" key={unit.label}>
              <strong>{unit.value}</strong>
              <span>{unit.label}</span>
              {index < units.length - 1 && <b className="divider">:</b>}
            </div>
          ))}
        </div>

        <div className="date-card">
          <span className="date-rule" />
          <div>
            <p>THURSDAY</p>
            <h2>15 <span>APRIL</span> 2027</h2>
          </div>
          <span className="date-rule" />
        </div>
      </section>

      <footer>
        <span className="tiny-flower">✦</span>
        <p>Save the date · with love</p>
      </footer>
    </main>
  );
}
