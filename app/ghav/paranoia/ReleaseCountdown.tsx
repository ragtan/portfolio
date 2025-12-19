'use client';

import { useEffect, useState } from 'react';

const RELEASE_DATE = new Date('2026-05-01T00:00:00'); // change year if needed

export default function ReleaseCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = RELEASE_DATE.getTime() - now;

    if (diff <= 0) {
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-[#ac3b3b] uppercase tracking-widest text-sm">
        OUT NOW
      </div>
    );
  }

  return (
    <div className="flex gap-6 text-center text-[#eaeaea]">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label}>
          <div className="text-2xl md:text-3xl font-bold">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-widest text-[#9a9a9a]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
