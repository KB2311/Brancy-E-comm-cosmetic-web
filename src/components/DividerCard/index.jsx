import React from 'react';

function DividerCard({ imageUrl }) {
  return (
    <div className="topCard mx-auto flex max-w-96 overflow-hidden rounded-xl">
      <img className="flex-grow rounded-xl" src={imageUrl} alt="" />
    </div>
  );
}

export default DividerCard;
