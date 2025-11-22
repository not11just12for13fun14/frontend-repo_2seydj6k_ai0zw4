import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { title: 'Hot Air Balloon at Sunrise', place: 'Cappadocia, Turkey', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Northern Lights Chase', place: 'Tromsø, Norway', img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Desert Glamping', place: 'Wadi Rum, Jordan', img: 'https://images.unsplash.com/photo-1548786811-ddb13894c5ad?q=80&w=1600&auto=format&fit=crop' },
];

function Experience() {
  return (
    <section aria-labelledby="experience-title" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 id="experience-title" className="text-2xl sm:text-3xl font-semibold text-white">Signature Experiences</h2>
          <a href="/experience" className="text-blue-200 hover:text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <motion.article key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-white/10">
              <img src={e.img} alt={e.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white text-lg font-semibold drop-shadow">{e.title}</h3>
                <p className="text-blue-100 text-sm">{e.place}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
