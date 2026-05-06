'use client';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.35;

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    await playMusic();
  };

  useImperativeHandle(ref, () => ({
    playMusic,
  }));

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/backsound.mp3" type="audio/mpeg" />
      </audio>

      <button
        type="button"
        onClick={toggleMusic}
        className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-[0_4px_20px_rgba(244,63,94,0.2)] transition-all duration-300 hover:-translate-y-1 hover:text-rose-200 hover:shadow-[0_8px_30px_rgba(244,63,94,0.35)]"
        aria-label={playing ? 'Pause musik' : 'Putar musik'}
      >
        <span className="text-base" aria-hidden="true">
          {playing ? '||' : '♪'}
        </span>
        <span>{playing ? 'Pause Musik' : 'Putar Musik'}</span>
      </button>
    </div>
  );
});

export default MusicPlayer;
