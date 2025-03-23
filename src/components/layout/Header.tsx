import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 glass sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text">
            ArcticTreat
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="font-medium hover:text-primary-700 transition-colors duration-300">Home</a>
          <a href="/quiz" className="font-medium hover:text-primary-700 transition-colors duration-300">Find Your Match</a>
          <a href="/products" className="font-medium hover:text-primary-700 transition-colors duration-300">Products</a>
          <a href="/subscription" className="font-medium hover:text-primary-700 transition-colors duration-300">Subscription</a>
          <a href="/about" className="font-medium hover:text-primary-700 transition-colors duration-300">About Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Start Quiz</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 mt-2 glass">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="font-medium hover:text-primary-700 transition-colors duration-300">Home</a>
            <a href="/quiz" className="font-medium hover:text-primary-700 transition-colors duration-300">Find Your Match</a>
            <a href="/products" className="font-medium hover:text-primary-700 transition-colors duration-300">Products</a>
            <a href="/subscription" className="font-medium hover:text-primary-700 transition-colors duration-300">Subscription</a>
            <a href="/about" className="font-medium hover:text-primary-700 transition-colors duration-300">About Us</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="btn-outline w-full">Login</button>
              <button className="btn-primary w-full">Start Quiz</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 