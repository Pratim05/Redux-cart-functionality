import React from 'react'
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import '../Css/Cart.css'

import { useSelector } from 'react-redux';


function Cart() {
  const items = useSelector((state)=>state)
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
          <h1>Total No of Items : {items.cart.length}</h1>
          {items.cart.map((item)=>{
            return <div className='item'>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button><ImCross /></button>
            </div>
            
          })}

        </div>
      )}

    </div>
  )
}

export default Cart