import React from "react";
import "./Home.css";
import Catagories from "./Catagories";
import Deals from "./Deals";

function Home() {
  return (
    <div className="home">
      <Catagories />
      <div className="home-body">
        <div className="home-add">
          <img
            className="home-addImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Printers/PC-accessories_v2_1500x300.jpg"
            alt=""
          />
        </div>
        <Deals />
      </div>
    </div>
  );
}

export default Home;
