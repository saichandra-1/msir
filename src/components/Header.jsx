// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="text-2xl font-bold">Mission Smart India Recycle</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/how-it-works" className="hover:underline">How it Works</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
