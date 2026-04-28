import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-stone-200/50">
        <NavLink to="/" className="text-2xl font-serif tracking-widest text-stone-900">
          AURA <span className="font-light italic text-stone-500">Wellness</span>
        </NavLink>
        
        <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] uppercase text-stone-500 font-light">
          <NavLink to="/" className={({ isActive }) => `transition-colors duration-500 ${isActive ? 'text-stone-900' : 'hover:text-stone-900'}`}>
            Sanctuary
          </NavLink>
          <NavLink to="/philosophy" className={({ isActive }) => `transition-colors duration-500 ${isActive ? 'text-stone-900' : 'hover:text-stone-900'}`}>
            Philosophy
          </NavLink>
          <NavLink to="/treatments" className={({ isActive }) => `transition-colors duration-500 ${isActive ? 'text-stone-900' : 'hover:text-stone-900'}`}>
            Treatments
          </NavLink>
        </div>

        <NavLink to="/bookings" className="px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white transition-colors duration-500 text-sm tracking-widest uppercase hidden md:block">
          Book Retreat
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
