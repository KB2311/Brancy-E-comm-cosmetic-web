import React from 'react';
import { TiHeartFullOutline } from 'react-icons/ti';
import { FaPinterestP } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex min-h-96 flex-col justify-between bg-[#fafafa] pt-5">
      <div className="container max-w-6xl px-5 lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-3 md:py-20">
            <img
              src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
              alt=""
            />
            <p className="pr-24 pt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
          <div className="py-3 md:py-20">
            <h3 className="pb-5 text-xl font-bold">Information</h3>
            <div className="grid grid-cols-3">
              <h3 className="footer_logo">Blog</h3>
              <h3 className="footer_logo">About us</h3>
              <h3 className="footer_logo">Contact</h3>
              <h3 className="footer_logo">Privacy</h3>
              <h3 className="footer_logo">Login</h3>
              <h3 className="footer_logo">Shop</h3>
              <h3 className="footer_logo">My Account</h3>
              <h3 className="footer_logo">FAQs</h3>
            </div>
          </div>
          <div className="py-3 md:py-20">
            <h3 className="pb-5 text-xl font-bold">Social Info</h3>
            <div className="flex gap-11 py-5">
              <FaTwitter
                className="cursor-pointer hover:text-[#ff6565]"
                size={20}
              />
              <FaFacebookF
                className="cursor-pointer hover:text-[#ff6565]"
                size={20}
              />
              <FaPinterestP
                className="cursor-pointer hover:text-[#ff6565]"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center border-t-2 py-5 cursor-pointer">
        © 2022 Cosmetic. Made with{' '}
        <span className="px-1 pt-[0.1rem]">
          <TiHeartFullOutline color="red" />
        </span>
        by Kunjbihari.
      </div>
    </div>
  );
}

export default Footer;
