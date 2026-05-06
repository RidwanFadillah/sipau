'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const slidePhotos = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
  '/gallery/photo5.jpg',
  '/gallery/photo6.jpg',
  '/gallery/photo7.jpg',
  '/gallery/photo8.jpg',
];

const photos = [
  {
    id: 1,
    src: '/gallery/photo1.jpg',
    alt: 'Momen bersama',
    caption: 'Momen Indah Kita ✨',
    memory: 'Momen sederhana yang selalu terasa hangat setiap kali aku ingat lagi.',
  },
  {
    id: 2,
    src: '/gallery/photo2.jpg',
    alt: 'Kenangan berdua',
    caption: 'Selalu Ada Tawa 😄',
    memory: 'Aku suka bagian ketika hal kecil saja bisa bikin kita ketawa lama.',
  },
  {
    id: 3,
    src: '/gallery/photo3.jpg',
    alt: 'Jalan-jalan bersama',
    caption: 'Petualangan Kita 🏞️',
    memory: 'Perjalanan bareng kamu selalu punya cerita yang ingin aku simpan baik-baik.',
  },
  {
    id: 4,
    src: '/gallery/photo4.jpg',
    alt: 'Foto berdua',
    caption: 'Berdua Lebih Indah 💕',
    memory: 'Di foto ini aku selalu merasa: ternyata bersama kamu bisa sesederhana ini bahagianya.',
  },
  {
    id: 5,
    src: '/gallery/photo5.jpg',
    alt: 'Curug Madi',
    caption: 'Curug Madi Trip 🌊',
    memory: 'Hari yang tidak akan aku lupa, karena rasanya seperti awal dari banyak cerita indah.',
  },
  {
    id: 6,
    src: '/gallery/photo6.jpg',
    alt: 'Momen spesial',
    caption: 'Momen Spesial 🌟',
    memory: 'Ada rasa syukur yang diam-diam muncul setiap kali aku melihat ulang momen ini.',
  },
  {
    id: 7,
    src: '/gallery/photo7.jpg',
    alt: 'Date Murah Meriah',
    caption: 'Date Murah Meriah 🍽️',
    memory: 'Bukan tempat mahal yang bikin berkesan, tapi karena aku menjalaninya sama kamu.',
  },
  {
    id: 8,
    src: '/gallery/photo8.jpg',
    alt: 'Terima Kasih',
    caption: 'Terima Kasih Sudah Memilih Aku ❤️',
    memory: 'Dari semua hal yang pernah terjadi, dipilih oleh kamu adalah salah satu yang paling aku syukuri.',
  },
  {
    id: 9,
    alt: 'Lihat Semua',
    caption: 'Lihat Semua Kenangan Kita 🗂️',
    isLink: true,
    href: 'https://photos.app.goo.gl/pgdyZXxT7Ti8WEyi8',
  },
];

const galleryPhotos = photos.filter((photo) => !photo.isLink);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const selectedImage = selectedIndex === null ? null : galleryPhotos[selectedIndex];

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === 0 ? galleryPhotos.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === galleryPhotos.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slidePhotos.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrevious]);

  return (
    <section className="py-24 relative" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 reveal">
          <span className="mr-2 text-inherit">📸</span>
          <span className="text-gradient">Galeri Kita</span>
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          momen-momen yang tidak terlupakan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, index) => (
            photo.isLink ? (
              <a
                key={photo.id}
                href={photo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item glass rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={slidePhotos[currentSlide]}
                    alt="slideshow"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={{
                      opacity: fade ? 1 : 0,
                      transition: 'opacity 0.4s ease-in-out',
                    }}
                  />

                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    {slidePhotos.map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === currentSlide ? '16px' : '6px',
                          height: '6px',
                          backgroundColor: i === currentSlide ? 'white' : 'rgba(255,255,255,0.4)',
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-4xl">📸</span>
                    <p className="text-white font-semibold text-sm tracking-wide">Buka Google Foto →</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-script text-lg text-rose-300 group-hover:text-rose-200 transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </a>
            ) : (
              <div
                key={photo.id}
                className="gallery-item glass rounded-2xl overflow-hidden cursor-pointer group reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedIndex(galleryPhotos.findIndex((item) => item.id === photo.id))}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-script text-lg text-rose-300 group-hover:text-rose-200 transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-2xl text-white transition-all duration-300 hover:-translate-x-1 hover:text-rose-200 md:left-8"
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>

          <div
            className="w-full max-w-5xl cursor-default"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto flex max-h-[72vh] items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={900}
                sizes="100vw"
                className="max-h-[72vh] w-full object-contain"
              />
            </div>

            <div className="mx-auto mt-5 max-w-2xl text-center">
              <p className="font-script text-2xl text-rose-300">{selectedImage.caption}</p>
              <p className="mt-3 text-sm leading-relaxed text-purple-300">
                {selectedImage.memory}
              </p>
              <p className="mt-3 text-xs text-purple-500">
                {selectedIndex + 1} / {galleryPhotos.length}
              </p>
              <button
                onClick={() => setSelectedIndex(null)}
                className="mt-5 px-6 py-2 rounded-full glass text-purple-300 hover:text-white transition-colors text-sm"
              >
                Tutup ✕
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-2xl text-white transition-all duration-300 hover:translate-x-1 hover:text-rose-200 md:right-8"
            aria-label="Foto berikutnya"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
