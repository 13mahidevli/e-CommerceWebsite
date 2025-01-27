import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import CartContext from '../context/CartContext';

const HomePage = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description for product 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description for product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description for product 3', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;