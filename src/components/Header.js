import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user, cart }, dispatch] = useStateValue();
  const history = useHistory();

  const logout = () => {
    if (user) {
      auth.signOut();
    }
    dispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            className="header-logoImage"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt=""
          />
        </Link>
        <div className="header-logoExplore">
          <p>
            Explore <span className="header-logoPlus">plus</span>
          </p>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            alt=""
          />
        </div>
      </div>
      <div className="header-search">
        <input type="text" />
        <div className="header-searchIcon">
          <SearchIcon />
        </div>
      </div>
      <Link to="/login">
        {user ? (
          <button className="header-login" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="header-login">Login</button>
        )}
      </Link>

      <div className="header-more">
        <p>More</p>
        <KeyboardArrowDownIcon />
      </div>
      <div className="header-cart" onClick={() => history.push("/cart")}>
        <ShoppingCartIcon />
        <p>{cart?.length ? `Cart (${cart.length})` : "Cart"}</p>
      </div>
    </div>
  );
}

export default Header;
