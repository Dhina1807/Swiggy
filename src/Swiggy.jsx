import React from "react";
import swiggy from "./assets/swiggy.png";
import { Link } from "react-router-dom";
import glass from "./assets/glass.png";
import offer from "./assets/offer.png";
import user1 from "./assets/user1.png";
import game from "./assets/game.png";
import cart from "./assets/cart.png";
import bag from "./assets/bag.png";
import star from "./assets/star.png";
import briyani3 from "./assets/briyani3.jpg";
import burger from "./assets/burger.jpg";
import pizza from "./assets/pizza.jpg";
import cakes1 from "./assets/cakes1.jpg";
import starbuck from "./assets/starbuck.jpg";
import sea from "./assets/sea.jpg";
import noodle from "./assets/noodle.jpg";
import geill from "./assets/geill.jpg";
import fries from "./assets/fries.jpg";
import sweets from "./assets/sweets.jpg";
import drinks from "./assets/drinks.jpg";
import ice from "./assets/ice.jpg";
import Biryani from "./assets/Biryani.avif";
import cake from "./assets/cake.avif";
import Pizzas from "./assets/Pizzas.avif";
import Puttu from "./assets/Puttu.avif";
import Salad from "./assets/Salad.avif";
import Parotta from "./assets/Parotta.avif";

const Swiggy = () => {
  const items = [
    { id: 1, price: "Starts at ₹99", pro: "Briyanis", name: "Selam RR Briyani", rating: "4.5 • 20-25 mins", loc: "Saradha college road", img: briyani3 },
    { id: 2, price: "Starts at ₹59", pro: "Pizzas", name: "Pizza Hut", rating: "4.3 • 25-30 mins", loc: "Vvm road", img: pizza },
    { id: 3, price: "Starts at ₹79", pro: "Burgers", name: "Burger King", rating: "4.7 • 15-25 mins", loc: "Mty road", img: burger },
    { id: 4, price: "Starts at ₹99", pro: "Ice creams", name: "I Baco", rating: "4.9 • 10-20 mins", loc: "Msd road", img: ice },
    { id: 5, price: "Starts at ₹109", pro: "Cakes", name: "Crush Cakes", rating: "4.9 • 10-20 mins", loc: "Msd road", img: cakes1 },
    { id: 6, price: "Starts at ₹69", pro: "Coffee", name: "Starbucks", rating: "4.9 • 10-20 mins", loc: "Msd road", img: starbuck },
    { id: 7, price: "Starts at ₹89", pro: "Sea Foods", name: "Sea world", rating: "4.9 • 10-20 mins", loc: "Msd road", img: sea },
    { id: 8, price: "Starts at ₹199", pro: "Noodles", name: "Boa", rating: "4.9 • 10-20 mins", loc: "Msd road", img: noodle },
    { id: 9, price: "Starts at ₹159", pro: "Grills", name: "Roll Out", rating: "4.9 • 10-20 mins", loc: "Msd road", img: geill },
    { id: 10, price: "Starts at ₹59", pro: "Fries", name: "French Fries", rating: "4.9 • 10-20 mins", loc: "Msd road", img: fries },
    { id: 11, price: "Starts at ₹49", pro: "Sweets", name: "JJ sweets", rating: "4.9 • 10-20 mins", loc: "Msd road", img: sweets },
    { id: 12, price: "Starts at ₹99", pro: "Drinks", name: "Chill out", rating: "4.9 • 10-20 mins", loc: "Msd road", img: drinks },
  ];

  return (
    <div className="mx-auto max-w-[1300px] px-10">
      {/* Header */}
      <div className="flex flex-wrap items-center font-light shadow-xl px-4 py-2">
        <Link to="/Swiggy">
          <img src={swiggy} alt="swiggy" className="w-[72px] h-[72px]" />
        </Link>
        <p className="ml-5 text-xl font-bold underline hover:text-orange-500">Other</p>

        <ul className="flex flex-wrap gap-6 ml-auto items-center text-sm sm:text-base">
          <Link to="" className="flex items-center gap-2 font-bold hover:text-orange-500">
            <img src={bag} className="w-5 h-5" alt="suit" />
            Swiggy Corporate
          </Link>
          <li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
            <img src={glass} className="w-5 h-5" alt="search" />
            Search
          </li>
          <Link to="/offer" className="flex items-center gap-2 font-bold hover:text-orange-500">
            <img src={offer} className="w-5 h-5" alt="offer" />
            Offers
          </Link>
          <li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
            <img src={game} className="w-5 h-5" alt="help" />
            Help
          </li>
          <Link to="/User" className="flex items-center gap-2 font-bold hover:text-orange-500">
            <img src={user1} className="w-5 h-5" alt="user" />
            Sign in
          </Link>
          <Link>
            <li className="flex items-center gap-2 font-bold hover:text-orange-500 cursor-pointer">
              <img src={cart} className="w-5 h-5" alt="cart" />
              Cart
            </li>
          </Link>
        </ul>
      </div>

      {/* What's on your mind */}
      <p className="text-2xl font-bold mt-5">What's on your mind?</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-7 justify-center mt-5">
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={Biryani} />
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={Puttu} />
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={Salad} />
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={cake} />
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={Parotta} />
        <img className="w-[160px] h-[190px] rounded-full hover:cursor-pointer" src={Pizzas} />
      </div>

      {/* Filters */}
      <p className="lg:font-bold text-xl mt-5">Top Restaurant Chains In Madurai</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:flex gap-4 mt-5 text-xs font-bold hover:cursor-pointer">
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Filter</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Sort BY</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Fast Delivery</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">New on Swiggy</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Ratings</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Pure veg</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Offers</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Rs-300 to 600</p>
        <p className="border border-gray-500 px-2 py-2 rounded-3xl">Less than 300</p>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {items.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id}>
            <div className=" rounded-[20px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer p-2">
              <img src={item.img} className="w-full h-[200px] rounded-[20px] object-cover" />
              <p className="relative text-white -mt-10 ml-2 font-bold text-lg">{item.price}</p>
              <p className="mt-3 font-bold">{item.name}</p>
              <div className="flex items-center gap-1">
                <img src={star} className="w-[18px] h-[18px]" />
                <p className="font-bold">{item.rating}</p>
              </div>
              <p className="text-gray-500 text-sm">{item.pro}</p>
              <p className="text-gray-500 text-sm">{item.loc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Swiggy;
