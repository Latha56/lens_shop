import React  from 'react';
import { MenuList } from "../Details/MenuList"
import { useParams } from 'react-router-dom'
import ProductDisplay from './ProductDisplay' 

const Product = () => {
    const {productId}=useParams(); // gets the value of productId from the URL
    const product = MenuList.find((e)=>e.id==Number(productId))

    const onAdd = () => {
    alert("added to cart")
    }
  return (
    <div>
      <ProductDisplay onAdd={onAdd} pro={product}/>  
    </div>
  )
}

export default Product


