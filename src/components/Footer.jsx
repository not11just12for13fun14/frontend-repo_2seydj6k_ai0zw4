import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-200/80">
        <p className="text-sm">© {new Date().getFullYear()} Voyage. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
