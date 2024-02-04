import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

function JoinUs() {
  return (
    <div className="min-h-64 py-10 pt-5">
      <div className="bg_joinus container flex h-56 max-w-6xl overflow-hidden rounded-xl md:mx-auto">
        <div className="mx-3 flex w-full flex-col items-center justify-evenly gap-6 md:flex-row">
          <div className="pt-5 md:text-left text-center">
            <h3 className="text-3xl md:text-5xl pb-3">Join With Us</h3>
            <p className="text-wrap text-base md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-auto rounded-md px-1 py-1 outline-none ring-1 ring-[#ff6565] md:w-64 lg:w-96"
            />
            <div className="absolute top-0 right-0 inline-block rounded-md bg-[#ce4820] px-3 py-2 ">
              <FaTelegramPlane size={17} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
