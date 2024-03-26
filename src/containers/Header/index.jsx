import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '../../icons/Menu.svg';
import BascketIcon from '../../icons/Shoping_basket.svg';
import ProfileIcon from '../../icons/Profile.svg';
import CloseIcon from '../../icons/close-icon.svg';
import { useCart } from '../../context/CartContext';

function Header() {
  const [IsNavopen, setIsNavopen] = useState(false);
  const { cart } = useCart();

  return (
    <header
      id="header"
      className="fixed z-50  flex w-full justify-between gap-10 bg-white px-container py-2"
    >
      <HashLink smooth to="/#home" aria-label="brancy">
        <img
          className="h-12 object-fill"
          src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
          alt=""
        />
      </HashLink>
      <nav
        className={`absolute left-0 right-0 top-0 mt-14 flex-1 items-center justify-end bg-white md:static md:mt-0 md:flex ${!IsNavopen ? 'hidden' : 'block'}`}
      >
        <ul className="flex flex-col items-center gap-3 py-2 font-medium md:flex-row md:gap-7 md:py-0">
          <li>
            <HashLink
              smooth
              to="/#home"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/about"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/shop"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Shop
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/contact"
              onClick={() => setIsNavopen(!IsNavopen)}
              className="nav_link"
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5 md:px-8">
        <HashLink
          smooth
          to="/cart"
          onClick={() => setIsNavopen(false)}
          className="nav_link relative"
        >
          <BascketIcon className="cursor-pointer hover:fill-[#ff6565]" />
          <div className="absolute -right-2 -top-1 flex aspect-square w-6 items-center justify-center rounded-full bg-[#ff6565] font-bold text-white">
            {cart.length}
          </div>
        </HashLink>
        <div className="cursor-pointer rounded-full p-1 ring-2 ring-black hover:fill-[#ff6565] hover:ring-[#ff6565]">
          <ProfileIcon />
        </div>
        <MenuIcon
          onClick={() => setIsNavopen(!IsNavopen)}
          className={`flex md:hidden ${IsNavopen ? 'hidden' : 'block'}`}
        />
        <CloseIcon
          onClick={() => setIsNavopen(!IsNavopen)}
          className={`flex md:hidden ${IsNavopen ? 'block' : 'hidden'}`}
        />
      </div>
    </header>
  );
}

export default Header;
