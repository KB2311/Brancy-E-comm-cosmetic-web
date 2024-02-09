import React from 'react';
import { CiStar } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';
import Badge from '../Badge';
import ButtonAddCart from '../ButtonAddtoCart';

function TopSalesCards({ name, imageUrl, badge }) {
  return (
    <div className="topCard relative w-full">
      <div className="relative flex overflow-hidden rounded-xl">
        {' '}
        {badge ? (
          <Badge
            badge={badge}
            className="right-1 top-1 xsm:right-3 xsm:top-3"
          />
        ) : (
          ''
        )}
        <img className=" flex-grow rounded-xl" src={imageUrl} alt="img_logo" />
        <div className="addcart_div">
          <ButtonAddCart />
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1 sm:gap-3">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex">
            <TiStarFullOutline size={20} color="#ff6565" />
            <TiStarFullOutline size={20} color="#ff6565" />
            <TiStarFullOutline size={20} color="#ff6565" />
            <CiStar size={20} color="#ff6565" />
            <CiStar size={20} color="#ff6565" />
          </div>
          <div className="pt-2 text-sm italic text-slate-700 sm:pt-0">
            150 reviews
          </div>
        </div>
        <h3 className="cursor-pointer hover:text-[#ff6565] xsm:text-2xl sm:mt-2">
          {name}
        </h3>
        <div className="">
          <span className="font-medium xsm:text-2xl">$210</span>
          <span className="px-3 text-sm text-slate-700 line-through">300</span>
        </div>
      </div>
    </div>
  );
}

export default TopSalesCards;
