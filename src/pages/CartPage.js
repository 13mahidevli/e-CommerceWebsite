import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;