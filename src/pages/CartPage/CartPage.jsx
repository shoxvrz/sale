import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);


  return (
    <div className="cart">
      {cartItems.map((pro) => (
        <div key={pro.id}>
          <h1>{pro.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
