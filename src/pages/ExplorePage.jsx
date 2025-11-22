import React from 'react';
import { motion } from 'framer-motion';

const GRID = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: ['Kyoto', 'Bali', 'Reykjavík', 'Cairo', 'Lisbon', 'Seoul', 'Queenstown', 'Cusco', 'Banff', 'Amalfi', 'Marrakesh', 'Santorini'][i],
  img: [
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600718375069-f3d694f428d8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587593810167-cbae3e64a0ab?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520966306118-548486fb2253?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508261303786-0e1a87fae1fd?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
  ][i]
}));

function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Explore</h1>
          <p className="mt-2 text-blue-100">Discover destinations, ideas, and inspirations from around the globe.</p>
        </header>
        <section aria-label="Destination grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID.map((item, i) => (
              <motion.article key={item.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-white/10">
                <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white text-lg font-semibold drop-shadow">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ExplorePage;
