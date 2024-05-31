import React from "react"
import { useState ,useContext } from "react"
import { Link  } from "react-router-dom"
import "./menu.css"
import { FaRegHeart , FaHeart  } from "react-icons/fa";
import { ShopContext } from "./cart/Shop_context";

function MenuItem(props) {
  const [heartColor, setHeartColor] = useState(true);
  const {addToHeart,removeToHeart}=useContext(ShopContext);

  const handleHeartClick = () =>{
      setHeartColor(!heartColor);
  };
  
  return (
    <button className="menuItem">
      <Link to={`/Product/${props.id}`} style={{ display: 'flex' }}>
      <div style={{ backgroundImage: `url(${props.image})` }}></div></Link>
      {heartColor?(
      <Link onClick={()=>removeToHeart(props.id)}><FaRegHeart
      size={20}
      color={heartColor}
      style={{ cursor: "pointer" ,color:"black" ,marginLeft:"200px" ,paddingBottom:"0px"}}
      onClick={handleHeartClick}/></Link>
      ):(
      <Link onClick={()=>addToHeart(props.id)}>
      <FaHeart
      size={20}
      color={heartColor}
      style={{ cursor: "pointer",color:"red",marginLeft:"200px" ,paddingBottom:"0px"}}
      onClick={handleHeartClick}/></Link>)}
      <h1> {props.name} </h1>
      <p> ${props.price} </p>
    </button>
  );
}
export default MenuItem



  

