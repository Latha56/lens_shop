import React, { useContext } from "react";
import { ShopContext } from "./Shop_context";
import { MenuList } from "../../Details/MenuList";
import { Heart_item } from "./Heart_item";
import "./heart.css"

export const Like_item = () => {
  const {liked} = useContext(ShopContext);

  return (
    <div className="heart">
      <div className="heartList">
      { MenuList.map((product) => {
          if (liked[product.id] !== 0) {
            return <Heart_item data={product} />;
          }
        })}
      </div>
    </div>
  );
};
