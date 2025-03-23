import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/home/ProductShowcase';
import QuizTeaser from '../components/home/QuizTeaser';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductShowcase />
      <QuizTeaser />
    </Layout>
  );
};

export default Home; 