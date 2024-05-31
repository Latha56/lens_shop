import React, { useContext } from 'react'
import "./product.css" 
import { Link } from 'react-router-dom'
import { MdStar } from "react-icons/md"
import { TiStarHalf } from "react-icons/ti"
import { ShopContext } from './cart/Shop_context'

const ProductDisplay = (props) => {
    const {pro,onAdd}=props;
    const {addToCart}=useContext(ShopContext)
    
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='product-list'>
                <img src={pro.image} alt="" />
                <img src={pro.image} alt="" />
                <img src={pro.image} alt="" />
            </div>
            <div className='product-display'>
                <img className='main-image' src={pro.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{pro.name}</h1>
            <div>
            <MdStar size={20}/><MdStar size={20} /><MdStar size={20}/><MdStar size={20} /><TiStarHalf size={20} />
            </div> 
            <div className='product-price'> 
                <h1>${pro.price}</h1>
            </div>
            <p>
            Slim lines and metallic textures. Many eyeglasses in this style have a certain vintage appeal, but you'll find others with an undeniably modern aesthetic.
            this are light weight and comfortable on the face.
            </p>
            <div className='cart'>
            <Link onClick={()=>addToCart(pro.id)}>
            <button onClick={onAdd} >ADD TO CART</button>
            </Link>
            <p><b>Category : </b>{pro.name}</p>
            <p><b>Tags : </b>Modern,Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
