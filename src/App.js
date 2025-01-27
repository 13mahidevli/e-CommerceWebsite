import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Home from "./Home";
import Checkoutpage from "./Checkoutpage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import oip from "./asset/OIP.jpg";
import oip1 from "./asset/OIP (1).jpg";
import oip2 from "./asset/OIP (2).jpg";
import "./App.css";

const products = [
  { id: 1, name: "shirt", price: 1.5, url: oip },
  { id: 2, name: "pant", price: 0.8, url: oip1 },
  { id: 3, name: "cap", price: 1.2, url: oip2 },
];

export default function App() {
  const [currpage, setcurrpage] = useState("home");
  const [cart, setcart] = useState([]);
  const addtocart = (product, size) => {
    const existing = cart.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existing) {
      setcart(
        cart.map((item) =>
          item.id === product.id && item.size == size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity: 1, size }]);
    }
  };

  const changepage = (page) => {
    setcurrpage(page);
  };

  const remove = (id) => {
    const removeitem = cart.filter((item) => item.id !== id);
    setcart(removeitem);
  };

  return (
    <Router>
      <div>
        <header>
          <div className="header-item">
            <div
              onClick={() => changepage("home")}
              className={currpage == "home" ? "select" : "home"}
            >
              <Link to="/">
                <a>HOME</a>
              </Link>
            </div>
            <div
              onClick={() => changepage("products")}
              className={currpage == "products" ? "select" : "products"}
            >
              <Link to="/products">
                <a>products</a>
              </Link>
            </div>
            <div
              onClick={() => changepage("cart")}
              className={currpage == "cart" ? "select" : "cart"}
            >
              <Link to="/cart">
                <a>CART</a>
              </Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route
            path="/products"
            element={<ProductList addtocart={addtocart} products={products} />}
          ></Route>
          <Route path="/" element={<Home />}>
            hi
          </Route>
          <Route
            path="/cart"
            element={<Cart remove={remove} cart={cart} />}
          ></Route>
          <Route
            path="/checkout-page"
            element={<Checkoutpage cart={cart} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
