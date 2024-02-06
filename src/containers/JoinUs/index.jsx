import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

function JoinUs() {
  return (
    <section id="joinus" className="mx-auto min-h-64 px-container  py-10">
      <div className="bg_joinus  flex h-56 w-full flex-col items-center justify-evenly gap-6 overflow-hidden rounded-xl  md:flex-row">
        <div className="flex-1 pt-5 text-center md:pl-5 md:text-left lg:pl-20">
          <h3 className="pb-3 text-3xl md:text-5xl">Join With Us</h3>
          <p className="text-wrap  text-base md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-md px-3 py-2 outline-none ring-1 ring-[#ff6565] xsm:w-80 "
          />
          <div className="cursor-pointer rounded-md bg-[#ce4820] px-3 py-3 ">
            <FaTelegramPlane size={17} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
