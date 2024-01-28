import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
import { Cart } from '../Context'
const Header = () => {
    const {cart} = useContext(Cart)
  return (
    <div>
      <span className='header'>React context API</span>
      <ul className='nav'>
        <li className='prod'>
            <Link to={"/"}>Home</Link>
        </li>
        <li className='prod'>
            <Link to={"/cart"}>Cart: {cart.length}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
