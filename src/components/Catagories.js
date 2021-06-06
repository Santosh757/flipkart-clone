import React from "react";
import Catagory from "./Catagory";
import "./Catagories.css";

function Catagories() {
  return (
    <div className="catagories">
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
        catTitle="Top Offers"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
        catTitle="Grocery"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
        catTitle="Mobiles"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
        catTitle="Fashion"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
        catTitle="Electronics"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
        catTitle="Home"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
        catTitle="Appliances"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
        catTitle="Travel"
      />
      <Catagory
        catImage="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
        catTitle="Beauty, Toys & More"
      />
    </div>
  );
}

export default Catagories;
