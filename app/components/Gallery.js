'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Foto-foto yang akan dijadikan slideshow di card ke-9
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

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out dulu
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slidePhotos.length);
        // Fade in
        setFade(true);
      }, 400); // durasi fade out
    }, 2500); // ganti foto tiap 2.5 detik

    return () => clearInterval(interval);
  }, []);

  const photos = [
    { id: 1, src: "/gallery/photo1.jpg", alt: 'Momen bersama', caption: 'Momen Indah Kita ✨' },
    { id: 2, src: '/gallery/photo2.jpg', alt: 'Kenangan berdua', caption: 'Selalu Ada Tawa 😄' },
    { id: 3, src: '/gallery/photo3.jpg', alt: 'Jalan-jalan bersama', caption: 'Petualangan Kita 🏞️' },
    { id: 4, src: '/gallery/photo4.jpg', alt: 'Foto berdua', caption: 'Berdua Lebih Indah 💕' },
    { id: 5, src: '/gallery/photo5.jpg', alt: 'Curug Madi', caption: 'Curug Madi Trip 🌊' },
    { id: 6, src: '/gallery/photo6.jpg', alt: 'Momen spesial', caption: 'Momen Spesial 🌟' },
    { id: 7, src: '/gallery/photo7.jpg', alt: 'Date Murah Meriah', caption: 'Date Murah Meriah 🍽️' },
    { id: 8, src: '/gallery/photo8.jpg', alt: 'Terima Kasih', caption: 'Terima Kasih Sudah Memilih Aku ❤️' },
    {
      id: 9,
      alt: 'Lihat Semua',
      caption: 'Lihat Semua Kenangan Kita 🗂️',
      isLink: true,
      href: 'https://photos.app.goo.gl/pgdyZXxT7Ti8WEyi8'
    },
  ];

  return (
    <section className="py-24 relative" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-gradient reveal">
          📸 Galeri Kita
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          momen-momen yang tidak terlupakan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, index) => (
            photo.isLink ? (
              // Card ke-9: Slideshow + Link ke Google Foto
              <a
                key={photo.id}
                href={photo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item glass rounded-2xl overflow-hidden group reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Foto slideshow */}
                  <img
                    src={slidePhotos[currentSlide]}
                    alt="slideshow"
                    className="w-full h-full object-cover"
                    style={{
                      opacity: fade ? 1 : 0,
                      transition: 'opacity 0.4s ease-in-out',
                    }}
                  />

                  {/* Dot indicator */}
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

                  {/* Hover overlay */}
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
              // Card biasa: klik buka lightbox
              <div
                key={photo.id}
                className="gallery-item glass rounded-2xl overflow-hidden cursor-pointer group reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(photo)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="glass rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-script text-2xl text-rose-300 text-center">{selectedImage.caption}</p>
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 mx-auto block px-6 py-2 rounded-full glass text-purple-300 hover:text-white transition-colors text-sm"
            >
              Tutup ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}