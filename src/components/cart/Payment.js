import React, { useContext, useState } from "react";
import { ShopContext } from "./Shop_context";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FcApproval } from "react-icons/fc"

function Payment() {
  const {getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [show,setshow]=useState(false);
  const order = event => {
    setshow(true);
  };
  return (
    <>
    <div className='payment'>
      <div>
      <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td>subtotal</td>
          <td><HiMiniCurrencyRupee size={16} style={{ cursor: "pointer",color:"black"}} />{totalAmount}</td>
        </tr>
        <tr>
          <td>shillping & handling</td>
          <td style={{color:'#FF4500'}}><b>Free</b></td>
        </tr>
        <tr>
          <td>tax</td>
          <td><HiMiniCurrencyRupee size={16} style={{ cursor: "pointer",color:"black"}} /> 31.50</td>
        </tr>
        <tr>
          <td>total</td>
          <td style={{color:'#FF4500'}}><HiMiniCurrencyRupee size={16} style={{ cursor: "pointer",color:'#FF4500'}} /><b>{totalAmount+31.50}</b></td>
        </tr>
      </tbody>
    </table>
    </div>
    <button onClick={order}>Place Order</button>
    </div>
    {show?<h6 className="payment1">{<FcApproval />}Order Placed</h6>:null}
    </>
  )
}

export default Payment
