import React from 'react';
import Badge from '../Badge';

function BlogCards({ name, imageUrl, badge }) {
  return (
    <div className="topCard mx-auto max-w-96">
      <div className="flex overflow-hidden rounded-xl">
        <img className="flex-grow rounded-xl" src={imageUrl} alt="img_logo" />
      </div>
      <div className="pt-3">
        <div className="relative py-5">
          <Badge badge={badge} className="left-0 w-fit" />
        </div>
        <div className="cursor-pointer hover:text-[#ff6565] md:text-2xl">
          {name}
        </div>
        <div className="flex flex-col justify-between gap-1 pt-3 text-sm md:flex-row md:pt-5 md:text-base">
          <div>
            BY:
            <span className="cursor-pointer hover:text-[#ff6565]">
              Kunjbihari hirani
            </span>
          </div>
          <div>FEBRUARY 05, 2023</div>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
