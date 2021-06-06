import React from "react";
import { useStateValue } from "./StateProvider";
import "./TotalPrice.css";

function TotalPrice() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="totalPrice">
      <span className="totalPrice-Details">PRICE DETAILS</span>
      <div className="totalPrice-amount">
        <span>Total Amount ({cart?.length ? cart.length : 0} {cart?.length > 1 ? "items" : "item"})</span>
        <span>₹ {cart?.reduce((amount, item) => item.price + amount, 0)}</span>
      </div>
    </div>
  );
}

export default TotalPrice;
