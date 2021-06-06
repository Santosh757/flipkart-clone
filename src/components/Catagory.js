import React from 'react';
import "./Catagory.css";

function Catagory({catImage, catTitle}) {
    return (
        <div className="catagory">
            <img src={catImage} alt="" />
            <p>{catTitle}</p>
        </div>
    )
}

export default Catagory;
