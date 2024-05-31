import { createContext, useState } from "react";
import { MenuList } from "../../Details/MenuList";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < MenuList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultHeart = () => {
  let heart = {};
  for (let i = 1; i < MenuList.length + 1; i++) {
    heart[i] = 0;
  }
  return heart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [liked,setliked]=useState(getDefaultHeart());

  const addToHeart = (itemId) => {
    setliked((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }; 
  const removeToHeart = (itemId) => {
    setliked((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }; 

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = MenuList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    liked,
    addToHeart,
    removeToHeart,
  };
  
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
