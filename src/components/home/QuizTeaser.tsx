import React from 'react';

const QuizTeaser: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="heading-2 mb-6">
                <span className="bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text">
                  Find Your Dog's Perfect Food
                </span>
              </h2>
              <p className="text-lg mb-8">
                Every dog is unique, with different nutritional needs based on breed, age, weight, and activity level. Take our quick quiz to discover the perfect food formulation for your best friend.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold mr-4">1</div>
                  <p>Tell us about your dog's breed and size</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold mr-4">2</div>
                  <p>Share their age, activity level, and any dietary needs</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold mr-4">3</div>
                  <p>Get personalized food recommendations and nutrition plans</p>
                </div>
              </div>
              
              <button className="btn-primary mt-8">Take The Quiz Now</button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Happy dog" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Glass card overlay */}
              <div className="glass p-4 absolute -bottom-6 -right-6 rounded-xl max-w-xs">
                <p className="font-medium text-primary-800">
                  "The quiz helped me find the perfect food for my picky Shiba Inu. He loves it!"
                </p>
                <p className="text-sm mt-2">— Sarah & Max</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizTeaser; 