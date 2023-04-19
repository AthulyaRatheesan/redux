import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { String1 } from './Task';

function String() {
    const str=useSelector((state) =>state.counter3.str2)
  const dispatch=useDispatch();
    
  return (
    <div>
     <h1>{str}</h1>
     <button onClick={()=>dispatch(String1())}>merge</button>
    </div>
  )
}

export default String