import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from './slices/userSlice'


const Home = () => {
  const dispatch = useDispatch()
  const  [forminput,setFrominput] = useState({

    name:"",
    age:"",
    role:"",
    phono:""
  })

  const handlechange=(event)=>{
    const {name,value} = event.target


     setFrominput((currInput)=>{
      return{
        ...currInput,
        [name]:value,
      }
     })
  }


  const adduser=(event)=>{
    event.preventDefault()
    dispatch(setUsers(forminput))

  }



  return (
    
    <div className="mx-auto" style={{ maxWidth: "1300px" }}>
        <p className='text-2xl font-bold'>Home</p>

       <div className='mt-10'>
       <div  className='flex mb-5'>
        <p className='ml-[500px] '>Name:</p>
        <input  className='border-2 ml-[20px] w-[250px] h-[40px] rounded-lg  ' name='name' type='text' value={forminput.name} onChange={handlechange}/>
        </div>
        
        <div className='flex  mb-5'>
        <p className='ml-[500px]'>Age:</p>
        <input  className='border-2 ml-[35px] w-[250px] h-[40px] rounded-lg'  name='age' type='number' value={forminput.age} onChange={handlechange}/>
        </div>

        <div className='flex  mb-5'>
        <p className='ml-[500px]'>Role:</p>
        <input  className='border-2 ml-[33px] w-[250px] h-[40px] rounded-lg'  name='role' text='text' value={forminput.role} onChange={handlechange}/>
        </div>

        <div className='flex  mb-5'>
        <p className='ml-[500px]'>Phono:</p>
        <input  className='border-2 ml-[18px] w-[250px] h-[40px] rounded-lg'  name='phono' text='number'  value={forminput.phono} onChange={handlechange}/>
        </div>

        <button className='w-[100px] h-[50px] border-2 bg-black text-white rounded-lg mt-5 ml-[600px]' onClick={adduser}>Submit</button>


        </div>
        

        

    </div>
  )
}

export default Home