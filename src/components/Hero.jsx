import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/30 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center">
        <div className="w-full">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
            Discover the world with a premium touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }} className="mt-4 max-w-2xl text-base sm:text-lg text-blue-100">
            Curated destinations, immersive experiences, and luxury packages—carefully crafted for travelers who value style and substance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="/explore" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Explore Destinations</a>
            <a href="/packages" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">View Packages</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
