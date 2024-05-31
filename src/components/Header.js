import { Link, NavLink } from "react-router-dom"
import {React , useState} from 'react'
import { GiSpectacles } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import {  FaHeart  } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"
//import Clock from "./Clock";
import "./header.css"
import Person from "./Person"

function Header({islogin}) {
  const [display, isdisplay] = useState(false);
  const displayClick = event => {
    isdisplay(!display);
  };
  return (
    <>
    <div className='navbar'>
      <div className='nav-logo' >
        <GiSpectacles size={50} />
        <NavLink to="/home" style={{ color: "black", textDecoration: "none" }}> <p>LENS SHOPPER</p> </NavLink>
      </div>
      <ul className="nav-menu">
        <NavLink to="/Home" style={({ isActive }) => { return isActive ? { color: "plum" } : { color: "black", textDecoration: "none" }; }}> Home </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/Menu" style={({ isActive }) => { return isActive ? { color: "plum" } : { color: "black", textDecoration: "none" }; }}> Menu </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/Feedback" style={({ isActive }) => { return isActive ? { color: "plum" } : { color: "black", textDecoration: "none" }; }}> Feedback </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
      <div className="nav-login-cart">
        {islogin && <NavLink to="/Login" ><button className="button-click">Login</button></NavLink>}
        <Link to="/Like_item"><FaHeart  size={20} style={{ cursor: "pointer",color:"red"}}/></Link>
        <Link to="/Cart"><FaShoppingCart size={20} style={{ cursor: "pointer",color:"black"}}/></Link>
        {islogin ?null :<IoMdPerson size={20} style={{ cursor: "pointer",color:"black"}} onClick={displayClick}/>}
      </div>
    </div>
    {display?<Person />:null}
    </>
  )
}

export default Header

