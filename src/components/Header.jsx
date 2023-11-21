import { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-20 bg-red-600 border-b border-b-red-950 border-opacity-50">
      <div className="max-w-screen-xl px-5 md:px-0 flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0 ">
        <a href='#inicio' className="flex gap-1 items-center pl-0">
          <img src="/logo.svg" width={35} height={55} alt="Logo EdwinSantos" />
          <p className='text-white text-lg font-black uppercase'>Shoes<span className="text-xs capitalize">Shop</span></p>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <XIcon className="w-7 h-7 text-white" aria-hidden="true" />
          ) : (
            <MenuIcon className="w-7 h-7 text-white" aria-hidden="true" />
          )}
        </button>
        <div
          className={`absolute top-full left-0 px-1 pb-1 w-full md:w-auto ${
            isMenuOpen ? 'block bg-red-600' : 'hidden'
          } transition-all duration-500 ease-in-out md:flex md:items-center md:space-x-8 md:relative md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="text-sm md:text-sm lg:text-sm 2xl:text-lg flex flex-col p-4 md:p-0 border border-red-600 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {redes.map(red => (
              <li key={red.id} className="mt-4 md:mt-0">
                <a href={red.link} className="flex items-center gap-1 ">
                  <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                  <p className="block text-white text-sm">{red.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const redes = [
  {
      id:1,
      name: "Facebook",
      link: "https://www.facebook.com/",
      image: "facebook"
  },
  {
      id:2,
      name: "Instagram",
      link: "https://www.instagram.com/",
      image: "instagram"
  },
  {
      id:3,
      name: "TikTok",
      link: "https://www.tiktok.com/",
      image: "tiktok"
  }
]