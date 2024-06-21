import React from 'react'
import { useDispatch } from 'react-redux'
import "../Css/Product.css"
import { addItem } from '../redux/slices/cartSlice'

function Product(props) {
  const dishpatch = useDispatch()
  
  return (
    <div className='Product'>
        <div className='Product-Box'>
            <div className='img-box'><img src={props.thumbnail} alt=""  /></div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Price : {props.price}</p>
        </div>
        <button className='CartBtn' onClick={(e)=>dishpatch(addItem({
          name:props.title, price:props.price, id : props.id
        }))}>Add to Cart</button>
    </div>
  )
}

export default Product