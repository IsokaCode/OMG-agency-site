import React from 'react';
import PageBackground from '../components/PageBackground';

const Shop = () => {
  return (
    <PageBackground>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="mt-24 mb-12">
          <img
            src="/omg%20music%20agency%20animation.gif"
            alt="OMG Logo"
            className="mx-auto"
            style={{ width: '400px', height: 'auto' }}
            />
        </div>
        <h1 className="text-5xl font-bold text-white text-center tracking-wider">COMING SOON</h1>
      </div>
    </PageBackground>
  );
};

export default Shop;