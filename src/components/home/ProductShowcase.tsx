import React from 'react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Arctic Beef Feast',
      description: 'Premium beef blend with wholesome vegetables and essential nutrients.',
      price: 49.99,
      image: 'https://via.placeholder.com/300x300?text=Beef+Feast',
      tags: ['beef', 'vegetables', 'high-protein'],
    },
    {
      id: 2,
      name: 'Arctic Chicken Delight',
      description: 'Tender chicken mixed with brown rice and garden vegetables.',
      price: 44.99,
      image: 'https://via.placeholder.com/300x300?text=Chicken+Delight',
      tags: ['chicken', 'rice', 'balanced'],
    },
    {
      id: 3,
      name: 'Arctic Fish Supreme',
      description: 'Wild-caught fish with sweet potatoes and omega-rich oils.',
      price: 54.99,
      image: 'https://via.placeholder.com/300x300?text=Fish+Supreme',
      tags: ['fish', 'omega-3', 'grain-free'],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white/20 to-primary-100/30 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            <span className="bg-gradient-to-r from-primary-700 to-accent-600 text-transparent bg-clip-text">
              Our Premium Products
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our range of natural, high-quality dog food formulations crafted with premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="glass p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 overflow-hidden rounded-lg h-48 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="mb-4 text-sm">{product.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">${product.price}</span>
                <button className="btn-outline text-sm py-1.5">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 