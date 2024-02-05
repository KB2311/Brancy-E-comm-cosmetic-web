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
  {
    id: 4,
    title: 'Impulse Duffle',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/4.webp',
    badge: 'new',
  },
  {
    id: 5,
    title: 'Sprite Yoga Straps1',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/5.webp',
    badge: 'new',
  },
  {
    id: 6,
    title: 'Fusion facial cream',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/6.webp',
    badge: 'new',
  },
];

function TopSales() {
  return (
    <section id="topsales" className="min-h-screen">
      <div className="px-container mx-auto">
        <h2 className="pb-6 text-center text-5xl">Top Sales</h2>
        <p className="mx-auto max-w-[430px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
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

export default TopSales;
