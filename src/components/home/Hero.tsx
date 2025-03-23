import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl max-w-5xl mx-auto text-center">
          <h1 className="heading-1 mb-6">
            <span className="block">Premium Natural Food</span>
            <span className="block bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text">
              For Your Best Friend
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Nourish your canine companion with ArcticTreat's premium dog food made from high-quality, natural ingredients that rival human-grade food.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary text-lg py-3 px-8">Take The Quiz</button>
            <button className="btn-outline text-lg py-3 px-8">Browse Products</button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>All-Natural Ingredients</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Human-Grade Quality</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Personalized Plans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 