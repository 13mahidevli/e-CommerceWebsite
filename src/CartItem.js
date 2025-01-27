import React, { useState, useEffect } from "react";

export default function ({ item, remove }) {
  const [number, setnumber] = useState(1);
  return (
    <div className="cart-item">
      <img src={item.url} alt={item.name} />
      <h4>{item.name}</h4>
      <p>quantity:{item.quantity}</p>
      <p>size:{item.size}</p>
      <button onClick={() => remove(item.id)}>remove</button>
    </div>
  );
}
