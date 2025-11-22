import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';

const ALL_PACKAGES = [
  { id: 1, title: 'Luxury Safari', location: 'Masai Mara, Kenya', duration: '7 days', rating: 4.9, price: 4890, img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Alpine Retreat', location: 'Zermatt, Switzerland', duration: '5 days', rating: 4.8, price: 3690, img: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Island Escape', location: 'Maldives', duration: '6 days', rating: 4.7, price: 4290, img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Cultural Sojourn', location: 'Kyoto, Japan', duration: '8 days', rating: 4.9, price: 4590, img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d8?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Desert Luxe', location: 'Dubai, UAE', duration: '4 days', rating: 4.6, price: 2890, img: 'https://images.unsplash.com/photo-1526779259212-756e3b254b05?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Patagonia Trek', location: 'Torres del Paine, Chile', duration: '9 days', rating: 4.8, price: 5190, img: 'https://images.unsplash.com/photo-1520966306118-548486fb2253?q=80&w=1600&auto=format&fit=crop' },
];

function Filters({ query, setQuery, sort, setSort, budget, setBudget }) {
  return (
    <form className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="search" aria-label="Package filters">
      <label className="relative block">
        <span className="sr-only">Search packages</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search packages..." className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-blue-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" />
      </label>
      <label className="relative block">
        <span className="sr-only">Sort</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          <option value="best">Best rated</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="duration">Duration</option>
        </select>
      </label>
      <label className="relative block">
        <span className="sr-only">Budget</span>
        <input type="range" min="1000" max="7000" step="100" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full" aria-label="Budget slider" />
      </label>
      <div className="flex items-center gap-2 text-blue-100">
        <span className="text-sm">Max</span>
        <span className="font-semibold">${'{'}budget.toLocaleString(){'}'}</span>
      </div>
    </form>
  );
}

function PackageCard({ p, i }) {
  return (
    <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-white/10 focus-within:ring-2 focus-within:ring-blue-400">
      <img src={p.img} alt={p.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold">{p.title}</h3>
        <div className="mt-2 flex items-center gap-3 text-blue-100 text-sm">
          <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{p.location}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{p.duration}</span>
          <span className="inline-flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" />{p.rating}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-white text-xl font-semibold">${'{'}p.price.toLocaleString(){'}'}</p>
          <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Compare</button>
        </div>
      </div>
    </motion.article>
  );
}

function Packages() {
  const [query, setQuery] = React.useState('');
  const [sort, setSort] = React.useState('best');
  const [budget, setBudget] = React.useState(6000);

  const filtered = React.useMemo(() => {
    let arr = ALL_PACKAGES.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase()));
    arr = arr.filter(p => p.price <= budget);
    switch (sort) {
      case 'price_low':
        arr.sort((a, b) => a.price - b.price); break;
      case 'price_high':
        arr.sort((a, b) => b.price - a.price); break;
      case 'duration':
        arr.sort((a, b) => parseInt(a.duration) - parseInt(b.duration)); break;
      default:
        arr.sort((a, b) => b.rating - a.rating);
    }
    return arr;
  }, [query, sort, budget]);

  return (
    <section aria-labelledby="packages-title" className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between">
            <h2 id="packages-title" className="text-2xl sm:text-3xl font-semibold text-white">Top Packages</h2>
            <a href="/packages" className="text-blue-200 hover:text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">View all</a>
          </div>
          <Filters query={query} setQuery={setQuery} sort={sort} setSort={setSort} budget={budget} setBudget={setBudget} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <PackageCard key={p.id} p={p} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
