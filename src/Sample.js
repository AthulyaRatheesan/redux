import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { printnums } from './Slice1'

function Sample() {
  const Sample1=useSelector(state =>state.counter1)
  const dispatch=useDispatch();
  
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(printnums())}>print</button>
        <h1>{Sample1.num}</h1>
    </div>
    </div>
  )
}

export default Sample