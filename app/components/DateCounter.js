'use client';

const START_DATE = new Date('2026-03-30T00:00:00+07:00');
const DAY_IN_MS = 1000 * 60 * 60 * 24;

export default function DateCounter() {
  const today = new Date();
  const diff = today.getTime() - START_DATE.getTime();
  const daysTogether = Math.max(0, Math.floor(diff / DAY_IN_MS) + 1);

  return (
    <div
      className="glass mx-auto mb-6 max-w-md rounded-2xl px-5 py-3 md:mb-5 animate-fadeInUp"
      style={{ animationDelay: '1s' }}
    >
      <p className="text-xs uppercase tracking-[3px] text-gold-light">
        Sejak 30 Maret 2026
      </p>
      <p className="font-display mt-1 text-xl md:text-2xl text-white" suppressHydrationWarning>
        Hari ke-{daysTogether}
      </p>
      <p className="mt-1 text-sm text-purple-400">
        dan aku masih bersyukur memilih kamu setiap hari.
      </p>
    </div>
  );
}
