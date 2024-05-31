import {React,useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./login.css"
import Loginpage from './Loginpage'

function Login({islogin}) {
  const [isShown, setIsShown] = useState(false);
  const navigate=useNavigate();
  const [Shown, setShown] = useState(false);
  const rateClick = event => {
    setIsShown(true);
  };

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedFormDataList = JSON.parse(localStorage.getItem("formDataList"));
    const { email, password } = loginDetails;

    const matchedUser = storedFormDataList.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert("Login Successful");
      localStorage.setItem("LoginPerson", JSON.stringify(email));
      setIsLoggedIn(true);
      islogin()
      setShown(!islogin)
      navigate('/Home')

    } else {
      alert("Invalid email or password");
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  if (isLoggedIn) {
    return <div>You are logged in!</div>
  } 

  return (
    <div className="homeproperty">
        <div className='property'>
        <form onSubmit={handleLogin}>
          <label htmlFor="login-email">Email:</label>
          <input   name="email" type="email" placeholder="Enter email..."
          id="login-email"    value={loginDetails.email}  onChange={handleLoginChange} />

          <label htmlFor="login-password">Password:</label>
          <input  type="password" placeholder="Enter passward..."  id="login-password"
            name="password"  value={loginDetails.password}  onChange={handleLoginChange}  />
        
          <label>create account!!  <Link onClick={rateClick}>sigin</Link></label>

          <button  type='submit'>Login</button> 
        </form>
        </div>
        <div>{isShown?<Loginpage />:null}</div>
    </div>
  )
}


export default Login

