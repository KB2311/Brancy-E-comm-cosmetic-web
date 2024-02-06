import React from 'react';
import clsx from 'clsx';
import Badge from '../Badge';

function Card({ name, className, imageUrl, badge }) {
  return (
    <div
      className={clsx(
        'rotate relative flex aspect-4/3 w-full flex-shrink-0 flex-grow basis-32 cursor-pointer flex-col items-center justify-between gap-3 rounded-xl py-6 duration-500 hover:shadow-xl',
        {
          [className]: !!className,
        },
      )}
    >
      {badge ? (
        <Badge
          badge={badge}
          className="right-1 top-1 px-3 py-1 md:-right-2 md:-top-1 md:-rotate-90 md:px-5"
        />
      ) : (
        ''
      )}
      <img src={imageUrl} alt="image_logo" />
      <div className="h-1 w-10 rounded-full bg-red-500" />
      <div>{name}</div>
    </div>
  );
}

export default Card;
