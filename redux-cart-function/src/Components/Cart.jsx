import React from 'react'
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import '../Css/Cart.css'

import { useDispatch, useSelector } from 'react-redux';
import { delItem } from '../redux/slices/cartSlice';


function Cart() {
  const items = useSelector((state)=>state)
  const dispatch = useDispatch()
  console.log('Items', items)
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className='CartArea'>
      <button onClick={toggleDropdown}>{isOpen ? <ImCross /> : <FaCartArrowDown />}</button>
      {isOpen && (
        <div className='CartItems'>
          <h3>Total No of Items : {items.cart.length}</h3>
          {items.cart.map((item,index)=>{
            return <div className='item'>
              <h5>{index+1}</h5>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={(e)=>dispatch(delItem(index))}><ImCross /></button>
            </div>
            
          })}

        </div>
      )}

    </div>
  )
}

export default Cart