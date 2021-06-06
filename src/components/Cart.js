import React from "react";
import "./Cart.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useStateValue } from "./StateProvider";
import EmptyCart from "./EmptyCart";
import TotalPrice from "./TotalPrice";
import CartProduct from "./CartProduct";

function Cart() {
  const [{ user, cart }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h3>My Cart</h3>
          {cart.length ? (
            <div className="cart-headerLocation">
              <div className="cart-deliver">
                <LocationOnIcon />
                <span>Deliver to</span>
              </div>
              <div className="cart-checkPincode">
                <input
                  className="cart-pincode"
                  type="text"
                  placeholder="Enter delivery pincode"
                />
                <span className="cart-check">Check</span>
              </div>
            </div>
          ) : null}
        </div>
        {cart.length ? (
          cart.map((item) => (
            <CartProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        ) : (
          <EmptyCart />
        )}
        {cart.length ? (
          <div className="cart-order">
            <button>PLACE ORDER</button>
          </div>
        ) : null}
      </div>
      {cart.length ? <TotalPrice /> : null}
    </div>
  );
}

export default Cart;
