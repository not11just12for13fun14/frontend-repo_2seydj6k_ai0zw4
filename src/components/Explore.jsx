import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Kyoto, Japan', tag: 'Culture', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Amalfi Coast, Italy', tag: 'Coastline', img: 'https://images.unsplash.com/photo-1508261303786-0e1a87fae1fd?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Banff, Canada', tag: 'Mountains', img: 'https://images.unsplash.com/photo-1526481280698-8fcc13fd9fc1?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Marrakesh, Morocco', tag: 'Markets', img: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Santorini, Greece', tag: 'Sunsets', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Bali, Indonesia', tag: 'Wellness', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop' },
];

function Explore() {
  return (
    <section aria-labelledby="explore-title" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 id="explore-title" className="text-2xl sm:text-3xl font-semibold text-white">Explore Destinations</h2>
          <a href="/explore" className="text-blue-200 hover:text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.article key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-white/10">
              <img src={d.img} alt={d.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur border border-white/10">{d.tag}</span>
                <h3 className="mt-3 text-white text-lg font-semibold drop-shadow">{d.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
