import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaBasketShopping } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';

function Header() {
  return (
    <div className="fixed pt-3 md:pt-0 flex justify-between px-2 w-full">
      <div className="h-16 flex items-center ">
        <div className="md:w-40 cursor-pointer">
          <img
            className="h-12 object-fill"
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt=""
          />
        </div>
        <div className="hidden lg:block w-fit flex items-start">
          <ul className="flex gap-7 font-medium cursor-pointer">
            <li className="hover:text-red-500">Home</li>
            <li className="hover:text-red-500">About</li>
            <li className="hover:text-red-500">Shop</li>
            <li className="hover:text-red-500">Blog</li>
            <li className="hover:text-red-500">Pages</li>
            <li className="hover:text-red-500">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5 items-center md:px-8">
        <div className="flex gap-4">
          <IoSearchOutline size={22} />
          <FaBasketShopping size={20} />
          <MdPerson size={23} />
        </div>
        <div className="lg:hidden flex items-center">
          <IoMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
