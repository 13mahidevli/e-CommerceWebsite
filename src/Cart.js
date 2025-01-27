import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart({ cart, remove, number }) {
  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div>
              <CartItem remove={remove} key={index} item={item} number="1" />
            </div>
          ))}
          <button>
            <Link to="/checkout-page">checkout</Link>
          </button>
        </>
      ) : (
        <section>
          <p>your cart is empty !!!</p>
        </section>
      )}
    </div>
  );
}
