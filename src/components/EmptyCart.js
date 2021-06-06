import React from 'react';
import { useHistory } from 'react-router';
import "./EmptyCart.css";

function EmptyCart() {
    const history = useHistory();
    return (
        <div className="emptyCart">
            <img
              className="emptyCart-Image"
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              alt=""
            />
            <h4>Missing Cart items?</h4>
            <p>Login to see the items you added previously</p>
            <button
              className="emptyCart-login"
              onClick={() => history.push("/login")}
            >
              Login
            </button>
        </div>
    )
}

export default EmptyCart;
