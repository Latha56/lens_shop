import React from 'react'
import { useState } from "react"
import "./login.css"

const Loginpage = () => {
  const [isShown, setIsShown] = useState(false);
 
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let formDataList = JSON.parse(localStorage.getItem("formDataList"));
    if (!formDataList) {
      formDataList = [];
    }

    formDataList.push(formValues);

    localStorage.setItem("formDataList", JSON.stringify(formDataList));
    console.log("Form submitted:", formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

    return (
    <div className='property1'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text"
          id="name"  value={formValues.name}  onChange={handleChange}/>

          <label htmlFor="phone">Phone:</label>
          <input  type="text" id="phone" placeholder="phone number..."
          name="phone"  value={formValues.phone}  onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" 
          id="email"  value={formValues.email}  onChange={handleChange}/>

          <label htmlFor="password">Passward</label>
          <input name="password" type="passward"  placeholder="Enter passward..." 
           id="password" value={formValues.password} onChange={handleChange}/>

          <button  type='submit' >Sigin</button>
          {isShown?<p style={{fontSize:"10px",color:"green"}}><b>succesfully created</b></p>:null}
        </form>
    </div>
  )
}

export default Loginpage

