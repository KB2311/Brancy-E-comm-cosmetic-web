import React from 'react';
import clsx from 'clsx';
import Badge from '../Badge';

function Card({ name, className, imageUrl, badge }) {
  return (
    <div
      className={clsx(
        'rotate hover:rotate-y-full aspect-w-3 gap-3 aspect-h-4 relative flex h-52 w-auto transform-gpu flex-col items-center justify-center space-x-4 rounded-xl  transition-transform hover:shadow-2xl md:h-60 lg:h-60 lg:w-full',
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
