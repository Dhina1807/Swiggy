import { useSelector } from "react-redux";
import cook from './assets/cook.png'
import cook1 from './assets/cook1.png'
import home from './assets/home.png'
import cook2 from './assets/cook2.png'
import { removeFromCart } from "./slices/FoodSlices";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";



function CartPage() {
  

  const [ count , setCounts]= useState(1)

const dispatch= useDispatch()
    const removeitem = (index)=>{
    dispatch(removeFromCart(index))
  }


  const cartItems = useSelector((state) => state.food.cart);

  return (
    <div className="mx-auto max-w-[1300px]">
    <div className="p-5">
     
      {cartItems.length === 0 ? (
        <div>
             <h1 className="text-4xl font-bold mb-4 ml-[530px] mt-[100px]"> Your Cart</h1>
             <div className="flex ml-[470px] mt-[100px] ">
             <img  className='w-[100px] h-[100px]' src={cook}/>
             <img  className='w-[100px] h-[100px]' src={cook1}/>
             <img  className='w-[100px] h-[100px] mb-10' src={cook2}/>
      </div>

        <p className="text-xl font-bold mb-4 ml-[450px] mt-[100px]">Order Something Delicious My Friend</p>
     
        </div>
        
      ) : (
        cartItems.map((item, index) => ( 
          <div>
            <p className="text-3xl font-bold ml-[550px] mb-10">Your Cart</p>
          <div key={index} className="p-3  shadow-[11px_16px_2px_-3px_#b6bbc0] w-[550px] rounded-2xl  mb-2 ml-[350px] mb-10">
            <img src={item.img} className=" w-[250px] h-[250px] rounded-xl ml-[250px]"/>
             
            <p className="font-bold  -mt-[150px] text-xl ">{item.price}</p>
            <p className="font-bold  -mt-[100px] text-xl ">{item.name}</p> 
            
            <div className="flex gap-5  mt-[100px]">
              <button className="font-bold text-xl" onClick={()=>  {if (count>1){setCounts(c=>c-1)}}}>-</button>
              <p className="font-bold mt-[0px] text-xl">{count}</p>
              <button className="font-bold text-xl" onClick={()=>setCounts(c=>c+1)}>+</button>
              </div>
              <div className="flex -mt-20">
              <button className="w-[200px] h-[40px] rounded-xl hover:bg-gray-500 mt-[180px] text-white bg-black ml-10">Confirm Your Order</button>
            <button  onClick={()=>removeitem(index)} className="w-[200px] h-[40px] rounded-xl hover:bg-gray-500 mt-[180px] text-white bg-black ml-5">Remove The Cart Item</button>
            </div>
            
          </div>

            <Link to="/Swiggy"><img src={home} className="w-[50px] h-[50px] mt-[200px]  ml-[600px]"/></Link>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default CartPage;
