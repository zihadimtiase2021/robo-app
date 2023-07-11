import { navLinks } from "../constants/index";

import { logo } from "../assets/index";

import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    console.log(linksHeight);

    isMenuOpen
      ? (linksContainerRef.current.style.height = `${linksHeight + 8}px`)
      : (linksContainerRef.current.style.height = "0px");
  }, [isMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 backdrop-blur-md z-50 px-4 mb-8 max-w-[1536px] mx-auto md:px-16 lg:px-20">
      <nav className="flex justify-between py-4">
        {/* <!-- logo --> */}
        <a href="#">
          <img src={logo} alt="logo" className="w-28" />
        </a>
        {/* <!-- items --> */}

        <div className="hidden lg:flex">
          <ul className="capitalize space-x-11 text-lg text-[#BFBEC4] flex">
            {navLinks.map(item => (
              <li key={item.id} className="hover:text-white transition">
                <a href={`#${item.id}`}> {item.title} </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- toggle-btn --> */}
        <div
          className="block lg:hidden cursor-pointer text-2xl"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <FaBarsStaggered />
        </div>
      </nav>
      {/* <!-- mobile-menu --> */}
      <div
        ref={linksContainerRef}
        className="backdrop-blur-md transition-[height] duration-300 h-0 overflow-hidden"
      >
        <ul ref={linksRef} className="flex flex-col items-center gap-3">
          {navLinks.map(item => (
            <li key={item.id} className="hover:text-white transition">
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- mobile-menu end --> */}
    </header>
  );
};

export default Navbar;
