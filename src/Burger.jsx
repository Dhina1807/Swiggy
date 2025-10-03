import React from 'react'
import { useState } from "react";  
import { Link } from "react-router-dom";
import { addToCart , removeFromCart} from "./slices/FoodSlices";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import swiggy from "./assets/swiggy.png";
import glass from "./assets/glass.png";
import offer from "./assets/offer.png";
import user1 from "./assets/user1.png";
import game from "./assets/game.png";
import cart from "./assets/cart.png";
import bag from "./assets/bag.png";
import maps from "./assets/maps.png";
import time from "./assets/time.png";
import star from "./assets/star.png";
import star1 from "./assets/star1.png";
import bob from "./assets/bob.avif";
import hdc from "./assets/hdc.avif";
import scribble from "./assets/scribble.png";
import burger1 from "./assets//burger1.jpg"
import burger2 from "./assets//burger2.jpg"
import burger3 from "./assets//burger3.jpg"
import burger4 from "./assets//burger4.jpg"
import burger5 from "./assets//burger5.jpg"


const burgers = [
  {
    id:1,
    name: "Veggie Feast",
    price: 300,
    rating: "4.6",
    desc: "Crispy, spicy Chicken 65 pieces layered with flavorful basmati rice and traditional biryani spices. ",
    img: burger1,
  },
  {
    id:2,
    name: "Tandoori Paneer",
    price: 450,
    rating: "4.8",
    desc: "Tender mutton slow-cooked with authentic spices layered in fragrant basmati rice. ",
    img: burger2,
  },
  {
    id:3,
    name: "Country Feasti",
    price: 150,
    rating: "4.5",
    desc: "Soft paneer cubes blended with flavorful masala and basmati rice. ",
    img: burger3,
  },
  {
    id:4,
    name: "Veggie Supreme",
    price: 550,
    rating: "4.5",
    desc: "Fish cooked with aromatic spices layered in fragrant rice. ",
    img: burger4,
  },
  {
    id:5,
    name: "Chicken Supreme",
    price: 450,
    rating: "4.5",
    desc: "Juicy shrimp mixed with biryani masala and basmati rice.",
    img: burger5,
  },
];







const Burger = () => {



     const [counts, setCounts] = useState(Array(burgers.length).fill(0));
    
      const dispatch= useDispatch()
        const removeitem = (index)=>{
        dispatch(removeFromCart(index))
      }
    
        const [inCart, setInCart] = useState(Array(burgers.length).fill(false));
    
        const toggleCart = (index, food) => {
        const newInCart = [...inCart];
        if (newInCart[index]) {
          // currently in cart → remove it
          
          dispatch(removeFromCart(index));
          
          newInCart[index] = false;
           
        } else {
          // not in cart → add it
          dispatch(addToCart(food));
          
          newInCart[index] = true;
         
        }
        setInCart(newInCart);
        
      };
    
       const notify1 = () =>toast.success("1 item Added in cart")
    
    
    
    
    
      const increment = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
      };
    
      const decrement = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) newCounts[index] -= 1;
        setCounts(newCounts);
      };







  return (
    <div className="mx-auto max-w-[1300px]">
      {/* Navbar */}
      <div className="flex items-center font-light shadow-xl px-4 py-2">
        <Link to="/Swiggy"><img src={swiggy} alt="swiggy" className="w-[72px] h-[72px]" /></Link>
        <p className="ml-5 mt-2 underline text-xl font-bold hover:text-orange-500">
          other
        </p>

        <ul className="flex gap-10 ml-auto items-center mr-3 ">
          <Link
            to=""
            className="flex items-center gap-2 font-bold hover:text-orange-500"
          >
            <img src={bag} className="w-5 h-5" alt="suit" />
            Swiggy Corporate
          </Link>

          <li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
            <img src={glass} className="w-5 h-5" alt="search" />
            Search
          </li>

          <Link
            to="/offer"
            className="flex items-center gap-2 font-bold text-black hover:text-orange-500"
          >
            <img src={offer} className="w-5 h-5" alt="offer" />
            Offers
          </Link>

          <li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
            <img src={game} className="w-5 h-5" alt="help" />
            Help
          </li>

          <Link
            to="/User"
            className="flex items-center gap-2 font-bold hover:text-orange-500"
          >
            <img src={user1} className="w-5 h-5" alt="user" />
            Sign in
          </Link>

          <Link to="/CartPage2"><li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
            <img src={cart} className="w-5 h-5" alt="cart" />
            Cart
          </li></Link>
        </ul>
      </div>

      {/* Breadcrumb */}
      <p className="text-[10px] mt-10 ml-[280px] hover:text-orange-500">
        Home / Madurai / Burger King
      </p>

      {/* Restaurant Info */}
      <p className="font-bold text-3xl mt-[30px] ml-[280px]">Burger King</p>
      <div className="w-[750px] h-[180px] ml-[280px] mt-10 px-5 py-5 rounded-[40px] shadow-2xl">
        <div className="flex">
          <img src={star} className="w-[18px] h-[18px]" />
          <p className="ml-2 font-bold">4.9 (5.3K+ ratings) • ₹309 for two</p>
        </div>
        <p className="mt-2 text-sm ml-2 text-orange-500 font-bold underline">
          Chessey, Burgers
        </p>
        <div className="flex my-2">
          <img src={maps} className="w-[18px] h-[18px] mt-2 ml-2" />
          <p className="font-bold ml-3 mr-4">Outlet</p>
          <p>Alagapuram Pudhur</p>
        </div>
        <div className="flex">
          <img src={time} className="w-[18px] h-[18px] mt-4 ml-2" />
          <p className="font-bold text-sm ml-4 mt-3">20-25 mins</p>
        </div>
      </div>

      {/* Deals */}
      <p className="text-xl font-bold mt-10 ml-[280px]">Deals For You</p>
      <div className="flex">
        <div className="w-[300px] h-[70px] border border-gray-300 ml-[280px] rounded-[20px] mt-5 flex">
          <img src={bob} className="w-[50px] h-[50px] mt-2 ml-5" />
          <div>
            <p className="mt-3 ml-3 font-bold">20% Off Upto ₹100</p>
            <p className="ml-3 font-bold text-gray-400">USE BOBDC100</p>
          </div>
        </div>
        <div className="w-[300px] h-[70px] border border-gray-300 ml-[50px] rounded-[20px] mt-5 flex">
          <img src={hdc} className="w-[50px] h-[50px] mt-2 ml-5" />
          <div>
            <p className="mt-3 ml-3 font-bold">10% Off Upto ₹100</p>
            <p className="ml-3 font-bold text-gray-400">USE RUPAY100</p>
          </div>
        </div>
      </div>

      {/* Menu Header */}
      <div className="flex ml-[580px] mt-16">
        <img src={scribble} className="w-[30px] h-[30px]" />
        <p className="mt-1">MENU</p>
        <img
          src={scribble}
          className="w-[30px] h-[30px] rotate-180 mt-1"
        />
      </div>
      <input
        className="w-[870px] h-[50px] ml-[200px] bg-gray-300 rounded-[20px] border-none mt-5 mb-10 px-4"
        placeholder=""
      />

      <hr className="mx-[200px]" />

      {/* Food Items */}
      <p className="text-lg font-bold mt-10 ml-[200px]">Burgers (18)</p>
      <div>
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="w-[870px] h-[200px] ml-[200px] mt-40 px-5 py-5 rounded-md relative"
          >
            <p className="text-lg font-bold -mt-40">{burger.name}</p>
            <p className="text-lg font-bold">{burger.price}</p>

            <div className="flex items-center mt-2">
              <img className="w-[15px] h-[15px] " src={star1} alt="star" />
              <p className="text-green-900 font-bold ml-2">{burger.rating}</p>
            </div>

            <p className="text-sm mt-2">{burger.desc}</p>

            <img
              src={burger.img}
              alt={burger.name}
              className="w-[150px] h-[150px] rounded-md ml-[600px] -mt-[150px] object-cover"
            />
             <button
            className={`px-6 py-1 rounded mt-3 ml-[630px] ${
              inCart[index] ? "text-red-400 font-bold" : "text-green-500 font-bold"
            } bg-stone-300`}
            onClick={() => toggleCart(index, burger)}
          >
            {inCart[index] ? "REMOVE" : "ADD"}
          </button> 
      
      

          </div>
        ))}
      </div>
    </div>
  );
}
   
  


export default Burger




