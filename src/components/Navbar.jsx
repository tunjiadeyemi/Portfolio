import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '/public/assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="Logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-black text-md tracking-widest font-bold cursor-pointer flex uppercase">
            -Adetunji Adeyemi
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-black/30' : 'text-black'
              } balkind uppercase tracking-widest hover:scale-110 duration-500 text-sm hover:transition-all transition-all font-semibold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`${link.id}`}
                target={link.isExternal ? '_blank' : '_self'}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* hidden nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white border-2 border-black absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-l`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-black/30' : 'text-black'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={`${link.id}`}
                    target={link.isExternal ? '_blank' : '_self'}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
