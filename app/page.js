'use client';

import Navbar from './components/Navbar';
import FloatingHearts from './components/FloatingHearts';
import Confetti from './components/Confetti';
import LoveLetter from './components/LoveLetter';
import Reasons from './components/Reasons';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Confetti />
      <FloatingHearts />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden hero-glow" id="home">
        <div className="relative z-10 max-w-3xl px-6">
          <span className="inline-block px-6 py-2 border border-white/10 rounded-full text-sm text-gold-light tracking-[3px] uppercase mb-8 bg-white/5 backdrop-blur-sm animate-fadeInDown" style={{ animationDelay: '0.3s' }}>
            🎉 Selamat Sempro! 🎉
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-gradient-hero animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            Siti Fauziah
          </h1>

          <p className="text-purple-400 text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            Telah berhasil menyelesaikan Seminar Proposal
          </p>

          <p className="text-purple-500 text-xs md:text-sm max-w-lg mx-auto mb-10 leading-relaxed italic animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            &ldquo;Hubungan Tingkat Pengetahuan Ibu dan Sikap Ibu dalam Pencegahan ISPA
            dengan Kejadian ISPA pada Balita (Usia 0-5 Tahun) di Wilayah Kerja
            Puskesmas Padasuka Kota Cimahi&rdquo;
          </p>

          <p className="font-script text-2xl md:text-3xl text-rose-300 mb-12 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            7 Mei 2026
          </p>

          <a
            href="#letter"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow-[0_4px_20px_rgba(244,63,94,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(244,63,94,0.5)] transition-all duration-400 animate-fadeInUp"
            style={{ animationDelay: '1.1s' }}
          >
            Baca Pesan Untukmu 💌
          </a>
        </div>
      </section>

      {/* ===== LOVE LETTER ===== */}
      <LoveLetter />

      {/* ===== GALLERY ===== */}
      <Gallery />

      {/* ===== REASONS ===== */}
      <Reasons />

      {/* ===== TIMELINE ===== */}
      <Timeline />

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center border-t border-white/10">
        <p className="font-script text-xl text-purple-400">
          Dibuat dengan <span className="text-rose-400 inline-block animate-heartbeat">❤️</span> untuk Siti Fauziah
        </p>
        <p className="text-purple-600 text-xs mt-2">
          Dari TK AT-Taufiq sampai selamanya 💕
        </p>
      </footer>
    </>
  );
}
