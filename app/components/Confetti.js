'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Confetti() {
  const [confetti, setConfetti] = useState([]);
  const [show, setShow] = useState(true);

  const createConfetti = useCallback(() => {
    const colors = [
      '#fb7185', '#f43f5e', '#c4b5fd', '#ddd6fe', 
      '#d4a574', '#e8c9a0', '#fda4af', '#a78bfa',
      '#fecdd3', '#fff1f2'
    ];
    
    const pieces = [];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
        size: 6 + Math.random() * 8,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(pieces);
  }, []);

  useEffect(() => {
    const startTimer = setTimeout(createConfetti, 0);
    const hideTimer = setTimeout(() => setShow(false), 5000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
    };
  }, [createConfetti]);

  if (!show) return null;

  return (
    <div className="confetti-container">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
