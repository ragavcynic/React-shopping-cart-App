import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/Cart'
function App() {
  

  return (
   <BrowserRouter>
    <Header/>
    <div>
   <Routes>
    
   <Route
  path='/'
  element={<Home />}
  
exact/>
<Route
  path='/cart'
  element={<CartPage/>}
  
/>
      
    
    
   
    </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
