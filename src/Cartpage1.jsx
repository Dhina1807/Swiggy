import { useSelector } from "react-redux";
import cook from './assets/cook.png'
import cook1 from './assets/cook1.png'
import home from './assets/home.png'
import cook2 from './assets/cook2.png'
import user1 from "./assets/user1.png";
import game from "./assets/game.png";
import swiggy from "./assets/swiggy.png";
import salad from "./assets/salad.png";
import wallet from "./assets/wallet.png";
import { removeFromCart } from "./slices/FoodSlices";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import maps from "./assets/maps.png";
import { toast } from 'react-toastify'




function Cartpage1() {

  const notify = () =>  toast.success(" Order Confirmed ")
   const cartItems = useSelector((state) => state.food.cart);
 
  

  const [ count , setCounts]= useState(1)

  useEffect(() => {
  const initialCounts = {};
  cartItems.forEach(item => {
    initialCounts[item.id] = 1; // default qty = 1
  });
  setCounts(initialCounts);
}, [cartItems]);


 const increaseCount = (id) => {
  setCounts((prev) => ({
    ...prev,
    [id]: (prev[id] || 1) + 1,
  }));
};

const decreaseCount = (id) => {
  setCounts((prev) => ({
    ...prev,
    [id]: Math.max(1, (prev[id] || 1) - 1),
  }));
};


const dispatch= useDispatch()
    const removeitem = (index)=>{
    dispatch(removeFromCart(index))
  }


  const total = cartItems.reduce((sum, item) => {
  return sum + item.price * (count[item.id] || 1)  ;
}, 0);

  return (
    <div className="mx-auto max-w-[1400px] bg-white">
    <div className="">
     
      {cartItems.length === 0 ? (
        <div>
             
             <h1 className="text-4xl font-bold mb-4 ml-[470px] mt-[100px]"> Your Cart is Empty</h1>
             <Link to="/Pizza"><img src={home} className="w-[30px] h-[30px] ml-[1200px] -mt-1"/></Link>
             
             <div className="flex ml-[430px] mt-[100px] gap-10">
             <img  className='w-[100px] h-[100px]' src={cook}/>
             <img  className='w-[100px] h-[100px]' src={cook1}/>
             <img  className='w-[100px] h-[100px] mb-10' src={cook2}/>
      </div>

        <p className="text-xl font-bold mb-4 ml-[450px] mt-[100px]">Order Something Delicious My Friend</p>
     
        </div>
        
      ) : (
        <div className="bg-white ">
                    <div>
                    <div className="flex shadow-lg bg-white py-4 ">
                      <img src={swiggy} className="w-[72px] h-[72px] -mt-5 "/>
                      <p className="font-bold ml-5 mt-1 text-sm">SECURE CHECKOUT</p>
                      <img src={game} className="w-[20px] h-[20px] ml-[700px]"/>
                      <p className="font-bold ml-2 hover:text-orange-500">Help</p>
                     <Link to="/Pizza"><img className="w-[20px] h-[20px] ml-10"  src={home}/>
                       <p className="font-bold ml-18 -mt-5  hover:text-orange-500">Home</p></Link>
                      <img className="w-[20px] h-[20px] ml-10"  src={user1}/>
                      <p className="font-bold ml-2 hover:text-orange-500 "> Sign In</p>
                      </div>
                    <div className="bg-white">
                      <div className="mt-10 border border-gray-100 w-[750px] h-[200px] bg-white ml-[20px] ">
                        <img src={user1} className="w-[30px] h-[30px] ml-8 mt-9"/>
                        <p className="font-bold ml-20 -mt-10">Account</p>
                        <p className="ml-20">To place your order now, log in to your existing account or sign up.</p>
                        <button  className="bg-white-300 mt-[35px] ml-[40px] px-5 py-1 text-green-500 border border-green">Have An Account ?<br/>LOG IN</button>
                        <button  className="bg-emerald-500 mt-[35px] ml-[50px] px-7 py-1 text-white">New To Swiggy<br/>Sign Up</button>
                         
                         <img src={salad} className=" rotate-280  w-[100px]  h-[110px] ml-[600px] -mt-[100px] "/>
        
                        
                        </div>
                        <div className="mt-10 border border-gray-100 w-[750px] h-[100px] bg-white ml-[20px] ">
                          <img className="w-[30px] h-[30px] ml-8 mt-9" src={maps}/>
                          <p className="font-bold ml-[80px] -mt-7 text-gray-500 text-xl ">Delivery Address</p>
                          </div>
        
                          <div className="mt-10 border border-gray-100 w-[750px] h-[100px] bg-white ml-[20px] ">
                            <img className="w-[30px] h-[30px] ml-8 mt-9" src={wallet}/>
                          <p className="font-bold ml-[80px] -mt-7 text-gray-500 text-xl  ">Payment Method</p>
                            
                          </div>
                       </div>
        
                       </div> 
                       
        
        
                      
                       <div className="-mt-120  w-[500px] h-[200px] bg-white  ml-[780px]">
                         <p className="ml-[150px] -mt-[120px]  font-bold text-2xl">Pizza Hut </p>
              {cartItems.map((item, index) => ( 
                <div key={index} className="grid grid-cols-1 mb-15  mt-5">
                              <img src={item.img} className="w-[120px] h-[120px] mt-2 ml-2"/>
                              <p className="ml-[150px] -mt-[90px] font-bold">{item.name}</p>
                              <p className="ml-[150px] -mt-[40px] font-bold">{item.price * (count[item.id] || 1)}</p>
                              
                              <div className="flex  border-1  h-[30px] w-[70px] ml-[300px] -mt-23 gap-3 px-3 mt-[]">
                                <button className="font-bold " onClick={()=>decreaseCount(item.id)}>-</button>
                                
                                <p>{count[item.id] || 1}</p>

                                <button className="font-bold text-green-500" onClick={()=>increaseCount(item.id)}>+</button>
                              </div>
                      <button  onClick={()=>removeitem(index)}className="bg-green-800  -mt-[90px] ml-[400px] w-[70px] h-[30px] rounded-lg hover:bg-emerald-800 text-white text-sm font-bold">Remove</button>
                      <hr className="mt-5"/>
                              </div>
                              
                            )
                            
                          )}
                          <p className="font-bold text-xl">Total : {total}</p>
                          <button  onClick={()=>[notify(),removeitem(index)]}className="bg-green-800  -mt-[60px]  ml-[200px] w-[80px] h-[40px] rounded-lg hover:bg-emerald-800 text-white text-sm font-bold">Confirm</button>



                              
                               

                              


                            
                            </div>
                            </div>
        
        
      )}
    </div>
    </div>
  );
}

export default Cartpage1;
