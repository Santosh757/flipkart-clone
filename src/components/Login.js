import React, { useEffect, useState } from "react";
import "./Login.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  const regirster = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-body">
        <div className="login-header">
          {newUser ? (
            <>
              <h2>Looks like you're new here!</h2>
              <p>Sign up with your email to get started</p>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </>
          )}
          <img
            className="login-headerLogo"
            src="https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg"
            alt=""
          />
        </div>
        <form className="login-form">
          {newUser ? (
            <>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}
          <p className="login-terms">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </p>

          {newUser ? (
            <button className="login-button" type="submit" onClick={regirster}>
              Create an account
            </button>
          ) : (
            <button className="login-button" type="submit" onClick={login}>
              Login
            </button>
          )}

          {newUser ? (
            <p className="login-signUp" onClick={() => setNewUser(false)}>
              Existing User? Log in
            </p>
          ) : (
            <p className="login-signUp" onClick={() => setNewUser(true)}>
              New to Flipkart? Create an account
            </p>
          )}
        </form>
      </div>
      <Link to="/">
        <CloseIcon className="login-close" />
      </Link>
    </div>
  );
}

export default Login;
