import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${name} at ${address}. Total: $${total}`);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <button type="submit">Place Order</button>
      </form>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CheckoutPage;