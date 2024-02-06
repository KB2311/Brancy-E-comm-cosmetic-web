import React from 'react';

function DividerCard({ imageUrl }) {
  return (
    <div className="topCard w-full overflow-hidden rounded-xl">
      <img className="flex-grow rounded-xl" src={imageUrl} alt="" />
    </div>
  );
}

export default DividerCard;
