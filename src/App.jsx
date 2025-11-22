import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import Experience from './components/Experience';
import Packages from './components/Packages';
import Footer from './components/Footer';
import ExplorePage from './pages/ExplorePage';
import ExperiencePage from './pages/ExperiencePage';
import PackagesPage from './pages/PackagesPage';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Hero />
      <div className="relative">
        <Explore />
        <Experience />
        <Packages />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
