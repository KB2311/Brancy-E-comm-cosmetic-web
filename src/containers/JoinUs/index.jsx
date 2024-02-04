import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

function JoinUs() {
  return (
    <div className="min-h-64 px-5 py-10 pt-5">
      <div className="bg_joinus container flex h-56 max-w-6xl overflow-hidden rounded-xl md:mx-auto">
        <div className="flex w-full flex-col items-center justify-evenly gap-6 px-3 md:flex-row">
          <div className="flex-1 lg:pl-20 pt-5 text-center md:text-left">
            <h3 className="pb-3 text-3xl md:text-5xl">Join With Us</h3>
            <p className="text-wrap  text-base md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="relative flex justify-center flex-1 items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="xsm:w-80 rounded-md px-3 py-2 outline-none ring-1 ring-[#ff6565] "
            />
            <div className="rounded-md cursor-pointer bg-[#ce4820] px-3 py-3 ">
              <FaTelegramPlane size={17} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
