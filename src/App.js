import {  Routes, Route,  useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Product from './components/Product'
import {Cart} from "./components/cart/Cart"
import Checkout from "./components/cart/Checkout"
import { Like_item } from "./components/cart/Like_item"
import "./App.css"
import { useState } from 'react'
import { ShopContextProvider } from "./components/cart/Shop_context"
import Person from "./components/Person"

function App() {
  const [loginin, setlogin] = useState(true)
  const handleset = () => {
    setlogin(!loginin);
  }
  
  return (
    <div  id="grad" >
    <Header islogin={loginin}/>
    <ShopContextProvider>
    <Routes> 
        <Route path="Home" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Login" element={<Login islogin={handleset} />}/>
        <Route path="Logout" element={<Logout />} />
        <Route path="product" element={<Product />} >
        <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='Cart' element={<Cart />} />
        <Route path='Checkout' element={<Checkout />} />
        <Route path='Like_item' element={<Like_item />} />
    </Routes>
    </ShopContextProvider>
    <Footer/>
    </div>
  );
}
export default App


