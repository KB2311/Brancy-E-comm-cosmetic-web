import React from 'react';
import { FaPinterestP } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Banner() {
  return (
    <section className="min-h-screen">
      <div className="hero relative min-h-screen py-5">
        {/* <div className='dates'><span>02 / 02</span></div> */}
        <div className="flex min-h-full items-center justify-center md:pt-20">
          <div className="flex max-w-7xl flex-col  items-center justify-center px-10 md:flex-row lg:w-full">
            {/* left section hero */}
            <div className="mt-40 flex w-full flex-1 flex-col items-center justify-center text-center xsm:relative xsm:mt-48 xsm:items-start xsm:text-left md:mt-20">
              <div className="xsm:absolute xsm:-z-10 xsm:mb-48 md:mb-44 lg:mb-64">
                <img
                  className="object-contain lg:w-80"
                  src="	https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp"
                  alt=""
                  width={180}
                  height={97}
                />
              </div>
              <div className="w-full text-[5vw] font-bold tracking-wider text-[#231942] lg:text-[60px]">
                CLEAN FRESH
              </div>
              <div className="mb-4 w-full lg:text-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </div>
              <div className="flex cursor-pointer items-center rounded-full border-2 border-[#231942] bg-white to-teal-500 px-8 py-[0.7rem] text-sm font-medium tracking-[0.2em] text-[#231942] hover:border-[#ff6565] hover:bg-[#ff6565] hover:text-white">
                BUY NOW
              </div>
            </div>
            {/* right section hero */}
            <div className="flex flex-1">
              <img
                className=""
                src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[#d9f1e1]">
          <span className="sr-only">green right</span>
        </div>
        <div className="absolute -left-20 bottom-32 -rotate-90 md:bottom-10 md:left-8 md:rotate-0">
          <span className="dates_hero flex w-52 items-center justify-center">
            <span className="px-2 text-xl">05</span>
            <span className="text-xl">/</span>
            <span className="px-2 text-xl">02</span>
          </span>
        </div>
        <div className="absolute -right-[10.4rem] bottom-52 rotate-90 md:bottom-10 md:right-8 md:rotate-0">
          <span className="loges_hero flex w-96 items-center justify-end">
            <span className="px-3">
              <div className="flex gap-8">
                <FaPinterestP className="social_logo" />
                <FaTwitter className="social_logo" />
                <FaFacebookF className="social_logo" />
              </div>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
