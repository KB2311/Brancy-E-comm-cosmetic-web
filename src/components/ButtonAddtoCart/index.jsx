import React from 'react';
import ExpandIcon from '../../icons/Expand-Icon.svg';
import HeartIcon from '../../icons/Heart-Icon.svg';

function ButtonAddCart() {
  return (
    <div className="flex w-full items-center gap-5 px-10 lg:px-7">
      <div className="buttonCarts">
        <ExpandIcon />
      </div>
      <div className="flex h-10 w-full cursor-pointer items-center justify-center rounded-full bg-white text-[100%] ring-2 ring-red-400">
        ADD TO CART
      </div>
      <div className="buttonCarts">
        <HeartIcon />
      </div>
    </div>
  );
}

export default ButtonAddCart;
