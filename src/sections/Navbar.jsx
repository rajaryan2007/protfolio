import { useState } from "react";
import { navLinks } from "../constants/index.js";

// ✅ Capitalize component names (React convention)
const NavItems = () => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20;">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="ext-neutral-400 hover:text-white max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
          <a href={href} className="text-lg md:text-base hover:text-white transition-colors">{name}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-5 sm:px-10; ">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            RAJARYAN
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="  text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              className="w-6 h-6"
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu"
            />
          </button>

          {/* Desktop navigation */}
          <nav className="sm:flex hidden ">
            <NavItems />
          </nav>
        </div>

        {/* Mobile nav dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block">
            <NavItems />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
