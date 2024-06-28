import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('https://www.picturecorrect.com/wp-content/uploads/2012/10/colorful-fashion-shoot-1.jpg')" }}>
      <div className="h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold mb-4">Fashion Trends 2024</h1>
        <p className="text-lg mb-8">Discover the latest fashion trends with us</p>
        <button className="bg-blue-500 px-4 py-2 rounded">Shop Now</button>
      </div>
    </div>
  );
}

export default Banner;
