import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import User from './User.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

import Contact from './Contact.jsx'
import Selam from './Selam.jsx'
import Pizza from './Pizza.jsx'
import Burger from './Burger.jsx'
import Swiggy from './Swiggy.jsx'

import CartPage from './CartPage.jsx'
import Cartpage1 from './Cartpage1.jsx'
import Cartpage2 from './Cartpage2.jsx'
import Counter from './Counter.jsx';


import './App.css'

function App() {
 

  return (
    <>
    {/* <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/User' element={<User/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter> */}

   


<ToastContainer/>
     <Routes>
      
        <Route path="/" element={<Swiggy/>} />
        <Route path="/Swiggy" element={<Swiggy/>} />

        <Route path="/item/1" element={<Selam />} />
        <Route path="/item/2" element={<Pizza />} />
        <Route path="/item/3" element={<Burger/>} />

        <Route path="/cartpage" element={<CartPage />} />
     
        <Route path="/Selam" element={<Selam/>} />
        <Route path="/Pizza" element={<Pizza/>} />
        <Route path="/cartpage1" element={<Cartpage1/>} />

         <Route path="/Burger" element={<Burger/>} />
        <Route path="/cartpage2" element={<Cartpage2/>} />


     
    
      </Routes> 

    </>
      
  )
}

export default App
