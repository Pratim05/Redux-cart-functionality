import React from 'react'
import "../Css/Product.css"

function Product(props) {
    console.log(props.thumbnail)
  return (
    <div className='Product'>
        <div className='Product-Box'>
            <div className='img-box'><img src={props.thumbnail} alt=""  /></div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Product