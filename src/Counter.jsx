import React, { useReducer } from 'react'



const initialState = {count :0}

function reducer (state,action) {
    switch (action.type){
        case "increment":
            return { count:  state.count+1}
        case "decrement":
            return {count : state.count >0 ? state.count-1:0}
            default:
                return state;
    }
}

function  Counter () {
    const [state,dispatch ] = useReducer(reducer, initialState);
  return (
    <div className='flex gap-5 ml-140 mt-70 text-6xl font-bold'>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <p>{state.count}</p>
         <button onClick={()=>dispatch({type:"increment"})}>+</button>
    </div>
  )

}
export default Counter