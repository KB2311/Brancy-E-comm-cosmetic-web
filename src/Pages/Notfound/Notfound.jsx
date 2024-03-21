import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Notfound() {
  return (
    <div className="flex flex-col h-80 items-center justify-center">
      <p className="pb-5 text-4xl font-bold">Opps Page Not Found</p>
      <HashLink to="/" className='text-blue-500 underline'>Go Back to Home Page</HashLink>
    </div>
  );
}

export default Notfound;
