import React from 'react';
import AnimatedElement from '../common/AnimatedElement';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Premium Ingredients',
      description: 'We source only the highest quality ingredients, including real meat like beef, chicken, fish, veal, and turkey.',
      icon: (
        <svg className="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Personalized Nutrition',
      description: "Take our quiz to find the perfect food blend based on your dog's breed, age, weight, activity level, and dietary needs.",
      icon: (
        <svg className="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Subscriptions',
      description: 'Choose between one-time purchases or convenient subscription plans that deliver fresh food right to your doorstep.',
      icon: (
        <svg className="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              <span className="bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text">
                Why Choose ArcticTreat
              </span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We're passionate about creating dog food that's not just nutritious, but also delicious and tailored to your pet's specific needs.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={index * 0.2} direction="up">
              <div 
                className="glass p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full"
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.6} direction="up">
          <div className="mt-16 text-center">
            <button className="btn-primary">Learn More About Our Process</button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features; 