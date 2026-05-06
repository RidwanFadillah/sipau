'use client';

import { useState } from 'react';

export default function LoveLetter({ onOpenLetter }) {
  const [letterOpen, setLetterOpen] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleOpenLetter = () => {
    onOpenLetter?.();
    setLetterOpen(true);
  };

  return (
    <section className="py-24 relative" id="letter">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 reveal">
          <span className="mr-2 text-inherit">💌</span>
          <span className="text-gradient">Surat Untukmu</span>
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          dari hati yang paling dalam
        </p>

        {!letterOpen ? (
          <div className="reveal mx-auto max-w-xl">
            <button
              type="button"
              onClick={handleOpenLetter}
              className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-rose-200/15 to-purple-900/20 p-8 shadow-[0_24px_70px_rgba(244,63,94,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(244,63,94,0.3)]"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b from-rose-300/25 to-rose-500/5 transition-transform duration-500 group-hover:-translate-y-2" />
              <span className="absolute inset-x-8 top-8 h-px bg-white/20" />
              <span className="relative z-10 flex min-h-56 flex-col items-center justify-center rounded-2xl border border-white/10 bg-dark/25 px-6 py-10">
                <span className="mb-5 text-6xl transition-transform duration-500 group-hover:scale-110">💌</span>
                <span className="font-script text-3xl text-rose-200">Buka Surat Ini</span>
                <span className="mt-3 text-sm leading-relaxed text-purple-300">
                  Ada pesan kecil yang aku simpan khusus untuk kamu.
                </span>
              </span>
            </button>
          </div>
        ) : (
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden letter-top-border animate-fadeInUp">
            <div className="text-center text-3xl mb-6 animate-heartbeat">💗</div>

            <p className="font-script text-2xl text-rose-300 mb-6">
              Untuk Siti Fauziah tersayang,
            </p>

            <div className="space-y-5 text-purple-200 leading-relaxed">
              <p>
                Alhamdulillah, akhirnya kamu berhasil melewati seminar proposal! 🎉
                Aku tahu perjalananmu sampai di titik ini tidak mudah. Ada malam-malam panjang yang kamu
                lewati untuk menyelesaikan proposal, ada waktu-waktu di mana kamu merasa lelah, bingung,
                dan mungkin ingin menyerah. Tapi kamu tetap di sini, tetap berjuang, dan tetap kuat.
              </p>
              <p>
                Itu yang membuatku sangat bangga padamu. Penelitianmu tentang pencegahan ISPA pada
                balita itu sangat mulia, kamu bukan hanya mengejar gelar, tapi juga berkontribusi
                untuk kesehatan anak-anak di wilayah kerja Puskesmas Padasuka.
              </p>
              <p>
                Seminar proposal ini baru langkah awal. Masih ada perjalanan panjang ke depan, tapi aku
                yakin kamu bisa melewatinya. Karena aku sudah lihat sendiri betapa kuatnya kamu selama ini.
                Dan apapun yang terjadi, aku akan selalu ada di sampingmu.
              </p>
              <p>
                Bukan cuma saat kamu berhasil seperti hari ini, tapi juga saat kamu lelah, ragu, atau
                merasa semuanya berat. Aku ingin tetap ada, mendengarkanmu, menemanimu, dan mengingatkan
                kamu bahwa kamu tidak pernah sendirian.
              </p>
              <p>
                Selamat ya, sayang! Kamu luar biasa! 💪✨
              </p>
            </div>

            <p className="font-script text-xl text-gold text-right mt-8">
              Dengan sepenuh hati<br />
              Your Boyfriend <br />
              Ridwan❤️
            </p>

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowSurprise(true)}
                className="inline-flex items-center justify-center rounded-full border border-rose-300/30 px-6 py-3 text-sm font-medium text-rose-200 transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/60 hover:text-white hover:shadow-[0_8px_30px_rgba(244,63,94,0.25)]"
              >
                Klik kalau kamu sudah sampai sini
              </button>

              {showSurprise && (
                <div className="mt-6 rounded-2xl border border-gold/20 bg-white/5 p-6 text-left">
                  <p className="font-script text-2xl text-gold mb-3">
                    Satu hal lagi...
                  </p>
                  <p className="text-purple-200 leading-relaxed">
                    Terima kasih sudah hadir di hidupku dan memilih aku untuk menemanimu.
                    Aku tidak tahu semua hal yang akan terjadi nanti, tapi aku tahu satu hal:
                    aku ingin terus belajar mencintaimu dengan cara yang membuatmu merasa aman,
                    dihargai, dan tidak sendirian.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
