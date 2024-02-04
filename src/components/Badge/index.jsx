import React from 'react';

function Badge({ badge, className }) {
  switch (badge) {
    case 'hot':
      return <p className="badge z-20 bg-[#ff6565]">{badge}</p>;
    case 'new':
      return <p className="badge z-20 bg-[#835bf4]">{badge}</p>;
    case 'beauty':
      return <p className="badge z-20 bg-[#9cdbff] capitalize">{badge}</p>;
    default:
      return null;
  }
}

export default Badge;
