import React from 'react';
import { motion } from 'framer-motion';

const LIST = [
  { title: 'Wine and Villas', desc: 'Tuscan countryside tastings and hilltop stays', img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Sail the Fjords', desc: 'Slow travel through Norway’s dramatic waterways', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Desert Under Stars', desc: 'Bedouin-style luxury glamping under the Milky Way', img: 'https://images.unsplash.com/photo-1548786811-ddb13894c5ad?q=80&w=1600&auto=format&fit=crop' },
];

function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Experience</h1>
          <p className="mt-2 text-blue-100">Showcasing curated activities, stories, and moments worth traveling for.</p>
        </header>
        <section className="grid grid-cols-1 gap-6">
          {LIST.map((it, i) => (
            <motion.article key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl overflow-hidden bg-slate-800/40 border border-white/10">
              <div className="grid md:grid-cols-2">
                <img src={it.img} alt="" className="h-64 md:h-full w-full object-cover" />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-white text-2xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-blue-100">{it.desc}</p>
                  <div className="mt-4">
                    <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Learn more</button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default ExperiencePage;
