import React, { useState } from "react";

export default function ProductItem({ product, addtocart }) {
  const [valueofsize, setvalueofsize] = useState("");
  return (
    <div>
      <div className="product-item">
        <div className="describe">
          <img src={product.url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div name="" id="">
            <button value="S" onClick={(e) => setvalueofsize(e.target.value)}>
              S
            </button>
            <button value="M" onClick={(e) => setvalueofsize(e.target.value)}>
              M
            </button>
            <button value="L" onClick={(e) => setvalueofsize(e.target.value)}>
              L
            </button>
          </div>
        </div>
        <button onClick={() => addtocart(product, valueofsize)}>
          add to cart
        </button>
      </div>
    </div>
  );
}
