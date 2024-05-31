import React from "react";
import {FaHeart  } from "react-icons/fa";

export const Heart_item  = (props) => {
  const {name, image, price } = props.data;

  return (
    <div className="heartItem">
      <div><img src={image} /></div>
      <FaHeart
      size={20}
      style={{ cursor: "pointer",color:"red",marginLeft:"220px" ,paddingBottom:"0px"}}/>
      <p><b>{name}</b></p>
      <p> Price: ${price}</p>
      </div>
  );
};
