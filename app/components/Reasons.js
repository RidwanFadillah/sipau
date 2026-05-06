'use client';

export default function Reasons() {
  const reasons = [
    {
      icon: '🧠',
      title: 'Cerdas & Tekun',
      desc: 'Kamu selalu berusaha keras dalam setiap hal. Ketekunanmu dalam meneliti dan belajar itu luar biasa.',
    },
    {
      icon: '💪',
      title: 'Kuat & Tangguh',
      desc: 'Tidak pernah menyerah meskipun ada banyak tantangan. Kamu selalu menemukan cara untuk tetap maju.',
    },
    {
      icon: '❤️',
      title: 'Penuh Kasih Sayang',
      desc: 'Penelitianmu tentang kesehatan balita menunjukkan betapa besarnya rasa pedulimu pada sesama.',
    },
    {
      icon: '🌟',
      title: 'Inspiratif',
      desc: 'Kamu selalu menginspirasi orang-orang di sekitarmu untuk menjadi versi terbaik dari diri mereka.',
    },
    {
      icon: '📚',
      title: 'Pekerja Keras',
      desc: 'Malam-malam begadang, revisi berkali-kali, semua kamu jalani dengan sabar dan penuh dedikasi.',
    },
    {
      icon: '🦋',
      title: 'Cantik Luar Dalam',
      desc: 'Bukan hanya parasnya, tapi hatimu yang tulus dan kebaikanmu yang membuatmu begitu istimewa.',
    },
  ];

  return (
    <section className="py-24 relative" id="reasons">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 reveal">
          <span className="mr-2 text-inherit">🌟</span>
          <span className="text-gradient">Alasan Kamu Luar Biasa</span>
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          hal-hal yang membuatmu istimewa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 text-center transition-all duration-400 hover:-translate-y-2 hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.1)] relative overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="text-4xl mb-4 block relative z-10">{reason.icon}</span>
              <h3 className="font-display text-xl mb-3 text-white relative z-10">{reason.title}</h3>
              <p className="text-sm text-purple-400 leading-relaxed relative z-10">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
