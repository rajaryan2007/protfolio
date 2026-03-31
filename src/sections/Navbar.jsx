import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col sm:flex-row sm:items-center gap-6">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a 
          href={item.href} 
          className="text-[#a6adc8] hover:text-black hover:bg-[#cba6f7] transition-all font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs px-5 py-2.5 border-[3px] border-transparent hover:border-black hover:shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none" 
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e2e]/80 backdrop-blur-md border-b-[4px] border-black py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16 mx-auto">
          <a href="/" className="text-[#cdd6f4] font-black text-2xl uppercase tracking-tighter hover:text-[#cba6f7] transition-all flex items-center gap-4 group">
            <div className="w-6 h-6 bg-[#cba6f7] border-[3px] border-black shadow-[4px_4px_0_0_#000] group-hover:bg-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-300" />
            RAJ <span className='text-[#cba6f7]'>ARYAN</span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-black bg-[#cba6f7] border-[3px] border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none focus:outline-none sm:hidden flex relative w-10 h-10 items-center justify-center"
            aria-label="Toggle menu">
            <div className={`w-6 h-[4px] bg-black transition-all duration-300 absolute ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
            <div className={`w-6 h-[4px] bg-black transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-6 h-[4px] bg-black transition-all duration-300 absolute ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`${isOpen ? 'max-h-screen border-b-[4px] border-black' : 'max-h-0'} bg-[#181825] transition-all duration-500 ease-in-out overflow-hidden sm:hidden`}>
        <nav className="p-10 flex justify-center">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
