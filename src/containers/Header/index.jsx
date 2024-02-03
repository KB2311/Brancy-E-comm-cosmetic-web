import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaBasketShopping } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';

function Header() {
  return (
    <div className="fixed flex w-full justify-between px-3 pt-3 md:pt-0">
      <div className="flex h-16 items-center ">
        <div className="cursor-pointer md:w-40">
          <img
            className="h-12 object-fill"
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt=""
          />
        </div>
        <div className="flex hidden w-fit items-start lg:block">
          <ul className="flex cursor-pointer gap-7 font-medium">
            <li className="hover:text-[#ff6565]">Home</li>
            <li className="hover:text-[#ff6565]">About</li>
            <li className="hover:text-[#ff6565]">Shop</li>
            <li className="hover:text-[#ff6565]">Blog</li>
            <li className="hover:text-[#ff6565]">Pages</li>
            <li className="hover:text-[#ff6565]">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 md:px-8">
        <div className="flex cursor-pointer gap-4">
          <IoSearchOutline size={22} />
          <FaBasketShopping size={20} />
          <MdPerson size={23} />
        </div>
        <div className="flex cursor-pointer items-center lg:hidden">
          <IoMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
