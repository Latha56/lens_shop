import React from "react"
import {MenuList}   from "../Details/MenuList"
import MenuItem from "./MenuItem"
import "./menu.css" 


function Menu() {
  return (
    <div className="menu">
      <div className="menuList">
        {MenuList.map((menuItem) => {
          return (
            <MenuItem
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;