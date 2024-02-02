import React from 'react';

function Banner() {
  return (
    <div className="min-h-screen">
      <div className="hero flex items-center justify-center h-full md:pt-14">
        <div className="px-3 grid w-full h-full grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center text-center pt-32">
            <div className="">
              <img
                className="object-contain"
                src="	https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp"
                alt=""
                width={180}
                height={97}
              />
            </div>
            <div className="text-[32px] w-full tracking-wider font-bold text-[#231942]">
              CLEAN FRESH
            </div>
            <div className="w-full mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </div>
            <div className="tracking-widest flex items-center border-2 rounded-full bg-white border-[#231942] text-[#231942] px-6 py-2">
              BUY NOW
            </div>
          </div>

          <div className="">2</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
