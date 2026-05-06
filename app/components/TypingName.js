'use client';

import { useEffect, useState } from 'react';

const NAME = 'Siti Fauziah';
const TYPE_SPEED = 120;

export default function TypingName() {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setText(NAME.slice(0, index));

      if (index >= NAME.length) {
        clearInterval(interval);
      }
    }, TYPE_SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex min-h-[1.1em] items-center">
      <span>{text}</span>
      <span className="ml-1 h-[0.9em] w-[3px] animate-pulse bg-rose-200" aria-hidden="true" />
    </span>
  );
}
