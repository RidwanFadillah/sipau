'use client';

import { useEffect, useState } from 'react';

const TIME_ZONE = 'Asia/Jakarta';
const START_DATE = { year: 2026, month: 3, day: 30 };
const DAY_IN_MS = 1000 * 60 * 60 * 24;

function getJakartaDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === 'year').value),
    month: Number(parts.find((part) => part.type === 'month').value),
    day: Number(parts.find((part) => part.type === 'day').value),
  };
}

function toUtcDayNumber({ year, month, day }) {
  return Math.floor(Date.UTC(year, month - 1, day) / DAY_IN_MS);
}

function getDaysTogether(date = new Date()) {
  const today = getJakartaDateParts(date);
  const diffDays = toUtcDayNumber(today) - toUtcDayNumber(START_DATE);

  return Math.max(0, diffDays + 1);
}

export default function DateCounter() {
  const [daysTogether, setDaysTogether] = useState(null);

  useEffect(() => {
    const updateCounter = () => {
      setDaysTogether(getDaysTogether());
    };

    updateCounter();
    const intervalId = window.setInterval(updateCounter, 60 * 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className="glass mx-auto mb-6 max-w-md rounded-2xl px-5 py-3 md:mb-5 animate-fadeInUp"
      style={{ animationDelay: '1s' }}
    >
      <p className="text-xs uppercase tracking-[3px] text-gold-light">
        Sejak 30 Maret 2026
      </p>
      <p className="font-display mt-1 text-xl md:text-2xl text-white">
        {daysTogether === null ? 'Hari ke-...' : `Hari ke-${daysTogether}`}
      </p>
      <p className="mt-1 text-sm text-purple-400">
        dan aku masih bersyukur memilih kamu setiap hari.
      </p>
    </div>
  );
}
