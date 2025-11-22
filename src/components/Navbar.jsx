import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Globe2 } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkBase = 'px-4 py-2 rounded-xl text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400';

  const getLinkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'text-white bg-white/10' : 'text-blue-100/80 hover:text-white hover:bg-white/10'}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Voyage</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/explore" className={getLinkClass}>Explore</NavLink>
            <NavLink to="/experience" className={getLinkClass}>Experience</NavLink>
            <NavLink to="/packages" className={getLinkClass}>Packages</NavLink>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" onClick={() => setOpen((v) => !v)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="grid gap-2">
              <NavLink to="/explore" className={getLinkClass}>Explore</NavLink>
              <NavLink to="/experience" className={getLinkClass}>Experience</NavLink>
              <NavLink to="/packages" className={getLinkClass}>Packages</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
