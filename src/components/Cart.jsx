import React, { useContext, useEffect, useState } from 'react'
import "./styles.css"
import SingleProduct from './SingleProduct'
import {Cart} from "../Context"

const CartPage = () => {
    const {cart} = useContext(Cart)
    const [total,setTotal] = useState()
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
    },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>MY CART</span>
      <span style={{fontSize:30,display:'block'}}>Total : {total}</span>
      <div className='productContainer'>
      {cart.map(prod=>(
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
    </div>
  )
}

export default CartPage;
