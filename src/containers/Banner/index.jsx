import React from 'react';

function Banner() {
  return (
    <div className="max-h-fit min-h-screen">
      {/* <div className='dates'><span>02 / 02</span></div> */}
      <div className="hero flex max-h-fit min-h-full items-center justify-center md:pt-14">
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
    </div>
  );
}

export default Banner;
