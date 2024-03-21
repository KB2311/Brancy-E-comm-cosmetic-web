import React from 'react';
import clsx from 'clsx';

function Badge({ badge, className }) {
  switch (badge) {
    case 'hot':
      return (
        <p
          className={clsx('badge z-20 bg-[#ff6565]', {
            [className]: !!className,
          })}
        >
          {badge}
        </p>
      );
    case 'new':
      return (
        <p
          className={clsx('badge z-20 bg-[#835bf4]', {
            [className]: !!className,
          })}
        >
          {badge}
        </p>
      );
    case 'beauty':
      return (
        <p
          className={clsx('badge z-20 px-5 hover:bg-purple-500 py-2 bg-[#9cdbff] capitalize', {
            [className]: !!className,
          })}
        >
          {badge}
        </p>
      );
    default:
      return null;
  }
}
export default Badge;
