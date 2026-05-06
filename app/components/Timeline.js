'use client';

export default function Timeline() {
  const milestones = [
    {
      date: '2008 / 2009',
      title: '🏫 Pertama Kali Bertemu',
      desc: 'Pertemuan pertama di TK AT-Taufiq. Dua anak kecil yang belum tahu kalau takdir akan mempertemukan mereka lagi.',
      side: 'left',
    },
    {
      date: 'Setelah TK',
      title: '👋 Berpisah',
      desc: 'Jalan hidup membawa kita ke arah yang berbeda. Tapi ternyata, perpisahan ini hanya sementara.',
      side: 'right',
    },
    {
      date: '2018',
      title: '🔄 Bertemu Lagi di SMP',
      desc: 'Kelas 8, dan ternyata kita satu sekolah lagi! Dunia memang sempit, atau mungkin memang sudah ditakdirkan.',
      side: 'left',
    },
    {
      date: 'Setelah SMP',
      title: '👋 Berpisah Lagi',
      desc: 'Lulus SMP, kita kembali berpisah. Tapi kali ini, ada sesuatu yang tersimpan di hati.',
      side: 'right',
    },
    {
      date: '29 Juli 2023',
      title: '💬 Chat Pertama Kali Lagi',
      desc: 'Setelah sekian lama, akhirnya memberanikan diri untuk mengirim pesan. Awal dari segalanya.',
      side: 'left',
    },
    {
      date: '7 September 2023',
      title: '🎂 Mengucapkan Ulang Tahun',
      desc: 'Chat sebentar untuk mengucapkan selamat ulang tahun. Singkat, tapi bermakna.',
      side: 'right',
    },
    {
      date: '7 September 2025',
      title: '🎉 Kembali Akrab',
      desc: 'Dua tahun kemudian, di hari ulang tahunnya lagi, kita mulai kembali akrab. Seperti takdir yang berulang.',
      side: 'left',
    },
    {
      date: '18 Oktober 2025',
      title: '🤝 Bertemu Setelah 6 Tahun',
      desc: 'Akhirnya bertemu kembali secara langsung setelah 6 tahun berpisah. Rasanya seperti tidak pernah terpisah.',
      side: 'right',
    },
    {
      date: 'Oktober - Desember 2025',
      title: '🎮 Semakin Dekat',
      desc: 'Dari sini mulai semakin akrab. Discord bareng, ngobrol setiap hari, dan perasaan yang semakin tumbuh.',
      side: 'left',
    },
    {
      date: '23 Januari 2026',
      title: '💕 Mengutarakan Perasaan',
      desc: 'Memberanikan diri untuk mengungkapkan rasa suka. Belum resmi, tapi perasaan ini sudah tidak bisa disembunyikan lagi.',
      side: 'right',
    },
    {
      date: '14 Februari 2026',
      title: '🌹 Bertemu di Valentine',
      desc: 'Bertemu setelah aku selesai sempro. Hari yang penuh kebahagiaan.',
      side: 'left',
    },
    {
      date: '15 Februari 2026',
      title: '🏞️ Jalan-jalan ke Curug Madi',
      desc: 'Kencan pertama ke Curug Madi di daerah Kamojang, Ibun. Hari yang tidak akan pernah terlupakan.',
      side: 'right',
    },
    {
      date: '30 Maret 2026',
      title: '💍 Resmi Jadian!',
      desc: 'Akhirnya resmi menjadi sepasang kekasih. Dari TK sampai dewasa, takdir memang sudah mempertemukan kita. ❤️',
      side: 'left',
    },
  ];

  return (
    <section className="py-24 relative" id="journey">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 reveal">
          <span className="mr-2 text-inherit">📍</span>
          <span className="text-gradient">Perjalanan Kita</span>
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          dari TK sampai selamanya
        </p>

        <div className="relative py-5 timeline-line">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`relative py-4 w-full md:w-1/2 ${
                item.side === 'right' ? 'md:left-1/2 md:pl-10' : 'md:pr-10 md:text-right'
              } pl-12 md:pl-0 reveal`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute top-7 w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-lavender border-[3px] border-dark z-10 ${
                  item.side === 'right'
                    ? 'left-3 md:-left-2'
                    : 'left-3 md:left-auto md:-right-2'
                }`}
              />

              <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-script text-lg text-rose-300 mb-2">{item.date}</p>
                <h3 className="font-display text-base md:text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-purple-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
