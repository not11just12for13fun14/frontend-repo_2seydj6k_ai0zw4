import React from 'react';
import Packages from '../components/Packages';

function PackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Packages</h1>
          <p className="mt-2 text-blue-100">Find and compare top travel packages from around the world.</p>
        </header>
        <Packages />
      </div>
    </main>
  );
}

export default PackagesPage;
