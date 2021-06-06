import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, rate, ratings, price }) {
  const [{ user, cart }, dispatch] = useStateValue();

  const addToCart = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          image: image,
          title: title,
          rate: rate,
          ratings: ratings,
          price: price,
        },
      });
    } else {
      alert("Please login to add products into the cart...");
    }
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <h3>{title}</h3>
        <div className="product-rating">
          <div className="product-ratingPoint">
            <h4>{rate}</h4>
            <StarRateIcon className="pruduct-ratingStar" />
          </div>
          <p className="product-ratings">({ratings})</p>
        </div>
        <h3>₹{price}</h3>
        <button className="product-add" onClick={addToCart}>
          <ShoppingCartIcon />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Product;
