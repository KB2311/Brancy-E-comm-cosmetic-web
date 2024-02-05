import React from 'react';
import MenuIcon from '../../icons/Menu.svg';
import SearchIcon from '../../icons/Search.svg';
import ProfileIcon from '../../icons/Profile.svg';
import BascketIcon from '../../icons/Shoping_basket.svg';

function Header() {
  return (
    <header
      id="header"
      className="px-container fixed z-50 flex w-full justify-between gap-10 bg-white bg-opacity-60 py-2"
    >
      <a href="#home" alt="logo_Brancy">
        <img
          className="h-12 object-fill"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt=""
        />
      </a>
      <nav className="hidden flex-1 items-center md:flex">
        <ul className="flex gap-7 font-medium">
          <a href="#home">
            <li className="nav_link">Home</li>
          </a>
          <a href="#about">
            <li className="nav_link">About</li>
          </a>
          <a href="#shop">
            <li className="nav_link">Shop</li>
          </a>
          <a href="#blog">
            <li className="nav_link">Blog</li>
          </a>
          <a href="#pages">
            <li className="nav_link">Pages</li>
          </a>
          <a href="#contact">
            <li className="nav_link">Contact</li>
          </a>
        </ul>
      </nav>
      <div className="flex items-center gap-5 md:px-8">
        <SearchIcon className="cursor-pointer hover:fill-[#ff6565]" />
        <BascketIcon className="cursor-pointer hover:fill-[#ff6565]" />
        <ProfileIcon className="cursor-pointer hover:fill-[#ff6565]" />
        <MenuIcon className="flex md:hidden" />
      </div>
    </header>
  );
}

export default Header;
