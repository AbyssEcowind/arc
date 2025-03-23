import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-10 glass">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-display font-bold bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text mb-4">
              ArcticTreat
            </h2>
            <p className="text-sm">
              Premium, natural dog food made with the highest quality ingredients for the pets you love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-primary-700 transition-colors duration-300">Home</a></li>
              <li><a href="/products" className="text-sm hover:text-primary-700 transition-colors duration-300">Products</a></li>
              <li><a href="/quiz" className="text-sm hover:text-primary-700 transition-colors duration-300">Find Your Match</a></li>
              <li><a href="/subscription" className="text-sm hover:text-primary-700 transition-colors duration-300">Subscription</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-primary-700 transition-colors duration-300">Our Story</a></li>
              <li><a href="/ingredients" className="text-sm hover:text-primary-700 transition-colors duration-300">Ingredients</a></li>
              <li><a href="/blog" className="text-sm hover:text-primary-700 transition-colors duration-300">Blog</a></li>
              <li><a href="/contact" className="text-sm hover:text-primary-700 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-primary-700 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary-700 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary-700 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.196 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <p className="text-sm mb-2">Sign up for our newsletter:</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-300 w-full"
              />
              <button className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ArcticTreat. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-sm hover:text-primary-700 transition-colors duration-300">Terms of Service</a>
            <a href="/privacy" className="text-sm hover:text-primary-700 transition-colors duration-300">Privacy Policy</a>
            <a href="/shipping" className="text-sm hover:text-primary-700 transition-colors duration-300">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 