'use client';

import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartEmojis = ['💕', '💗', '💖', '✨', '🌸', '💜', '🤍'];
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 2,
        size: 0.8 + Math.random() * 1.2,
      };

      setHearts((prev) => {
        const updated = [...prev, newHeart];
        if (updated.length > 15) {
          return updated.slice(-15);
        }
        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
