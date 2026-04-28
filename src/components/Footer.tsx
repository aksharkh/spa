import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-stone-200 mt-auto bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif tracking-widest text-stone-900 mb-4">
            AURA <span className="font-light italic text-stone-500">Wellness</span>
          </h2>
          <p className="text-stone-400 font-light text-sm max-w-xs mx-auto md:mx-0">
            A sanctuary for the soul, dedicated to holistic restoration and mindful living.
          </p>
        </div>
        
        <div className="flex justify-center gap-8 text-xs tracking-[0.2em] uppercase text-stone-500 font-light">
          <NavLink to="/philosophy" className="hover:text-stone-900 transition-colors duration-500">Philosophy</NavLink>
          <NavLink to="/treatments" className="hover:text-stone-900 transition-colors duration-500">Treatments</NavLink>
          <NavLink to="/bookings" className="hover:text-stone-900 transition-colors duration-500">Bookings</NavLink>
        </div>

        <div className="text-center md:text-right">
          <p className="text-stone-400 font-light text-sm mb-2">123 Serenity Boulevard, Sedona</p>
          <p className="text-stone-400 font-light text-sm">hello@aurawellness.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 text-center">
        <p className="text-stone-400 font-light text-xs tracking-widest uppercase">© {new Date().getFullYear()} Aura Wellness Spa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
