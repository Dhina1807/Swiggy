import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './slices/userSlice'

const User = () => {
  const users = useSelector((state)=>state.usersInfo.users)

  const dispatch= useDispatch()

  const handledelete = (index)=>{
    dispatch(deleteUser(index))
  }
 
  return (
    <div className="mx-auto" style={{ maxWidth: "1300px" }}>
        <p className='text-2xl font-bold mx-10'>User</p>

       
       {users?.map((user, index) => (
  <div key={index} className='bg-gray border-3 mb-5'>
    <h1 className='text-xl font-bold'>name:{user.name}</h1>
    <h1 className='text-xl font-bold'>age:{user.age}</h1>
    <h1 className='text-xl font-bold'>role:{user.role}</h1>
    <h1 className='text-xl font-bold'>phono:{user.phono}</h1>
    <button className='w-[100px] h-[50px] border-2 bg-black text-white rounded-lg' onClick={()=>handledelete(index)}>Delete</button>
  </div>
))}

    </div>
  )
}

export default User