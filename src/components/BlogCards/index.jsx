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
          <Badge badge={badge} />
        </div>
        <div className="cursor-pointer md:text-2xl hover:text-[#ff6565]">
          {name}
        </div>
        <div className="flex flex-col md:flex-row text-sm md:text-base gap-1 justify-between md:pt-5 pt-3">
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
