import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartProduct">
      <div className="cartProduct-body">
        <div className="cartProduct-image">
          <img src={image} alt="" />
        </div>
        <div className="cartProduct-info">
          <h3>{title}</h3>
          <span>₹{price}</span>
          <div className="cartProduct-button">
            <span>SAVE FOR LATER</span>
            <span className="cartProduct-remove" onClick={removeFromCart}>
              REMOVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
