import React from 'react';
import clsx from 'clsx';
import Badge from '../Badge';

function Card({ name, className, imageUrl, badge }) {
  return (
    <div
      className={clsx(
        'rotate relative flex aspect-[4/3] max-w-48 cursor-pointer flex-col items-center justify-center gap-7 rounded-xl py-2 duration-500 hover:shadow-xl md:aspect-[3/4]',
        {
          [className]: !!className,
        },
      )}
    >
      {badge ? <Badge badge={badge} /> : ''}
      <img
        className=""
        src={imageUrl}
        width={70}
        height={70}
        alt="image_logo"
      />
      <div className="h-1 w-10 bg-red-500" />
      <div>{name}</div>
    </div>
  );
}

export default Card;
