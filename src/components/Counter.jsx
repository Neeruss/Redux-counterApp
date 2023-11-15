import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //state to hold value from input box
  const [range,setRange]=useState("")
  console.log(range);
  //hook to dispatch a function in action
  const dispatch=useDispatch()
  //component can access the state by using useSelector hook
  const count=useSelector((state)=>state.counter.value)
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
        </div>
        <div>
          <input onChange={(e)=>setRange(e.target.value)} className='form-control mt-5 w-100 rounded' type="text" placeholder='Enter the range' style={{borderColor:'orange',}}/>
        </div>
    </div>
  )
}

export default Counter