import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import "./styles.css"
import {Cart} from '../Context';
faker.seed(100);
const Home = () => {

    const productsArray = [...Array(20)].map(()=>({
       
        id:faker.string.uuid(),
        productName:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.avatar(),
    }))
   
   /*  console.log(productsArray) */
   const [products]=useState(productsArray)
  return (
    <div className='productContainer'>
      {products.map(prod=>(
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default Home
