import React from "react";
import "./Deals.css";
import Product from "./Product";
import { v4 as uuidv4 } from 'uuid';

function Deals() {
  return (
    <div className="deals">
      <div className="deals-header">
        <h2>Deals of the Day</h2>
        <button className="deals-headerButton">View All</button>
      </div>
      <div className="deals-product">
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/klb78nk0/mobile/m/2/k/galaxy-f62-sm-e625fzggins-samsung-original-imagygxxse8gbaby.jpeg?q=70"
          title="SAMSUNG Galaxy F62 (Laser Green, 128 GB)  (6 GB RAM)"
          rate="4.3"
          ratings="17400"
          price={23999}
        />
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/k2arbm80/headphone/c/v/m/realme-buds-original-imafhzf2yxgn8hyh.jpeg?q=70"
          title="realme Buds Wireless Bluetooth Headset  (Yellow, In the Ear)"
          rate="4.2"
          ratings="201010"
          price={1599}
        />
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/kd69z0w0/smartwatch/7/2/k/w46-android-ios-oppo-original-imafu4sdhxgezsgg.jpeg?q=70"
          title="OPPO Watch 46 mm WiFi Smartwatch  (Black Strap, Regular)"
          rate="3.8"
          ratings="1344"
          price={19990}
        />
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/kjlrb0w0/computer/a/k/b/asus-original-imafz522ntfk9hwx.jpeg?q=70"
          title="ASUS VivoBook 15 Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD) "
          rate="4.3"
          ratings="148"
          price={52990}
        />
        </div>
        <div className="deals-product">
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
          title="boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Raging Red)"
          rate="4.2"
          ratings="692500"
          price={1299}
        />
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/kmds4nk0/mobile/2/m/e/note-10-pro-max-mobhqsd1-redmi-original-imagfatnscznx75f.jpeg?q=70"
          title="REDMI Note 10 Pro Max (Glacial Blue, 128 GB)  (8 GB RAM)"
          rate="4.2"
          ratings="159"
          price={24799}
        />
        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/kkoc70w0/smartwatch/r/l/q/hes-b09-android-ios-honor-original-imafzz6fvzkmjfsy.jpeg?q=70"
          title="Honor Watch ES Smartwatch  (Pink Strap, Regular)"
          rate="4.3"
          ratings="1361"
          price={4999}
        />

        <Product
        id={uuidv4()}
          image="https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/u/f/w/8-5g-rmx3241-realme-original-imag2d8ett6ukhcs.jpeg?q=70"
          title="realme 8 5G (Supersonic Blue, 128 GB)  (4 GB RAM) 
          5000 mAh Battery"
          rate="4.4"
          ratings="1600"
          price={14999}
        />
      </div>
    </div>
  );
}

export default Deals;
