import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../icons/Menu.svg';
import SearchIcon from '../../icons/Search.svg';
import ProfileIcon from '../../icons/Profile.svg';
import BascketIcon from '../../icons/Shoping_basket.svg';

function Header() {
  return (
    <header
      id="header"
      className="fixed z-50 flex w-full justify-between gap-10 bg-white bg-opacity-60 px-container py-2"
    >
      <a href="#home" aria-label="brancy">
        <img
          className="h-12 object-fill"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt=""
        />
      </a>
      <nav className="hidden flex-1 items-center md:flex">
        <ul className="flex gap-7 font-medium">
          <li>
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav_link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav_link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/" className="nav_link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav_link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="nav_link">
              Contact
            </Link>
          </li>
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
