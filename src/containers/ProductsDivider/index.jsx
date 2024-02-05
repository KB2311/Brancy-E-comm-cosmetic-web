import React from 'react';
import DividerCard from '../../components/DividerCard';
const Divider = [
  {
    id: 1,
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/1.webp',
  },
  {
    id: 2,
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/2.webp',
  },
  {
    id: 3,
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/3.webp',
  },
];
function ProductsDivider() {
  return (
    <section id="productdivider" className="min-h-96">
      <div className="px-container mx-auto">
        <div className="grid grid-cols-2 gap-7 pt-10 lg:grid-cols-3">
          {Divider.map(x => (
            <DividerCard key={x.id} imageUrl={x.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsDivider;
