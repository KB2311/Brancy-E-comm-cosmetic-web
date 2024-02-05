import React from 'react';
import TopSalesCards from '../../components/TopSalesCards';

const Topcards = [
  {
    id: 1,
    title: 'Readable content DX22',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/1.webp',
    badge: 'new',
  },
  {
    id: 2,
    title: 'Modern Eye Brush',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/2.webp',
    badge: 'new',
  },
  {
    id: 3,
    title: 'Voyage face cleaner',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/3.webp',
    badge: 'new',
  },
];

function TopSalesAfterDivider() {
  return (
    <section id="top_devider" className="min-h-fit">
      <div className="px-container mx-auto">
        <div className="grid grid-cols-2 gap-7 pt-10 lg:grid-cols-3">
          {Topcards.map(x => (
            <TopSalesCards
              key={x.id}
              name={x.title}
              imageUrl={x.imageUrl}
              badge={x.badge}
              className={x.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSalesAfterDivider;
