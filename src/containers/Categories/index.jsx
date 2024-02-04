import React from 'react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';

const cards = [
  {
    id: 1,
    title: 'Hare Care',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp',
    className: 'bg-green-300 flex-grow flex-shrink-0 basis-44',
    badge: 'hot',
  },
  {
    id: 2,
    title: 'Skin Care',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/2.webp',
    className: 'bg-yellow-300 flex-grow flex-shrink-0 basis-44',
  },
  {
    id: 3,
    title: 'Lip stick',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/3.webp',
    className: 'bg-blue-300 flex-grow flex-shrink-0 basis-44',
  },
  {
    id: 4,
    title: 'Face skin',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/4.webp',
    className: 'bg-pink-300 flex-grow flex-shrink-0 basis-44',
  },
  {
    id: 5,
    title: 'Blusher',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/5.webp',
    className: 'bg-red-200 flex-grow flex-shrink-0 basis-44',
  },
  {
    id: 6,
    title: 'Natural',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/6.webp',
    className: 'bg-yellow-100 flex-grow flex-shrink-0 basis-44',
    badge: 'new',
  },
];

function Categories() {
  return (
    <div className="min-h-fit py-20">
      <div className=" mx-2  flex h-full flex-wrap items-center justify-center gap-9">
        {cards.map(x => (
          <Card
            key={x.id}
            name={x.title}
            className={x.className}
            imageUrl={x.imageUrl}
            badge={x.badge}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
