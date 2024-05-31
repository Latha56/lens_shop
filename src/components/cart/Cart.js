import React, { useContext } from "react";
import { ShopContext } from "./Shop_context";
import { MenuList } from "../../Details/MenuList";
import { CartItem } from "./Cart_item";
import {Link, useNavigate } from "react-router-dom";
import "./cart.css"

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate(); 

  return (
    <div className="cart">
      <div className="cart1">
          { MenuList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="cart1">
        <div className="cart-design">
        <h5> Sub-total : ${totalAmount} </h5>
        <button onClick={() => navigate("/Menu")}> Continue Shopping </button>
        <Link to="/Checkout"><button >{" "}Checkout{" "}
        </button></Link>
        </div>
        </div>
      ) : (
        <h3><center>Your Shopping Cart is Empty</center></h3>
      )}
    </div>
  );
};
