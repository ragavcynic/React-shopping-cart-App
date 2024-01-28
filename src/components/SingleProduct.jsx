import React, { useContext } from 'react'
import "./styles.css"
import { Cart } from '../Context'
const SingleProduct = ({prod}) => {
   
   const {cart,setCart} = useContext(Cart)
  return (
    <div className="products">
        <img src={prod.img} alt={prod.productName} />
        <div className='productDesc'>
            <span style={{fontWeight:700}}>{prod.productName}</span>
            <span>${prod.price.substring(0,3)}</span>
        </div>
        
        {cart.includes(prod)?(<button className='add' onClick={()=>{
            setCart(cart.filter((c)=>c.id!==prod.id))
        }}>Remove from Cart</button>):(<button className='add' onClick={()=>{
            setCart([...cart,prod]);
        }}>Add to Cart</button>)}
        
    </div>
  )
}

export default SingleProduct
