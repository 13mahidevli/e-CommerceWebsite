// import React from 'react';
// import ProductItem from './ProductItem';

// const products = [
// { id: 1, name: 'Apple', price: 1.5 },
// { id: 2, name: 'Banana', price: 0.8 },
// { id: 3, name: 'Orange', price: 1.2 },
// ];

// function ProductList({ addToCart }) {
//   return (
// <div className="product-list">
//   <h2>Available Products</h2>
//   <div className="product-items">
//     {products.map((product) => (
//       <ProductItem key={product.id} product={product} addToCart={addToCart} />
//     ))}
//   </div>
// </div>
//   );
// }

// export default ProductList;

import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ addtocart,products }) {
  return (
    <div>
      <div className="product-list">
        <h2>Available Products</h2>
        <div className="product-items">
          {products.map((product) => (
            <div className="box">
              <ProductItem
                key={product.id}
                product={product}
                addtocart={addtocart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
