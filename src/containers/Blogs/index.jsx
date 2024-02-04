import React from 'react';
import BlogCards from '../../components/BlogCards';

const Blogcards = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/1.webp',
    badge: 'beauty',
  },
  {
    id: 2,
    title: 'Facial Scrub is natural treatment for face.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/2.webp',
    badge: 'beauty',
  },
  {
    id: 3,
    title: 'Benefit of Hot Ston Spa for your health & life.',
    imageUrl:
      'https://template.hasthemes.com/brancy/brancy/assets/images/blog/3.webp',
    badge: 'beauty',
  },
];

function Blogs() {
  return (
    <div className="min-h-fit pt-5">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full">
          <h2 className="pb-6 text-center text-5xl">Blog Posts</h2>
          <p className="mx-auto max-w-[430px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-7 px-5 pt-10 lg:grid-cols-3">
          {Blogcards.map(x => (
            <BlogCards
              key={x.id}
              name={x.title}
              imageUrl={x.imageUrl}
              badge={x.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
