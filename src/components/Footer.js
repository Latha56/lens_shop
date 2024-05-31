import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { GiSpectacles } from "react-icons/gi";
import "./header.css";
function Footer() {
  return (
    <div className="footer">
        <ul className="links">
          <li>Company</li>
          <li>Product</li>
          <li>Offers</li>
          <li>Contact us</li>
        </ul>
      <p><FaInstagram />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaWhatsapp />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaPinterest />
      </p>
      <div className="copy">
      <hr />
      <p> &copy; 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;