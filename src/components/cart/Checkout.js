import React from 'react'
import { useState } from 'react'
import "./cart.css"
import Payment from './Payment';

function Checkout() {
  const [shown, setShown] = useState(false);

  const checkout = event => {
    event.preventDefault()
    setShown(true)
  };

  return (
    <>
    <div className='container'>
    <div className='title'><h2>Shipping</h2></div>
    <form className='contain'>
    <div class="form-row" ><input type="text" id="fname" name="fname" placeholder='First Nmae'/>
    <input type="text" id="name1" name="name1" placeholder='Lastname' /></div>
    <div class="form-column"><input type="address" id="address" name="address" placeholder='Address'/></div>
    <div class="form-row" ><input type="text" id="city" name="city" placeholder='City'/>
    <input type="text" id="state" name="state" placeholder='State : only on karnataka' /></div>
    <div class="form-row">
    <input type="number" id="number" name="number" placeholder='Postal Number' /></div>
    <div class="form-row">
    <input type="number" id="number1" name="number1" placeholder='Phone Number' /></div>
    </form>
    <button type="submit" onClick={checkout}>Continue</button>
    </div>
    {shown?<Payment/>:null}
    </>
  )
}

export default Checkout
