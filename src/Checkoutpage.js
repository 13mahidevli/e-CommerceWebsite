import React from "react";

export default function ({ cart }) {
  return (
    <div>
      <div className="page">
        {cart.map((item) => (
          <div className="item-checkout-list">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>size:{item.size}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
