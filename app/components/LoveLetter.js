'use client';

export default function LoveLetter() {
  return (
    <section className="py-24 relative" id="letter">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-gradient reveal">
          💌 Surat Untukmu
        </h2>
        <p className="font-script text-xl md:text-2xl text-center text-purple-400 mb-14 reveal">
          dari hati yang paling dalam
        </p>

        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden letter-top-border reveal">
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
              balita itu sangat mulia — kamu bukan hanya mengejar gelar, tapi juga berkontribusi
              untuk kesehatan anak-anak di Puskesmas Padasuka.
            </p>
            <p>
              Seminar proposal ini baru langkah awal. Masih ada perjalanan panjang ke depan, tapi aku
              yakin kamu bisa melewatinya. Karena aku sudah lihat sendiri betapa kuatnya kamu selama ini.
              Dan apapun yang terjadi, aku akan selalu ada di sampingmu.
            </p>
            <p>
              Selamat ya, sayang! Kamu luar biasa! 💪✨
            </p>
          </div>

          <p className="font-script text-xl text-gold text-right mt-8">
            Dengan sepenuh hati, ❤️<br />
            Ridwan
          </p>
        </div>
      </div>
    </section>
  );
}
