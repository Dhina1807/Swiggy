import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: "1300px" }}>

        <div className='flex bg-violet-500 mx-5'>
            <p className='text-4xl mt-8 ml-10 my-5'>Header</p>
            <ul className='mt-5 flex ml-[700px] text-black font-bold'>
                <Link to="/Home"><li  className='mt-5 ml-10'>Home</li></Link>
                <Link to="/User"><li  className='mt-5 ml-10'>User</li></Link>
                <Link to="/About"><li  className='mt-5 ml-10'>About</li></Link>
                <Link to="/Contact"><li  className='mt-5 ml-10'>Contact</li></Link>
            </ul>
        </div>



    </div>
  )
}

export default Header